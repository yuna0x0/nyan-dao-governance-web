export const dAppName = "NyanDAO Governance Playground";

export const DEFAULT_SAFE_FACTORY_SINGLETON_ADDRESS = "0x41675C099F32341bf84BFc5382aF534df5C7461a";
export const DEFAULT_SAFE_FACTORY_L2_SINGLETON_ADDRESS = "0x29fcB43b46531BcA003ddC8FCB67FFE91900C762";
export const DEFAULT_SAFE_FACTORY_PROXY_FACTORY_ADDRESS = "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67";
export const DEFAULT_SAFE_FACTORY_MULTI_SEND_ADDRESS = "0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526";
export const DEFAULT_SAFE_FACTORY_MULTI_SEND_CALL_ONLY_ADDRESS = "0x9641d764fc13c8B624c04430C7356C1C7C8102e2";
export const DEFAULT_SAFE_FACTORY_FALLBACK_HANDLER_ADDRESS = "0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99";
export const DEFAULT_SAFE_FACTORY_SIGN_MESSAGE_LIB_ADDRESS = "0xd53cd0aB83D845Ac265BE939c57F53AD838012c9";
export const DEFAULT_SAFE_FACTORY_CREATE_CALL_ADDRESS = "0x9b35Af71d77eaf8d7e40252370304687390A1A52";
export const DEFAULT_SAFE_FACTORY_SIMULATE_TX_ACCESSOR_ADDRESS = "0x3d4BA2E0884aa488718476ca2FB8Efc291A46199";

export const BASE_GOERLI_WETH_ADDRESS = process.env.NEXT_PUBLIC_BASE_GOERLI_WETH_ADDRESS || "0x4200000000000000000000000000000000000006";

export const ERC20_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "initialSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "CheckpointUnorderedInsertion",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ECDSAInvalidSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "name": "ECDSAInvalidSignatureLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "ECDSAInvalidSignatureS",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "increasedSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "cap",
                "type": "uint256"
            }
        ],
        "name": "ERC20ExceededSafeSupply",
        "type": "error"
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
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ERC2612ExpiredSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "signer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC2612InvalidSigner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            },
            {
                "internalType": "uint48",
                "name": "clock",
                "type": "uint48"
            }
        ],
        "name": "ERC5805FutureLookup",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ERC6372InconsistentClock",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "currentNonce",
                "type": "uint256"
            }
        ],
        "name": "InvalidAccountNonce",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "bits",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "SafeCastOverflowedUintDowncast",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            }
        ],
        "name": "VotesExpiredSignature",
        "type": "error"
    },
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
                "name": "delegator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "fromDelegate",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "toDelegate",
                "type": "address"
            }
        ],
        "name": "DelegateChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "delegate",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "previousVotes",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVotes",
                "type": "uint256"
            }
        ],
        "name": "DelegateVotesChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
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
        "name": "CLOCK_MODE",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
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
                "name": "value",
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
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "pos",
                "type": "uint32"
            }
        ],
        "name": "checkpoints",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint48",
                        "name": "_key",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint208",
                        "name": "_value",
                        "type": "uint208"
                    }
                ],
                "internalType": "struct Checkpoints.Checkpoint208",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "clock",
        "outputs": [
            {
                "internalType": "uint48",
                "name": "",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatee",
                "type": "address"
            }
        ],
        "name": "delegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegatee",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "delegateBySig",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "delegates",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            }
        ],
        "name": "getPastTotalSupply",
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
            },
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            }
        ],
        "name": "getPastVotes",
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
        "name": "getVotes",
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
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
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
        "name": "numCheckpoints",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
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
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
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
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
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
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
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
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const OZ_TIMELOCK_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "minDelay",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "proposers",
                "type": "address[]"
            },
            {
                "internalType": "address[]",
                "name": "executors",
                "type": "address[]"
            },
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "AccessControlBadConfirmation",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "neededRole",
                "type": "bytes32"
            }
        ],
        "name": "AccessControlUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minDelay",
                "type": "uint256"
            }
        ],
        "name": "TimelockInsufficientDelay",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "targets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "payloads",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "values",
                "type": "uint256"
            }
        ],
        "name": "TimelockInvalidOperationLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "TimelockUnauthorizedCaller",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "predecessorId",
                "type": "bytes32"
            }
        ],
        "name": "TimelockUnexecutedPredecessor",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "operationId",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "expectedStates",
                "type": "bytes32"
            }
        ],
        "name": "TimelockUnexpectedOperationState",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "CallExecuted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "CallSalt",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            }
        ],
        "name": "CallScheduled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "Cancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldDuration",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newDuration",
                "type": "uint256"
            }
        ],
        "name": "MinDelayChange",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "CANCELLER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "EXECUTOR_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PROPOSER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "cancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "payloads",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "executeBatch",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinDelay",
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
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getOperationState",
        "outputs": [
            {
                "internalType": "enum TimelockController.OperationState",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "getTimestamp",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "hashOperation",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "payloads",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "hashOperationBatch",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperation",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperationDone",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperationPending",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "isOperationReady",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "callerConfirmation",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            }
        ],
        "name": "schedule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "payloads",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "predecessor",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "delay",
                "type": "uint256"
            }
        ],
        "name": "scheduleBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newDelay",
                "type": "uint256"
            }
        ],
        "name": "updateDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

export const OZ_GOVERNOR_ABI = [
    {
        "inputs": [
            {
                "internalType": "contract IVotes",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "contract TimelockController",
                "name": "_timelock",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "governorName",
                "type": "string"
            },
            {
                "internalType": "uint48",
                "name": "initVotingDelayBlock",
                "type": "uint48"
            },
            {
                "internalType": "uint32",
                "name": "initVotingPeriodBlock",
                "type": "uint32"
            },
            {
                "internalType": "uint256",
                "name": "initProposalThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "initQuorumNumerator",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "CheckpointUnorderedInsertion",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "GovernorAlreadyCastVote",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "GovernorAlreadyQueuedProposal",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "GovernorDisabledDeposit",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "threshold",
                "type": "uint256"
            }
        ],
        "name": "GovernorInsufficientProposerVotes",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "targets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "calldatas",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "values",
                "type": "uint256"
            }
        ],
        "name": "GovernorInvalidProposalLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "quorumNumerator",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quorumDenominator",
                "type": "uint256"
            }
        ],
        "name": "GovernorInvalidQuorumFraction",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "GovernorInvalidSignature",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "GovernorInvalidVoteType",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "votingPeriod",
                "type": "uint256"
            }
        ],
        "name": "GovernorInvalidVotingPeriod",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "GovernorNonexistentProposal",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "GovernorNotQueuedProposal",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "GovernorOnlyExecutor",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "GovernorOnlyProposer",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "GovernorQueueNotImplemented",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            }
        ],
        "name": "GovernorRestrictedProposer",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "enum IGovernor.ProposalState",
                "name": "current",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "expectedStates",
                "type": "bytes32"
            }
        ],
        "name": "GovernorUnexpectedProposalState",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "currentNonce",
                "type": "uint256"
            }
        ],
        "name": "InvalidAccountNonce",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidShortString",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "QueueEmpty",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "QueueFull",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "bits",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "SafeCastOverflowedUintDowncast",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "StringTooLong",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "ProposalCanceled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "signatures",
                "type": "string[]"
            },
            {
                "indexed": false,
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteStart",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteEnd",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ProposalCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "ProposalExecuted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "etaSeconds",
                "type": "uint256"
            }
        ],
        "name": "ProposalQueued",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldProposalThreshold",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newProposalThreshold",
                "type": "uint256"
            }
        ],
        "name": "ProposalThresholdSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldQuorumNumerator",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newQuorumNumerator",
                "type": "uint256"
            }
        ],
        "name": "QuorumNumeratorUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldTimelock",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newTimelock",
                "type": "address"
            }
        ],
        "name": "TimelockChange",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "VoteCast",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "VoteCastWithParams",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldVotingDelay",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVotingDelay",
                "type": "uint256"
            }
        ],
        "name": "VotingDelaySet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldVotingPeriod",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newVotingPeriod",
                "type": "uint256"
            }
        ],
        "name": "VotingPeriodSet",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BALLOT_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "CLOCK_MODE",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "COUNTING_MODE",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "EXTENDED_BALLOT_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "cancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "cancel",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            }
        ],
        "name": "castVote",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "castVoteBySig",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            }
        ],
        "name": "castVoteWithReason",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "castVoteWithReasonAndParams",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "support",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "castVoteWithReasonAndParamsBySig",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "clock",
        "outputs": [
            {
                "internalType": "uint48",
                "name": "",
                "type": "uint48"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            }
        ],
        "name": "getVotes",
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
            },
            {
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "params",
                "type": "bytes"
            }
        ],
        "name": "getVotesWithParams",
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
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasVoted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "hashProposal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
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
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proposalCount",
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
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalDeadline",
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
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalDetails",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "proposalDetailsAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalEta",
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
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalNeedsQueuing",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalProposer",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalSnapshot",
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
        "inputs": [],
        "name": "proposalThreshold",
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
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "proposalVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "againstVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "forVotes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "abstainVotes",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "propose",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes[]",
                "name": "calldatas",
                "type": "bytes[]"
            },
            {
                "internalType": "bytes32",
                "name": "descriptionHash",
                "type": "bytes32"
            }
        ],
        "name": "queue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "queue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "name": "quorum",
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
        "inputs": [],
        "name": "quorumDenominator",
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
                "internalType": "uint256",
                "name": "timepoint",
                "type": "uint256"
            }
        ],
        "name": "quorumNumerator",
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
        "inputs": [],
        "name": "quorumNumerator",
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
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "relay",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newProposalThreshold",
                "type": "uint256"
            }
        ],
        "name": "setProposalThreshold",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint48",
                "name": "newVotingDelay",
                "type": "uint48"
            }
        ],
        "name": "setVotingDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "newVotingPeriod",
                "type": "uint32"
            }
        ],
        "name": "setVotingPeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "state",
        "outputs": [
            {
                "internalType": "enum IGovernor.ProposalState",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "timelock",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract IERC5805",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newQuorumNumerator",
                "type": "uint256"
            }
        ],
        "name": "updateQuorumNumerator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract TimelockController",
                "name": "newTimelock",
                "type": "address"
            }
        ],
        "name": "updateTimelock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "votingDelay",
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
        "inputs": [],
        "name": "votingPeriod",
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
        "stateMutability": "payable",
        "type": "receive"
    }
];

