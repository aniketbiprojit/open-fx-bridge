// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "fx-portal/contracts/tunnel/FxBaseRootTunnel.sol";
import "../Tunnel.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract L1Tunnel is FxBaseRootTunnel, Tunnel {
	enum TokenStatus {
		None,
		Init,
		Mapped
	}
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
		}
	}

	function mapERC721(address L1TokenAddress) public {
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
			MessageType.L2MappingComplete,
			_message
		);
		_sendMessageToChild(_messageWithType);
	}

	event Received(bytes message, uint256 _nonce);
}
