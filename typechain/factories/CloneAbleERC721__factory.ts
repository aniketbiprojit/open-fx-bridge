/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CloneAbleERC721,
  CloneAbleERC721Interface,
} from "../CloneAbleERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "L2Tunnel",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "_L2Tunnel",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506139ed806100206000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638da5cb5b116100ad578063c87b56dd11610071578063c87b56dd14610319578063d3fc986414610349578063e985e9c514610365578063f2fde38b14610395578063fc642e7c146103b15761012c565b80638da5cb5b146102895780638f15b414146102a757806395d89b41146102c3578063a22cb465146102e1578063b88d4fde146102fd5761012c565b806342842e0e116100f457806342842e0e146101e757806342966c68146102035780636352211e1461021f57806370a082311461024f578063715018a61461027f5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b600480360381019061014691906126c4565b6103cf565b6040516101589190612c3e565b60405180910390f35b6101696104b1565b6040516101769190612c74565b60405180910390f35b610199600480360381019061019491906127a9565b610543565b6040516101a69190612bd7565b60405180910390f35b6101c960048036038101906101c49190612621565b6105c8565b005b6101e560048036038101906101e0919061251b565b6106e0565b005b61020160048036038101906101fc919061251b565b610740565b005b61021d600480360381019061021891906127a9565b610760565b005b610239600480360381019061023491906127a9565b61089b565b6040516102469190612bd7565b60405180910390f35b610269600480360381019061026491906124b6565b61094d565b6040516102769190612f56565b60405180910390f35b610287610a05565b005b610291610a8d565b60405161029e9190612bd7565b60405180910390f35b6102c160048036038101906102bc9190612716565b610ab7565b005b6102cb610bab565b6040516102d89190612c74565b60405180910390f35b6102fb60048036038101906102f691906125e5565b610c3d565b005b6103176004803603810190610312919061256a565b610c53565b005b610333600480360381019061032e91906127a9565b610cb5565b6040516103409190612c74565b60405180910390f35b610363600480360381019061035e919061265d565b610e07565b005b61037f600480360381019061037a91906124df565b610eb7565b60405161038c9190612c3e565b60405180910390f35b6103af60048036038101906103aa91906124b6565b610f4b565b005b6103b9611043565b6040516103c69190612bd7565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061049a57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104aa57506104a982611069565b5b9050919050565b6060606580546104c0906131cb565b80601f01602080910402602001604051908101604052809291908181526020018280546104ec906131cb565b80156105395780601f1061050e57610100808354040283529160200191610539565b820191906000526020600020905b81548152906001019060200180831161051c57829003601f168201915b5050505050905090565b600061054e826110d3565b61058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058490612e56565b60405180910390fd5b6069600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d38261089b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b90612eb6565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661066361113f565b73ffffffffffffffffffffffffffffffffffffffff16148061069257506106918161068c61113f565b610eb7565b5b6106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890612d76565b60405180910390fd5b6106db8383611147565b505050565b6106f16106eb61113f565b82611200565b610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072790612ef6565b60405180910390fd5b61073b8383836112de565b505050565b61075b83838360405180602001604052806000815250610c53565b505050565b60fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166107a161113f565b73ffffffffffffffffffffffffffffffffffffffff16146107f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ee90612f16565b60405180910390fd5b60fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108398261089b565b73ffffffffffffffffffffffffffffffffffffffff161461088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088690612ed6565b60405180910390fd5b61089881611545565b50565b6000806067600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610944576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093b90612db6565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b590612d96565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a0d61113f565b73ffffffffffffffffffffffffffffffffffffffff16610a2b610a8d565b73ffffffffffffffffffffffffffffffffffffffff1614610a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7890612e76565b60405180910390fd5b610a8b6000611598565b565b600060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610ac3600161165e565b90508015610ae7576001600060016101000a81548160ff0219169083151502179055505b610aef61174e565b610af9858561179f565b610b016117fc565b610b0a82611598565b8260fb60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015610ba45760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610b9b9190612c59565b60405180910390a15b5050505050565b606060668054610bba906131cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610be6906131cb565b8015610c335780601f10610c0857610100808354040283529160200191610c33565b820191906000526020600020905b815481529060010190602001808311610c1657829003601f168201915b5050505050905090565b610c4f610c4861113f565b8383611855565b5050565b610c64610c5e61113f565b83611200565b610ca3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9a90612ef6565b60405180910390fd5b610caf848484846119c2565b50505050565b6060610cc0826110d3565b610cff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf690612e36565b60405180910390fd5b6000609760008481526020019081526020016000208054610d1f906131cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4b906131cb565b8015610d985780601f10610d6d57610100808354040283529160200191610d98565b820191906000526020600020905b815481529060010190602001808311610d7b57829003601f168201915b505050505090506000610da9611a1e565b9050600081511415610dbf578192505050610e02565b600082511115610df4578082604051602001610ddc929190612bb3565b60405160208183030381529060405292505050610e02565b610dfd84611a35565b925050505b919050565b60fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610e4861113f565b73ffffffffffffffffffffffffffffffffffffffff1614610e9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9590612f16565b60405180910390fd5b610ea88383611adc565b610eb28282611cb6565b505050565b6000606a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f5361113f565b73ffffffffffffffffffffffffffffffffffffffff16610f71610a8d565b73ffffffffffffffffffffffffffffffffffffffff1614610fc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbe90612e76565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e90612cb6565b60405180910390fd5b61104081611598565b50565b60fb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166067600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816069600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166111ba8361089b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061120b826110d3565b61124a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124190612d56565b60405180910390fd5b60006112558361089b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061129757506112968185610eb7565b5b806112d557508373ffffffffffffffffffffffffffffffffffffffff166112bd84610543565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112fe8261089b565b73ffffffffffffffffffffffffffffffffffffffff1614611354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134b90612cd6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113bb90612d16565b60405180910390fd5b6113cf838383611d2a565b6113da600082611147565b6001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461142a91906130c2565b925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611481919061303b565b92505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611540838383611d2f565b505050565b61154e81611d34565b600060976000838152602001908152602001600020805461156e906131cb565b90501461159557609760008281526020019081526020016000206000611594919061229a565b5b50565b600060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160c960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060019054906101000a900460ff16156116d55760018260ff1614801561168d575061168b30611e51565b155b6116cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c390612df6565b60405180910390fd5b60009050611749565b8160ff1660008054906101000a900460ff1660ff161061172a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172190612df6565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff1661179d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179490612f36565b60405180910390fd5b565b600060019054906101000a900460ff166117ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e590612f36565b60405180910390fd5b6117f88282611e74565b5050565b600060019054906101000a900460ff1661184b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184290612f36565b60405180910390fd5b611853611ef5565b565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156118c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bb90612d36565b60405180910390fd5b80606a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516119b59190612c3e565b60405180910390a3505050565b6119cd8484846112de565b6119d984848484611f56565b611a18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0f90612c96565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060611a40826110d3565b611a7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a7690612e96565b60405180910390fd5b6000611a89611a1e565b90506000815111611aa95760405180602001604052806000815250611ad4565b80611ab3846120ed565b604051602001611ac4929190612bb3565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4390612e16565b60405180910390fd5b611b55816110d3565b15611b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8c90612cf6565b60405180910390fd5b611ba160008383611d2a565b6001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611bf1919061303b565b92505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611cb260008383611d2f565b5050565b611cbf826110d3565b611cfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf590612dd6565b60405180910390fd5b80609760008481526020019081526020016000209080519060200190611d259291906122da565b505050565b505050565b505050565b6000611d3f8261089b565b9050611d4d81600084611d2a565b611d58600083611147565b6001606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611da891906130c2565b925050819055506067600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611e4d81600084611d2f565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611ec3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eba90612f36565b60405180910390fd5b8160659080519060200190611ed99291906122da565b508060669080519060200190611ef09291906122da565b505050565b600060019054906101000a900460ff16611f44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f3b90612f36565b60405180910390fd5b611f54611f4f61113f565b611598565b565b6000611f778473ffffffffffffffffffffffffffffffffffffffff16611e51565b156120e0578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611fa061113f565b8786866040518563ffffffff1660e01b8152600401611fc29493929190612bf2565b602060405180830381600087803b158015611fdc57600080fd5b505af192505050801561200d57506040513d601f19601f8201168201806040525081019061200a91906126ed565b60015b612090573d806000811461203d576040519150601f19603f3d011682016040523d82523d6000602084013e612042565b606091505b50600081511415612088576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161207f90612c96565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506120e5565b600190505b949350505050565b60606000821415612135576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612295565b600082905060005b600082146121675780806121509061322e565b915050600a826121609190613091565b915061213d565b60008167ffffffffffffffff8111156121a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156121db5781602001600182028036833780820191505090505b5090505b6000851461228e576001826121f491906130c2565b9150600a856122039190613277565b603061220f919061303b565b60f81b81838151811061224b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856122879190613091565b94506121df565b8093505050505b919050565b5080546122a6906131cb565b6000825580601f106122b857506122d7565b601f0160209004906000526020600020908101906122d69190612360565b5b50565b8280546122e6906131cb565b90600052602060002090601f016020900481019282612308576000855561234f565b82601f1061232157805160ff191683800117855561234f565b8280016001018555821561234f579182015b8281111561234e578251825591602001919060010190612333565b5b50905061235c9190612360565b5090565b5b80821115612379576000816000905550600101612361565b5090565b600061239061238b84612f96565b612f71565b9050828152602081018484840111156123a857600080fd5b6123b3848285613189565b509392505050565b60006123ce6123c984612fc7565b612f71565b9050828152602081018484840111156123e657600080fd5b6123f1848285613189565b509392505050565b6000813590506124088161395b565b92915050565b60008135905061241d81613972565b92915050565b60008135905061243281613989565b92915050565b60008151905061244781613989565b92915050565b600082601f83011261245e57600080fd5b813561246e84826020860161237d565b91505092915050565b600082601f83011261248857600080fd5b81356124988482602086016123bb565b91505092915050565b6000813590506124b0816139a0565b92915050565b6000602082840312156124c857600080fd5b60006124d6848285016123f9565b91505092915050565b600080604083850312156124f257600080fd5b6000612500858286016123f9565b9250506020612511858286016123f9565b9150509250929050565b60008060006060848603121561253057600080fd5b600061253e868287016123f9565b935050602061254f868287016123f9565b9250506040612560868287016124a1565b9150509250925092565b6000806000806080858703121561258057600080fd5b600061258e878288016123f9565b945050602061259f878288016123f9565b93505060406125b0878288016124a1565b925050606085013567ffffffffffffffff8111156125cd57600080fd5b6125d98782880161244d565b91505092959194509250565b600080604083850312156125f857600080fd5b6000612606858286016123f9565b92505060206126178582860161240e565b9150509250929050565b6000806040838503121561263457600080fd5b6000612642858286016123f9565b9250506020612653858286016124a1565b9150509250929050565b60008060006060848603121561267257600080fd5b6000612680868287016123f9565b9350506020612691868287016124a1565b925050604084013567ffffffffffffffff8111156126ae57600080fd5b6126ba86828701612477565b9150509250925092565b6000602082840312156126d657600080fd5b60006126e484828501612423565b91505092915050565b6000602082840312156126ff57600080fd5b600061270d84828501612438565b91505092915050565b6000806000806080858703121561272c57600080fd5b600085013567ffffffffffffffff81111561274657600080fd5b61275287828801612477565b945050602085013567ffffffffffffffff81111561276f57600080fd5b61277b87828801612477565b935050604061278c878288016123f9565b925050606061279d878288016123f9565b91505092959194509250565b6000602082840312156127bb57600080fd5b60006127c9848285016124a1565b91505092915050565b6127db816130f6565b82525050565b6127ea81613108565b82525050565b60006127fb82612ff8565b612805818561300e565b9350612815818560208601613198565b61281e81613364565b840191505092915050565b61283281613177565b82525050565b600061284382613003565b61284d818561301f565b935061285d818560208601613198565b61286681613364565b840191505092915050565b600061287c82613003565b6128868185613030565b9350612896818560208601613198565b80840191505092915050565b60006128af60328361301f565b91506128ba82613375565b604082019050919050565b60006128d260268361301f565b91506128dd826133c4565b604082019050919050565b60006128f560258361301f565b915061290082613413565b604082019050919050565b6000612918601c8361301f565b915061292382613462565b602082019050919050565b600061293b60248361301f565b91506129468261348b565b604082019050919050565b600061295e60198361301f565b9150612969826134da565b602082019050919050565b6000612981602c8361301f565b915061298c82613503565b604082019050919050565b60006129a460388361301f565b91506129af82613552565b604082019050919050565b60006129c7602a8361301f565b91506129d2826135a1565b604082019050919050565b60006129ea60298361301f565b91506129f5826135f0565b604082019050919050565b6000612a0d602e8361301f565b9150612a188261363f565b604082019050919050565b6000612a30602e8361301f565b9150612a3b8261368e565b604082019050919050565b6000612a5360208361301f565b9150612a5e826136dd565b602082019050919050565b6000612a7660318361301f565b9150612a8182613706565b604082019050919050565b6000612a99602c8361301f565b9150612aa482613755565b604082019050919050565b6000612abc60208361301f565b9150612ac7826137a4565b602082019050919050565b6000612adf602f8361301f565b9150612aea826137cd565b604082019050919050565b6000612b0260218361301f565b9150612b0d8261381c565b604082019050919050565b6000612b2560158361301f565b9150612b308261386b565b602082019050919050565b6000612b4860318361301f565b9150612b5382613894565b604082019050919050565b6000612b6b600e8361301f565b9150612b76826138e3565b602082019050919050565b6000612b8e602b8361301f565b9150612b998261390c565b604082019050919050565b612bad81613160565b82525050565b6000612bbf8285612871565b9150612bcb8284612871565b91508190509392505050565b6000602082019050612bec60008301846127d2565b92915050565b6000608082019050612c0760008301876127d2565b612c1460208301866127d2565b612c216040830185612ba4565b8181036060830152612c3381846127f0565b905095945050505050565b6000602082019050612c5360008301846127e1565b92915050565b6000602082019050612c6e6000830184612829565b92915050565b60006020820190508181036000830152612c8e8184612838565b905092915050565b60006020820190508181036000830152612caf816128a2565b9050919050565b60006020820190508181036000830152612ccf816128c5565b9050919050565b60006020820190508181036000830152612cef816128e8565b9050919050565b60006020820190508181036000830152612d0f8161290b565b9050919050565b60006020820190508181036000830152612d2f8161292e565b9050919050565b60006020820190508181036000830152612d4f81612951565b9050919050565b60006020820190508181036000830152612d6f81612974565b9050919050565b60006020820190508181036000830152612d8f81612997565b9050919050565b60006020820190508181036000830152612daf816129ba565b9050919050565b60006020820190508181036000830152612dcf816129dd565b9050919050565b60006020820190508181036000830152612def81612a00565b9050919050565b60006020820190508181036000830152612e0f81612a23565b9050919050565b60006020820190508181036000830152612e2f81612a46565b9050919050565b60006020820190508181036000830152612e4f81612a69565b9050919050565b60006020820190508181036000830152612e6f81612a8c565b9050919050565b60006020820190508181036000830152612e8f81612aaf565b9050919050565b60006020820190508181036000830152612eaf81612ad2565b9050919050565b60006020820190508181036000830152612ecf81612af5565b9050919050565b60006020820190508181036000830152612eef81612b18565b9050919050565b60006020820190508181036000830152612f0f81612b3b565b9050919050565b60006020820190508181036000830152612f2f81612b5e565b9050919050565b60006020820190508181036000830152612f4f81612b81565b9050919050565b6000602082019050612f6b6000830184612ba4565b92915050565b6000612f7b612f8c565b9050612f8782826131fd565b919050565b6000604051905090565b600067ffffffffffffffff821115612fb157612fb0613335565b5b612fba82613364565b9050602081019050919050565b600067ffffffffffffffff821115612fe257612fe1613335565b5b612feb82613364565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061304682613160565b915061305183613160565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613086576130856132a8565b5b828201905092915050565b600061309c82613160565b91506130a783613160565b9250826130b7576130b66132d7565b5b828204905092915050565b60006130cd82613160565b91506130d883613160565b9250828210156130eb576130ea6132a8565b5b828203905092915050565b600061310182613140565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006131828261316a565b9050919050565b82818337600083830152505050565b60005b838110156131b657808201518184015260208101905061319b565b838111156131c5576000848401525b50505050565b600060028204905060018216806131e357607f821691505b602082108114156131f7576131f6613306565b5b50919050565b61320682613364565b810181811067ffffffffffffffff8211171561322557613224613335565b5b80604052505050565b600061323982613160565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561326c5761326b6132a8565b5b600182019050919050565b600061328282613160565b915061328d83613160565b92508261329d5761329c6132d7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f74207472616e7366657272656420746f204c320000000000000000000000600082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f6f6e6c79204c322054756e6e656c000000000000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b613964816130f6565b811461396f57600080fd5b50565b61397b81613108565b811461398657600080fd5b50565b61399281613114565b811461399d57600080fd5b50565b6139a981613160565b81146139b457600080fd5b5056fea26469706673582212206a3dd499dedc5fd14db28dc05f67b92dd1ea1eb35b1b3244cf5f762aab419d0264736f6c63430008040033";

export class CloneAbleERC721__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CloneAbleERC721> {
    return super.deploy(overrides || {}) as Promise<CloneAbleERC721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CloneAbleERC721 {
    return super.attach(address) as CloneAbleERC721;
  }
  connect(signer: Signer): CloneAbleERC721__factory {
    return super.connect(signer) as CloneAbleERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CloneAbleERC721Interface {
    return new utils.Interface(_abi) as CloneAbleERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CloneAbleERC721 {
    return new Contract(address, _abi, signerOrProvider) as CloneAbleERC721;
  }
}
