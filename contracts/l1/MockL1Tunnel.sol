// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./L1Tunnel.sol";

contract MockL1Tunnel is L1Tunnel {
	constructor(address _checkpointManager, address _fxRoot)
		L1Tunnel(_checkpointManager, _fxRoot)
	{}

	function receiveMessage(bytes memory inputData) public virtual override {
		_processMessageFromChild(inputData);
	}
}
