import { deployments, ethers } from "hardhat";
import { FakeFxChild, L1Tunnel, L2Tunnel, TestERC721 } from "../typechain";
import { setupUser, setupUsers } from "../utils";
export const setupTest = deployments.createFixture(async (hre) => {
	const { getNamedAccounts, getUnnamedAccounts } = hre;
	const { deployer } = await getNamedAccounts();

	await deployments.fixture(["L1", "L2", "TestERC721"]);

	const users = await getUnnamedAccounts();

	const contracts = {
		L1Tunnel: (await ethers.getContract("MockL1Tunnel")) as L1Tunnel,
		L2Tunnel: (await ethers.getContract("L2Tunnel")) as L2Tunnel,
		TestERC721: (await ethers.getContract("TestERC721")) as TestERC721,
		FxChild: (await ethers.getContract("FxChild")) as FakeFxChild,
	};

	return {
		...contracts,
		deployer: await setupUser(deployer, contracts),
		users: await setupUsers(users, contracts),
	};
});
