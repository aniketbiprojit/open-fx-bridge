// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./interfaces/ICloneAbleERC721.sol";

contract CloneAbleERC721 is
	ERC721URIStorageUpgradeable,
	OwnableUpgradeable,
	ICloneAbleERC721
{
	address public L2Tunnel;

	function initialize(
		string memory name_,
		string memory symbol_,
		address _L2Tunnel,
		address _owner
	) public override initializer {
		__ERC721URIStorage_init();
		__ERC721_init(name_, symbol_);
		__Ownable_init();
		_transferOwnership(_owner);
		L2Tunnel = _L2Tunnel;
	}

	modifier onlyL2Tunnel() {
		require(_msgSender() == L2Tunnel, "only L2 Tunnel");
		_;
	}

	function mint(
		address to,
		uint256 tokenId,
		string memory _tokenURI
	) external override onlyL2Tunnel {
		_mint(to, tokenId);
		_setTokenURI(tokenId, _tokenURI);
	}

	function burn(uint256 tokenId) external override onlyL2Tunnel {
		require(ownerOf(tokenId) == L2Tunnel, "Not transferred to L2");
		_burn(tokenId);
	}
}