export const STEWARD_SYSTEM_ABI = [
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "stewardAddresses",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "stewardExpireTimestamps",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "proposalVoteDuration_",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "name": "EnumerableMapNonexistentKey",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MathOverflowedMulDiv",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum StewardProposalVoting.StewardAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newExpireTimestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "votingEndTimestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "voters",
                "type": "address[]"
            }
        ],
        "name": "StewardProposalCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "executeStewardProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "address_",
                "type": "address"
            }
        ],
        "name": "getSteward",
        "outputs": [
            {
                "internalType": "enum StewardManager.StewardStatus",
                "name": "status",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "stewardExpireTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getStewardAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "address_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "expireTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "getStewardProposalById",
        "outputs": [
            {
                "internalType": "enum StewardProposalVoting.StewardAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "newExpireTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "votingEndTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "voters",
                "type": "address[]"
            },
            {
                "internalType": "enum Voting.Vote[]",
                "name": "votes",
                "type": "uint8[]"
            },
            {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStewardProposalsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "length",
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
                "name": "address_",
                "type": "address"
            }
        ],
        "name": "getStewardStatus",
        "outputs": [
            {
                "internalType": "enum StewardManager.StewardStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStewards",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStewardsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proposalVoteDuration",
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
                "internalType": "enum StewardProposalVoting.StewardAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "newExpireTimestamp",
                "type": "uint256"
            }
        ],
        "name": "proposeSteward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            }
        ],
        "name": "setStewardVoteDuration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "enum Voting.Vote",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "voteOnStewardProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const WORKING_GROUP_SYSTEM_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "safeAccount",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_stewardSystem",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "workingGroupAddresses",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "workingGroupTimestamps",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "workingGroupAllowances",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "proposalVoteDuration_",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "name": "EnumerableMapNonexistentKey",
        "type": "error"
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
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MathOverflowedMulDiv",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
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
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum WorkingGroupProposalVoting.WorkingGroupAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newExpireTimestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "votingEndTimestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "voters",
                "type": "address[]"
            }
        ],
        "name": "WorkingGroupProposalCreated",
        "type": "event"
    },
    {
        "inputs": [
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
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "executeWorkingGroupProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "address_",
                "type": "address"
            }
        ],
        "name": "getWorkingGroup",
        "outputs": [
            {
                "internalType": "enum WorkingGroupManager.WorkingGroupStatus",
                "name": "status",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "workingGroupExpireTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getWorkingGroupAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "address_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "expireTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "name": "getWorkingGroupProposalById",
        "outputs": [
            {
                "internalType": "enum WorkingGroupProposalVoting.WorkingGroupAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "newExpireTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "votingEndTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "voters",
                "type": "address[]"
            },
            {
                "internalType": "enum Voting.Vote[]",
                "name": "votes",
                "type": "uint8[]"
            },
            {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWorkingGroupProposalsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "length",
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
                "name": "address_",
                "type": "address"
            }
        ],
        "name": "getWorkingGroupStatus",
        "outputs": [
            {
                "internalType": "enum WorkingGroupManager.WorkingGroupStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWorkingGroups",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWorkingGroupsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum WorkingGroupProposalVoting.WorkingGroupAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "targetAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "newExpireTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            }
        ],
        "name": "proposeWorkingGroup",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "safeAccount",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "sendFromSafe",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
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
                "name": "stewardSystem_",
                "type": "address"
            }
        ],
        "name": "setStewardSystem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            }
        ],
        "name": "setWorkingGroupVoteDuration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stewardSystem",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "internalType": "enum Voting.Vote",
                "name": "vote",
                "type": "uint8"
            }
        ],
        "name": "voteOnWorkingGroupProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "workingGroupVoteDuration",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export const ERC20_BYTECODE = "0x6101606040523480156200001257600080fd5b5060405162003768380380620037688339810160408190526200003591620009ff565b6040805180820190915260018152603160f81b602082015283908190868286600362000062838262000b21565b50600462000071828262000b21565b5050506001600160a01b038116620000a457604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b620000af8162000195565b50620000bd826006620001e7565b61012052620000ce816007620001e7565b61014052815160208084019190912060e052815190820120610100524660a0526200015c60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506200018b33620001796012600a62000d00565b62000185908462000d11565b62000220565b5050505062000dfe565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006020835110156200020757620001ff836200025e565b90506200021a565b8162000214848262000b21565b5060ff90505b92915050565b6001600160a01b0382166200024c5760405163ec442f0560e01b8152600060048201526024016200009b565b6200025a60008383620002a1565b5050565b600080829050601f815111156200028c578260405163305a27a960e01b81526004016200009b919062000d2b565b8051620002998262000d60565b179392505050565b620002ae838383620002b3565b505050565b620002c083838362000322565b6001600160a01b03831662000315576000620002db60025490565b90506001600160d01b03808211156200031257604051630e58ae9360e11b815260048101839052602481018290526044016200009b565b50505b620002ae83838362000455565b6001600160a01b0383166200035157806002600082825462000345919062000d85565b90915550620003c59050565b6001600160a01b03831660009081526020819052604090205481811015620003a65760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016200009b565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620003e35760028054829003905562000402565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200044891815260200190565b60405180910390a3505050565b6001600160a01b0383166200048a5762000487600b62000c1c620004ed60201b17620004818462000502565b6200053c565b50505b6001600160a01b038216620004b957620004b6600b62000c286200057960201b17620004818462000502565b50505b6001600160a01b03838116600090815260096020526040808220548584168352912054620002ae9291821691168362000587565b6000620004fb828462000d9b565b9392505050565b60006001600160d01b0382111562000538576040516306dfcc6560e41b815260d06004820152602481018390526044016200009b565b5090565b6000806200056c6200054d620006ee565b620005636200055c88620006ff565b868860201c565b8791906200074e565b915091505b935093915050565b6000620004fb828462000dc5565b816001600160a01b0316836001600160a01b031614158015620005aa5750600081115b15620002ae576001600160a01b038316156200064d576001600160a01b0383166000908152600a6020908152604082208291620005f8919062000579901b62000c2817620004818662000502565b6001600160d01b031691506001600160d01b03169150846001600160a01b031660008051602062003748833981519152838360405162000642929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615620002ae576001600160a01b0382166000908152600a6020908152604082208291620006959190620004ed901b62000c1c17620004818662000502565b6001600160d01b031691506001600160d01b03169150836001600160a01b0316600080516020620037488339815191528383604051620006df929190918252602082015260400190565b60405180910390a25050505050565b6000620006fa6200075e565b905090565b8054600090801562000745576200072b836200071d60018462000de8565b600091825260209091200190565b54660100000000000090046001600160d01b0316620004fb565b60009392505050565b6000806200056c8585856200076b565b6000620006fa43620008fd565b8254600090819080156200089e5760006200078d876200071d60018562000de8565b60408051808201909152905465ffffffffffff80821680845266010000000000009092046001600160d01b031660208401529192509087161015620007e557604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff8088169116036200083957846200080c886200071d60018662000de8565b80546001600160d01b039290921666010000000000000265ffffffffffff9092169190911790556200088d565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d5560008d815291909120945191519092166601000000000000029216919091179101555b602001519250839150620005719050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a5560008a815291822095519251909316660100000000000002919093161792019190915590508162000571565b600065ffffffffffff82111562000538576040516306dfcc6560e41b815260306004820152602481018390526044016200009b565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620009655781810151838201526020016200094b565b50506000910152565b600082601f8301126200098057600080fd5b81516001600160401b03808211156200099d576200099d62000932565b604051601f8301601f19908116603f01168101908282118183101715620009c857620009c862000932565b81604052838152866020858801011115620009e257600080fd5b620009f584602083016020890162000948565b9695505050505050565b6000806000806080858703121562000a1657600080fd5b84516001600160a01b038116811462000a2e57600080fd5b60208601519094506001600160401b038082111562000a4c57600080fd5b62000a5a888389016200096e565b9450604087015191508082111562000a7157600080fd5b5062000a80878288016200096e565b606096909601519497939650505050565b600181811c9082168062000aa657607f821691505b60208210810362000ac757634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002ae576000816000526020600020601f850160051c8101602086101562000af85750805b601f850160051c820191505b8181101562000b195782815560010162000b04565b505050505050565b81516001600160401b0381111562000b3d5762000b3d62000932565b62000b558162000b4e845462000a91565b8462000acd565b602080601f83116001811462000b8d576000841562000b745750858301515b600019600386901b1c1916600185901b17855562000b19565b600085815260208120601f198616915b8281101562000bbe5788860151825594840194600190910190840162000b9d565b508582101562000bdd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111562000c4457816000190482111562000c285762000c2862000bed565b8085161562000c3657918102915b93841c939080029062000c08565b509250929050565b60008262000c5d575060016200021a565b8162000c6c575060006200021a565b816001811462000c85576002811462000c905762000cb0565b60019150506200021a565b60ff84111562000ca45762000ca462000bed565b50506001821b6200021a565b5060208310610133831016604e8410600b841016171562000cd5575081810a6200021a565b62000ce1838362000c03565b806000190482111562000cf85762000cf862000bed565b029392505050565b6000620004fb60ff84168362000c4c565b80820281158282048414176200021a576200021a62000bed565b602081526000825180602084015262000d4c81604085016020870162000948565b601f01601f19169190910160400192915050565b8051602080830151919081101562000ac75760001960209190910360031b1b16919050565b808201808211156200021a576200021a62000bed565b6001600160d01b0381811683821601908082111562000dbe5762000dbe62000bed565b5092915050565b6001600160d01b0382811682821603908082111562000dbe5762000dbe62000bed565b818103818111156200021a576200021a62000bed565b60805160a05160c05160e0516101005161012051610140516128ef62000e5960003960006112c60152600061129901526000610ea701526000610e7f01526000610dda01526000610e0401526000610e2e01526128ef6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063715018a61161010457806395d89b41116100a2578063d505accf11610071578063d505accf1461043d578063dd62ed3e14610450578063f1127ed814610496578063f2fde38b146104e857600080fd5b806395d89b41146103fc5780639ab24eb014610404578063a9059cbb14610417578063c3cda5201461042a57600080fd5b806384b0196e116100de57806384b0196e146103915780638da5cb5b146103ac5780638e539e8c146103ca57806391ddadf4146103dd57600080fd5b8063715018a61461036357806379cc67901461036b5780637ecebe001461037e57600080fd5b806340c10f1911610171578063587cde1e1161014b578063587cde1e146102945780635c19a95c146102f25780636fcfff451461030557806370a082311461032d57600080fd5b806340c10f191461026457806342966c68146102795780634bf5d7e91461028c57600080fd5b806323b872dd116101ad57806323b872dd14610227578063313ce5671461023a5780633644e515146102495780633a46b1a81461025157600080fd5b806306fdde03146101d4578063095ea7b3146101f257806318160ddd14610215575b600080fd5b6101dc6104fb565b6040516101e991906123fe565b60405180910390f35b61020561020036600461243a565b61058d565b60405190151581526020016101e9565b6002545b6040519081526020016101e9565b610205610235366004612464565b6105a7565b604051601281526020016101e9565b6102196105cb565b61021961025f36600461243a565b6105da565b61027761027236600461243a565b610699565b005b6102776102873660046124a0565b6106af565b6101dc6106bc565b6102cd6102a23660046124b9565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600960205260409020541690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e9565b6102776103003660046124b9565b61074d565b6103186103133660046124b9565b610758565b60405163ffffffff90911681526020016101e9565b61021961033b3660046124b9565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b610277610763565b61027761037936600461243a565b610777565b61021961038c3660046124b9565b61078c565b610399610797565b6040516101e997969594939291906124d4565b60055473ffffffffffffffffffffffffffffffffffffffff166102cd565b6102196103d83660046124a0565b6107f9565b6103e561088f565b60405165ffffffffffff90911681526020016101e9565b6101dc610899565b6102196104123660046124b9565b6108a8565b61020561042536600461243a565b6108f8565b6102776104383660046125a7565b610906565b61027761044b3660046125ff565b6109e9565b61021961045e366004612669565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6104a96104a436600461269c565b610b96565b60408051825165ffffffffffff16815260209283015179ffffffffffffffffffffffffffffffffffffffffffffffffffff1692810192909252016101e9565b6102776104f63660046124b9565b610bbb565b60606003805461050a906126dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610536906126dc565b80156105835780601f1061055857610100808354040283529160200191610583565b820191906000526020600020905b81548152906001019060200180831161056657829003601f168201915b5050505050905090565b60003361059b818585610c34565b60019150505b92915050565b6000336105b5858285610c46565b6105c0858585610d15565b506001949350505050565b60006105d5610dc0565b905090565b6000806105e561088f565b90508065ffffffffffff16831061063e576040517fecd3f81e0000000000000000000000000000000000000000000000000000000081526004810184905265ffffffffffff821660248201526044015b60405180910390fd5b61067561064a84610ef8565b73ffffffffffffffffffffffffffffffffffffffff86166000908152600a6020526040902090610f48565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16949350505050565b6106a1611014565b6106ab8282611067565b5050565b6106b933826110c3565b50565b60606106c661111f565b65ffffffffffff166106d661088f565b65ffffffffffff1614610715576040517f6ff0714000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b336106ab818361112a565b60006105a1826111c1565b61076b611014565b61077560006111f0565b565b610782823383610c46565b6106ab82826110c3565b60006105a182611267565b6000606080600080600060606107ab611292565b6107b36112bf565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b60008061080461088f565b90508065ffffffffffff168310610858576040517fecd3f81e0000000000000000000000000000000000000000000000000000000081526004810184905265ffffffffffff82166024820152604401610635565b61086c61086484610ef8565b600b90610f48565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169392505050565b60006105d561111f565b60606004805461050a906126dc565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a602052604081206108d6906112ec565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff1692915050565b60003361059b818585610d15565b83421115610943576040517f4683af0e00000000000000000000000000000000000000000000000000000000815260048101859052602401610635565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf602082015273ffffffffffffffffffffffffffffffffffffffff88169181019190915260608101869052608081018590526000906109ca906109c29060a0016040516020818303038152906040528051906020012061133b565b858585611383565b90506109d681876113b1565b6109e0818861112a565b50505050505050565b83421115610a26576040517f6279130200000000000000000000000000000000000000000000000000000000815260048101859052602401610635565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610a808c73ffffffffffffffffffffffffffffffffffffffff16600090815260086020526040902080546001810190915590565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610ae88261133b565b90506000610af882878787611383565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b7f576040517f4b800e4600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301528b166024820152604401610635565b610b8a8a8a8a610c34565b50505050505050505050565b6040805180820190915260008082526020820152610bb48383611437565b9392505050565b610bc3611014565b73ffffffffffffffffffffffffffffffffffffffff8116610c13576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b6106b9816111f0565b6000610bb4828461275e565b6000610bb48284612798565b610c41838383600161147a565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d0f5781811015610d00576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024810182905260448101839052606401610635565b610d0f8484848403600061147a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d65576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b73ffffffffffffffffffffffffffffffffffffffff8216610db5576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b610c418383836115c2565b60003073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015610e2657507f000000000000000000000000000000000000000000000000000000000000000046145b15610e5057507f000000000000000000000000000000000000000000000000000000000000000090565b6105d5604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b600065ffffffffffff821115610f44576040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526030600482015260248101839052604401610635565b5090565b815460009081816005811115610fa7576000610f63846115cd565b610f6d90856127cb565b60008881526020902090915081015465ffffffffffff9081169087161015610f9757809150610fa5565b610fa28160016127de565b92505b505b6000610fb5878785856116b5565b9050801561100657610fda87610fcc6001846127cb565b600091825260209091200190565b546601000000000000900479ffffffffffffffffffffffffffffffffffffffffffffffffffff16611009565b60005b979650505050505050565b60055473ffffffffffffffffffffffffffffffffffffffff163314610775576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610635565b73ffffffffffffffffffffffffffffffffffffffff82166110b7576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b6106ab600083836115c2565b73ffffffffffffffffffffffffffffffffffffffff8216611113576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b6106ab826000836115c2565b60006105d543610ef8565b73ffffffffffffffffffffffffffffffffffffffff82811660008181526009602052604080822080548686167fffffffffffffffffffffffff0000000000000000000000000000000000000000821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610c4181836111bc86611717565b611742565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a60205260408120546105a190611962565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600860205260408120546105a1565b60606105d57f000000000000000000000000000000000000000000000000000000000000000060066119ac565b60606105d57f000000000000000000000000000000000000000000000000000000000000000060076119ac565b805460009080156113325761130683610fcc6001846127cb565b546601000000000000900479ffffffffffffffffffffffffffffffffffffffffffffffffffff16610bb4565b60009392505050565b60006105a1611348610dc0565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b60008060008061139588888888611a57565b9250925092506113a58282611b51565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600860205260409020805460018101909155818114610c41576040517f752d88c000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604401610635565b604080518082019091526000808252602082015273ffffffffffffffffffffffffffffffffffffffff83166000908152600a60205260409020610bb49083611c55565b73ffffffffffffffffffffffffffffffffffffffff84166114ca576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b73ffffffffffffffffffffffffffffffffffffffff831661151a576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610635565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602090815260408083209387168352929052208290558015610d0f578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516115b491815260200190565b60405180910390a350505050565b610c41838383611cdb565b6000816000036115df57506000919050565b600060016115ec84611d7b565b901c6001901b90506001818481611605576116056127f1565b048201901c9050600181848161161d5761161d6127f1565b048201901c90506001818481611635576116356127f1565b048201901c9050600181848161164d5761164d6127f1565b048201901c90506001818481611665576116656127f1565b048201901c9050600181848161167d5761167d6127f1565b048201901c90506001818481611695576116956127f1565b048201901c9050610bb4818285816116af576116af6127f1565b04611e0f565b60005b8183101561170f5760006116cc8484611e25565b60008781526020902090915065ffffffffffff86169082015465ffffffffffff1611156116fb57809250611709565b6117068160016127de565b93505b506116b8565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260408120546105a1565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561177e5750600081115b15610c415773ffffffffffffffffffffffffffffffffffffffff8316156118735773ffffffffffffffffffffffffffffffffffffffff83166000908152600a6020526040812081906117db90610c286117d686611e40565b611ea0565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611868929190918252602082015260400190565b60405180910390a250505b73ffffffffffffffffffffffffffffffffffffffff821615610c415773ffffffffffffffffffffffffffffffffffffffff82166000908152600a6020526040812081906118c690610c1c6117d686611e40565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611953929190918252602082015260400190565b60405180910390a25050505050565b600063ffffffff821115610f44576040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526020600482015260248101839052604401610635565b606060ff83146119c6576119bf83611ed9565b90506105a1565b8180546119d2906126dc565b80601f01602080910402602001604051908101604052809291908181526020018280546119fe906126dc565b8015611a4b5780601f10611a2057610100808354040283529160200191611a4b565b820191906000526020600020905b815481529060010190602001808311611a2e57829003601f168201915b505050505090506105a1565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611a925750600091506003905082611b47565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611ae6573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611b3d57506000925060019150829050611b47565b9250600091508190505b9450945094915050565b6000826003811115611b6557611b65612820565b03611b6e575050565b6001826003811115611b8257611b82612820565b03611bb9576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002826003811115611bcd57611bcd612820565b03611c07576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101829052602401610635565b6003826003811115611c1b57611c1b612820565b036106ab576040517fd78bce0c00000000000000000000000000000000000000000000000000000000815260048101829052602401610635565b6040805180820190915260008082526020820152826000018263ffffffff1681548110611c8457611c8461284f565b60009182526020918290206040805180820190915291015465ffffffffffff811682526601000000000000900479ffffffffffffffffffffffffffffffffffffffffffffffffffff16918101919091529392505050565b611ce6838383611f18565b73ffffffffffffffffffffffffffffffffffffffff8316611d70576000611d0c60025490565b905079ffffffffffffffffffffffffffffffffffffffffffffffffffff80821115611d6d576040517f1cb15d260000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610635565b50505b610c418383836120c3565b600080608083901c15611d9057608092831c92015b604083901c15611da257604092831c92015b602083901c15611db457602092831c92015b601083901c15611dc657601092831c92015b600883901c15611dd857600892831c92015b600483901c15611dea57600492831c92015b600283901c15611dfc57600292831c92015b600183901c156105a15760010192915050565b6000818310611e1e5781610bb4565b5090919050565b6000611e34600284841861287e565b610bb4908484166127de565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff821115610f44576040517f6dfcc65000000000000000000000000000000000000000000000000000000000815260d0600482015260248101839052604401610635565b600080611ecc611eae61088f565b611ec4611eba886112ec565b868863ffffffff16565b879190612160565b915091505b935093915050565b60606000611ee68361216e565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b73ffffffffffffffffffffffffffffffffffffffff8316611f50578060026000828254611f4591906127de565b909155506120029050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015611fd6576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024810182905260448101839052606401610635565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661202b57600280548290039055612057565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516120b691815260200190565b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166120f2576120ef600b610c1c6117d684611e40565b50505b73ffffffffffffffffffffffffffffffffffffffff82166121215761211e600b610c286117d684611e40565b50505b73ffffffffffffffffffffffffffffffffffffffff838116600090815260096020526040808220548584168352912054610c4192918216911683611742565b600080611ecc8585856121af565b600060ff8216601f8111156105a1576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8254600090819080156123295760006121cd87610fcc6001856127cb565b60408051808201909152905465ffffffffffff808216808452660100000000000090920479ffffffffffffffffffffffffffffffffffffffffffffffffffff1660208401529192509087161015612250576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805165ffffffffffff8088169116036122b2578461227388610fcc6001866127cb565b805479ffffffffffffffffffffffffffffffffffffffffffffffffffff9290921666010000000000000265ffffffffffff909216919091179055612319565b6040805180820190915265ffffffffffff808816825279ffffffffffffffffffffffffffffffffffffffffffffffffffff80881660208085019182528b54600181018d5560008d815291909120945191519092166601000000000000029216919091179101555b602001519250839150611ed19050565b50506040805180820190915265ffffffffffff808516825279ffffffffffffffffffffffffffffffffffffffffffffffffffff80851660208085019182528854600181018a5560008a8152918220955192519093166601000000000000029190931617920191909155905081611ed1565b6000815180845260005b818110156123c0576020818501810151868301820152016123a4565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000610bb4602083018461239a565b803573ffffffffffffffffffffffffffffffffffffffff8116811461243557600080fd5b919050565b6000806040838503121561244d57600080fd5b61245683612411565b946020939093013593505050565b60008060006060848603121561247957600080fd5b61248284612411565b925061249060208501612411565b9150604084013590509250925092565b6000602082840312156124b257600080fd5b5035919050565b6000602082840312156124cb57600080fd5b610bb482612411565b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e0602084015261251160e084018a61239a565b8381036040850152612523818a61239a565b6060850189905273ffffffffffffffffffffffffffffffffffffffff8816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b8181101561258457835183529284019291840191600101612568565b50909c9b505050505050505050505050565b803560ff8116811461243557600080fd5b60008060008060008060c087890312156125c057600080fd5b6125c987612411565b955060208701359450604087013593506125e560608801612596565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561261a57600080fd5b61262388612411565b965061263160208901612411565b9550604088013594506060880135935061264d60808901612596565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561267c57600080fd5b61268583612411565b915061269360208401612411565b90509250929050565b600080604083850312156126af57600080fd5b6126b883612411565b9150602083013563ffffffff811681146126d157600080fd5b809150509250929050565b600181811c908216806126f057607f821691505b602082108103612729577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b79ffffffffffffffffffffffffffffffffffffffffffffffffffff8181168382160190808211156127915761279161272f565b5092915050565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff8281168282160390808211156127915761279161272f565b818103818111156105a1576105a161272f565b808201808211156105a1576105a161272f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000826128b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea264697066735822122050cdcbe3f1743ae247979a3f36c5481c3d8ef50788e7863c20d6ee149e4ecaba64736f6c63430008160033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724";

