/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyAdmin, ProxyAdminInterface } from "../ProxyAdmin";

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
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
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
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
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
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e5f8061010d6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461012857806399a88ec414610144578063f2fde38b1461016d578063f3b7dead146101965761007b565b8063204e1c7a14610080578063715018a6146100bd5780637eff275e146100d45780638da5cb5b146100fd575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a2919061092e565b6101d3565b6040516100b49190610af8565b60405180910390f35b3480156100c957600080fd5b506100d2610267565b005b3480156100e057600080fd5b506100fb60048036038101906100f69190610957565b6102ef565b005b34801561010957600080fd5b506101126103da565b60405161011f9190610af8565b60405180910390f35b610142600480360381019061013d9190610993565b610403565b005b34801561015057600080fd5b5061016b60048036038101906101669190610957565b6104f2565b005b34801561017957600080fd5b50610194600480360381019061018f91906108dc565b6105dd565b005b3480156101a257600080fd5b506101bd60048036038101906101b8919061092e565b6106d5565b6040516101ca9190610af8565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516101fb90610ace565b600060405180830381855afa9150503d8060008114610236576040519150601f19603f3d011682016040523d82523d6000602084013e61023b565b606091505b50915091508161024a57600080fd5b8080602001905181019061025e9190610905565b92505050919050565b61026f610769565b73ffffffffffffffffffffffffffffffffffffffff1661028d6103da565b73ffffffffffffffffffffffffffffffffffffffff16146102e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102da90610b63565b60405180910390fd5b6102ed6000610771565b565b6102f7610769565b73ffffffffffffffffffffffffffffffffffffffff166103156103da565b73ffffffffffffffffffffffffffffffffffffffff161461036b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036290610b63565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16638f283970826040518263ffffffff1660e01b81526004016103a49190610af8565b600060405180830381600087803b1580156103be57600080fd5b505af11580156103d2573d6000803e3d6000fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61040b610769565b73ffffffffffffffffffffffffffffffffffffffff166104296103da565b73ffffffffffffffffffffffffffffffffffffffff161461047f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047690610b63565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b81526004016104bb929190610b13565b6000604051808303818588803b1580156104d457600080fd5b505af11580156104e8573d6000803e3d6000fd5b5050505050505050565b6104fa610769565b73ffffffffffffffffffffffffffffffffffffffff166105186103da565b73ffffffffffffffffffffffffffffffffffffffff161461056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056590610b63565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16633659cfe6826040518263ffffffff1660e01b81526004016105a79190610af8565b600060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b505050505050565b6105e5610769565b73ffffffffffffffffffffffffffffffffffffffff166106036103da565b73ffffffffffffffffffffffffffffffffffffffff1614610659576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065090610b63565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c090610b43565b60405180910390fd5b6106d281610771565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516106fd90610ae3565b600060405180830381855afa9150503d8060008114610738576040519150601f19603f3d011682016040523d82523d6000602084013e61073d565b606091505b50915091508161074c57600080fd5b808060200190518101906107609190610905565b92505050919050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600061084861084384610ba8565b610b83565b90508281526020810184848401111561086057600080fd5b61086b848285610c67565b509392505050565b60008135905061088281610de4565b92915050565b60008151905061089781610dfb565b92915050565b600082601f8301126108ae57600080fd5b81356108be848260208601610835565b91505092915050565b6000813590506108d681610e12565b92915050565b6000602082840312156108ee57600080fd5b60006108fc84828501610873565b91505092915050565b60006020828403121561091757600080fd5b600061092584828501610888565b91505092915050565b60006020828403121561094057600080fd5b600061094e848285016108c7565b91505092915050565b6000806040838503121561096a57600080fd5b6000610978858286016108c7565b925050602061098985828601610873565b9150509250929050565b6000806000606084860312156109a857600080fd5b60006109b6868287016108c7565b93505060206109c786828701610873565b925050604084013567ffffffffffffffff8111156109e457600080fd5b6109f08682870161089d565b9150509250925092565b610a0381610c11565b82525050565b6000610a1482610bd9565b610a1e8185610be4565b9350610a2e818560208601610c76565b610a3781610d09565b840191505092915050565b6000610a4f602683610c00565b9150610a5a82610d1a565b604082019050919050565b6000610a72600483610bf5565b9150610a7d82610d69565b600482019050919050565b6000610a95602083610c00565b9150610aa082610d92565b602082019050919050565b6000610ab8600483610bf5565b9150610ac382610dbb565b600482019050919050565b6000610ad982610a65565b9150819050919050565b6000610aee82610aab565b9150819050919050565b6000602082019050610b0d60008301846109fa565b92915050565b6000604082019050610b2860008301856109fa565b8181036020830152610b3a8184610a09565b90509392505050565b60006020820190508181036000830152610b5c81610a42565b9050919050565b60006020820190508181036000830152610b7c81610a88565b9050919050565b6000610b8d610b9e565b9050610b998282610ca9565b919050565b6000604051905090565b600067ffffffffffffffff821115610bc357610bc2610cda565b5b610bcc82610d09565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610c1c82610c47565b9050919050565b6000610c2e82610c47565b9050919050565b6000610c4082610c23565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610c94578082015181840152602081019050610c79565b83811115610ca3576000848401525b50505050565b610cb282610d09565b810181811067ffffffffffffffff82111715610cd157610cd0610cda565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f5c60da1b00000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7ff851a44000000000000000000000000000000000000000000000000000000000600082015250565b610ded81610c11565b8114610df857600080fd5b50565b610e0481610c23565b8114610e0f57600080fd5b50565b610e1b81610c35565b8114610e2657600080fd5b5056fea2646970667358221220623b74b946336bbbcba6ecfc2ff80bee862f7d13d99518610b5aef42c4a890a664736f6c63430008040033";

export class ProxyAdmin__factory extends ContractFactory {
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
  ): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin;
  }
  connect(signer: Signer): ProxyAdmin__factory {
    return super.connect(signer) as ProxyAdmin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyAdminInterface {
    return new utils.Interface(_abi) as ProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin;
  }
}