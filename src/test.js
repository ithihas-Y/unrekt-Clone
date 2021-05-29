import Web3 from 'web3';
import _fetch from 'isomorphic-fetch';
import detectEthereumProvider from 'metamask-extension-provider';


let provider;

if (window.ethereum) {
  // From now on, this should always be true:
  provider === window.ethereum
 const provider = await detectEthereumProvider();
  startApp(provider); // initialize your app
} else {
  const provider = new Web3.providers.HttpProvider(
  "https://bsc-dataseed.binance.org/"
  //'https://rpc-mainnet.maticvigil.com'
);
}



const apiHost = 'https://api.covalenthq.com';

const web3 = new Web3(provider);

const abi = {
    "contractName": "IERC20",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/ithihasreddy/Downloads/pooltogether-clone-aave-flow/contracts/external/compound/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/ithihasreddy/Downloads/pooltogether-clone-aave-flow/contracts/external/compound/IERC20.sol\":{\"keccak256\":\"0xbe7a11c8510c6fa00620c13dc5b3e0f794f8a325a1ec786c170b270cfec240a1\",\"license\":\"agpl-3.0\",\"urls\":[\"bzz-raw://3ee163e8576c8d9f6aa889af00d9ff336bba60e9b32a3d32b7efc25fb1e23bf6\",\"dweb:/ipfs/QmVCeVUUZu3zegj3RcArY8nnYjcdrAfQAAM1McBidb9V68\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "immutableReferences": {},
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "// SPDX-License-Identifier: agpl-3.0\npragma solidity >=0.6.0 <0.7.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n  /**\n   * @dev Returns the amount of tokens in existence.\n   */\n  function totalSupply() external view returns (uint256);\n\n  /**\n   * @dev Returns the amount of tokens owned by `account`.\n   */\n  function balanceOf(address account) external view returns (uint256);\n\n  /**\n   * @dev Moves `amount` tokens from the caller's account to `recipient`.\n   *\n   * Returns a boolean value indicating whether the operation succeeded.\n   *\n   * Emits a {Transfer} event.\n   */\n  function transfer(address recipient, uint256 amount) external returns (bool);\n\n  /**\n   * @dev Returns the remaining number of tokens that `spender` will be\n   * allowed to spend on behalf of `owner` through {transferFrom}. This is\n   * zero by default.\n   *\n   * This value changes when {approve} or {transferFrom} are called.\n   */\n  function allowance(address owner, address spender) external view returns (uint256);\n\n  /**\n   * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n   *\n   * Returns a boolean value indicating whether the operation succeeded.\n   *\n   * IMPORTANT: Beware that changing an allowance with this method brings the risk\n   * that someone may use both the old and the new allowance by unfortunate\n   * transaction ordering. One possible solution to mitigate this race\n   * condition is to first reduce the spender's allowance to 0 and set the\n   * desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   *\n   * Emits an {Approval} event.\n   */\n  function approve(address spender, uint256 amount) external returns (bool);\n\n  /**\n   * @dev Moves `amount` tokens from `sender` to `recipient` using the\n   * allowance mechanism. `amount` is then deducted from the caller's\n   * allowance.\n   *\n   * Returns a boolean value indicating whether the operation succeeded.\n   *\n   * Emits a {Transfer} event.\n   */\n  function transferFrom(\n    address sender,\n    address recipient,\n    uint256 amount\n  ) external returns (bool);\n\n  /**\n   * @dev Emitted when `value` tokens are moved from one account (`from`) to\n   * another (`to`).\n   *\n   * Note that `value` may be zero.\n   */\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  /**\n   * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n   * a call to {approve}. `value` is the new allowance.\n   */\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}",
    "sourcePath": "/Users/ithihasreddy/Downloads/pooltogether-clone-aave-flow/contracts/external/compound/IERC20.sol",
    "ast": {
      "absolutePath": "/Users/ithihasreddy/Downloads/pooltogether-clone-aave-flow/contracts/external/compound/IERC20.sol",
      "exportedSymbols": {
        "IERC20": [
          5731
        ]
      },
      "id": 5732,
      "license": "agpl-3.0",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 5655,
          "literals": [
            "solidity",
            ">=",
            "0.6",
            ".0",
            "<",
            "0.7",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "37:31:17"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": {
            "id": 5656,
            "nodeType": "StructuredDocumentation",
            "src": "70:70:17",
            "text": " @dev Interface of the ERC20 standard as defined in the EIP."
          },
          "fullyImplemented": false,
          "id": 5731,
          "linearizedBaseContracts": [
            5731
          ],
          "name": "IERC20",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": null,
              "documentation": {
                "id": 5657,
                "nodeType": "StructuredDocumentation",
                "src": "162:62:17",
                "text": " @dev Returns the amount of tokens in existence."
              },
              "functionSelector": "18160ddd",
              "id": 5662,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 5658,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "247:2:17"
              },
              "returnParameters": {
                "id": 5661,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5660,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5662,
                    "src": "273:7:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5659,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "273:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "272:9:17"
              },
              "scope": 5731,
              "src": "227:55:17",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 5663,
                "nodeType": "StructuredDocumentation",
                "src": "286:68:17",
                "text": " @dev Returns the amount of tokens owned by `account`."
              },
              "functionSelector": "70a08231",
              "id": 5670,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 5666,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5665,
                    "mutability": "mutable",
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5670,
                    "src": "376:15:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5664,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "376:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "375:17:17"
              },
              "returnParameters": {
                "id": 5669,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5668,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5670,
                    "src": "416:7:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5667,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "416:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "415:9:17"
              },
              "scope": 5731,
              "src": "357:68:17",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 5671,
                "nodeType": "StructuredDocumentation",
                "src": "429:197:17",
                "text": " @dev Moves `amount` tokens from the caller's account to `recipient`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
              },
              "functionSelector": "a9059cbb",
              "id": 5680,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 5676,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5673,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5680,
                    "src": "647:17:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5672,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "647:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5675,
                    "mutability": "mutable",
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5680,
                    "src": "666:14:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5674,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "666:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "646:35:17"
              },
              "returnParameters": {
                "id": 5679,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5678,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5680,
                    "src": "700:4:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 5677,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "700:4:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "699:6:17"
              },
              "scope": 5731,
              "src": "629:77:17",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 5681,
                "nodeType": "StructuredDocumentation",
                "src": "710:252:17",
                "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
              },
              "functionSelector": "dd62ed3e",
              "id": 5690,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 5686,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5683,
                    "mutability": "mutable",
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5690,
                    "src": "984:13:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5682,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "984:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5685,
                    "mutability": "mutable",
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5690,
                    "src": "999:15:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5684,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "999:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "983:32:17"
              },
              "returnParameters": {
                "id": 5689,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5688,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5690,
                    "src": "1039:7:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5687,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1039:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1038:9:17"
              },
              "scope": 5731,
              "src": "965:83:17",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 5691,
                "nodeType": "StructuredDocumentation",
                "src": "1052:616:17",
                "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
              },
              "functionSelector": "095ea7b3",
              "id": 5700,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 5696,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5693,
                    "mutability": "mutable",
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5700,
                    "src": "1688:15:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5692,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1688:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5695,
                    "mutability": "mutable",
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5700,
                    "src": "1705:14:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5694,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1705:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1687:33:17"
              },
              "returnParameters": {
                "id": 5699,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5698,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5700,
                    "src": "1739:4:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 5697,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1739:4:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1738:6:17"
              },
              "scope": 5731,
              "src": "1671:74:17",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 5701,
                "nodeType": "StructuredDocumentation",
                "src": "1749:280:17",
                "text": " @dev Moves `amount` tokens from `sender` to `recipient` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
              },
              "functionSelector": "23b872dd",
              "id": 5712,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 5708,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5703,
                    "mutability": "mutable",
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5712,
                    "src": "2059:14:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5702,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2059:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5705,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5712,
                    "src": "2079:17:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5704,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2079:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5707,
                    "mutability": "mutable",
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5712,
                    "src": "2102:14:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5706,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2102:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2053:67:17"
              },
              "returnParameters": {
                "id": 5711,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5710,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5712,
                    "src": "2139:4:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 5709,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2139:4:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2138:6:17"
              },
              "scope": 5731,
              "src": "2032:113:17",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 5713,
                "nodeType": "StructuredDocumentation",
                "src": "2149:148:17",
                "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
              },
              "id": 5721,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 5720,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5715,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5721,
                    "src": "2315:20:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5714,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2315:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5717,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5721,
                    "src": "2337:18:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5716,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2337:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5719,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5721,
                    "src": "2357:13:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5718,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2357:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2314:57:17"
              },
              "src": "2300:72:17"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 5722,
                "nodeType": "StructuredDocumentation",
                "src": "2376:142:17",
                "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
              },
              "id": 5730,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 5729,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5724,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5730,
                    "src": "2536:21:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5723,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2536:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5726,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5730,
                    "src": "2559:23:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5725,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2559:7:17",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5728,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 5730,
                    "src": "2584:13:17",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5727,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2584:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2535:63:17"
              },
              "src": "2521:78:17"
            }
          ],
          "scope": 5732,
          "src": "141:2460:17"
        }
      ],
      "src": "37:2564:17"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "/Users/ithihasreddy/Downloads/pooltogether-clone-aave-flow/contracts/external/compound/IERC20.sol",
        "exportedSymbols": {
          "IERC20": [
            5731
          ]
        },
        "license": "agpl-3.0"
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              ">=",
              "0.6",
              ".0",
              "<",
              "0.7",
              ".0"
            ]
          },
          "id": 5655,
          "name": "PragmaDirective",
          "src": "37:31:17"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "interface",
            "fullyImplemented": false,
            "linearizedBaseContracts": [
              5731
            ],
            "name": "IERC20",
            "scope": 5732
          },
          "children": [
            {
              "attributes": {
                "text": " @dev Interface of the ERC20 standard as defined in the EIP."
              },
              "id": 5656,
              "name": "StructuredDocumentation",
              "src": "70:70:17"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "18160ddd",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "totalSupply",
                "overrides": null,
                "scope": 5731,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Returns the amount of tokens in existence."
                  },
                  "id": 5657,
                  "name": "StructuredDocumentation",
                  "src": "162:62:17"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 5658,
                  "name": "ParameterList",
                  "src": "247:2:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 5662,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5659,
                          "name": "ElementaryTypeName",
                          "src": "273:7:17"
                        }
                      ],
                      "id": 5660,
                      "name": "VariableDeclaration",
                      "src": "273:7:17"
                    }
                  ],
                  "id": 5661,
                  "name": "ParameterList",
                  "src": "272:9:17"
                }
              ],
              "id": 5662,
              "name": "FunctionDefinition",
              "src": "227:55:17"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "70a08231",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "balanceOf",
                "overrides": null,
                "scope": 5731,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Returns the amount of tokens owned by `account`."
                  },
                  "id": 5663,
                  "name": "StructuredDocumentation",
                  "src": "286:68:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "account",
                        "overrides": null,
                        "scope": 5670,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5664,
                          "name": "ElementaryTypeName",
                          "src": "376:7:17"
                        }
                      ],
                      "id": 5665,
                      "name": "VariableDeclaration",
                      "src": "376:15:17"
                    }
                  ],
                  "id": 5666,
                  "name": "ParameterList",
                  "src": "375:17:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 5670,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5667,
                          "name": "ElementaryTypeName",
                          "src": "416:7:17"
                        }
                      ],
                      "id": 5668,
                      "name": "VariableDeclaration",
                      "src": "416:7:17"
                    }
                  ],
                  "id": 5669,
                  "name": "ParameterList",
                  "src": "415:9:17"
                }
              ],
              "id": 5670,
              "name": "FunctionDefinition",
              "src": "357:68:17"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "a9059cbb",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "transfer",
                "overrides": null,
                "scope": 5731,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Moves `amount` tokens from the caller's account to `recipient`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
                  },
                  "id": 5671,
                  "name": "StructuredDocumentation",
                  "src": "429:197:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "recipient",
                        "overrides": null,
                        "scope": 5680,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5672,
                          "name": "ElementaryTypeName",
                          "src": "647:7:17"
                        }
                      ],
                      "id": 5673,
                      "name": "VariableDeclaration",
                      "src": "647:17:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "amount",
                        "overrides": null,
                        "scope": 5680,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5674,
                          "name": "ElementaryTypeName",
                          "src": "666:7:17"
                        }
                      ],
                      "id": 5675,
                      "name": "VariableDeclaration",
                      "src": "666:14:17"
                    }
                  ],
                  "id": 5676,
                  "name": "ParameterList",
                  "src": "646:35:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 5680,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 5677,
                          "name": "ElementaryTypeName",
                          "src": "700:4:17"
                        }
                      ],
                      "id": 5678,
                      "name": "VariableDeclaration",
                      "src": "700:4:17"
                    }
                  ],
                  "id": 5679,
                  "name": "ParameterList",
                  "src": "699:6:17"
                }
              ],
              "id": 5680,
              "name": "FunctionDefinition",
              "src": "629:77:17"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "dd62ed3e",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "allowance",
                "overrides": null,
                "scope": 5731,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
                  },
                  "id": 5681,
                  "name": "StructuredDocumentation",
                  "src": "710:252:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "owner",
                        "overrides": null,
                        "scope": 5690,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5682,
                          "name": "ElementaryTypeName",
                          "src": "984:7:17"
                        }
                      ],
                      "id": 5683,
                      "name": "VariableDeclaration",
                      "src": "984:13:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "spender",
                        "overrides": null,
                        "scope": 5690,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5684,
                          "name": "ElementaryTypeName",
                          "src": "999:7:17"
                        }
                      ],
                      "id": 5685,
                      "name": "VariableDeclaration",
                      "src": "999:15:17"
                    }
                  ],
                  "id": 5686,
                  "name": "ParameterList",
                  "src": "983:32:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 5690,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5687,
                          "name": "ElementaryTypeName",
                          "src": "1039:7:17"
                        }
                      ],
                      "id": 5688,
                      "name": "VariableDeclaration",
                      "src": "1039:7:17"
                    }
                  ],
                  "id": 5689,
                  "name": "ParameterList",
                  "src": "1038:9:17"
                }
              ],
              "id": 5690,
              "name": "FunctionDefinition",
              "src": "965:83:17"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "095ea7b3",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "approve",
                "overrides": null,
                "scope": 5731,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
                  },
                  "id": 5691,
                  "name": "StructuredDocumentation",
                  "src": "1052:616:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "spender",
                        "overrides": null,
                        "scope": 5700,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5692,
                          "name": "ElementaryTypeName",
                          "src": "1688:7:17"
                        }
                      ],
                      "id": 5693,
                      "name": "VariableDeclaration",
                      "src": "1688:15:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "amount",
                        "overrides": null,
                        "scope": 5700,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5694,
                          "name": "ElementaryTypeName",
                          "src": "1705:7:17"
                        }
                      ],
                      "id": 5695,
                      "name": "VariableDeclaration",
                      "src": "1705:14:17"
                    }
                  ],
                  "id": 5696,
                  "name": "ParameterList",
                  "src": "1687:33:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 5700,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 5697,
                          "name": "ElementaryTypeName",
                          "src": "1739:4:17"
                        }
                      ],
                      "id": 5698,
                      "name": "VariableDeclaration",
                      "src": "1739:4:17"
                    }
                  ],
                  "id": 5699,
                  "name": "ParameterList",
                  "src": "1738:6:17"
                }
              ],
              "id": 5700,
              "name": "FunctionDefinition",
              "src": "1671:74:17"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "23b872dd",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "transferFrom",
                "overrides": null,
                "scope": 5731,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Moves `amount` tokens from `sender` to `recipient` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
                  },
                  "id": 5701,
                  "name": "StructuredDocumentation",
                  "src": "1749:280:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "sender",
                        "overrides": null,
                        "scope": 5712,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5702,
                          "name": "ElementaryTypeName",
                          "src": "2059:7:17"
                        }
                      ],
                      "id": 5703,
                      "name": "VariableDeclaration",
                      "src": "2059:14:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "recipient",
                        "overrides": null,
                        "scope": 5712,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5704,
                          "name": "ElementaryTypeName",
                          "src": "2079:7:17"
                        }
                      ],
                      "id": 5705,
                      "name": "VariableDeclaration",
                      "src": "2079:17:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "amount",
                        "overrides": null,
                        "scope": 5712,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5706,
                          "name": "ElementaryTypeName",
                          "src": "2102:7:17"
                        }
                      ],
                      "id": 5707,
                      "name": "VariableDeclaration",
                      "src": "2102:14:17"
                    }
                  ],
                  "id": 5708,
                  "name": "ParameterList",
                  "src": "2053:67:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "mutability": "mutable",
                        "name": "",
                        "overrides": null,
                        "scope": 5712,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 5709,
                          "name": "ElementaryTypeName",
                          "src": "2139:4:17"
                        }
                      ],
                      "id": 5710,
                      "name": "VariableDeclaration",
                      "src": "2139:4:17"
                    }
                  ],
                  "id": 5711,
                  "name": "ParameterList",
                  "src": "2138:6:17"
                }
              ],
              "id": 5712,
              "name": "FunctionDefinition",
              "src": "2032:113:17"
            },
            {
              "attributes": {
                "anonymous": false,
                "name": "Transfer"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
                  },
                  "id": 5713,
                  "name": "StructuredDocumentation",
                  "src": "2149:148:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "from",
                        "overrides": null,
                        "scope": 5721,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5714,
                          "name": "ElementaryTypeName",
                          "src": "2315:7:17"
                        }
                      ],
                      "id": 5715,
                      "name": "VariableDeclaration",
                      "src": "2315:20:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "to",
                        "overrides": null,
                        "scope": 5721,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5716,
                          "name": "ElementaryTypeName",
                          "src": "2337:7:17"
                        }
                      ],
                      "id": 5717,
                      "name": "VariableDeclaration",
                      "src": "2337:18:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "value",
                        "overrides": null,
                        "scope": 5721,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5718,
                          "name": "ElementaryTypeName",
                          "src": "2357:7:17"
                        }
                      ],
                      "id": 5719,
                      "name": "VariableDeclaration",
                      "src": "2357:13:17"
                    }
                  ],
                  "id": 5720,
                  "name": "ParameterList",
                  "src": "2314:57:17"
                }
              ],
              "id": 5721,
              "name": "EventDefinition",
              "src": "2300:72:17"
            },
            {
              "attributes": {
                "anonymous": false,
                "name": "Approval"
              },
              "children": [
                {
                  "attributes": {
                    "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
                  },
                  "id": 5722,
                  "name": "StructuredDocumentation",
                  "src": "2376:142:17"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "owner",
                        "overrides": null,
                        "scope": 5730,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5723,
                          "name": "ElementaryTypeName",
                          "src": "2536:7:17"
                        }
                      ],
                      "id": 5724,
                      "name": "VariableDeclaration",
                      "src": "2536:21:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "mutability": "mutable",
                        "name": "spender",
                        "overrides": null,
                        "scope": 5730,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 5725,
                          "name": "ElementaryTypeName",
                          "src": "2559:7:17"
                        }
                      ],
                      "id": 5726,
                      "name": "VariableDeclaration",
                      "src": "2559:23:17"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "mutability": "mutable",
                        "name": "value",
                        "overrides": null,
                        "scope": 5730,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 5727,
                          "name": "ElementaryTypeName",
                          "src": "2584:7:17"
                        }
                      ],
                      "id": 5728,
                      "name": "VariableDeclaration",
                      "src": "2584:13:17"
                    }
                  ],
                  "id": 5729,
                  "name": "ParameterList",
                  "src": "2535:63:17"
                }
              ],
              "id": 5730,
              "name": "EventDefinition",
              "src": "2521:78:17"
            }
          ],
          "id": 5731,
          "name": "ContractDefinition",
          "src": "141:2460:17"
        }
      ],
      "id": 5732,
      "name": "SourceUnit",
      "src": "37:2564:17"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.12+commit.27d51765.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.0",
    "updatedAt": "2021-05-25T14:58:19.912Z",
    "devdoc": {
      "details": "Interface of the ERC20 standard as defined in the EIP.",
      "events": {
        "Approval(address,address,uint256)": {
          "details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
        },
        "Transfer(address,address,uint256)": {
          "details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
        }
      },
      "kind": "dev",
      "methods": {
        "allowance(address,address)": {
          "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
        },
        "approve(address,uint256)": {
          "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
        },
        "balanceOf(address)": {
          "details": "Returns the amount of tokens owned by `account`."
        },
        "totalSupply()": {
          "details": "Returns the amount of tokens in existence."
        },
        "transfer(address,uint256)": {
          "details": "Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
        },
        "transferFrom(address,address,uint256)": {
          "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
}



const address = '0x34af381e985035652e08e5f82dcf28616dc1a5dc';
const chainID = 56; // 137 for  Matic-Main

export async function  getApprovals(address){
    let balances =[];
    let transfers=[];
    let finalApprovals =[];
    _fetch(apiHost+`/v1/${chainID}/address/${address}/balances_v2/`).then(
        response=>response.json()
    ).then((data)=>{balances.push(data.data.items)}).then(
        async()=>{
            for (let index = 0; index < balances[0].length; index++) {
                const i = balances[0][index];
                if(i.supports_erc !=null){
                    await _fetch(apiHost+`/v1/${chainID}/address/${address}/transfers_v2/?contract-address=${i.contract_address}`).then(
                        response=>{response.json().then(data=>transfers.push(data.data.items))}
                    ) 
                }
                  
            }
            transfers.forEach(i=>{
              i.forEach(element => {
                element.transfers.forEach(j=>{
                  console.log(element.to_address)
                  const contract = new web3.eth.Contract(abi.abi,element.contract_address);
                  contract.methods.allowance(address,element.to_address).call().then(
                    data=>{
                      if(data!=0){
                        console.log(data/10**18,j.contract_name,element.tx_hash)
                      }
                    }
                  )
                })
              });
            })
        }
    )
}

getApprovals(address);

export function revokeApprovals(contract_address,spender_address,amount){
    const contract = new web3.eth.Contract(abi.abi,contract_address);
    contract.methods.decreaseAllowance(spender_address,amount).send({from:web3.eth.accounts[0]});
}