export const OZ_TIMELOCK_BYTECODE = "0x60806040523480156200001157600080fd5b506040516200235038038062002350833981016040819052620000349162000337565b8383838362000045600030620001a5565b506001600160a01b03811615620000655762000063600082620001a5565b505b60005b83518110156200010557620000c07fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1858381518110620000ac57620000ac620003be565b6020026020010151620001a560201b60201c565b50620000fb7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783858381518110620000ac57620000ac620003be565b5060010162000068565b5060005b825181101562000157576200014d7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63848381518110620000ac57620000ac620003be565b5060010162000109565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a15050505050505050620003d4565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166200024a576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620002013390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200024e565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200028257600080fd5b919050565b600082601f8301126200029957600080fd5b815160206001600160401b0380831115620002b857620002b862000254565b8260051b604051601f19603f83011681018181108482111715620002e057620002e062000254565b60405293845260208187018101949081019250878511156200030157600080fd5b6020870191505b848210156200032c576200031c826200026a565b8352918301919083019062000308565b979650505050505050565b600080600080608085870312156200034e57600080fd5b845160208601519094506001600160401b03808211156200036e57600080fd5b6200037c8883890162000287565b945060408701519150808211156200039357600080fd5b50620003a28782880162000287565b925050620003b3606086016200026a565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b611f6c80620003e46000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f146105e5578063e38335e514610605578063f23a6e6114610618578063f27a0c921461065d57600080fd5b8063bc197c8114610553578063c4d252f514610598578063d45c4435146105b857600080fd5b806391d14854116100c657806391d1485414610499578063a217fddf146104ea578063b08e51c0146104ff578063b1c5f4271461053357600080fd5b80638065657f146104255780638f2a0bb0146104455780638f61f4f51461046557600080fd5b80632ab0f5291161015957806336568abe1161013357806336568abe14610398578063584b153e146103b857806364d62353146103d85780637958004c146103f857600080fd5b80632ab0f529146103385780632f2ff15d1461035857806331d507501461037857600080fd5b8063134008d311610195578063134008d31461026057806313bc9f2014610273578063150b7a0214610293578063248a9ca31461030857600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e2366004611555565b610672565b005b3480156101f557600080fd5b506102096102043660046115ca565b610748565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b6101e761026e36600461160c565b610759565b34801561027f57600080fd5b5061020961028e366004611678565b610851565b34801561029f57600080fd5b506102d76102ae36600461179d565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610215565b34801561031457600080fd5b50610252610323366004611678565b60009081526020819052604090206001015490565b34801561034457600080fd5b50610209610353366004611678565b610877565b34801561036457600080fd5b506101e7610373366004611805565b610880565b34801561038457600080fd5b50610209610393366004611678565b6108ab565b3480156103a457600080fd5b506101e76103b3366004611805565b6108d0565b3480156103c457600080fd5b506102096103d3366004611678565b61092e565b3480156103e457600080fd5b506101e76103f3366004611678565b610974565b34801561040457600080fd5b50610418610413366004611678565b610a0d565b6040516102159190611860565b34801561043157600080fd5b5061025261044036600461160c565b610a58565b34801561045157600080fd5b506101e76104603660046118e6565b610a97565b34801561047157600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b3480156104a557600080fd5b506102096104b4366004611805565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b3480156104f657600080fd5b50610252600081565b34801561050b57600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561053f57600080fd5b5061025261054e366004611998565b610c3b565b34801561055f57600080fd5b506102d761056e366004611ac1565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156105a457600080fd5b506101e76105b3366004611678565b610c80565b3480156105c457600080fd5b506102526105d3366004611678565b60009081526001602052604090205490565b3480156105f157600080fd5b506101e7610600366004611805565b610d44565b6101e7610613366004611998565b610d69565b34801561062457600080fd5b506102d7610633366004611b6b565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561066957600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161069c81610f49565b60006106ac898989898989610a58565b90506106b88184610f56565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516106f496959493929190611c19565b60405180910390a3831561073d57807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03878560405161073491815260200190565b60405180910390a25b505050505050505050565b60006107538261101c565b92915050565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff166107d6576107d68133611072565b60006107e6888888888888610a58565b90506107f281856110fc565b6107fe88888888611163565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516108369493929190611c64565b60405180910390a3610847816111e8565b5050505050505050565b600060025b61085f83610a0d565b600381111561087057610870611831565b1492915050565b60006003610856565b60008281526020819052604090206001015461089b81610f49565b6108a58383611214565b50505050565b6000806108b783610a0d565b60038111156108c8576108c8611831565b141592915050565b73ffffffffffffffffffffffffffffffffffffffff8116331461091f576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109298282611310565b505050565b60008061093a83610a0d565b9050600181600381111561095057610950611831565b148061096d5750600281600381111561096b5761096b611831565b145b9392505050565b333081146109cb576040517fe2850c5900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024015b60405180910390fd5b60025460408051918252602082018490527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150600255565b60008181526001602052604081205480600003610a2d5750600092915050565b60018103610a3e5750600392915050565b42811115610a4f5750600192915050565b50600292915050565b6000868686868686604051602001610a7596959493929190611c19565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610ac181610f49565b8887141580610ad05750888514155b15610b18576040517fffb03211000000000000000000000000000000000000000000000000000000008152600481018a905260248101869052604481018890526064016109c2565b6000610b2a8b8b8b8b8b8b8b8b610c3b565b9050610b368184610f56565b60005b8a811015610bec5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610b7657610b76611ca4565b9050602002016020810190610b8b9190611cd3565b8d8d86818110610b9d57610b9d611ca4565b905060200201358c8c87818110610bb657610bb6611ca4565b9050602002810190610bc89190611cee565b8c8b604051610bdc96959493929190611c19565b60405180910390a3600101610b39565b508315610c2e57807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610c2591815260200190565b60405180910390a25b5050505050505050505050565b60008888888888888888604051602001610c5c989796959493929190611e25565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610caa81610f49565b610cb38261092e565b610d085781610cc260026113cb565b610ccc60016113cb565b6040517f5ead8eb500000000000000000000000000000000000000000000000000000000815260048101939093521760248201526044016109c2565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610d5f81610f49565b6108a58383611310565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610de657610de68133611072565b8786141580610df55750878414155b15610e3d576040517fffb032110000000000000000000000000000000000000000000000000000000081526004810189905260248101859052604481018790526064016109c2565b6000610e4f8a8a8a8a8a8a8a8a610c3b565b9050610e5b81856110fc565b60005b89811015610f335760008b8b83818110610e7a57610e7a611ca4565b9050602002016020810190610e8f9190611cd3565b905060008a8a84818110610ea557610ea5611ca4565b9050602002013590503660008a8a86818110610ec357610ec3611ca4565b9050602002810190610ed59190611cee565b91509150610ee584848484611163565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610f1c9493929190611c64565b60405180910390a350505050806001019050610e5e565b50610f3d816111e8565b50505050505050505050565b610f538133611072565b50565b610f5f826108ab565b15610faa5781610f6f60006113cb565b6040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600481019290925260248201526044016109c2565b6000610fb560025490565b905080821015610ffb576040517f5433660900000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016109c2565b6110058242611eec565b600093845260016020526040909320929092555050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806107535750610753826113ee565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166110f8576040517fe2517d3f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602481018390526044016109c2565b5050565b61110582610851565b6111145781610f6f60026113cb565b8015801590611129575061112781610877565b155b156110f8576040517f90a9a618000000000000000000000000000000000000000000000000000000008152600481018290526024016109c2565b6000808573ffffffffffffffffffffffffffffffffffffffff1685858560405161118e929190611f26565b60006040518083038185875af1925050503d80600081146111cb576040519150601f19603f3d011682016040523d82523d6000602084013e6111d0565b606091505b50915091506111df8282611485565b50505050505050565b6111f181610851565b6112005780610f6f60026113cb565b600090815260016020819052604090912055565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff166113085760008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556112a63390565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610753565b506000610753565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff16156113085760008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8616808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610753565b60008160038111156113df576113df611831565b600160ff919091161b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061075357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610753565b60608261149a57611495826114a1565b610753565b5080610753565b8051156114b15780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461150757600080fd5b919050565b60008083601f84011261151e57600080fd5b50813567ffffffffffffffff81111561153657600080fd5b60208301915083602082850101111561154e57600080fd5b9250929050565b600080600080600080600060c0888a03121561157057600080fd5b611579886114e3565b965060208801359550604088013567ffffffffffffffff81111561159c57600080fd5b6115a88a828b0161150c565b989b979a50986060810135976080820135975060a09091013595509350505050565b6000602082840312156115dc57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461096d57600080fd5b60008060008060008060a0878903121561162557600080fd5b61162e876114e3565b955060208701359450604087013567ffffffffffffffff81111561165157600080fd5b61165d89828a0161150c565b979a9699509760608101359660809091013595509350505050565b60006020828403121561168a57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561170757611707611691565b604052919050565b600082601f83011261172057600080fd5b813567ffffffffffffffff81111561173a5761173a611691565b61176b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016116c0565b81815284602083860101111561178057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156117b357600080fd5b6117bc856114e3565b93506117ca602086016114e3565b925060408501359150606085013567ffffffffffffffff8111156117ed57600080fd5b6117f98782880161170f565b91505092959194509250565b6000806040838503121561181857600080fd5b82359150611828602084016114e3565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b602081016004831061189b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60008083601f8401126118b357600080fd5b50813567ffffffffffffffff8111156118cb57600080fd5b6020830191508360208260051b850101111561154e57600080fd5b600080600080600080600080600060c08a8c03121561190457600080fd5b893567ffffffffffffffff8082111561191c57600080fd5b6119288d838e016118a1565b909b50995060208c013591508082111561194157600080fd5b61194d8d838e016118a1565b909950975060408c013591508082111561196657600080fd5b506119738c828d016118a1565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b0312156119b457600080fd5b883567ffffffffffffffff808211156119cc57600080fd5b6119d88c838d016118a1565b909a50985060208b01359150808211156119f157600080fd5b6119fd8c838d016118a1565b909850965060408b0135915080821115611a1657600080fd5b50611a238b828c016118a1565b999c989b509699959896976060870135966080013595509350505050565b600082601f830112611a5257600080fd5b8135602067ffffffffffffffff821115611a6e57611a6e611691565b8160051b611a7d8282016116c0565b9283528481018201928281019087851115611a9757600080fd5b83870192505b84831015611ab657823582529183019190830190611a9d565b979650505050505050565b600080600080600060a08688031215611ad957600080fd5b611ae2866114e3565b9450611af0602087016114e3565b9350604086013567ffffffffffffffff80821115611b0d57600080fd5b611b1989838a01611a41565b94506060880135915080821115611b2f57600080fd5b611b3b89838a01611a41565b93506080880135915080821115611b5157600080fd5b50611b5e8882890161170f565b9150509295509295909350565b600080600080600060a08688031215611b8357600080fd5b611b8c866114e3565b9450611b9a602087016114e3565b93506040860135925060608601359150608086013567ffffffffffffffff811115611bc457600080fd5b611b5e8882890161170f565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260a060408201526000611c4f60a083018688611bd0565b60608301949094525060800152949350505050565b73ffffffffffffffffffffffffffffffffffffffff85168152836020820152606060408201526000611c9a606083018486611bd0565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611ce557600080fd5b61096d826114e3565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d2357600080fd5b83018035915067ffffffffffffffff821115611d3e57600080fd5b60200191503681900382131561154e57600080fd5b6000838385526020808601955060208560051b8301018460005b87811015611e18577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1883603018112611dce57600080fd5b8701848101903567ffffffffffffffff811115611dea57600080fd5b803603821315611df957600080fd5b611e04858284611bd0565b9a86019a9450505090830190600101611d6d565b5090979650505050505050565b60a0808252810188905260008960c08301825b8b811015611e735773ffffffffffffffffffffffffffffffffffffffff611e5e846114e3565b16825260209283019290910190600101611e38565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff891115611eac57600080fd5b8860051b9150818a60208301370182810360209081016040850152611ed49082018789611d53565b60608401959095525050608001529695505050505050565b80820180821115610753577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818382376000910190815291905056fea2646970667358221220c19d6a73f2446729b1ab12d8fe7c9aa692ccb9690c5dab519864a12756eb645864736f6c63430008160033";

