import { DeployFunction } from "hardhat-deploy/dist/types";
import { deployments, getNamedAccounts } from "hardhat";
import { ethers } from "ethers";
const func: DeployFunction = async () => {
	const { deploy, execute } = deployments;
	const { deployer } = await getNamedAccounts();

	await deploy("CloneAbleERC721", {
		from: deployer,
		log: true,
		skipIfAlreadyDeployed: true,
	});

	await execute(
		"CloneAbleERC721",
		{ from: deployer },
		"initialize",
		"",
		"",
		ethers.constants.AddressZero,
		ethers.constants.AddressZero
	);
};

export default func;
func.tags = ["CloneAbleERC721"];
