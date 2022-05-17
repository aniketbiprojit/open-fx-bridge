// import { ethers } from 'hardhat'
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { skipUnlessTest } from "../../utils";
// import { TokenDescriptor } from '../../src/types'

const func: DeployFunction = async ({
	deployments,
	getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	await deploy("TestERC721", {
		from: deployer,
		contract: "TestERC721",
		log: true,
		skipIfAlreadyDeployed: true,
		args: ["Test", "TT"],
	});
};

export default func;
func.dependencies = [];
func.tags = ["L1", "TestERC721"];
func.skip = skipUnlessTest;
