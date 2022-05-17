/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FakeFxRoot, FakeFxRootInterface } from "../FakeFxRoot";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessageToChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChild",
        type: "address",
      },
    ],
    name: "setFxChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610394806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063b47204771461003b578063b86cfdcf14610057575b600080fd5b610055600480360381019061005091906101d7565b610073565b005b610071600480360381019061006c91906101ae565b61010c565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166305d08f846000853386866040518663ffffffff1660e01b81526004016100d595949392919061027a565b600060405180830381600087803b1580156100ef57600080fd5b505af1158015610103573d6000803e3d6000fd5b50505050505050565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008135905061015e81610347565b92915050565b60008083601f84011261017657600080fd5b8235905067ffffffffffffffff81111561018f57600080fd5b6020830191508360018202830111156101a757600080fd5b9250929050565b6000602082840312156101c057600080fd5b60006101ce8482850161014f565b91505092915050565b6000806000604084860312156101ec57600080fd5b60006101fa8682870161014f565b935050602084013567ffffffffffffffff81111561021757600080fd5b61022386828701610164565b92509250509250925092565b610238816102d9565b82525050565b600061024a83856102c8565b9350610257838584610327565b61026083610336565b840190509392505050565b61027481610315565b82525050565b600060808201905061028f600083018861026b565b61029c602083018761022f565b6102a9604083018661022f565b81810360608301526102bc81848661023e565b90509695505050505050565b600082825260208201905092915050565b60006102e4826102eb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103208261030b565b9050919050565b82818337600083830152505050565b6000601f19601f8301169050919050565b610350816102d9565b811461035b57600080fd5b5056fea2646970667358221220d7b4352b77cace18db14326e5dfe3b558e66a4074a1769a598ad7c79418fd30964736f6c63430008040033";

export class FakeFxRoot__factory extends ContractFactory {
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
  ): Promise<FakeFxRoot> {
    return super.deploy(overrides || {}) as Promise<FakeFxRoot>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FakeFxRoot {
    return super.attach(address) as FakeFxRoot;
  }
  connect(signer: Signer): FakeFxRoot__factory {
    return super.connect(signer) as FakeFxRoot__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeFxRootInterface {
    return new utils.Interface(_abi) as FakeFxRootInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeFxRoot {
    return new Contract(address, _abi, signerOrProvider) as FakeFxRoot;
  }
}