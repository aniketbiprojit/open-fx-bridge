// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "fx-portal/contracts/tunnel/FxBaseRootTunnel.sol";

contract L1Tunnel is FxBaseRootTunnel {
    constructor(address _checkpointManager, address _fxRoot)
        FxBaseRootTunnel(_checkpointManager, _fxRoot)
    {}

    function _processMessageFromChild(bytes memory message)
        internal
        virtual
        override
    {}

    function sendMessageToChild(bytes memory encodedData) public {
        _sendMessageToChild(encodedData);
    }

    event Received(bytes message, uint256 _nonce);
}
