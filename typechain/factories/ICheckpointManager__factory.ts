/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ICheckpointManager,
  ICheckpointManagerInterface,
} from "../ICheckpointManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "headerBlocks",
    outputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061020b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806341539d4a14610030575b600080fd5b61004a600480360381019061004591906100cf565b610064565b60405161005b959493929190610125565b60405180910390f35b60006020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b6000813590506100c9816101be565b92915050565b6000602082840312156100e157600080fd5b60006100ef848285016100ba565b91505092915050565b61010181610178565b82525050565b6101108161018a565b82525050565b61011f816101b4565b82525050565b600060a08201905061013a6000830188610107565b6101476020830187610116565b6101546040830186610116565b6101616060830185610116565b61016e60808301846100f8565b9695505050505050565b600061018382610194565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6101c7816101b4565b81146101d257600080fd5b5056fea2646970667358221220ddb18cbdba490e06da804a20ac3c3cae303f9c8b6d6ee7ca19abc8a314e025bb64736f6c63430008040033";

export class ICheckpointManager__factory extends ContractFactory {
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
  ): Promise<ICheckpointManager> {
    return super.deploy(overrides || {}) as Promise<ICheckpointManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ICheckpointManager {
    return super.attach(address) as ICheckpointManager;
  }
  connect(signer: Signer): ICheckpointManager__factory {
    return super.connect(signer) as ICheckpointManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ICheckpointManagerInterface {
    return new utils.Interface(_abi) as ICheckpointManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICheckpointManager {
    return new Contract(address, _abi, signerOrProvider) as ICheckpointManager;
  }
}
