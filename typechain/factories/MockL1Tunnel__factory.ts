/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockL1Tunnel, MockL1TunnelInterface } from "../MockL1Tunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_checkpointManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxRoot",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [],
    name: "SEND_MESSAGE_EVENT_SIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkpointManager",
    outputs: [
      {
        internalType: "contract ICheckpointManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChildTunnel",
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
    name: "fxRoot",
    outputs: [
      {
        internalType: "contract IFxStateSender",
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
        name: "L1TokenAddress",
        type: "address",
      },
    ],
    name: "mapERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mappedTokenStatus",
    outputs: [
      {
        internalType: "enum L1Tunnel.TokenStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mappedTokens",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedExits",
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
        internalType: "bytes",
        name: "inputData",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_fxChildTunnel",
        type: "address",
      },
    ],
    name: "setFxChildTunnel",
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
  "0x60806040523480156200001157600080fd5b5060405162001eab38038062001eab8339818101604052810190620000379190620001cd565b8181818181600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620000de620000d2620000e860201b60201c565b620000f060201b60201c565b505050506200025c565b600033905090565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620001c78162000242565b92915050565b60008060408385031215620001e157600080fd5b6000620001f185828601620001b6565b92505060206200020485828601620001b6565b9150509250929050565b60006200021b8262000222565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200024d816200020e565b81146200025957600080fd5b50565b611c3f806200026c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639f25bb5a1161008c578063de9b771f11610066578063de9b771f146101ee578063e6ede14d1461020c578063f2fde38b1461023c578063f953cec714610258576100cf565b80639f25bb5a14610198578063aea4e49e146101b4578063c0857ba0146101d0576100cf565b80630a1a1968146100d45780630e387de614610104578063607f2d4214610122578063715018a6146101525780638da5cb5b1461015c578063972c49281461017a575b600080fd5b6100ee60048036038101906100e99190611190565b610274565b6040516100fb9190611695565b60405180910390f35b61010c610294565b60405161011991906115f9565b60405180910390f35b61013c6004803603810190610137919061120b565b6102bb565b60405161014991906115de565b60405180910390f35b61015a6102db565b005b610164610363565b6040516101719190611593565b60405180910390f35b61018261038d565b60405161018f9190611593565b60405180910390f35b6101b260048036038101906101ad9190611190565b6103b3565b005b6101ce60048036038101906101c99190611190565b610997565b005b6101d8610a6c565b6040516101e5919061162f565b60405180910390f35b6101f6610a92565b604051610203919061164a565b60405180910390f35b61022660048036038101906102219190611190565b610ab6565b6040516102339190611593565b60405180910390f35b61025660048036038101906102519190611190565b610ae9565b005b610272600480360381019061026d9190611234565b610be1565b005b60066020528060005260406000206000915054906101000a900460ff1681565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03660001b81565b60036020528060005260406000206000915054906101000a900460ff1681565b6102e3610bed565b73ffffffffffffffffffffffffffffffffffffffff16610301610363565b73ffffffffffffffffffffffffffffffffffffffff1614610357576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034e90611710565b60405180910390fd5b6103616000610bf5565b565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103bb610bed565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041757600080fd5b505afa15801561042b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044f91906111b9565b73ffffffffffffffffffffffffffffffffffffffff16146104a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049c90611750565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166301ffc9a77f80ac58cd000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016104fe9190611614565b60206040518083038186803b15801561051657600080fd5b505afa15801561052a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054e91906111e2565b80156105ff57508073ffffffffffffffffffffffffffffffffffffffff166301ffc9a77f5b5e139f000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016105ae9190611614565b60206040518083038186803b1580156105c657600080fd5b505afa1580156105da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fe91906111e2565b5b61063e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063590611730565b60405180910390fd5b60006002811115610678577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660028111156106fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461073d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610734906116b0565b60405180910390fd5b6001600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360028111156107c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060006040518060a001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561085757600080fd5b505afa15801561086b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061089491906112c9565b81526020018373ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156108df57600080fd5b505afa1580156108f3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061091c91906112c9565b8152602001610929610bed565b73ffffffffffffffffffffffffffffffffffffffff168152506040516020016109529190611770565b604051602081830303815290604052905060008082604051602001610978929190611665565b604051602081830303815290604052905061099281610cbb565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1f906116d0565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610af1610bed565b73ffffffffffffffffffffffffffffffffffffffff16610b0f610363565b73ffffffffffffffffffffffffffffffffffffffff1614610b65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5c90611710565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcc906116f0565b60405180910390fd5b610bde81610bf5565b50565b610bea81610d6d565b50565b600033905090565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b4720477600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401610d389291906115ae565b600060405180830381600087803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b5050505050565b60008082806020019051810190610d849190611275565b91509150600180811115610dc1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b826001811115610dfa577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610f3257600081806020019051810190610e16919061130a565b9050600260066000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836002811115610ea5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550806020015160056000836000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b505050565b6000610f4a610f45846117b7565b611792565b905082815260208101848484011115610f6257600080fd5b610f6d848285611968565b509392505050565b6000610f88610f83846117b7565b611792565b905082815260208101848484011115610fa057600080fd5b610fab848285611977565b509392505050565b6000610fc6610fc1846117e8565b611792565b905082815260208101848484011115610fde57600080fd5b610fe9848285611977565b509392505050565b60008135905061100081611bb4565b92915050565b60008151905061101581611bb4565b92915050565b60008151905061102a81611bcb565b92915050565b60008135905061103f81611be2565b92915050565b600082601f83011261105657600080fd5b8135611066848260208601610f37565b91505092915050565b600082601f83011261108057600080fd5b8151611090848260208601610f75565b91505092915050565b6000815190506110a881611bf9565b92915050565b600082601f8301126110bf57600080fd5b81516110cf848260208601610fb3565b91505092915050565b600060a082840312156110ea57600080fd5b6110f460a0611792565b9050600061110484828501611006565b600083015250602061111884828501611006565b602083015250604082015167ffffffffffffffff81111561113857600080fd5b611144848285016110ae565b604083015250606082015167ffffffffffffffff81111561116457600080fd5b611170848285016110ae565b606083015250608061118484828501611006565b60808301525092915050565b6000602082840312156111a257600080fd5b60006111b084828501610ff1565b91505092915050565b6000602082840312156111cb57600080fd5b60006111d984828501611006565b91505092915050565b6000602082840312156111f457600080fd5b60006112028482850161101b565b91505092915050565b60006020828403121561121d57600080fd5b600061122b84828501611030565b91505092915050565b60006020828403121561124657600080fd5b600082013567ffffffffffffffff81111561126057600080fd5b61126c84828501611045565b91505092915050565b6000806040838503121561128857600080fd5b600061129685828601611099565b925050602083015167ffffffffffffffff8111156112b357600080fd5b6112bf8582860161106f565b9150509250929050565b6000602082840312156112db57600080fd5b600082015167ffffffffffffffff8111156112f557600080fd5b611301848285016110ae565b91505092915050565b60006020828403121561131c57600080fd5b600082015167ffffffffffffffff81111561133657600080fd5b611342848285016110d8565b91505092915050565b61135481611862565b82525050565b61136381611862565b82525050565b61137281611874565b82525050565b61138181611880565b82525050565b6113908161188a565b82525050565b60006113a182611819565b6113ab818561182f565b93506113bb818560208601611977565b6113c481611a39565b840191505092915050565b6113d8816118fc565b82525050565b6113e781611920565b82525050565b6113f681611944565b82525050565b61140581611956565b82525050565b600061141682611824565b6114208185611840565b9350611430818560208601611977565b61143981611a39565b840191505092915050565b6000611451601683611851565b915061145c82611a4a565b602082019050919050565b6000611474602a83611851565b915061147f82611a73565b604082019050919050565b6000611497602683611851565b91506114a282611ac2565b604082019050919050565b60006114ba602083611851565b91506114c582611b11565b602082019050919050565b60006114dd601383611851565b91506114e882611b3a565b602082019050919050565b6000611500601583611851565b915061150b82611b63565b602082019050919050565b600060a08301600083015161152e600086018261134b565b506020830151611541602086018261134b565b5060408301518482036040860152611559828261140b565b91505060608301518482036060860152611573828261140b565b9150506080830151611588608086018261134b565b508091505092915050565b60006020820190506115a8600083018461135a565b92915050565b60006040820190506115c3600083018561135a565b81810360208301526115d58184611396565b90509392505050565b60006020820190506115f36000830184611369565b92915050565b600060208201905061160e6000830184611378565b92915050565b60006020820190506116296000830184611387565b92915050565b600060208201905061164460008301846113cf565b92915050565b600060208201905061165f60008301846113de565b92915050565b600060408201905061167a60008301856113ed565b818103602083015261168c8184611396565b90509392505050565b60006020820190506116aa60008301846113fc565b92915050565b600060208201905081810360008301526116c981611444565b9050919050565b600060208201905081810360008301526116e981611467565b9050919050565b600060208201905081810360008301526117098161148a565b9050919050565b60006020820190508181036000830152611729816114ad565b9050919050565b60006020820190508181036000830152611749816114d0565b9050919050565b60006020820190508181036000830152611769816114f3565b9050919050565b6000602082019050818103600083015261178a8184611516565b905092915050565b600061179c6117ad565b90506117a882826119aa565b919050565b6000604051905090565b600067ffffffffffffffff8211156117d2576117d1611a0a565b5b6117db82611a39565b9050602081019050919050565b600067ffffffffffffffff82111561180357611802611a0a565b5b61180c82611a39565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061186d826118dc565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60008190506118c482611b8c565b919050565b60008190506118d782611ba0565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119078261190e565b9050919050565b6000611919826118dc565b9050919050565b600061192b82611932565b9050919050565b600061193d826118dc565b9050919050565b600061194f826118b6565b9050919050565b6000611961826118c9565b9050919050565b82818337600083830152505050565b60005b8381101561199557808201518184015260208101905061197a565b838111156119a4576000848401525b50505050565b6119b382611a39565b810181811067ffffffffffffffff821117156119d2576119d1611a0a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f416c7265616479206d6170706564206f7220696e697400000000000000000000600082015250565b7f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160008201527f4c52454144595f53455400000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f546f6b656e206e6f7420737570706f7274656400000000000000000000000000600082015250565b7f4e6f74206f776e6572206f66204c3120546f6b656e0000000000000000000000600082015250565b60028110611b9d57611b9c6119db565b5b50565b60038110611bb157611bb06119db565b5b50565b611bbd81611862565b8114611bc857600080fd5b50565b611bd481611874565b8114611bdf57600080fd5b50565b611beb81611880565b8114611bf657600080fd5b50565b60028110611c0657600080fd5b5056fea26469706673582212206d049731b3757eb2061e6f73faf6c29ee3bcfc59327f39cf78d911145d33e72464736f6c63430008040033";

export class MockL1Tunnel__factory extends ContractFactory {
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
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockL1Tunnel> {
    return super.deploy(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    ) as Promise<MockL1Tunnel>;
  }
  getDeployTransaction(
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    );
  }
  attach(address: string): MockL1Tunnel {
    return super.attach(address) as MockL1Tunnel;
  }
  connect(signer: Signer): MockL1Tunnel__factory {
    return super.connect(signer) as MockL1Tunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockL1TunnelInterface {
    return new utils.Interface(_abi) as MockL1TunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockL1Tunnel {
    return new Contract(address, _abi, signerOrProvider) as MockL1Tunnel;
  }
}
