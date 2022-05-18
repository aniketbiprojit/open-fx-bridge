import { expect } from "chai";
import { ethers } from "hardhat";
import { CloneAbleERC721, TestERC721 } from "../typechain";
import { setupTest } from "./fixture";

enum MessageType {
	L1MappingInit,
	L2MappingComplete,
	L1TransferToL2,
	L2TransferToL1,
}

enum TokenStatus {
	None,
	Init,
	Mapped,
}

export declare type PromiseType<T extends Promise<any>> = T extends Promise<
	infer U
>
	? U
	: never;

describe("Index", () => {
	let deployer: PromiseType<ReturnType<typeof setupTest>>["deployer"];
	let alice: PromiseType<ReturnType<typeof setupTest>>["users"][0];
	before(async () => {
		({
			deployer,
			users: [alice],
		} = await setupTest());
	});

	it("test deploy map on l1", async () => {
		await deployer.L1Tunnel.mapERC721(deployer.TestERC721.address);
	});

	it("deploy map on l2", async () => {
		const name = await deployer.TestERC721.name();
		const symbol = await deployer.TestERC721.symbol();

		await deployer.FxChild.onStateReceive(
			0,
			deployer.L2Tunnel.address,
			deployer.L1Tunnel.address,
			ethers.utils.defaultAbiCoder.encode(
				["uint8", "bytes"],
				[
					MessageType.L1MappingInit,
					ethers.utils.defaultAbiCoder.encode(
						["tuple(address,address,string,string,address)"],
						[
							[
								deployer.TestERC721.address,
								ethers.constants.AddressZero,
								name,
								symbol,
								deployer.address,
							],
						]
					),
				]
			)
		);
		const L2TokenAddress = await deployer.L2Tunnel.fromL1mappedTokens(
			deployer.TestERC721.address
		);
		const CloneAbleERC721 = (await ethers.getContractAt(
			"CloneAbleERC721",
			L2TokenAddress
		)) as CloneAbleERC721;
		expect(await CloneAbleERC721.name()).to.eq(name);
		expect(await CloneAbleERC721.symbol()).to.eq(symbol);
	});

	it("map on l1", async () => {
		const L2TokenAddress = await deployer.L2Tunnel.fromL1mappedTokens(
			deployer.TestERC721.address
		);
		const name = await deployer.TestERC721.name();
		const symbol = await deployer.TestERC721.symbol();

		await deployer.L1Tunnel.receiveMessage(
			ethers.utils.defaultAbiCoder.encode(
				["uint8", "bytes"],
				[
					MessageType.L2MappingComplete,
					ethers.utils.defaultAbiCoder.encode(
						["tuple(address,address,string,string,address)"],
						[
							[
								deployer.TestERC721.address,
								L2TokenAddress,
								name,
								symbol,
								deployer.address,
							],
						]
					),
				]
			)
		);
	});

	it("mint on l1 and transfer to L2", async () => {
		const L2Token = (await ethers.getContractAt(
			"CloneAbleERC721",
			await deployer.L2Tunnel.fromL1mappedTokens(
				deployer.TestERC721.address
			)
		)) as CloneAbleERC721;

		expect(
			await deployer.L1Tunnel.mappedTokenStatus(
				deployer.TestERC721.address
			)
		).to.eq(TokenStatus.Mapped);

		await deployer.TestERC721.mint(alice.address, "l1://tokenId");
		const { L1Tunnel, TestERC721 } = alice;
		await alice.TestERC721.setApprovalForAll(L1Tunnel.address, true);

		await expect(L1Tunnel.transferToL2(TestERC721.address, 1))
			.to.emit(TestERC721, "Transfer")
			.withArgs(alice.address, L1Tunnel.address, 1);

		await expect(
			deployer.FxChild.onStateReceive(
				0,
				deployer.L2Tunnel.address,
				deployer.L1Tunnel.address,
				ethers.utils.defaultAbiCoder.encode(
					["uint8", "bytes"],
					[
						MessageType.L1TransferToL2,
						ethers.utils.defaultAbiCoder.encode(
							["tuple(address,address,uint256,string)"],
							[
								[
									TestERC721.address,
									alice.address,
									1,
									"l1://tokenId",
								],
							]
						),
					]
				)
			)
		)
			.to.emit(L2Token, "Transfer")
			.withArgs(ethers.constants.AddressZero, alice.address, 1);
	});

	it("burn on l2 and receive on l1", async () => {
		const L2Token = (
			await ethers.getContractAt(
				"CloneAbleERC721",
				await deployer.L2Tunnel.fromL1mappedTokens(
					deployer.TestERC721.address
				)
			)
		).connect(await ethers.getSigner(alice.address)) as CloneAbleERC721;
		const { L2Tunnel } = alice;
		await L2Token.setApprovalForAll(L2Tunnel.address, true);

		await expect(L2Tunnel.transferToL1(L2Token.address, 1))
			.to.emit(L2Token, "Transfer")
			.withArgs(L2Tunnel.address, ethers.constants.AddressZero, 1);

		await expect(
			alice.L1Tunnel.receiveMessage(
				ethers.utils.defaultAbiCoder.encode(
					["uint8", "bytes"],
					[
						MessageType.L2TransferToL1,
						ethers.utils.defaultAbiCoder.encode(
							["tuple(address,address,uint256,string)"],
							[
								[
									alice.TestERC721.address,
									alice.address,
									1,
									"l1://tokenId",
								],
							]
						),
					]
				)
			)
		)
			.to.emit(alice.TestERC721, "Transfer")
			.withArgs(alice.L1Tunnel.address, alice.address, 1);
	});
});
