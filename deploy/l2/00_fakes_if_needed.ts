// import { ethers } from 'hardhat'
import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { FakeFxRoot } from "../../typechain";
import { skipUnlessTest } from "../../utils";
// import { TokenDescriptor } from '../../src/types'

const func: DeployFunction = async ({
	deployments,
	getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const FxChild = await deploy("FxChild", {
		from: deployer,
		contract: "FakeFxChild",
		log: true,
		skipIfAlreadyDeployed: true,
	});

	const FxRoot = (await ethers.getContract("FxRoot")) as FakeFxRoot;
	await FxRoot.setFxChild(FxChild.address);
};

export default func;
func.dependencies = ["FxRoot"];
func.tags = ["L2", "FxChild"];
func.skip = skipUnlessTest;