export const OZ_GOVERNOR_BYTECODE = "0x6101806040523480156200001257600080fd5b5060405162006a9e38038062006a9e8339810160408190526200003591620007e5565b8581888686868a806200005c6040805180820190915260018152603160f81b602082015290565b6200006982600062000178565b610120526200007a81600162000178565b61014052815160208084019190912060e052815190820120610100524660a0526200010860e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05260036200011f828262000994565b506200012d905083620001b1565b620001388262000217565b6200014381620002be565b5050506001600160a01b0316610160526200015e81620002ff565b506200016a816200039f565b505050505050505062000afa565b60006020835110156200019857620001908362000408565b9050620001ab565b81620001a5848262000994565b5060ff90505b92915050565b6008546040805165ffffffffffff928316815291831660208301527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a16008805465ffffffffffff191665ffffffffffff92909216919091179055565b8063ffffffff16600003620002475760405163f1cfbf0560e01b8152600060048201526024015b60405180910390fd5b6008546040805163ffffffff66010000000000009093048316815291831660208301527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a16008805463ffffffff90921666010000000000000263ffffffff60301b19909216919091179055565b60075460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600755565b6064808211156200032e5760405163243e544560e01b815260048101839052602481018290526044016200023e565b60006200033a6200044b565b90506200035f6200034a62000467565b6200035585620004e9565b600c919062000523565b505060408051828152602081018590527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a1505050565b600d54604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600d80546001600160a01b0319166001600160a01b0392909216919091179055565b600080829050601f8151111562000436578260405163305a27a960e01b81526004016200023e919062000a60565b8051620004438262000a95565b179392505050565b600062000459600c62000540565b6001600160d01b0316905090565b6000620004746101605190565b6001600160a01b03166391ddadf46040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015620004d0575060408051601f3d908101601f19168201909252620004cd9181019062000aba565b60015b620004e457620004df62000590565b905090565b919050565b60006001600160d01b038211156200051f576040516306dfcc6560e41b815260d06004820152602481018390526044016200023e565b5090565b600080620005338585856200059d565b915091505b935093915050565b8054600090801562000586576200056c836200055e60018462000ad8565b600091825260209091200190565b54660100000000000090046001600160d01b031662000589565b60005b9392505050565b6000620004df436200072f565b825460009081908015620006d0576000620005bf876200055e60018562000ad8565b60408051808201909152905465ffffffffffff80821680845266010000000000009092046001600160d01b0316602084015291925090871610156200061757604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff8088169116036200066b57846200063e886200055e60018662000ad8565b80546001600160d01b039290921666010000000000000265ffffffffffff909216919091179055620006bf565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d5560008d815291909120945191519092166601000000000000029216919091179101555b602001519250839150620005389050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a5560008a815291822095519251909316660100000000000002919093161792019190915590508162000538565b600065ffffffffffff8211156200051f576040516306dfcc6560e41b815260306004820152602481018390526044016200023e565b6001600160a01b03811681146200077a57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620007b057818101518382015260200162000796565b50506000910152565b805165ffffffffffff81168114620004e457600080fd5b805163ffffffff81168114620004e457600080fd5b600080600080600080600060e0888a0312156200080157600080fd5b87516200080e8162000764565b6020890151909750620008218162000764565b60408901519096506001600160401b03808211156200083f57600080fd5b818a0191508a601f8301126200085457600080fd5b8151818111156200086957620008696200077d565b604051601f8201601f19908116603f011681019083821181831017156200089457620008946200077d565b816040528281528d6020848701011115620008ae57600080fd5b620008c183602083016020880162000793565b8099505050505050620008d760608901620007b9565b9350620008e760808901620007d0565b925060a0880151915060c0880151905092959891949750929550565b600181811c908216806200091857607f821691505b6020821081036200093957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200098f576000816000526020600020601f850160051c810160208610156200096a5750805b601f850160051c820191505b818110156200098b5782815560010162000976565b5050505b505050565b81516001600160401b03811115620009b057620009b06200077d565b620009c881620009c1845462000903565b846200093f565b602080601f83116001811462000a005760008415620009e75750858301515b600019600386901b1c1916600185901b1785556200098b565b600085815260208120601f198616915b8281101562000a315788860151825594840194600190910190840162000a10565b508582101562000a505787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b602081526000825180602084015262000a8181604085016020870162000793565b601f01601f19169190910160400192915050565b80516020808301519190811015620009395760001960209190910360031b1b16919050565b60006020828403121562000acd57600080fd5b6200058982620007b9565b81810381811115620001ab57634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e05161010051610120516101405161016051615f2262000b7c60003960008181610c210152818161165d01528181611d0701528181612de1015261310301526000612dac01526000612d7f015260006138ea015260006138c20152600061381d01526000613847015260006138710152615f226000f3fe6080604052600436106103595760003560e01c80637ecebe00116101bb578063c28bc2fa116100f7578063e540d01d11610095578063f23a6e611161006f578063f23a6e6114610bd2578063f8ce560a14610bf2578063fc0c546a14610c12578063fe0d94c114610c4557600080fd5b8063e540d01d14610b72578063eb9019d414610b92578063ece40cc114610bb257600080fd5b8063da35c664116100d1578063da35c66414610ac3578063dd4e2ba514610ad8578063ddf0b00914610b1e578063deaaa7cc14610b3e57600080fd5b8063c28bc2fa14610a65578063c59057e414610a78578063d33219b414610a9857600080fd5b8063a7713a7011610164578063ab58fb8e1161013e578063ab58fb8e146109d8578063b58131b014610a10578063bc197c8114610a25578063c01f9e3714610a4557600080fd5b8063a7713a7014610983578063a890c91014610998578063a9a95294146109b857600080fd5b806391ddadf41161019557806391ddadf41461092357806397c3d3341461094f5780639a802a6d1461096357600080fd5b80637ecebe001461089857806384b0196e146108db5780638ff262e31461090357600080fd5b80633e4f49e611610295578063567813881161023357806360c4247f1161020d57806360c4247f1461081857806379051887146108385780637b3c71d3146108585780637d5e81e21461087857600080fd5b806356781388146107b85780635b8d0e0d146107d85780635f398a14146107f857600080fd5b8063452115d61161026f578063452115d6146106e85780634bf5d7e914610708578063544ffc9c1461071d57806354fd4d501461077257600080fd5b80633e4f49e61461064457806340e58ee514610671578063438596321461069157600080fd5b8063160cbed7116103025780632d63f693116102dc5780632d63f6931461057d5780632e82db94146105ca5780632fe3e261146105fb5780633932abb11461062f57600080fd5b8063160cbed71461051a57806316e9eaec1461053a5780632656227d1461056a57600080fd5b806306fdde031161033357806306fdde031461043f578063143489d014610461578063150b7a02146104c957600080fd5b806301ffc9a7146103bb57806302a251a3146103f057806306f3f9e61461041f57600080fd5b366103b65730610367610c58565b73ffffffffffffffffffffffffffffffffffffffff16146103b4576040517fe90a651e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b005b600080fd5b3480156103c757600080fd5b506103db6103d6366004614aa4565b610c7e565b60405190151581526020015b60405180910390f35b3480156103fc57600080fd5b506008546601000000000000900463ffffffff165b6040519081526020016103e7565b34801561042b57600080fd5b506103b461043a366004614ae6565b610d63565b34801561044b57600080fd5b50610454610d77565b6040516103e79190614b6d565b34801561046d57600080fd5b506104a461047c366004614ae6565b60009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016103e7565b3480156104d557600080fd5b506104e96104e4366004614cc4565b610e09565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016103e7565b34801561052657600080fd5b50610411610535366004614ea6565b610e8b565b34801561054657600080fd5b5061055a610555366004614ae6565b610f8c565b6040516103e79493929190615031565b610411610578366004614ea6565b6111bc565b34801561058957600080fd5b50610411610598366004614ae6565b60009081526004602052604090205474010000000000000000000000000000000000000000900465ffffffffffff1690565b3480156105d657600080fd5b506105ea6105e5366004614ae6565b6113a8565b6040516103e795949392919061507c565b34801561060757600080fd5b506104117f3e83946653575f9a39005e1545185629e92736b7528ab20ca3816f315424a81181565b34801561063b57600080fd5b506104116113f8565b34801561065057600080fd5b5061066461065f366004614ae6565b61140b565b6040516103e79190615138565b34801561067d57600080fd5b506103b461068c366004614ae6565b611416565b34801561069d57600080fd5b506103db6106ac366004615146565b600082815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845260030190915290205460ff1692915050565b3480156106f457600080fd5b50610411610703366004614ea6565b6115c4565b34801561071457600080fd5b50610454611659565b34801561072957600080fd5b50610757610738366004614ae6565b6000908152600960205260409020805460018201546002909201549092565b604080519384526020840192909252908201526060016103e7565b34801561077e57600080fd5b5060408051808201909152600181527f31000000000000000000000000000000000000000000000000000000000000006020820152610454565b3480156107c457600080fd5b506104116107d3366004615187565b611746565b3480156107e457600080fd5b506104116107f33660046151fc565b61176f565b34801561080457600080fd5b506104116108133660046152b7565b61190e565b34801561082457600080fd5b50610411610833366004614ae6565b611963565b34801561084457600080fd5b506103b461085336600461534f565b611a2d565b34801561086457600080fd5b5061041161087336600461536c565b611a3e565b34801561088457600080fd5b506104116108933660046153c6565b611a86565b3480156108a457600080fd5b506104116108b336600461547b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b3480156108e757600080fd5b506108f0611b8f565b6040516103e79796959493929190615498565b34801561090f57600080fd5b5061041161091e36600461552f565b611bf1565b34801561092f57600080fd5b50610938611d03565b60405165ffffffffffff90911681526020016103e7565b34801561095b57600080fd5b506064610411565b34801561096f57600080fd5b5061041161097e366004615581565b611db6565b34801561098f57600080fd5b50610411611dc3565b3480156109a457600080fd5b506103b46109b336600461547b565b611df0565b3480156109c457600080fd5b506103db6109d3366004614ae6565b611e01565b3480156109e457600080fd5b506104116109f3366004614ae6565b60009081526004602052604090206001015465ffffffffffff1690565b348015610a1c57600080fd5b50610411611e0a565b348015610a3157600080fd5b506104e9610a403660046155da565b611e15565b348015610a5157600080fd5b50610411610a60366004614ae6565b611e98565b6103b4610a7336600461566e565b611f03565b348015610a8457600080fd5b50610411610a93366004614ea6565b611f90565b348015610aa457600080fd5b50600d5473ffffffffffffffffffffffffffffffffffffffff166104a4565b348015610acf57600080fd5b50600a54610411565b348015610ae457600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e90820152610454565b348015610b2a57600080fd5b506103b4610b39366004614ae6565b611fe8565b348015610b4a57600080fd5b506104117ff2aad550cf55f045cb27e9c559f9889fdfb6e6cdaa032301d6ea397784ae51d781565b348015610b7e57600080fd5b506103b4610b8d3660046156b2565b612191565b348015610b9e57600080fd5b50610411610bad3660046156d8565b6121a2565b348015610bbe57600080fd5b506103b4610bcd366004614ae6565b6121ca565b348015610bde57600080fd5b506104e9610bed366004615704565b6121db565b348015610bfe57600080fd5b50610411610c0d366004614ae6565b61225e565b348015610c1e57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006104a4565b6103b4610c53366004614ae6565b612269565b6000610c79600d5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f65455a86000000000000000000000000000000000000000000000000000000001480610d1157507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b80610d5d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b610d6b612412565b610d74816124bf565b50565b606060038054610d869061576d565b80601f0160208091040260200160405190810160405280929190818152602001828054610db29061576d565b8015610dff5780601f10610dd457610100808354040283529160200191610dff565b820191906000526020600020905b815481529060010190602001808311610de257829003601f168201915b5050505050905090565b600030610e14610c58565b73ffffffffffffffffffffffffffffffffffffffff1614610e61576040517fe90a651e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b600080610e9a86868686611f90565b9050610eaf81610eaa600461256e565b612591565b506000610ebf82888888886125e9565b905065ffffffffffff811615610f505760008281526004602090815260409182902060010180547fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000001665ffffffffffff85169081179091558251858152918201527f9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892910160405180910390a1610f82565b6040517f90884a4600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5095945050505050565b6000818152600b602090815260408083208151815460a094810282018501909352608081018381526060958695869591948594939092849284919084018282801561100d57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610fe2575b505050505081526020016001820180548060200260200160405190810160405280929190818152602001828054801561106557602002820191906000526020600020905b815481526020019060010190808311611051575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020016000905b8282101561113f5783829060005260206000200180546110b29061576d565b80601f01602080910402602001604051908101604052809291908181526020018280546110de9061576d565b801561112b5780601f106111005761010080835404028352916020019161112b565b820191906000526020600020905b81548152906001019060200180831161110e57829003601f168201915b505050505081526020019060010190611093565b505050508152602001600382015481525050905080606001516000801b0361119b576040517f6ad06075000000000000000000000000000000000000000000000000000000008152600481018790526024015b60405180910390fd5b80516020820151604083015160609093015191989097509195509350915050565b6000806111cb86868686611f90565b90506111eb816111db600561256e565b6111e5600461256e565b17612591565b50600081815260046020526040902080547fff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790553061124a610c58565b73ffffffffffffffffffffffffffffffffffffffff16146112fb5760005b86518110156112f9573073ffffffffffffffffffffffffffffffffffffffff1687828151811061129a5761129a6157c0565b602002602001015173ffffffffffffffffffffffffffffffffffffffff16036112f1576112f18582815181106112d2576112d26157c0565b60200260200101518051906020012060056125f890919063ffffffff16565b600101611268565b505b61130881878787876126ae565b30611311610c58565b73ffffffffffffffffffffffffffffffffffffffff161415801561136057506005546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009092041614155b1561136b5760006005555b6040518181527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f906020015b60405180910390a195945050505050565b60006060806060600080600a87815481106113c5576113c56157c0565b906000526020600020015490506000806000806113e185610f8c565b979e929d50909b5099509497509395505050505050565b6000610c7960085465ffffffffffff1690565b6000610d5d826126c2565b6000818152600b6020908152604091829020805483518184028101840190945280845290926115bf929091849183018282801561148957602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161145e575b5050505050826001018054806020026020016040519081016040528092919081815260200182805480156114dc57602002820191906000526020600020905b8154815260200190600101908083116114c8575b505050505083600201805480602002602001604051908101604052809291908181526020016000905b828210156115b15783829060005260206000200180546115249061576d565b80601f01602080910402602001604051908101604052809291908181526020018280546115509061576d565b801561159d5780601f106115725761010080835404028352916020019161159d565b820191906000526020600020905b81548152906001019060200180831161158057829003601f168201915b505050505081526020019060010190611505565b5050505084600301546115c4565b505050565b6000806115d386868686611f90565b90506115e381610eaa600061256e565b5060008181526004602052604090205473ffffffffffffffffffffffffffffffffffffffff163314611643576040517f233d98e3000000000000000000000000000000000000000000000000000000008152336004820152602401611192565b61164f8686868661284d565b9695505050505050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634bf5d7e96040518163ffffffff1660e01b8152600401600060405180830381865afa92505050801561170557506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261170291908101906157ef565b60015b611741575060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b919050565b60008033905061176784828560405180602001604052806000815250612864565b949350505050565b60008061186c876118667f3e83946653575f9a39005e1545185629e92736b7528ab20ca3816f315424a8118c8c8c6117d18e73ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080546001810190915590565b8d8d6040516117e192919061585d565b60405180910390208c8051906020012060405160200161184b9796959493929190968752602087019590955260ff93909316604086015273ffffffffffffffffffffffffffffffffffffffff919091166060850152608084015260a083015260c082015260e00190565b60405160208183030381529060405280519060200120612887565b856128cf565b9050806118bd576040517f94ab6c0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88166004820152602401611192565b61190189888a89898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b9250612941915050565b9998505050505050505050565b60008033905061195887828888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250612941915050565b979650505050505050565b600c8054600091829061197760018461589c565b81548110611987576119876157c0565b6000918252602090912001805490915065ffffffffffff8116906601000000000000900479ffffffffffffffffffffffffffffffffffffffffffffffffffff168582116119f35779ffffffffffffffffffffffffffffffffffffffffffffffffffff1695945050505050565b611a076119ff87612a5e565b600c90612aae565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169695505050505050565b611a35612412565b610d7481612b79565b60008033905061164f86828787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061286492505050565b600033611a938184612bf8565b611ae1576040517fd9b3955700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401611192565b6000611b08826001611af1611d03565b611afb91906158af565b65ffffffffffff166121a2565b90506000611b14611e0a565b905080821015611b76576040517fc242ee1600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024810183905260448101829052606401611192565b611b838888888887612d69565b98975050505050505050565b600060608060008060006060611ba3612d78565b611bab612da5565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b600080611c97846118667ff2aad550cf55f045cb27e9c559f9889fdfb6e6cdaa032301d6ea397784ae51d7898989611c538b73ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080546001810190915590565b60408051602081019690965285019390935260ff909116606084015273ffffffffffffffffffffffffffffffffffffffff16608083015260a082015260c00161184b565b905080611ce8576040517f94ab6c0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401611192565b61164f86858760405180602001604052806000815250612864565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166391ddadf46040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611daa575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611da7918101906158d5565b60015b61174157610c79612dd2565b6000611767848484612ddd565b6000611dcf600c612e99565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16905090565b611df8612412565b610d7481612ee8565b60006001610d5d565b6000610c7960075490565b600030611e20610c58565b73ffffffffffffffffffffffffffffffffffffffff1614611e6d576040517fe90a651e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b600081815260046020526040812054611ef5907a010000000000000000000000000000000000000000000000000000810463ffffffff169074010000000000000000000000000000000000000000900465ffffffffffff166158f2565b65ffffffffffff1692915050565b611f0b612412565b6000808573ffffffffffffffffffffffffffffffffffffffff16858585604051611f3692919061585d565b60006040518083038185875af1925050503d8060008114611f73576040519150601f19603f3d011682016040523d82523d6000602084013e611f78565b606091505b5091509150611f878282612f83565b50505050505050565b600084848484604051602001611fa99493929190615031565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012095945050505050565b6000818152600b6020908152604091829020805483518184028101840190945280845290926115bf929091849183018282801561205b57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311612030575b5050505050826001018054806020026020016040519081016040528092919081815260200182805480156120ae57602002820191906000526020600020905b81548152602001906001019080831161209a575b505050505083600201805480602002602001604051908101604052809291908181526020016000905b828210156121835783829060005260206000200180546120f69061576d565b80601f01602080910402602001604051908101604052809291908181526020018280546121229061576d565b801561216f5780601f106121445761010080835404028352916020019161216f565b820191906000526020600020905b81548152906001019060200180831161215257829003601f168201915b5050505050815260200190600101906120d7565b505050508460030154610e8b565b612199612412565b610d7481612f9f565b60006121c383836121be60408051602081019091526000815290565b612ddd565b9392505050565b6121d2612412565b610d7481613071565b6000306121e6610c58565b73ffffffffffffffffffffffffffffffffffffffff1614612233576040517fe90a651e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b6000610d5d826130b2565b6000818152600b6020908152604091829020805483518184028101840190945280845290926115bf92909184918301828280156122dc57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116122b1575b50505050508260010180548060200260200160405190810160405280929190818152602001828054801561232f57602002820191906000526020600020905b81548152602001906001019080831161231b575b505050505083600201805480602002602001604051908101604052809291908181526020016000905b828210156124045783829060005260206000200180546123779061576d565b80601f01602080910402602001604051908101604052809291908181526020018280546123a39061576d565b80156123f05780601f106123c5576101008083540402835291602001916123f0565b820191906000526020600020905b8154815290600101906020018083116123d357829003601f168201915b505050505081526020019060010190612358565b5050505084600301546111bc565b3361241b610c58565b73ffffffffffffffffffffffffffffffffffffffff161461246a576040517f47096e47000000000000000000000000000000000000000000000000000000008152336004820152602401611192565b30612473610c58565b73ffffffffffffffffffffffffffffffffffffffff16146124bd57600080366040516124a092919061585d565b604051809103902090505b806124b66005613182565b036124ab57505b565b606480821115612505576040517f243e54450000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401611192565b600061250f611dc3565b905061252e61251c611d03565b61252585613247565b600c91906132a7565b505060408051828152602081018590527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a1505050565b6000816007811115612582576125826150ce565b600160ff919091161b92915050565b60008061259d8461140b565b90506000836125ab8361256e565b16036121c3578381846040517f31b75e4d00000000000000000000000000000000000000000000000000000000815260040161119293929190615911565b600061164f86868686866132c2565b81546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169181166001830190911603612662576040517f8acb5f2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff808216600090815260018086016020526040909120939093558354919092018216700100000000000000000000000000000000029116179055565b6126bb85858585856134da565b5050505050565b6000806126ce83613590565b905060058160078111156126e4576126e46150ce565b146126ef5792915050565b6000838152600e60205260409081902054600d5491517f584b153e00000000000000000000000000000000000000000000000000000000815260048101829052909173ffffffffffffffffffffffffffffffffffffffff169063584b153e90602401602060405180830381865afa15801561276e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127929190615933565b156127a1575060059392505050565b600d546040517f2ab0f5290000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632ab0f52990602401602060405180830381865afa158015612810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128349190615933565b15612843575060079392505050565b5060029392505050565b600061285b8585858561373e565b95945050505050565b600061285b8585858561288260408051602081019091526000815290565b612941565b6000610d5d612894613803565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b60008060006128de858561393b565b50909250905060008160038111156128f8576128f86150ce565b14801561293057508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b8061164f575061164f868686613988565b600061295186610eaa600161256e565b5060008681526004602052604081205461298d90879074010000000000000000000000000000000000000000900465ffffffffffff1685612ddd565b905061299c8787878487613ad5565b82516000036129fe578573ffffffffffffffffffffffffffffffffffffffff167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4888784886040516129f19493929190615955565b60405180910390a261164f565b8573ffffffffffffffffffffffffffffffffffffffff167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128887848888604051612a4c95949392919061597d565b60405180910390a29695505050505050565b600065ffffffffffff821115612aaa576040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526030600482015260248101839052604401611192565b5090565b815460009081816005811115612b0d576000612ac984613c89565b612ad3908561589c565b60008881526020902090915081015465ffffffffffff9081169087161015612afd57809150612b0b565b612b088160016159b7565b92505b505b6000612b1b87878585613d71565b90508015612b6c57612b4087612b3260018461589c565b600091825260209091200190565b546601000000000000900479ffffffffffffffffffffffffffffffffffffffffffffffffffff16611958565b6000979650505050505050565b6008546040805165ffffffffffff928316815291831660208301527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a1600880547fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000001665ffffffffffff92909216919091179055565b80516000906034811015612c10576001915050610d5d565b8281017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec01517fffffffffffffffffffffffff000000000000000000000000000000000000000081167f2370726f706f7365723d3078000000000000000000000000000000000000000014612c8a57600192505050610d5d565b600080612c9860288561589c565b90505b83811015612d2e57600080612ce7888481518110612cbb57612cbb6157c0565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016613dd3565b9150915081612cff5760019650505050505050610d5d565b8060ff1660048573ffffffffffffffffffffffffffffffffffffffff16901b1793505050806001019050612c9b565b508573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614935050505092915050565b600061164f8686868686613ebf565b6060610c797f00000000000000000000000000000000000000000000000000000000000000006000613f9a565b6060610c797f00000000000000000000000000000000000000000000000000000000000000006001613f9a565b6000610c7943612a5e565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f3a46b1a800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018690529190911690633a46b1a890604401602060405180830381865afa158015612e75573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176791906159ca565b80546000908015612edf57612eb383612b3260018461589c565b546601000000000000900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166121c3565b60009392505050565b600d546040805173ffffffffffffffffffffffffffffffffffffffff928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600d80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b606082612f9857612f9382614045565b610d5d565b5080610d5d565b8063ffffffff16600003612fe2576040517ff1cfbf0500000000000000000000000000000000000000000000000000000000815260006004820152602401611192565b6008546040805163ffffffff66010000000000009093048316815291831660208301527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a16008805463ffffffff9092166601000000000000027fffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffff909216919091179055565b60075460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600755565b600060646130bf83611963565b6040517f8e539e8c0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638e539e8c90602401602060405180830381865afa15801561314a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061316e91906159ca565b61317891906159e3565b610d5d9190615a29565b80546000906fffffffffffffffffffffffffffffffff8082169170010000000000000000000000000000000090041681036131e9576040517f75e52f4f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff8181166000908152600185810160205260408220805492905585547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169301909116919091179092555090565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff821115612aaa576040517f6dfcc65000000000000000000000000000000000000000000000000000000000815260d0600482015260248101839052604401611192565b6000806132b5858585614087565b915091505b935093915050565b600080600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f27a0c926040518163ffffffff1660e01b8152600401602060405180830381865afa158015613332573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061335691906159ca565b905060003060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000168418600d546040517fb1c5f42700000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff169063b1c5f427906133e2908a908a908a906000908890600401615a64565b602060405180830381865afa1580156133ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061342391906159ca565b6000898152600e602052604080822092909255600d5491517f8f2a0bb000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90921691638f2a0bb091613494918b918b918b919088908a90600401615ab2565b600060405180830381600087803b1580156134ae57600080fd5b505af11580156134c2573d6000803e3d6000fd5b50505050611b8382426134d591906159b7565b612a5e565b600d5473ffffffffffffffffffffffffffffffffffffffff1663e38335e53486868660003060601b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001688186040518763ffffffff1660e01b8152600401613546959493929190615a64565b6000604051808303818588803b15801561355f57600080fd5b505af1158015613573573d6000803e3d6000fd5b50505060009687525050600e602052505060408320929092555050565b6000818152600460205260408120805460ff7e0100000000000000000000000000000000000000000000000000000000000082048116917f010000000000000000000000000000000000000000000000000000000000000090041681156135fc57506007949350505050565b801561360d57506002949350505050565b60008581526004602052604081205474010000000000000000000000000000000000000000900465ffffffffffff1690508060000361367b576040517f6ad0607500000000000000000000000000000000000000000000000000000000815260048101879052602401611192565b6000613685611d03565b65ffffffffffff1690508082106136a3575060009695505050505050565b60006136ae88611e98565b90508181106136c557506001979650505050505050565b6136ce88614272565b15806136ee57506000888152600960205260409020805460019091015411155b1561370157506003979650505050505050565b60008881526004602052604090206001015465ffffffffffff1660000361373057506004979650505050505050565b506005979650505050505050565b60008061374d868686866142d5565b6000818152600e60205260409020549091508015610f8257600d546040517fc4d252f50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff9091169063c4d252f590602401600060405180830381600087803b1580156137d157600080fd5b505af11580156137e5573d6000803e3d6000fd5b5050506000838152600e602052604081205550509050949350505050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801561386957507f000000000000000000000000000000000000000000000000000000000000000046145b1561389357507f000000000000000000000000000000000000000000000000000000000000000090565b610c79604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b600080600083516041036139755760208401516040850151606086015160001a613967888285856143ba565b955095509550505050613981565b50508151600091506002905b9250925092565b60008060008573ffffffffffffffffffffffffffffffffffffffff1685856040516024016139b7929190615b0a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1626ba7e0000000000000000000000000000000000000000000000000000000017905251613a389190615b23565b600060405180830381855afa9150503d8060008114613a73576040519150601f19603f3d011682016040523d82523d6000602084013e613a78565b606091505b5091509150818015613a8c57506020815110155b801561164f575080517f1626ba7e0000000000000000000000000000000000000000000000000000000090613aca90830160209081019084016159ca565b149695505050505050565b600085815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff88168452600381019092529091205460ff1615613b5c576040517f71c6af4900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86166004820152602401611192565b73ffffffffffffffffffffffffffffffffffffffff85166000908152600382016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560ff8416613bd35782816000016000828254613bc891906159b7565b90915550613c819050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff851601613c115782816001016000828254613bc891906159b7565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe60ff851601613c4f5782816002016000828254613bc891906159b7565b6040517f06b337c200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600081600003613c9b57506000919050565b60006001613ca8846144b4565b901c6001901b90506001818481613cc157613cc16159fa565b048201901c90506001818481613cd957613cd96159fa565b048201901c90506001818481613cf157613cf16159fa565b048201901c90506001818481613d0957613d096159fa565b048201901c90506001818481613d2157613d216159fa565b048201901c90506001818481613d3957613d396159fa565b048201901c90506001818481613d5157613d516159fa565b048201901c90506121c381828581613d6b57613d6b6159fa565b04614548565b60005b81831015613dcb576000613d88848461455e565b60008781526020902090915065ffffffffffff86169082015465ffffffffffff161115613db757809250613dc5565b613dc28160016159b7565b93505b50613d74565b509392505050565b60008060f883901c602f81118015613dee5750603a8160ff16105b15613e21576001947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd09091019350915050565b8060ff166040108015613e37575060478160ff16105b15613e6a576001947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc99091019350915050565b8060ff166060108015613e80575060678160ff16105b15613eb3576001947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa99091019350915050565b50600093849350915050565b600080613ecf8787878787614579565b600a805460018101825560009182527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a801829055604080516080810182528a815260208181018b90528183018a90528851898201206060830152848452600b8152919092208251805194955092939092613f4d928492910190614925565b506020828101518051613f6692600185019201906149ab565b5060408201518051613f829160028401916020909101906149e6565b50606091909101516003909101559695505050505050565b606060ff8314613fb457613fad8361485b565b9050610d5d565b818054613fc09061576d565b80601f0160208091040260200160405190810160405280929190818152602001828054613fec9061576d565b80156140395780601f1061400e57610100808354040283529160200191614039565b820191906000526020600020905b81548152906001019060200180831161401c57829003601f168201915b50505050509050610d5d565b8051156140555780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8254600090819080156142015760006140a587612b3260018561589c565b60408051808201909152905465ffffffffffff808216808452660100000000000090920479ffffffffffffffffffffffffffffffffffffffffffffffffffff1660208401529192509087161015614128576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805165ffffffffffff80881691160361418a578461414b88612b3260018661589c565b805479ffffffffffffffffffffffffffffffffffffffffffffffffffff9290921666010000000000000265ffffffffffff9092169190911790556141f1565b6040805180820190915265ffffffffffff808816825279ffffffffffffffffffffffffffffffffffffffffffffffffffff80881660208085019182528b54600181018d5560008d815291909120945191519092166601000000000000029216919091179101555b6020015192508391506132ba9050565b50506040805180820190915265ffffffffffff808516825279ffffffffffffffffffffffffffffffffffffffffffffffffffff80851660208085019182528854600181018a5560008a81529182209551925190931666010000000000000291909316179201919091559050816132ba565b60008181526009602052604081206002810154600182015461429491906159b7565b6000848152600460205260409020546142cc9074010000000000000000000000000000000000000000900465ffffffffffff1661225e565b11159392505050565b6000806142e486868686611f90565b9050614332816142f4600761256e565b6142fe600661256e565b614308600261256e565b6001614315600782615b3f565b614320906002615c78565b61432a919061589c565b181818612591565b506000818152600460205260409081902080547effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0100000000000000000000000000000000000000000000000000000000000000179055517f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c906113979083815260200190565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156143f557506000915060039050826144aa565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015614449573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166144a0575060009250600191508290506144aa565b9250600091508190505b9450945094915050565b600080608083901c156144c957608092831c92015b604083901c156144db57604092831c92015b602083901c156144ed57602092831c92015b601083901c156144ff57601092831c92015b600883901c1561451157600892831c92015b600483901c1561452357600492831c92015b600283901c1561453557600292831c92015b600183901c15610d5d5760010192915050565b600081831061455757816121c3565b5090919050565b600061456d6002848418615a29565b6121c3908484166159b7565b600061458e8686868680519060200120611f90565b9050845186511415806145a357508351865114155b806145ad57508551155b156145fb578551845186516040517f447b05d0000000000000000000000000000000000000000000000000000000008152600481019390935260248301919091526044820152606401611192565b60008181526004602052604090205474010000000000000000000000000000000000000000900465ffffffffffff161561467057806146398261140b565b6040517f31b75e4d000000000000000000000000000000000000000000000000000000008152611192929190600090600401615911565b600061467a6113f8565b614682611d03565b65ffffffffffff1661469491906159b7565b905060006146b260085463ffffffff66010000000000009091041690565b600084815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff871617815590915061470a83612a5e565b815465ffffffffffff9190911674010000000000000000000000000000000000000000027fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff90911617815561475e8261489a565b815463ffffffff919091167a010000000000000000000000000000000000000000000000000000027fffff00000000ffffffffffffffffffffffffffffffffffffffffffffffffffff90911617815588517f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e090859087908c908c9067ffffffffffffffff8111156147f1576147f1614ba2565b60405190808252806020026020018201604052801561482457816020015b606081526020019060019003908161480f5790505b508c896148318a826159b7565b8e60405161484799989796959493929190615c87565b60405180910390a150505095945050505050565b60606000614868836148e4565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600063ffffffff821115612aaa576040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526020600482015260248101839052604401611192565b600060ff8216601f811115610d5d576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82805482825590600052602060002090810192821561499f579160200282015b8281111561499f57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190614945565b50612aaa929150614a38565b82805482825590600052602060002090810192821561499f579160200282015b8281111561499f5782518255916020019190600101906149cb565b828054828255906000526020600020908101928215614a2c579160200282015b82811115614a2c5782518290614a1c9082615dd2565b5091602001919060010190614a06565b50612aaa929150614a4d565b5b80821115612aaa5760008155600101614a39565b80821115612aaa576000614a618282614a6a565b50600101614a4d565b508054614a769061576d565b6000825580601f10614a86575050565b601f016020900490600052602060002090810190610d749190614a38565b600060208284031215614ab657600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146121c357600080fd5b600060208284031215614af857600080fd5b5035919050565b60005b83811015614b1a578181015183820152602001614b02565b50506000910152565b60008151808452614b3b816020860160208601614aff565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006121c36020830184614b23565b73ffffffffffffffffffffffffffffffffffffffff81168114610d7457600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715614c1857614c18614ba2565b604052919050565b600067ffffffffffffffff821115614c3a57614c3a614ba2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000614c79614c7484614c20565b614bd1565b9050828152838383011115614c8d57600080fd5b828260208301376000602084830101529392505050565b600082601f830112614cb557600080fd5b6121c383833560208501614c66565b60008060008060808587031215614cda57600080fd5b8435614ce581614b80565b93506020850135614cf581614b80565b925060408501359150606085013567ffffffffffffffff811115614d1857600080fd5b614d2487828801614ca4565b91505092959194509250565b600067ffffffffffffffff821115614d4a57614d4a614ba2565b5060051b60200190565b600082601f830112614d6557600080fd5b81356020614d75614c7483614d30565b8083825260208201915060208460051b870101935086841115614d9757600080fd5b602086015b84811015614dbc578035614daf81614b80565b8352918301918301614d9c565b509695505050505050565b600082601f830112614dd857600080fd5b81356020614de8614c7483614d30565b8083825260208201915060208460051b870101935086841115614e0a57600080fd5b602086015b84811015614dbc5780358352918301918301614e0f565b600082601f830112614e3757600080fd5b81356020614e47614c7483614d30565b82815260059290921b84018101918181019086841115614e6657600080fd5b8286015b84811015614dbc57803567ffffffffffffffff811115614e8a5760008081fd5b614e988986838b0101614ca4565b845250918301918301614e6a565b60008060008060808587031215614ebc57600080fd5b843567ffffffffffffffff80821115614ed457600080fd5b614ee088838901614d54565b95506020870135915080821115614ef657600080fd5b614f0288838901614dc7565b94506040870135915080821115614f1857600080fd5b50614f2587828801614e26565b949793965093946060013593505050565b60008151808452602080850194506020840160005b83811015614f7d57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101614f4b565b509495945050505050565b60008151808452602080850194506020840160005b83811015614f7d57815187529582019590820190600101614f9d565b60008282518085526020808601955060208260051b8401016020860160005b84811015615024577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018952615012838351614b23565b98840198925090830190600101614fd8565b5090979650505050505050565b6080815260006150446080830187614f36565b82810360208401526150568187614f88565b9050828103604084015261506a8186614fb9565b91505082606083015295945050505050565b85815260a06020820152600061509560a0830187614f36565b82810360408401526150a78187614f88565b905082810360608401526150bb8186614fb9565b9150508260808301529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60088110615134577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b60208101610d5d82846150fd565b6000806040838503121561515957600080fd5b82359150602083013561516b81614b80565b809150509250929050565b803560ff8116811461174157600080fd5b6000806040838503121561519a57600080fd5b823591506151aa60208401615176565b90509250929050565b60008083601f8401126151c557600080fd5b50813567ffffffffffffffff8111156151dd57600080fd5b6020830191508360208285010111156151f557600080fd5b9250929050565b600080600080600080600060c0888a03121561521757600080fd5b8735965061522760208901615176565b9550604088013561523781614b80565b9450606088013567ffffffffffffffff8082111561525457600080fd5b6152608b838c016151b3565b909650945060808a013591508082111561527957600080fd5b6152858b838c01614ca4565b935060a08a013591508082111561529b57600080fd5b506152a88a828b01614ca4565b91505092959891949750929550565b6000806000806000608086880312156152cf57600080fd5b853594506152df60208701615176565b9350604086013567ffffffffffffffff808211156152fc57600080fd5b61530889838a016151b3565b9095509350606088013591508082111561532157600080fd5b5061532e88828901614ca4565b9150509295509295909350565b65ffffffffffff81168114610d7457600080fd5b60006020828403121561536157600080fd5b81356121c38161533b565b6000806000806060858703121561538257600080fd5b8435935061539260208601615176565b9250604085013567ffffffffffffffff8111156153ae57600080fd5b6153ba878288016151b3565b95989497509550505050565b600080600080608085870312156153dc57600080fd5b843567ffffffffffffffff808211156153f457600080fd5b61540088838901614d54565b9550602087013591508082111561541657600080fd5b61542288838901614dc7565b9450604087013591508082111561543857600080fd5b61544488838901614e26565b9350606087013591508082111561545a57600080fd5b508501601f8101871361546c57600080fd5b614d2487823560208401614c66565b60006020828403121561548d57600080fd5b81356121c381614b80565b7fff000000000000000000000000000000000000000000000000000000000000008816815260e0602082015260006154d360e0830189614b23565b82810360408401526154e58189614b23565b905086606084015273ffffffffffffffffffffffffffffffffffffffff861660808401528460a084015282810360c08401526155218185614f88565b9a9950505050505050505050565b6000806000806080858703121561554557600080fd5b8435935061555560208601615176565b9250604085013561556581614b80565b9150606085013567ffffffffffffffff811115614d1857600080fd5b60008060006060848603121561559657600080fd5b83356155a181614b80565b925060208401359150604084013567ffffffffffffffff8111156155c457600080fd5b6155d086828701614ca4565b9150509250925092565b600080600080600060a086880312156155f257600080fd5b85356155fd81614b80565b9450602086013561560d81614b80565b9350604086013567ffffffffffffffff8082111561562a57600080fd5b61563689838a01614dc7565b9450606088013591508082111561564c57600080fd5b61565889838a01614dc7565b9350608088013591508082111561532157600080fd5b6000806000806060858703121561568457600080fd5b843561568f81614b80565b935060208501359250604085013567ffffffffffffffff8111156153ae57600080fd5b6000602082840312156156c457600080fd5b813563ffffffff811681146121c357600080fd5b600080604083850312156156eb57600080fd5b82356156f681614b80565b946020939093013593505050565b600080600080600060a0868803121561571c57600080fd5b853561572781614b80565b9450602086013561573781614b80565b93506040860135925060608601359150608086013567ffffffffffffffff81111561576157600080fd5b61532e88828901614ca4565b600181811c9082168061578157607f821691505b6020821081036157ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561580157600080fd5b815167ffffffffffffffff81111561581857600080fd5b8201601f8101841361582957600080fd5b8051615837614c7482614c20565b81815285602083850101111561584c57600080fd5b61285b826020830160208601614aff565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d5d57610d5d61586d565b65ffffffffffff8281168282160390808211156158ce576158ce61586d565b5092915050565b6000602082840312156158e757600080fd5b81516121c38161533b565b65ffffffffffff8181168382160190808211156158ce576158ce61586d565b8381526060810161592560208301856150fd565b826040830152949350505050565b60006020828403121561594557600080fd5b815180151581146121c357600080fd5b84815260ff8416602082015282604082015260806060820152600061164f6080830184614b23565b85815260ff8516602082015283604082015260a0606082015260006159a560a0830185614b23565b8281036080840152611b838185614b23565b80820180821115610d5d57610d5d61586d565b6000602082840312156159dc57600080fd5b5051919050565b8082028115828204841417610d5d57610d5d61586d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082615a5f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60a081526000615a7760a0830188614f36565b8281036020840152615a898188614f88565b90508281036040840152615a9d8187614fb9565b60608401959095525050608001529392505050565b60c081526000615ac560c0830189614f36565b8281036020840152615ad78189614f88565b90508281036040840152615aeb8188614fb9565b60608401969096525050608081019290925260a0909101529392505050565b8281526040602082015260006117676040830184614b23565b60008251615b35818460208701614aff565b9190910192915050565b60ff8181168382160190811115610d5d57610d5d61586d565b600181815b80851115615bb157817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115615b9757615b9761586d565b80851615615ba457918102915b93841c9390800290615b5d565b509250929050565b600082615bc857506001610d5d565b81615bd557506000610d5d565b8160018114615beb5760028114615bf557615c11565b6001915050610d5d565b60ff841115615c0657615c0661586d565b50506001821b610d5d565b5060208310610133831016604e8410600b8410161715615c34575081810a610d5d565b615c3e8383615b58565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115615c7057615c7061586d565b029392505050565b60006121c360ff841683615bb9565b60006101208b8352602073ffffffffffffffffffffffffffffffffffffffff8c1681850152816040850152615cbe8285018c614f36565b91508382036060850152615cd2828b614f88565b915083820360808501528189518084528284019150828160051b850101838c0160005b83811015615d41577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0878403018552615d2f838351614b23565b94860194925090850190600101615cf5565b505086810360a0880152615d55818c614fb9565b9450505050508560c08401528460e0840152828103610100840152615d7a8185614b23565b9c9b505050505050505050505050565b601f8211156115bf576000816000526020600020601f850160051c81016020861015615db35750805b601f850160051c820191505b81811015613c8157828155600101615dbf565b815167ffffffffffffffff811115615dec57615dec614ba2565b615e0081615dfa845461576d565b84615d8a565b602080601f831160018114615e535760008415615e1d5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555613c81565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015615ea057888601518255948401946001909101908401615e81565b5085821015615edc57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220575e5ee7716bfc2115f1a5dc09f9418748f8f688e1b8dd1a004f7ca23c9f77a464736f6c63430008160033";

