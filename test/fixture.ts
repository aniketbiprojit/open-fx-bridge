import { deployments, ethers } from "hardhat";
import { L1Tunnel, L2Tunnel } from "../typechain";
import { setupUser, setupUsers } from "../utils";
export const setupFactory = deployments.createFixture(async (hre) => {
	const { getNamedAccounts, getUnnamedAccounts } = hre;
	const { deployer, tokenOwner } = await getNamedAccounts();

	await deployments.fixture(["L1", "L2"]);

	const users = await getUnnamedAccounts();

	const contracts = {
		Base721: (await ethers.getContract("L1Tunnel")) as L1Tunnel,
		Factory: (await ethers.getContract("L2Tunnel")) as L2Tunnel,
	};

	return {
		...contracts,
		deployer: await setupUser(deployer, contracts),
		tokenOwner: await setupUser(tokenOwner, contracts),
		users: await setupUsers(users, contracts),
	};
});
