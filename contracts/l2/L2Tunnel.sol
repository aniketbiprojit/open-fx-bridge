// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "fx-portal/contracts/tunnel/FxBaseChildTunnel.sol";

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interfaces/ICloneAbleERC721.sol";

import "../Tunnel.sol";

contract L2Tunnel is FxBaseChildTunnel, Tunnel {
	address public _cloneAbleERC721;

	ProxyAdmin public proxyAdmin;

	constructor(address _fxChild, ProxyAdmin _proxyAdmin)
		FxBaseChildTunnel(_fxChild)
	{
		proxyAdmin = _proxyAdmin;
	}

	// L2 address to L1 address
	mapping(address => address) public mappedTokens;

	function _deployAndMapERC721(
		address L1TokenAddress,
		string memory name_,
		string memory symbol_,
		address tokenContractOwner_
	) internal {
		// deploy L2 Token
		address instance = Clones.clone(_cloneAbleERC721);

		address token = address(
			new TransparentUpgradeableProxy(
				instance,
				address(proxyAdmin),
				abi.encodeWithSelector(
					ICloneAbleERC721.initialize.selector,
					name_,
					symbol_,
					address(this),
					tokenContractOwner_
				)
			)
		);

		mappedTokens[L1TokenAddress] = token;
		// encode data.
		bytes memory _message = abi.encode(
			ERC721MappedData({
				L1Address: L1TokenAddress,
				L2Address: token,
				name: name_,
				symbol: symbol_,
				tokenContractOwner: tokenContractOwner_
			})
		);

		bytes memory _messageWithType = abi.encode(
			uint8(MessageType.L2MappingComplete),
			_message
		);

		// Send message to L1.
		_sendMessageToRoot(_messageWithType);
	}

	function _processMessageFromRoot(
		uint256,
		address,
		bytes memory message
	) internal override {
		(MessageType m, bytes memory data) = abi.decode(
			message,
			(MessageType, bytes)
		);
		if (m == MessageType.L1MappingInit) {
			ERC721MappedData memory mappedData = abi.decode(
				data,
				(ERC721MappedData)
			);
			return
				_deployAndMapERC721(
					mappedData.L1Address,
					mappedData.name,
					mappedData.symbol,
					mappedData.tokenContractOwner
				);
		}
		revert("Invalid type");
	}
}
