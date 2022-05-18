// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "fx-portal/contracts/tunnel/FxBaseChildTunnel.sol";

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./interfaces/ICloneAbleERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../Tunnel.sol";

contract L2Tunnel is FxBaseChildTunnel, Tunnel, ReentrancyGuard {
	address public cloneAbleERC721;

	ProxyAdmin public proxyAdmin;

	constructor(
		address _fxChild,
		ProxyAdmin _proxyAdmin,
		address _cloneAbleERC721
	) FxBaseChildTunnel(_fxChild) {
		proxyAdmin = _proxyAdmin;
		cloneAbleERC721 = _cloneAbleERC721;
	}

	event L2MappingMappedERC721(address L1Token, address L2Token, address from);

	// L2 address to L1 address
	mapping(address => address) public mappedTokens;
	// L1 address to L2 address
	mapping(address => address) public fromL1mappedTokens;

	function _deployAndMapERC721(
		address L1TokenAddress,
		string memory name_,
		string memory symbol_,
		address tokenContractOwner_
	) internal {
		// deploy L2 Token
		address instance = Clones.clone(cloneAbleERC721);

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

		mappedTokens[token] = L1TokenAddress;
		fromL1mappedTokens[L1TokenAddress] = token;

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
		emit L2MappingMappedERC721(L1TokenAddress, token, tokenContractOwner_);
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

			_deployAndMapERC721(
				mappedData.L1Address,
				mappedData.name,
				mappedData.symbol,
				mappedData.tokenContractOwner
			);
			return;
		}
		if (m == MessageType.L1TransferToL2) {
			ERC721Transfer memory transferData = abi.decode(
				data,
				(ERC721Transfer)
			);

			address L2Address = fromL1mappedTokens[transferData.L1Address];

			ICloneAbleERC721(L2Address).mint(
				transferData.from,
				transferData.tokenId,
				transferData.tokenURI
			);
			return;
		}
		revert("Invalid type");
	}

	function transferToL1(address L2TokenAddress, uint256 tokenId)
		external
		nonReentrant
	{
		address L1Address = mappedTokens[L2TokenAddress];
		require(L1Address != address(0), "Token not mapped");
		bytes memory _message = abi.encode(
			ERC721Transfer({
				L1Address: L1Address,
				from: _msgSender(),
				tokenURI: IERC721Metadata(L2TokenAddress).tokenURI(tokenId),
				tokenId: tokenId
			})
		);
		IERC721(L2TokenAddress).transferFrom(
			_msgSender(),
			address(this),
			tokenId
		);

		ICloneAbleERC721(L2TokenAddress).burn(tokenId);

		bytes memory _messageWithType = abi.encode(
			MessageType.L2TransferToL1,
			_message
		);

		_sendMessageToRoot(_messageWithType);
	}
}
