// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestERC721 is ERC721URIStorage, Ownable {
	constructor(string memory _name, string memory _symbol)
		ERC721(_name, _symbol)
	{}

	uint256 internal _tokenId;

	function mint(address _to, string memory _tokenURI) external {
		_tokenId += 1;
		_mint(_to, _tokenId);
		_setTokenURI(_tokenId, _tokenURI);
	}
}