export const STEWARD_SYSTEM_BYTECODE = "0x60806040523480156200001157600080fd5b50604051620027503803806200275083398101604081905262000034916200036c565b8084848482828051825114620000835760405162461bcd60e51b815260206004820152600f60248201526e098cadccee8d040dad2e6dac2e8c6d608b1b60448201526064015b60405180910390fd5b60005b82518110156200012b57620000e0838281518110620000a957620000a962000458565b6020026020010151838381518110620000c657620000c662000458565b602002602001015160006200017560201b9092919060201c565b620001225760405162461bcd60e51b81526020600482015260116024820152704475706c6963617465206164647265737360781b60448201526064016200007a565b60010162000086565b50505060045550506001600160a01b0381166200015f57604051631e4fbdf760e01b8152600060048201526024016200007a565b6200016a8162000195565b50505050506200046e565b60006200018d846001600160a01b03851684620001e7565b949350505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600082815260028401602052604081208290556200018d848460006200020e838362000217565b90505b92915050565b6000818152600183016020526040812054620002605750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000211565b50600062000211565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620002aa57620002aa62000269565b604052919050565b60006001600160401b03821115620002ce57620002ce62000269565b5060051b60200190565b80516001600160a01b0381168114620002f057600080fd5b919050565b600082601f8301126200030757600080fd5b81516020620003206200031a83620002b2565b6200027f565b8083825260208201915060208460051b8701019350868411156200034357600080fd5b602086015b8481101562000361578051835291830191830162000348565b509695505050505050565b600080600080608085870312156200038357600080fd5b84516001600160401b03808211156200039b57600080fd5b818701915087601f830112620003b057600080fd5b81516020620003c36200031a83620002b2565b82815260059290921b8401810191818101908b841115620003e357600080fd5b948201945b838610156200040c57620003fc86620002d8565b82529482019490820190620003e8565b918a01519198509093505050808211156200042657600080fd5b506200043587828801620002f5565b935050604085015191506200044d60608601620002d8565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b6122d2806200047e6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638055178811610097578063c6b56e1b11610066578063c6b56e1b1461024a578063f2fde38b14610253578063f8b5502e14610266578063fcf285321461026e57600080fd5b806380551788146101ce5780638a2de821146101ef5780638da5cb5b14610202578063a0d4639c1461022a57600080fd5b80636a22e84f116100d35780636a22e84f14610140578063715018a61461017f5780637aa45c06146101875780637e037a75146101ad57600080fd5b80630887db2c146100fa5780632e9a68c71461011857806356cf41c71461012d575b600080fd5b610102610276565b60405161010f9190611efe565b60405180910390f35b61012b610126366004611f11565b610287565b005b61012b61013b366004611f45565b6105d2565b61015361014e366004611f45565b6105e6565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835260208301919091520161010f565b61012b61066f565b61019a610195366004611f45565b610683565b60405161010f9796959493929190611fb1565b6101c06101bb36600461207c565b6108c5565b60405190815260200161010f565b6101e16101dc3660046120be565b611154565b60405161010f9291906120d9565b61012b6101fd366004611f45565b611198565b60055460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010f565b61023d6102383660046120be565b61145c565b60405161010f91906120f0565b6101c060045481565b61012b6102613660046120be565b61149a565b6101c06114fb565b6003546101c0565b60606102826000611507565b905090565b6102908261151b565b61029982611586565b60018160028111156102ad576102ad611f5e565b14806102ca575060028160028111156102c8576102c8611f5e565b145b61035b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f496e76616c696420766f74652c206d75737420626520617070726f7665206f7260448201527f2072656a6563740000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60006003838154811061037057610370612103565b90600052602060002090600602019050428160020154116103ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f566f74696e672068617320656e646564000000000000000000000000000000006044820152606401610352565b60008060005b6003840154811015610466573373ffffffffffffffffffffffffffffffffffffffff1684600301828154811061042b5761042b612103565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361045e5760019250809150610466565b6001016103f3565b50816104ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612076616c696420766f7465720000000000000000000000000000006044820152606401610352565b60008360040182815481106104e5576104e5612103565b90600052602060002090602091828204019190069054906101000a900460ff16600281111561051657610516611f5e565b1461057d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f416c726561647920766f746564000000000000000000000000000000000000006044820152606401610352565b8383600401828154811061059357610593612103565b90600052602060002090602091828204019190066101000a81548160ff021916908360028111156105c6576105c6611f5e565b02179055505050505050565b6105da61163d565b6105e381600455565b50565b600080826105f26114fb565b811061065a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610352565b610665600085611690565b9250925050915091565b61067761163d565b61068160006116ae565b565b60008060008060608060006106978861151b565b600388815481106106aa576106aa612103565b60009182526020909120600690910201546003805460ff909216918a9081106106d5576106d5612103565b906000526020600020906006020160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660038a8154811061071a5761071a612103565b90600052602060002090600602016001015460038b8154811061073f5761073f612103565b90600052602060002090600602016002015460038c8154811061076457610764612103565b906000526020600020906006020160030160038d8154811061078857610788612103565b906000526020600020906006020160040160038e815481106107ac576107ac612103565b6000918252602091829020600560069092020101548354604080518285028101850190915281815260ff9092169285919083018282801561082357602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116107f8575b50505050509250818054806020026020016040519081016040528092919081815260200182805480156108a557602002820191906000526020600020906000905b82829054906101000a900460ff16600281111561088357610883611f5e565b8152602060019283018181049485019490930390920291018084116108645790505b505050505091509650965096509650965096509650919395979092949650565b600060016108d23361145c565b60028111156108e3576108e3611f5e565b1461094a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4e6f7420612076616c69642073746577617264000000000000000000000000006044820152606401610352565b838383600083600181111561096157610961611f5e565b148061097e5750600183600181111561097c5761097c611f5e565b145b6109e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616374696f6e0000000000000000000000000000000000006044820152606401610352565b60008360018111156109f8576109f8611f5e565b03610a9157428111610a8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4e6577206578706972652074696d657374616d70206d75737420626520696e2060448201527f74686520667574757265000000000000000000000000000000000000000000006064820152608401610352565b610bbb565b6001836001811115610aa557610aa5611f5e565b03610bbb576000610ab58361145c565b6002811115610ac657610ac6611f5e565b03610b2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f5374657761726420646f6573206e6f74206578697374000000000000000000006044820152606401610352565b8015610bbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4e6577206578706972652074696d657374616d70206d757374206265207a657260448201527f6f000000000000000000000000000000000000000000000000000000000000006064820152608401610352565b600080610bca42600454611725565b9150915081610c35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f566f7465206475726174696f6e206f766572666c6f77000000000000000000006044820152606401610352565b60006040518060e001604052808b6001811115610c5457610c54611f5e565b815273ffffffffffffffffffffffffffffffffffffffff8b166020820152604081018a9052606081018490526080016000604051908082528060200260200182016040528015610cae578160200160208202803683370190505b5081526020016000604051908082528060200260200182016040528015610cdf578160200160208202803683370190505b50815260006020909101819052600380546001818101835591909252825160069092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018054939450849390929183917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016908381811115610d6457610d64611f5e565b0217905550602082810151825473ffffffffffffffffffffffffffffffffffffffff909116610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909116178255604083015160018301556060830151600283015560808301518051610ddf9260038501920190611d62565b5060a08201518051610dfb916004840191602090910190611dec565b5060c09190910151600590910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055600354610e4490600190612161565b9650610e4f8761151b565b6000610e59610276565b905060005b8151811015610f91576001610e8b838381518110610e7e57610e7e612103565b602002602001015161145c565b6002811115610e9c57610e9c611f5e565b03610f895760038981548110610eb457610eb4612103565b9060005260206000209060060201600301828281518110610ed757610ed7612103565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055600380548a908110610f4b57610f4b612103565b60009182526020808320600692909202909101600401805460018101825590835291819020908204018054601f9092166101000a60ff021990911690555b600101610e5e565b50600060038981548110610fa757610fa7612103565b90600052602060002090600602016003018054905011611023576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f2076616c69642073746577617264730000000000000000000000000000006044820152606401610352565b61102c88611586565b7ffa17f2a6efafb8ef0064b05aac31e24e82d6be9552e2dedb7088e3ca073b46f38860038a8154811061106157611061612103565b60009182526020909120600690910201546003805460ff909216918c90811061108c5761108c612103565b906000526020600020906006020160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660038c815481106110d1576110d1612103565b90600052602060002090600602016001015460038d815481106110f6576110f6612103565b90600052602060002090600602016002015460038e8154811061111b5761111b612103565b906000526020600020906006020160030160405161113e96959493929190612174565b60405180910390a1505050505050509392505050565b6000806111608361145c565b9150600082600281111561117657611176611f5e565b0361118357509160009150565b8161118f60008561174c565b91509150915091565b6111a18161151b565b6111aa81611586565b6000600382815481106111bf576111bf612103565b90600052602060002090600602019050428160020154111561123d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f566f74696e6720686173206e6f7420656e6465640000000000000000000000006044820152606401610352565b600581015460ff16156112ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f416c7265616479206578656375746564000000000000000000000000000000006044820152606401610352565b6000805b600483015481101561131f5760018360040182815481106112d3576112d3612103565b90600052602060002090602091828204019190069054906101000a900460ff16600281111561130457611304611f5e565b03611317578161131381612206565b9250505b6001016112b0565b5060038201546113329082906042611777565b611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f7420656e6f75676820766f746573000000000000000000000000000000006044820152606401610352565b6005820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556000825460ff1660018111156113dd576113dd611f5e565b03611414578154600183015461140e91610100900473ffffffffffffffffffffffffffffffffffffffff16906118d2565b50505050565b6001825460ff16600181111561142c5761142c611f5e565b0361145757815461140e90610100900473ffffffffffffffffffffffffffffffffffffffff166118df565b505050565b600061146881836118eb565b61147457506000919050565b4261148060008461174c565b1161148d57506002919050565b506001919050565b919050565b6114a261163d565b73ffffffffffffffffffffffffffffffffffffffff81166114f2576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401610352565b6105e3816116ae565b6000610282600061190d565b6060600061151483611918565b9392505050565b60035481106105e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610352565b6003818154811061159957611599612103565b906000526020600020906006020160040180549050600382815481106115c1576115c1612103565b906000526020600020906006020160030180549050146105e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f566f7465727320616e6420566f746573206c656e677468206d69736d617463686044820152606401610352565b60055473ffffffffffffffffffffffffffffffffffffffff163314610681576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610352565b600080808061169f8686611923565b909450925050505b9250929050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080838301848110156117405760008092509250506116a7565b60019590945092505050565b600061176e8373ffffffffffffffffffffffffffffffffffffffff841661194e565b90505b92915050565b6000826000036117e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f43616e6e6f7420646976696465206279207a65726f00000000000000000000006044820152606401610352565b8284111561184d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4c656e677468312063616e6e6f7420657863656564206c656e677468320000006044820152606401610352565b60648211156118b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50657263656e746167652063616e6e6f742065786365656420313030000000006044820152606401610352565b60006118c6856064866119ae565b90921115949350505050565b600061176e818484611aa9565b60006117718183611ad4565b600061176e8373ffffffffffffffffffffffffffffffffffffffff8416611af6565b600061177182611b02565b606061177182611b0d565b600080806119318585611b1a565b600081815260029690960160205260409095205494959350505050565b60008181526002830160205260408120548015801561197457506119728484611af6565b155b1561176e576040517f02b5668600000000000000000000000000000000000000000000000000000000815260048101849052602401610352565b6000838302817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8587098281108382030391505080600003611a03578382816119f9576119f961223e565b0492505050611514565b808411611a3c576040517f227bc15300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000611acc8473ffffffffffffffffffffffffffffffffffffffff851684611b26565b949350505050565b600061176e8373ffffffffffffffffffffffffffffffffffffffff8416611b43565b600061176e8383611b60565b600061177182611b78565b6060600061151483611b82565b600061176e8383611bde565b60008281526002840160205260408120829055611acc8484611c08565b6000818152600283016020526040812081905561176e8383611c14565b6000818152600183016020526040812054151561176e565b6000611771825490565b606081600001805480602002602001604051908101604052809291908181526020018280548015611bd257602002820191906000526020600020905b815481526020019060010190808311611bbe575b50505050509050919050565b6000826000018281548110611bf557611bf5612103565b9060005260206000200154905092915050565b600061176e8383611c20565b600061176e8383611c6f565b6000818152600183016020526040812054611c6757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155611771565b506000611771565b60008181526001830160205260408120548015611d58576000611c93600183612161565b8554909150600090611ca790600190612161565b9050808214611d0c576000866000018281548110611cc757611cc7612103565b9060005260206000200154905080876000018481548110611cea57611cea612103565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611d1d57611d1d61226d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050611771565b6000915050611771565b828054828255906000526020600020908101928215611ddc579160200282015b82811115611ddc57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190611d82565b50611de8929150611e97565b5090565b82805482825590600052602060002090601f01602090048101928215611ddc5791602002820160005b83821115611e6157835183826101000a81548160ff02191690836002811115611e4057611e40611f5e565b02179055509260200192600101602081600001049283019260010302611e15565b8015611e8e5782816101000a81549060ff0219169055600101602081600001049283019260010302611e61565b5050611de89291505b5b80821115611de85760008155600101611e98565b60008151808452602080850194506020840160005b83811015611ef357815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611ec1565b509495945050505050565b60208152600061176e6020830184611eac565b60008060408385031215611f2457600080fd5b82359150602083013560038110611f3a57600080fd5b809150509250929050565b600060208284031215611f5757600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611f9d57611f9d611f5e565b9052565b600381106105e3576105e3611f5e565b611fbb8189611f8d565b6000602073ffffffffffffffffffffffffffffffffffffffff8916602084015287604084015286606084015260e06080840152611ffb60e0840187611eac565b83810360a08501528551808252602080880192019060005b8181101561203857835161202681611fa1565b83529284019291840191600101612013565b505085151560c0860152925061204c915050565b98975050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461149557600080fd5b60008060006060848603121561209157600080fd5b8335600281106120a057600080fd5b92506120ae60208501612058565b9150604084013590509250925092565b6000602082840312156120d057600080fd5b61176e82612058565b604081016120e684611fa1565b9281526020015290565b602081016120fd83611fa1565b91905290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561177157611771612132565b600060c08201888352602061218c602085018a611f8d565b73ffffffffffffffffffffffffffffffffffffffff808916604086015287606086015286608086015260c060a086015282865480855260e087019150876000526020600020945060005b818110156121f45785548416835260019586019592850192016121d6565b50909c9b505050505050505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361223757612237612132565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220642d997f650c34e28f53aa9be42fb55f87d93b557245c3995dd4d7edfe39705b64736f6c63430008160033";

