// import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/dist/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { skipUnlessTest } from '../../utils'
// import { TokenDescriptor } from '../../src/types'

const func: DeployFunction = async ({
	deployments,
	getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
	const { deploy } = deployments
	const { deployer } = await getNamedAccounts()

	await deploy('FxChild', {
		from: deployer,
		contract: 'FakeFxChild',
		log: true,
		skipIfAlreadyDeployed: true,
	})
}

export default func
func.dependencies = []
func.tags = ['L2', 'FxChild']
func.skip = skipUnlessTest
