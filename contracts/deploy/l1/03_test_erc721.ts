import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { TestERC721 } from "../../typechain";

const func: DeployFunction = async ({
	deployments,
	getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
	const { deploy, execute } = deployments;
	const { deployer } = await getNamedAccounts();

	const TestERC721 = await deploy("TestERC721", {
		from: deployer,
		contract: "TestERC721",
		log: true,
		skipIfAlreadyDeployed: true,
		args: ["Test", "TT"],
	});

	try {
		await execute(
			"L1Tunnel",
			{ from: deployer, log: true },
			"mapERC721",
			TestERC721.address
		);
	} catch (err) {
		console.log("err: probably already mapped");
	}
	const TestERC721Contract = (await ethers.getContract(
		"TestERC721"
	)) as TestERC721;
	console.log(await TestERC721Contract.tokenURI(1));
	// const tx = await TestERC721Contract.mint(
	// 	deployer,
	// 	"https://storage.googleapis.com/opensea-prod.appspot.com/creature/33.png"
	// );
	// await tx.wait();

	// const tx1 = await TestERC721Contract.setApprovalForAll(
	// 	"0xA2624d1931D17632F74D217Fe1c1C903b65Bf548",
	// 	true
	// );
	// await tx1.wait();

	// const L1TunnelContract = (await ethers.getContract("L1Tunnel")) as L1Tunnel;
	// (await L1TunnelContract.transferToL2(TestERC721Contract.address, 1)).wait();
};

export default func;
func.dependencies = [];
func.tags = ["L1", "TestERC721"];
