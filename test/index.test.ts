import { expect } from "chai";
import { ethers } from "hardhat";
import { CloneAbleERC721 } from "../typechain";
import { setupTest } from "./fixture";

enum MessageType {
	L1MappingInit,
	L2MappingComplete,
}

describe("Index", () => {
	it("test deploy map on l1", async () => {
		const {
			deployer,
			users: [alice],
		} = await setupTest();
		await deployer.L1Tunnel.mapERC721(deployer.TestERC721.address);
	});

	it("deploy map on l2", async () => {
		const {
			deployer,
			users: [alice],
		} = await setupTest();

		const name = "Test" + (Math.random() * 1000) / 17;
		const symbol = "TT" + (Math.random() * 1000) / 17;
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
		const CloneAbleERC721 = (await ethers.getContractAt(
			"CloneAbleERC721",
			await deployer.L2Tunnel.fromL1mappedTokens(
				deployer.TestERC721.address
			)
		)) as CloneAbleERC721;
		expect(await CloneAbleERC721.name()).to.eq(name);
		expect(await CloneAbleERC721.symbol()).to.eq(symbol);
	});
});
