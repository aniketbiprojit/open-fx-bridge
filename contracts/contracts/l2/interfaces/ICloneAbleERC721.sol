// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ICloneAbleERC721 {
	function initialize(
		string memory name_,
		string memory symbol_,
		address _L2Tunnel,
		address _owner
	) external;

	function mint(
		address to,
		uint256 tokenId,
		string memory _tokenURI
	) external;

	function burn(uint256 tokenId) external;
}
