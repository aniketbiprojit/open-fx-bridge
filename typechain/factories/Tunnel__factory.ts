/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Tunnel, TunnelInterface } from "../Tunnel";

const _abi = [
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
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6104f58061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461006e575b600080fd5b61004e61008a565b005b610058610112565b6040516100659190610392565b60405180910390f35b61008860048036038101906100839190610314565b61013b565b005b610092610233565b73ffffffffffffffffffffffffffffffffffffffff166100b0610112565b73ffffffffffffffffffffffffffffffffffffffff1614610106576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fd906103cd565b60405180910390fd5b610110600061023b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610143610233565b73ffffffffffffffffffffffffffffffffffffffff16610161610112565b73ffffffffffffffffffffffffffffffffffffffff16146101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae906103cd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021e906103ad565b60405180910390fd5b6102308161023b565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008135905061030e816104a8565b92915050565b60006020828403121561032657600080fd5b6000610334848285016102ff565b91505092915050565b610346816103fe565b82525050565b60006103596026836103ed565b915061036482610430565b604082019050919050565b600061037c6020836103ed565b91506103878261047f565b602082019050919050565b60006020820190506103a7600083018461033d565b92915050565b600060208201905081810360008301526103c68161034c565b9050919050565b600060208201905081810360008301526103e68161036f565b9050919050565b600082825260208201905092915050565b600061040982610410565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6104b1816103fe565b81146104bc57600080fd5b5056fea264697066735822122028fab4329b780d07cbae3868401a6b4e0356c30792cb4ddbae5a115f2a2aa2a964736f6c63430008040033";

export class Tunnel__factory extends ContractFactory {
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
  ): Promise<Tunnel> {
    return super.deploy(overrides || {}) as Promise<Tunnel>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Tunnel {
    return super.attach(address) as Tunnel;
  }
  connect(signer: Signer): Tunnel__factory {
    return super.connect(signer) as Tunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TunnelInterface {
    return new utils.Interface(_abi) as TunnelInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Tunnel {
    return new Contract(address, _abi, signerOrProvider) as Tunnel;
  }
}
