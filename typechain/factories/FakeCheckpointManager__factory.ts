/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FakeCheckpointManager,
  FakeCheckpointManagerInterface,
} from "../FakeCheckpointManager";

const _abi = [
  {
    inputs: [],
    name: "currentCheckpointNumber",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "rootHash",
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
    ],
    name: "setCheckpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b50610595806100256000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806341539d4a146100465780634d5505d31461007a578063afa764d714610098575b600080fd5b610060600480360381019061005b91906103a2565b6100b4565b6040516100719594939291906103f8565b60405180910390f35b61008261010a565b60405161008f919061044b565b60405180910390f35b6100b260048036038101906100ad9190610353565b610110565b005b60006020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b60015481565b61013c7fa7691cad16a1e6d48f21b19aabc853b9387326200f133a8ec3dfdad72578ce0e60001b610326565b6101687f911bd385631177910af74f851b0b35237b1074c7de630abcc9bdea8dbd69314e60001b610326565b6101947febd629904179f10bd820e3278e7f1b13df2b1d3cd6da7253426de1c4ea6fd4f660001b610326565b60006040518060a001604052808581526020018481526020018381526020014281526020013373ffffffffffffffffffffffffffffffffffffffff1681525090506102017f415d920334a63bc0437614c03a01f0d64308a9337d34d86d5156d375cc6b911460001b610326565b61022d7f1c5d4fd8c43c68e7c0a173f8ff33ac8379c668f34d3bc7410a92d15d465e5b8460001b610326565b6001805461023b9190610466565b60018190555061026d7f736c8923eaf5a04d003861b2942cafddadae5d6c6ca2609de81f8fb333ca8ac360001b610326565b6102997f58624ca5e666ad54c5a039db14f1719ccfcd3987e5a1658098117a5757163a1160001b610326565b8060008060015481526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050505050565b50565b60008135905061033881610531565b92915050565b60008135905061034d81610548565b92915050565b60008060006060848603121561036857600080fd5b600061037686828701610329565b93505060206103878682870161033e565b92505060406103988682870161033e565b9150509250925092565b6000602082840312156103b457600080fd5b60006103c28482850161033e565b91505092915050565b6103d4816104bc565b82525050565b6103e3816104ce565b82525050565b6103f2816104f8565b82525050565b600060a08201905061040d60008301886103da565b61041a60208301876103e9565b61042760408301866103e9565b61043460608301856103e9565b61044160808301846103cb565b9695505050505050565b600060208201905061046060008301846103e9565b92915050565b6000610471826104f8565b915061047c836104f8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156104b1576104b0610502565b5b828201905092915050565b60006104c7826104d8565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b61053a816104ce565b811461054557600080fd5b50565b610551816104f8565b811461055c57600080fd5b5056fea26469706673582212208de533cb026d80990471e8e03b648e8a6585a1769c644f0ff7157442213db57964736f6c63430008040033";

export class FakeCheckpointManager__factory extends ContractFactory {
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
  ): Promise<FakeCheckpointManager> {
    return super.deploy(overrides || {}) as Promise<FakeCheckpointManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FakeCheckpointManager {
    return super.attach(address) as FakeCheckpointManager;
  }
  connect(signer: Signer): FakeCheckpointManager__factory {
    return super.connect(signer) as FakeCheckpointManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeCheckpointManagerInterface {
    return new utils.Interface(_abi) as FakeCheckpointManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeCheckpointManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FakeCheckpointManager;
  }
}
