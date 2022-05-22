// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "fx-portal/contracts/tunnel/FxBaseRootTunnel.sol";
import "../Tunnel.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract L1Tunnel is FxBaseRootTunnel, Tunnel, ReentrancyGuard {
	event L1MappingInitERC721(address L1Token, address from);
	event L1MappingMappedERC721(address L1Token, address L2Token, address from);
	event L1Transfer(address L1Token, address from, uint256 tokenId);

	// L1 address to L2 address
	mapping(address => address) public mappedTokens;
	mapping(address => TokenStatus) public mappedTokenStatus;

	constructor(address _checkpointManager, address _fxRoot)
		FxBaseRootTunnel(_checkpointManager, _fxRoot)
	{}

	function _processMessageFromChild(bytes memory message)
		internal
		virtual
		override
	{
		(MessageType m, bytes memory data) = abi.decode(
			message,
			(MessageType, bytes)
		);
		if (m == MessageType.L2MappingComplete) {
			ERC721MappedData memory mappedData = abi.decode(
				data,
				(ERC721MappedData)
			);
			mappedTokenStatus[mappedData.L1Address] = TokenStatus.Mapped;
			mappedTokens[mappedData.L1Address] = mappedData.L2Address;
			emit L1MappingMappedERC721(
				mappedData.L1Address,
				mappedData.L2Address,
				mappedData.tokenContractOwner
			);
			return;
		}
		if (m == MessageType.L2TransferToL1) {
			ERC721Transfer memory transferData = abi.decode(
				data,
				(ERC721Transfer)
			);

			address L1TokenAddress = transferData.L1Address;
			require(
				mappedTokenStatus[L1TokenAddress] == TokenStatus.Mapped,
				"Token Not mapped"
			);

			IERC721(L1TokenAddress).transferFrom(
				address(this),
				transferData.from,
				transferData.tokenId
			);

			return;
		}
		revert("Invalid type");
	}

	function mapERC721(address L1TokenAddress) public nonReentrant {
		require(
			Ownable(L1TokenAddress).owner() == _msgSender(),
			"Not owner of L1 Token"
		);

		// type(IERC721).interfaceId => 0x80ac58cd
		// type(IERC721Metadata).interfaceId => 0x5b5e139f
		require(
			IERC165(L1TokenAddress).supportsInterface(
				type(IERC721).interfaceId
			) &&
				IERC165(L1TokenAddress).supportsInterface(
					type(IERC721Metadata).interfaceId
				),
			"Token not supported"
		);

		require(
			mappedTokenStatus[L1TokenAddress] == TokenStatus.None,
			"Already mapped or init"
		);

		mappedTokenStatus[L1TokenAddress] = TokenStatus.Init;

		bytes memory _message = abi.encode(
			ERC721MappedData({
				L1Address: L1TokenAddress,
				L2Address: address(0),
				name: IERC721Metadata(L1TokenAddress).name(),
				symbol: IERC721Metadata(L1TokenAddress).symbol(),
				tokenContractOwner: _msgSender()
			})
		);
		bytes memory _messageWithType = abi.encode(
			MessageType.L1MappingInit,
			_message
		);
		emit L1MappingInitERC721(L1TokenAddress, _msgSender());

		_sendMessageToChild(_messageWithType);
	}

	function transferToL2(address L1TokenAddress, uint256 tokenId)
		external
		nonReentrant
	{
		require(
			mappedTokenStatus[L1TokenAddress] == TokenStatus.Mapped,
			"Token not mapped"
		);

		IERC721(L1TokenAddress).transferFrom(
			_msgSender(),
			address(this),
			tokenId
		);

		bytes memory _message = abi.encode(
			ERC721Transfer({
				L1Address: L1TokenAddress,
				from: _msgSender(),
				tokenId: tokenId,
				tokenURI: IERC721Metadata(L1TokenAddress).tokenURI(tokenId)
			})
		);

		bytes memory _messageWithType = abi.encode(
			MessageType.L1TransferToL2,
			_message
		);
		emit L1Transfer(L1TokenAddress, _msgSender(), tokenId);

		_sendMessageToChild(_messageWithType);
	}

	event Received(bytes message, uint256 _nonce);
}
