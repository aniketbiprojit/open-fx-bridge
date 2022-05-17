import { expect } from "chai";
import { ethers } from "hardhat";
import { CloneAbleERC721 } from "../typechain";
import { setupTest } from "./fixture";

enum MessageType {
	L1MappingInit,
	L2MappingComplete,
}

export declare type PromiseType<T extends Promise<any>> = T extends Promise<
	infer U
>
	? U
	: never;

describe("Index", () => {
	let deployer: PromiseType<ReturnType<typeof setupTest>>["deployer"];
	before(async () => {
		({ deployer } = await setupTest());
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
});