export const WORKING_GROUP_SYSTEM_BYTECODE = "0x604060808152346200034557620037b490813803806200001f8162000365565b938439820160e08382031262000345576200003a83620003a1565b916020916200004b838601620003a1565b858301519094906001600160401b03908181116200034557870183601f820112156200034557805191620000896200008384620003b6565b62000365565b918783858152018860059560051b83010191878311620003455789809101915b8383106200034a57505050506060890151818111620003455785620000d0918b01620003ce565b9460808a01519182116200034557620000eb918a01620003ce565b97620000ff60c060a08301519201620003a1565b9860018060a01b039360018060a01b03198560009716818854161787558560049b16818c5416178b556200013785518951146200042c565b865b8551811015620001bc5762000176898c600362000166858c6200015d828e6200046b565b5116946200046b565b5191838d52528c8b205562000521565b15620001855760010162000139565b895162461bcd60e51b8152808d018c905260116024820152704475706c6963617465206164647265737360781b6044820152606490fd5b50868a92878b978f948f95620001d683518a51146200042c565b855b8351811015620002db57808a8a620002018f9489620001f8828b6200046b565b5116936200046b565b51938a8a8662000249575b918681837f1e4109814b4fb1210f81ef6540a9bf7e5834ff79536859d16d6398f0e417c44f96958860019b96528652205551908152a201620001d8565b5050505090916200025a8262000496565b6003811015620002c857600103620002785791908a8e8a8a6200020c565b508c5162461bcd60e51b8152808a018b90526024808201527f5370656e646572206973206e6f7420612076616c696420576f726b696e6720476044820152630726f75760e41b6064820152608490fd5b634e487b7160e01b8a5260218b5260248afd5b5060078a9055831685848c898415620003305750907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09184600854968716176008555194169180a361320b9081620005a98239f35b836024925191631e4fbdf760e01b8352820152fd5b600080fd5b81906200035784620003a1565b8152019101908990620000a9565b6040519190601f01601f191682016001600160401b038111838210176200038b57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200034557565b6001600160401b0381116200038b5760051b60200190565b9080601f830112156200034557815190602091620003f06200008382620003b6565b9360208086848152019260051b8201019283116200034557602001905b8282106200041c575050505090565b815181529083019083016200040d565b156200043457565b60405162461bcd60e51b815260206004820152600f60248201526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b8051821015620004805760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0316600081815260026020526040902054620004b95750600090565b8060005260036020526040600020549081158062000501575b620004e957504210620004e457600290565b600190565b6024906040519063015ab34360e11b82526004820152fd5b506200051a816000526002602052604060002054151590565b15620004d2565b6000908082526002602052604082205415600014620005a45760019182546801000000000000000081101562000590578381018085558110156200057c57908260409285835260208320015583549281526002602052205590565b634e487b7160e01b82526032600452602482fd5b634e487b7160e01b82526041600452602482fd5b509056fe608080604052600436101561001357600080fd5b60003560e01c9081631576f83f146129ee575080631deab2e6146129af5780633089c6d1146125075780633e5beab9146124a257806342afe21a14612450578063508da674146121455780635d0372b7146121095780636c39e0ed146120865780636e4ba48014611fbc578063715018a614611f1e57806380ec7b7d14611ee25780638167f31414611bdf5780638ad15e1414611b895780638da5cb5b14611b375780639a137d7e14611ae5578063b402b0b614611a33578063cdf0642e146119f7578063edd8f728146110b4578063f2fde38b14610fd25763fab3c55d146100fb57600080fd5b34610ad55760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad55760026004351015610ad55773ffffffffffffffffffffffffffffffffffffffff6024351660243503610ad5576024602073ffffffffffffffffffffffffffffffffffffffff60045416604051928380927fa0d4639c0000000000000000000000000000000000000000000000000000000082523360048301525afa801561074e57600191600091610fb3575b506101c081612a60565b03610f55576101d0600435612ae3565b60043515808015610f3e575b15610ee0576101ec600435612ae3565b15610d6357426044351115610cdf575b61020860075442612e50565b9015610c815760405161021a81612cde565b600081526040519061022b82612cde565b60008252604051928361010081011067ffffffffffffffff610100860111176106f0576101008401604052610261600435612ae3565b600435845273ffffffffffffffffffffffffffffffffffffffff60243516602085015260443560408501526064356060850152608084015260a083015260c0820152600060e0820152600654680100000000000000008110156106f0578060016102ce9201600655612aed565b610c525781516102dd81612ae3565b6102e681612ae3565b60ff82549116807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083161783557fffffffffffffffffffffff00000000000000000000000000000000000000000074ffffffffffffffffffffffffffffffffffffffff00602086015160081b1692161717815560408201516001820155606082015160028201556080820151600382015560a082015180519067ffffffffffffffff82116106f0576801000000000000000082116106f0576020906004840154836004860155808410610c32575b500160048301600052602060002060005b838110610c0857858560c082015180519067ffffffffffffffff82116106f0576801000000000000000082116106f0576020906005840154836005860155808410610b9b575b5001906005830160005260206000209060005b8160051c8110610b6257507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08116808203610b09575b50505050600660e09101910151151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008354169116179055600654807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810111610ada576104e7817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810110612b94565b6004600073ffffffffffffffffffffffffffffffffffffffff825416604051928380927f0887db2c0000000000000000000000000000000000000000000000000000000082525afa90811561074e57600091610a02575b5060005b815181101561075a5773ffffffffffffffffffffffffffffffffffffffff60045416602073ffffffffffffffffffffffffffffffffffffffff6105858486612d6a565b51166024604051809481937fa0d4639c00000000000000000000000000000000000000000000000000000000835260048301525afa801561074e5760019160009161071f575b506105d581612a60565b146105e3575b600101610542565b61060e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612aed565b5073ffffffffffffffffffffffffffffffffffffffff61062e8385612d6a565b5116906004810154680100000000000000008110156106f057600461065b92600183018282015501612c30565b73ffffffffffffffffffffffffffffffffffffffff829392549160031b92831b921b19161790556106ad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612aed565b5090600582015491680100000000000000008310156106f0578260056106dc9260018096018282015501612b28565b60ff82549160031b1b1916905590506105db565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610741915060203d602011610747575b6107398183612cfa565b810190612d3b565b856105cb565b503d61072f565b6040513d6000823e3d90fd5b8260046107887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301612aed565b500154156109a457806107be7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209301612dcf565b7fd190187d4f2df54274d2157410e10d79b258f6e9ad948f164187d189fda73f8660ff61080c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612aed565b50541673ffffffffffffffffffffffffffffffffffffffff61084f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8501612aed565b505460081c169061097760016108867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8701612aed565b50015460026108b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8801612aed565b50015460036108e67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901612aed565b500154906109157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901612aed565b50926040519687967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8b01885261094b81612ae3565b8b88015260408701526060860152608085015260a084015260e060c0840152600460e084019101612c8a565b0390a17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60405191018152f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f2076616c69642073746577617264730000000000000000000000000000006044820152fd5b90503d806000833e610a148183612cfa565b6020828281010312610ad55781519167ffffffffffffffff8311610ad557818101601f848301011215610ad557828101519267ffffffffffffffff84116106f0578360051b60405194610a6a6020830187612cfa565b855260208501938301602082848601010111610ad55782820160200193915b60208282860101018510610aa25750505050508261053e565b84519273ffffffffffffffffffffffffffffffffffffffff84168403610ad5576020818195829352019501949250610a89565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9260009360005b8184038110610b2c5750505060051c0155600660e08480610454565b9091946020610b5860019284895191610b4483612a60565b9060ff809160031b9316831b921b19161790565b9601929101610b10565b6000805b60208110610b7b57508382015560010161041e565b94906020610b9260019288855191610b4483612a60565b92019501610b66565b610bca906005860160005283600020601f80870160051c82019281881680610bd0575b500160051c0190612d53565b8561040b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90818601918254918a0360031b1c1690558a610bbe565b600190602073ffffffffffffffffffffffffffffffffffffffff85511694019381840155016103c5565b610c4c906004860160005284846000209182019101612d53565b386103b4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f566f7465206475726174696f6e206f766572666c6f77000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4e6577206578706972652074696d657374616d70206d75737420626520696e2060448201527f74686520667574757265000000000000000000000000000000000000000000006064820152fd5b610d6e600435612ae3565b6001600435036101fc57610d83602435612b48565b610d8c81612a60565b15610e8257604435610dfe57606435156101fc5760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f416c6c6f77616e6365206d757374206265207a65726f000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4e6577206578706972652074696d657374616d70206d757374206265207a657260448201527f6f000000000000000000000000000000000000000000000000000000000000006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f576f726b696e672047726f757020646f6573206e6f74206578697374000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616374696f6e0000000000000000000000000000000000006044820152fd5b50610f4a600435612ae3565b6001600435146101dc565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4e6f7420612076616c69642073746577617264000000000000000000000000006044820152fd5b610fcc915060203d602011610747576107398183612cfa565b386101b6565b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557611009612a3d565b611011612d7e565b73ffffffffffffffffffffffffffffffffffffffff80911690811561108357600854827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600855167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60246040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152fd5b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576110f260065460043510612b94565b60ff6110ff600435612aed565b50541661110d600435612aed565b5054600161111c600435612aed565b50015491600261112d600435612aed565b500154906004600361113f8235612aed565b5001549161114d8235612aed565b50926111598335612aed565b509461118860ff600661116c8735612aed565b50015416956111816040518097819301612c8a565b0385612cfa565b60405197888099602060058a01549182815201906005829a016000526020600020906000915b81601f84011061174057926112d29261131f9997959260209b9997955491818110611724575b818110611705575b8181106116e6575b8181106116c7575b8181106116a9575b81811061168a575b81811061166b575b81811061164c575b81811061162d575b81811061160e575b8181106115ef575b8181106115d0575b8181106115b1575b818110611592575b818110611573575b818110611554575b818110611535575b818110611516575b8181106114f7575b8181106114d8575b8181106114b9575b81811061149a575b81811061147b575b81811061145c575b81811061143d575b81811061141e575b8181106113ff575b8181106113e0575b8181106113c1575b8181106113a2575b818110611383575b1061136b575b50038c612cfa565b73ffffffffffffffffffffffffffffffffffffffff6040519a610100956112f881612ae3565b8c5260081c16878b015260408a0152606089015260808801528060a0880152860190612a99565b9484860360c0860152519485815201916000945b80861061134a575050829350151560e08301520390f35b9092602080600192865161135d81612a60565b815201940195019490611333565b908a9160f81c61137a81612a60565b8152018e6112ca565b928c60019160ff8560f01c1661139881612a60565b81520193016112c4565b928c60019160ff8560e81c166113b781612a60565b81520193016112bc565b928c60019160ff8560e01c166113d681612a60565b81520193016112b4565b928c60019160ff8560d81c166113f581612a60565b81520193016112ac565b928c60019160ff8560d01c1661141481612a60565b81520193016112a4565b928c60019160ff8560c81c1661143381612a60565b815201930161129c565b928c60019160ff8560c01c1661145281612a60565b8152019301611294565b928c60019160ff8560b81c1661147181612a60565b815201930161128c565b928c60019160ff8560b01c1661149081612a60565b8152019301611284565b928c60019160ff8560a81c166114af81612a60565b815201930161127c565b928c60019160ff8560a01c166114ce81612a60565b8152019301611274565b928c60019160ff8560981c166114ed81612a60565b815201930161126c565b928c60019160ff8560901c1661150c81612a60565b8152019301611264565b928c60019160ff8560881c1661152b81612a60565b815201930161125c565b928c60019160ff8560801c1661154a81612a60565b8152019301611254565b928c60019160ff8560781c1661156981612a60565b815201930161124c565b928c60019160ff8560701c1661158881612a60565b8152019301611244565b928c60019160ff8560681c166115a781612a60565b815201930161123c565b928c60019160ff8560601c166115c681612a60565b8152019301611234565b928c60019160ff8560581c166115e581612a60565b815201930161122c565b928c60019160ff8560501c1661160481612a60565b8152019301611224565b928c60019160ff8560481c1661162381612a60565b815201930161121c565b928c60019160ff8560401c1661164281612a60565b8152019301611214565b928c60019160ff8560381c1661166181612a60565b815201930161120c565b928c60019160ff8560301c1661168081612a60565b8152019301611204565b928c60019160ff8560281c1661169f81612a60565b81520193016111fc565b928c60019160ff85831c166116bd81612a60565b81520193016111f4565b928c60019160ff8560181c166116dc81612a60565b81520193016111ec565b928c60019160ff8560101c166116fb81612a60565b81520193016111e4565b928c60019160ff8560081c1661171a81612a60565b81520193016111dc565b928c60019160ff851661173681612a60565b81520193016111d4565b935090916001610400602092865460ff811661175b81612a60565b825260ff8160081c1661176d81612a60565b8583015260ff8160101c1661178181612a60565b604083015260ff816060828260181c1661179a81612a60565b818601528282608082828c1c166117b081612a60565b81890152828260a092828260281c166117c881612a60565b848c0152828260c0988d8a848460301c16916117e383612a60565b01528d60e0848460381c16916117f883612a60565b01528d610100848460401c169161180e83612a60565b01528d610120848460481c169161182483612a60565b01528d610140848460501c169161183a83612a60565b01528d610160848460581c169161185083612a60565b01521c1661185d81612a60565b6101808c0152828260681c1661187281612a60565b6101a08c0152828260701c1661188781612a60565b6101c08c0152828260781c1661189c81612a60565b6101e08c01521c166118ad81612a60565b610200890152828260881c166118c281612a60565b610220890152828260901c166118d781612a60565b610240890152828260981c166118ec81612a60565b6102608901521c166118fd81612a60565b610280860152828260a81c1661191281612a60565b6102a0860152828260b01c1661192781612a60565b6102c0860152828260b81c1661193c81612a60565b6102e08601521c1661194d81612a60565b61030083015260ff8160c81c1661196381612a60565b61032083015260ff8160d01c1661197981612a60565b61034083015260ff8160d81c1661198f81612a60565b61036083015260ff8160e01c166119a581612a60565b61038083015260ff8160e81c166119bb81612a60565b6103a083015260ff8160f01c166119d181612a60565b6103c083015260f81c6119e381612a60565b6103e08201520194019201908c93926111ae565b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576020600754604051908152f35b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557604051806001916001549283825260208092019360016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6926000905b828210611ad057611acc86611ab8818a0382612cfa565b604051918291602083526020830190612a99565b0390f35b84548752958601959383019390830190611aa1565b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557602073ffffffffffffffffffffffffffffffffffffffff60045416604051908152f35b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557602073ffffffffffffffffffffffffffffffffffffffff60085416604051908152f35b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576040611bca611bc5612a3d565b612c48565b825191611bd681612a60565b82526020820152f35b34610ad55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557602435600435600380831015610ad557611c2b6006548310612b94565b611c3482612dcf565b611c3d83612a60565b600191600184148015611ecf575b15611e4b57611c5990612aed565b50906003820154421015611ded5760009060009360009160048501908154915b828510611d9d575b505050505015611d3f5760050160ff611c9a8383612b28565b90549060031b1c16611cab81612a60565b611ce157611cdd91611cbc91612b28565b611cc7849294612a60565b83549060ff809160031b9316831b921b19161790565b9055005b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f416c726561647920766f746564000000000000000000000000000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612076616c696420766f7465720000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff611dc286839a979a989698612c30565b90543391851b1c90911603611de05750505050508480808080611c81565b9396929492830193611c79565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f566f74696e672068617320656e646564000000000000000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f496e76616c696420766f74652c206d75737420626520617070726f7665206f7260448201527f2072656a656374000000000000000000000000000000000000000000000000006064820152fd5b50611ed984612a60565b60028414611c4b565b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576020600154604051908152f35b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557611f55612d7e565b600073ffffffffffffffffffffffffffffffffffffffff6008547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600855167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576004356001548110611ffc81612b94565b15612057576040907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154806000526003602052816000205473ffffffffffffffffffffffffffffffffffffffff8351921682526020820152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad55773ffffffffffffffffffffffffffffffffffffffff6120d2612a3d565b6120da612d7e565b167fffffffffffffffffffffffff00000000000000000000000000000000000000006004541617600455600080f35b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576020600654604051908152f35b34610ad55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad55761217c612a3d565b60249081359133600052602092600584526040600020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810361234b575b50604051906040820182811067ffffffffffffffff82111761231d57918593919492604052600281527f30780000000000000000000000000000000000000000000000000000000000008482015273ffffffffffffffffffffffffffffffffffffffff948560005416926040519687957f468721a7000000000000000000000000000000000000000000000000000000008752166004860152840152608060448401528051908160848501528460005b83811061230557505050600060a4847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f858585859886010152856064850152011681010301925af190811561074e576000916122cf575b506040519015158152f35b90508181813d83116122fe575b6122e68183612cfa565b81010312610ad557518015158103610ad557826122c4565b503d6122dc565b82810182015188820160a4015287955086910161226b565b837f4e487b710000000000000000000000000000000000000000000000000000000060005260416004526000fd5b818110612415578082809203612371575b336000526005865203604060002055846121bb565b9050600161237e33612b48565b61238781612a60565b0361239357819061235c565b60848584604051917f08c379a00000000000000000000000000000000000000000000000000000000083526004830152808201527f5370656e646572206973206e6f7420612076616c696420576f726b696e67204760448201527f726f7570000000000000000000000000000000000000000000000000000000006064820152fd5b60649350604051927f192b9e4e0000000000000000000000000000000000000000000000000000000084523360048501528301526044820152fd5b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad557602061249161248c612a3d565b612b48565b6040519061249e81612a60565b8152f35b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad55773ffffffffffffffffffffffffffffffffffffffff6124ee612a3d565b1660005260056020526020604060002054604051908152f35b34610ad5576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad55761255860043561254a6006548210612b94565b61255381612dcf565b612aed565b5090600380830154421061295157600683019081549060ff9060ff83166128f357600091600091600588018054935b8481106128935750505050506004850154908115612835578181116127d7576042916125b291612e69565b10612779577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055815460ff81166125ed81612ae3565b8061272957505061262a73ffffffffffffffffffffffffffffffffffffffff835460081c1660018401548160005260038452604060002055613151565b505b600273ffffffffffffffffffffffffffffffffffffffff835460081c169201548061268d575b907f1e4109814b4fb1210f81ef6540a9bf7e5834ff79536859d16d6398f0e417c44f91836000526005825280604060002055604051908152a2005b600161269884612b48565b6126a181612a60565b1461265257608482604051907f08c379a000000000000000000000000000000000000000000000000000000000825260048201526024808201527f5370656e646572206973206e6f7420612076616c696420576f726b696e67204760448201527f726f7570000000000000000000000000000000000000000000000000000000006064820152fd5b80612735600192612ae3565b14612741575b5061262c565b73ffffffffffffffffffffffffffffffffffffffff6127729160081c16806000526003835260006040812055612fc9565b508261273b565b606483604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601060248201527f4e6f7420656e6f75676820766f746573000000000000000000000000000000006044820152fd5b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601d60248201527f4c656e677468312063616e6e6f7420657863656564206c656e677468320000006044820152fd5b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601560248201527f43616e6e6f7420646976696465206279207a65726f00000000000000000000006044820152fd5b8361289e8284612b28565b905490851b1c166128ae81612a60565b60018091146128c1575b50600101612587565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87929714610ada57019460016128b8565b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601060248201527f416c7265616479206578656375746564000000000000000000000000000000006044820152fd5b606482604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601460248201527f566f74696e6720686173206e6f7420656e6465640000000000000000000000006044820152fd5b34610ad55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad5576129e6612d7e565b600435600755005b34610ad55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610ad55760209073ffffffffffffffffffffffffffffffffffffffff600054168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610ad557565b60031115612a6a57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b90815180825260208080930193019160005b828110612ab9575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101612aab565b60021115612a6a57565b600654811015612057576007906006600052027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0190600090565b919091805483101561205757600052601f60206000208360051c01921690565b73ffffffffffffffffffffffffffffffffffffffff1680600052600260205260406000205415600014612b7b5750600090565b612b8490612f66565b4210612b8f57600290565b600190565b15612b9b57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152fd5b6001548110156120575760016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b80548210156120575760005260206000200190600090565b90612c5282612b48565b91612c5c83612a60565b8215612c845773ffffffffffffffffffffffffffffffffffffffff612c819116612f66565b90565b50600090565b9081548082526020809201926000526020600020916000905b828210612cb1575050505090565b835473ffffffffffffffffffffffffffffffffffffffff1685529384019360019384019390910190612ca3565b6020810190811067ffffffffffffffff8211176106f057604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106f057604052565b90816020910312610ad557516003811015610ad55790565b818110612d5e575050565b60008155600101612d53565b80518210156120575760209160051b010190565b73ffffffffffffffffffffffffffffffffffffffff600854163303612d9f57565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b6005612de86004612ddf84612aed565b50015492612aed565b50015403612df257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f566f7465727320616e6420566f746573206c656e677468206d69736d617463686044820152fd5b91908201918210612e615760019190565b600091508190565b9060648202907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6064840992828085109403938085039414612f2a5783821115612f0057606482910981600003821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b60046040517f227bc153000000000000000000000000000000000000000000000000000000008152fd5b5080925015612f37570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b80600052600360205260406000205490811580612fb7575b612f86575090565b602490604051907f02b566860000000000000000000000000000000000000000000000000000000082526004820152fd5b50600260205260406000205415612f7e565b600081815260026020526040812054909190801561314c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081810181811161311f57600154908382019182116130f257818103613089575b505050600154801561305c5781019061303b82612bf9565b909182549160031b1b19169055600155815260026020526040812055600190565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526031600452fd5b6130dc6130986130a793612bf9565b90549060031b1c928392612bf9565b81939154907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9060031b92831b921b19161790565b9055845260026020526040842055388080613023565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b505090565b6000818152600260205260408120546131d057600154680100000000000000008110156131a357908261318f6130a784600160409601600155612bf9565b905560015492815260026020522055600190565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b90509056fea2646970667358221220ef626a573a7c7cec171ac3a23de33c888fd3eb9d2f4e33c71e4a4f89eff4080b64736f6c63430008160033";
