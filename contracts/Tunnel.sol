// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

import "hardhat/console.sol";

contract Tunnel is Ownable {
	// {from chain}-{type of message}
	enum MessageType {
		L1MappingInit,
		L2MappingComplete
	}

	struct ERC721MappedData {
		address L1Address;
		address L2Address;
		string name;
		string symbol;
		address tokenContractOwner;
	}
}
