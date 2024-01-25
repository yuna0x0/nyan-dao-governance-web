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
        "name": "removeExpiredStewards",
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
        "name": "removeSteward",
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
        "inputs": [],
        "name": "renounceOwnership",
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
            },
            {
                "internalType": "uint256",
                "name": "expireTimestamp",
                "type": "uint256"
            }
        ],
        "name": "setSteward",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isNewEntry",
                "type": "bool"
            }
        ],
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
        "name": "removeExpiredWorkingGroups",
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
        "name": "removeWorkingGroup",
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
                "internalType": "address",
                "name": "address_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "expireTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            }
        ],
        "name": "setWorkingGroup",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isNewEntry",
                "type": "bool"
            }
        ],
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

export const ERC20_BYTECODE = "0x6101608060405234620000e2576200413080380380916200002082620000fd565b833960808183019112620000e2578151906001600160a01b0382168203620000e257610180516001600160401b039390848111620000e25782620000669183016200017b565b916101a051948511620000e25762000090946200008492016200017b565b906101c051926200021b565b604051612f6c908162001184823960805181611abf015260a05181611b7a015260c05181611a90015260e05181611b0e01526101005181611b3401526101205181610bec01526101405181610c160152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b601f01601f1916610160908101906001600160401b038211908210176200012357604052565b620000e7565b604081019081106001600160401b038211176200012357604052565b60405190620001548262000129565b565b60005b8381106200016a5750506000910152565b818101518382015260200162000159565b81601f82011215620000e25780516001600160401b0392838211620001235760405193601f8301601f19908116603f0116850190811185821017620001235760405281845260208284010111620000e257620001de916020808501910162000156565b90565b634e487b7160e01b600052601160045260246000fd5b90670de0b6b3a7640000918281029281840414901517156200021557565b620001e1565b919290926040516200022d8162000129565b6001808252603160f81b602080840191825287519194926001600160401b03831162000123576200026b8362000265600354620003da565b62000417565b602091601f84116001146200034857505081620002ae9392620002a5926000916200033c575b508160011b916000199060031b1c19161790565b60035562000583565b6001600160a01b0384161562000323576200015494620002d26200031c95620009ce565b620002dd8162000748565b61012052620002ec8262000855565b610140526020815191012060e052519020610100524660a0526200030f62000962565b6080523060c052620001f7565b336200067e565b604051631e4fbdf760e01b815260006004820152602490fd5b90508901513862000291565b60036000529190601f198416907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b936000915b8c848410620003c35750505050918391620002ae959460019410620003a9575b5050811b0160035562000583565b8a015160001960f88460031b161c1916905538806200039b565b85015186559485019493810193918101916200037b565b90600182811c921680156200040c575b6020831014620003f657565b634e487b7160e01b600052602260045260246000fd5b91607f1691620003ea565b601f811162000424575050565b60009060036000526020600020906020601f850160051c8301941062000467575b601f0160051c01915b8281106200045b57505050565b8181556001016200044e565b909250829062000445565b601f81116200047f575050565b60009060046000526020600020906020601f850160051c83019410620004c2575b601f0160051c01915b828110620004b657505050565b818155600101620004a9565b9092508290620004a0565b601f8111620004da575050565b60009060066000526020600020906020601f850160051c830194106200051d575b601f0160051c01915b8281106200051157505050565b81815560010162000504565b9092508290620004fb565b601f811162000535575050565b60009060076000526020600020906020601f850160051c8301941062000578575b601f0160051c01915b8281106200056c57505050565b8181556001016200055f565b909250829062000556565b80519091906001600160401b0381116200012357620005af81620005a9600454620003da565b62000472565b602080601f8311600114620005f657508190620005e59394600092620005ea575b50508160011b916000199060031b1c19161790565b600455565b015190503880620005d0565b6004600052601f198316949091907f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b926000905b878210620006655750508360019596106200064b575b505050811b01600455565b015160001960f88460031b161c1916905538808062000640565b806001859682949686015181550195019301906200062a565b91906001600160a01b03831680156200072f5760025482810180911162000215576002556001600160a01b038416600090815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b03841162000709576200015492935062000a86565b604051630e58ae9360e11b8152600481018590526001600160d01b036024820152604490fd5b60405163ec442f0560e01b815260006004820152602490fd5b90815160208082106000146200076657505090620001de9062000a17565b6001600160401b03821162000123576200078d8262000787600654620003da565b620004cd565b602090601f8311600114620007ca57508190620007c29394600092620005ea5750508160011b916000199060031b1c19161790565b60065560ff90565b6006600052601f198316949091907ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f926000905b8782106200083c57505083600195961062000822575b505050811b0160065560ff90565b015160001960f88460031b161c1916905538808062000814565b80600185968294968601518155019501930190620007fe565b90815160208082106000146200087357505090620001de9062000a17565b6001600160401b03821162000123576200089a8262000894600754620003da565b62000528565b602090601f8311600114620008d757508190620008cf9394600092620005ea5750508160011b916000199060031b1c19161790565b60075560ff90565b6007600052601f198316949091907fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688926000905b878210620009495750508360019596106200092f575b505050811b0160075560ff90565b015160001960f88460031b161c1916905538808062000921565b806001859682949686015181550195019301906200090b565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815260c0810181811060018060401b03821117620001235760405251902090565b600580546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b601f81511162000a4557602081519101516020821062000a35571790565b6000198260200360031b1b161790565b6044604051809263305a27a960e01b82526020600483015262000a78815180928160248601526020868601910162000156565b601f01601f19168101030190fd5b9062000a928162000b8d565b9165ffffffffffff80431162000b6e57600b548062000b3a575062000acb9062000ac2620001549560006200114f565b90431662000f11565b50506001600160a01b0390811690811562000b1d575b60096020527fec8156718a8372b1db44bb411437d0870f3e3790d4a08526d024ce1b0b668f6b5460009283526040909220548116911662000c8a565b62000b3262000b2c8462000b8d565b62000bc1565b505062000ae1565b906000199180838101116200021557620001549562000acb9362000ac292600b600052602060002001015460301c6200114f565b6040516306dfcc6560e41b815260306004820152436024820152604490fd5b6001600160d01b039081811162000ba2571690565b604490604051906306dfcc6560e41b825260d060048301526024820152fd5b65ffffffffffff80431162000b6e57600b548062000bef575062000ac262000beb92600062001169565b9091565b6000199281848101116200021557600b6000529201600080516020620040f0833981519152015462000beb9262000ac29160301c62001169565b65ffffffffffff9081431162000b6e5780548062000c5d575062000c5362000beb9360006200114f565b9143169062001054565b600019938185810111620002155762000beb9462000c539284600052602060002001015460301c6200114f565b6001600160a01b0380831693929190811690818514158062000df2575b62000cb4575b5050505050565b8162000d30575b50508262000ccc575b808062000cad565b6001600160a01b03166000908152600a60205260409020600080516020620041108339815191529162000d0c9162000d05909162000b8d565b9062000c29565b604080516001600160d01b039384168152919092166020820152a238808062000cc4565b6001600160a01b03166000908152600a6020526040902062000d528462000b8d565b9065ffffffffffff9081431162000b6e5780548062000db257509062000d8f9162000c536000805160206200411083398151915294600062001169565b604080516001600160d01b039384168152919092166020820152a2388062000cbb565b91906000199280848101116200021557600080516020620041108339815191529462000d8f9462000c539284600052602060002001015460301c62001169565b5083151562000ca7565b6000198101919082116200021557565b600b54906801000000000000000082101562000123576001820180600b5582101562000e6e57600b60005280516020919091015160301b65ffffffffffff191665ffffffffffff9190911617600080516020620040f083398151915290910155565b634e487b7160e01b600052603260045260246000fd5b9081546801000000000000000081101562000123576001810180845581101562000e6e5760009283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b604080519192919081016001600160401b038111828210176200012357604052915465ffffffffffff8116835260301c6020830152565b600b54919291908115620010255762000f5162000f4b62000f328462000dfc565b600b600052600080516020620040f08339815191520190565b62000eda565b805165ffffffffffff838116949116841062001013578560209362000fd19562000f9062000f85865165ffffffffffff1690565b65ffffffffffff1690565b0362000fd5575062000faa62000f3262000fc39362000dfc565b9065ffffffffffff82549181199060301b169116179055565b01516001600160d01b031690565b9190565b90506200100d915062000ff962000feb62000145565b65ffffffffffff9092168252565b6001600160d01b0387168185015262000e0c565b62000fc3565b604051632520601d60e01b8152600490fd5b6200104e91506200103962000feb62000145565b6001600160d01b038416602082015262000e0c565b60009190565b80549293929190821562001126576200108262000f4b620010758562000dfc565b8360005260206000200190565b9062001094825165ffffffffffff1690565b65ffffffffffff84811691168110620010135762000fd1946020948892620010c662000f85875165ffffffffffff1690565b03620010ee575062000fc392620010e162000faa9262000dfc565b9060005260206000200190565b9150506200100d91620011126200110462000145565b65ffffffffffff9093168352565b6001600160d01b0388168286015262000e84565b6200104e92506200113a6200110462000145565b6001600160d01b038516602083015262000e84565b6001600160d01b0391821690821601908111620002155790565b6001600160d01b039182169082160390811162000215579056fe6080604052600436101561001257600080fd5b60003560e01c806306fdde03146101e7578063095ea7b3146101e257806318160ddd146101dd57806323b872dd146101d8578063313ce567146101d35780633644e515146101ce5780633a46b1a8146101c957806340c10f19146101c457806342966c68146101bf5780634bf5d7e9146101ba578063587cde1e146101b55780635c19a95c146101b05780636fcfff45146101ab57806370a08231146101a6578063715018a6146101a157806379cc67901461019c5780637ecebe001461019757806384b0196e146101925780638da5cb5b1461018d5780638e539e8c1461018857806391ddadf41461018357806395d89b411461017e5780639ab24eb014610179578063a9059cbb14610174578063c3cda5201461016f578063d505accf1461016a578063dd62ed3e14610165578063f1127ed8146101605763f2fde38b1461015b57600080fd5b6114e2565b611413565b61137e565b61118f565b611082565b61101e565b610f96565b610ed0565b610e86565b610d3a565b610ce8565b610bb3565b610b4e565b610b00565b610a61565b6109fe565b610952565b610912565b6108ac565b6107e4565b6107a9565b610623565b61052a565b6104e9565b6104af565b610459565b61041d565b6103ce565b61025e565b919082519283825260005b8481106102365750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b6020818301810151848301820152016101f7565b90602061025b9281815201906101ec565b90565b34610383576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610380576040519080600354906102a0826115f3565b8085529160209160019182811690811561033557506001146102dd575b6102d9866102cd818803826116ea565b6040519182918261024a565b0390f35b9350600384527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b838510610322575050505081016020016102cd826102d9386102bd565b8054868601840152938201938101610305565b8796506102d9979450602093506102cd9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201019293386102bd565b80fd5b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361038357565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361038357565b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357610412610408610388565b60243590336120f2565b602060405160018152f35b346103835760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610383576020600254604051908152f35b346103835760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357610412610493610388565b61049b6103ab565b604435916104aa833383611753565b611902565b346103835760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357602060405160128152f35b346103835760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610383576020610522611a79565b604051908152f35b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357610561610388565b60243561056d43611ba0565b65ffffffffffff81168210156105e3576102d979ffffffffffffffffffffffffffffffffffffffffffffffffffff6105d28473ffffffffffffffffffffffffffffffffffffffff8716600052600a6020526105cc604060002091611ba0565b90611c33565b604051911681529081906020820190565b6040517fecd3f81e000000000000000000000000000000000000000000000000000000008152600481019290925265ffffffffffff166024820152604490fd5b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835761065a610388565b602435610665611d12565b73ffffffffffffffffffffffffffffffffffffffff821680156107785761069661069183600254611c26565b600255565b6106c08373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b8054830190556040518281526000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a36002549179ffffffffffffffffffffffffffffffffffffffffffffffffffff8311610726576107249250612a68565b005b6040517f1cb15d260000000000000000000000000000000000000000000000000000000081526004810184905279ffffffffffffffffffffffffffffffffffffffffffffffffffff6024820152604490fd5b60246040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152fd5b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835761072460043533611d63565b346103835760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835761081c43611ba0565b65ffffffffffff8061082d43611ba0565b16911603610882576102d960405161084481611675565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c7400000060208201526040519182916020835260208301906101ec565b60046040517f6ff07140000000000000000000000000000000000000000000000000000000008152fd5b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357602073ffffffffffffffffffffffffffffffffffffffff806108fb610388565b166000526009825260406000205416604051908152f35b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835761072461094c610388565b33611ea9565b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835773ffffffffffffffffffffffffffffffffffffffff61099e610388565b16600052600a60205260406000205463ffffffff908181116109c65760209160405191168152f35b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252602060048301526024820152fd5b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610383576020610522610a3a610388565b73ffffffffffffffffffffffffffffffffffffffff16600052600060205260406000205490565b34610383576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038057610a99611d12565b8073ffffffffffffffffffffffffffffffffffffffff6005547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357610724610b3a610388565b60243590610b49823383611753565b611d63565b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835773ffffffffffffffffffffffffffffffffffffffff610b9a610388565b1660005260086020526020604060002054604051908152f35b34610383576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038057610c8b90610c107f0000000000000000000000000000000000000000000000000000000000000000612515565b90610c3a7f000000000000000000000000000000000000000000000000000000000000000061264d565b9060405191610c4883611696565b818352610c996020916040519687967f0f00000000000000000000000000000000000000000000000000000000000000885260e0602089015260e08801906101ec565b9086820360408801526101ec565b904660608601523060808601528260a086015284820360c0860152602080855193848152019401925b828110610cd157505050500390f35b835185528695509381019392810192600101610cc2565b346103835760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357602073ffffffffffffffffffffffffffffffffffffffff60055416604051908152f35b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357600435610d7543611ba0565b9065ffffffffffff918281168210156105e35750610d9290611ba0565b600b54906000908260058111610e18575b50610dae93506122f1565b80610ddd5750602060005b79ffffffffffffffffffffffffffffffffffffffffffffffffffff60405191168152f35b610de8602091611beb565b600b6000527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9015460301c610db9565b9092610e23826121b1565b8203918211610e8157610dae94600b60005280837f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db901541690851610600014610e6f5750915b38610da3565b929150610e7b90611c18565b90610e69565b6115c4565b346103835760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610383576020610ec043611ba0565b65ffffffffffff60405191168152f35b34610383576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038057604051908060045490610f12826115f3565b808552916020916001918281169081156103355750600114610f3e576102d9866102cd818803826116ea565b9350600484527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b838510610f83575050505081016020016102cd826102d9386102bd565b8054868601840152938201938101610f66565b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835773ffffffffffffffffffffffffffffffffffffffff610fe2610388565b16600052600a602052602079ffffffffffffffffffffffffffffffffffffffffffffffffffff6110156040600020611fc3565b16604051908152f35b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357610412611058610388565b6024359033611902565b6064359060ff8216820361038357565b6084359060ff8216820361038357565b346103835760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610383576110b9610388565b604435906024356110c8611062565b83421161115e5761115261072494611159926040519060208201927fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf845273ffffffffffffffffffffffffffffffffffffffff8816604084015286606084015260808301526080825261113a826116b2565b61114d60a435936084359351902061200d565b61204e565b9182612066565b611ea9565b602484604051907f4683af0e0000000000000000000000000000000000000000000000000000000082526004820152fd5b346103835760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610383576111c6610388565b6111ce6103ab565b604435906064356111dd611072565b81421161134d57906112946112d3926112c06112228873ffffffffffffffffffffffffffffffffffffffff166000526008602052604060002080549060018201905590565b9360405193849160208301968a8a8d8a91959493909260a09360c08401977f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9855273ffffffffffffffffffffffffffffffffffffffff8092166020860152166040840152606083015260808201520152565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018452836116ea565b61114d60c4359360a4359351902061200d565b73ffffffffffffffffffffffffffffffffffffffff808516908216036112fd5750610724926120f2565b6040517f4b800e4600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529084166024820152604490fd5b602482604051907f627913020000000000000000000000000000000000000000000000000000000082526004820152fd5b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357602061140a6113ba610388565b73ffffffffffffffffffffffffffffffffffffffff6113d76103ab565b91166000526001835260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54604051908152f35b346103835760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103835761144a610388565b60243563ffffffff81168103610383576114a66114ac9173ffffffffffffffffffffffffffffffffffffffff60409461148161173a565b5061148a61173a565b5016600052600a602052836000206114a061173a565b506128ba565b50612901565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff602083519265ffffffffffff81511684520151166020820152f35b346103835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261038357611519610388565b611521611d12565b73ffffffffffffffffffffffffffffffffffffffff80911690811561159357600554827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60246040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b90600182811c9216801561163c575b602083101461160d57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691611602565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761169157604052565b611646565b6020810190811067ffffffffffffffff82111761169157604052565b60a0810190811067ffffffffffffffff82111761169157604052565b60c0810190811067ffffffffffffffff82111761169157604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761169157604052565b6040519061173882611675565b565b6040519061174782611675565b60006020838281520152565b919073ffffffffffffffffffffffffffffffffffffffff808416908160005260016020526117a58360406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83036117d7575b505050505050565b8483106118ad571561187c5782161561184b5761183f9261181a91039373ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b553880808080806117cf565b60246040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152fd5b60246040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152fd5b6040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024810184905260448101869052606490fd5b92919073ffffffffffffffffffffffffffffffffffffffff93848116948515611a485782168015610778576119578273ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b54958487106119f357846117389697036119918473ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b556119bc8473ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b8054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a3612aee565b6040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024810188905260448101869052606490fd5b60246040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152fd5b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016301480611b77575b15611ae1577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a08152611b71816116ce565b51902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611ab8565b65ffffffffffff90818111611bb3571690565b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252603060048301526024820152fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8201918211610e8157565b9060018201809211610e8157565b91908201809211610e8157565b908154906000918060058111611cc6575b50915b828110611c7657505080611c5c575050600090565b611c6590611beb565b906000526020600020015460301c90565b90918082169080831860011c8201809211610e81578460005265ffffffffffff8083602060002001541690851610600014611cb45750915b90611c47565b929150611cc090611c18565b90611cae565b90611cd0826121b1565b8203918211610e81578460005265ffffffffffff8083602060002001541690841610600014611d0157505b38611c44565b9250611d0c90611c18565b91611cfb565b73ffffffffffffffffffffffffffffffffffffffff600554163303611d3357565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b919073ffffffffffffffffffffffffffffffffffffffff8084168015611a4857611dad8573ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b5494838610611e52579060209291611dec856117389798039173ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b558360025403600255604051848152817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6000958693a3611e34611e2f85612937565b612a23565b5050825260096020526040818184205416928080522054169061236c565b6040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9190911660048201526024810186905260448101849052606490fd5b61173891611f5873ffffffffffffffffffffffffffffffffffffffff927fffffffffffffffffffffffff0000000000000000000000000000000000000000848216948560005260096020526040600020958654968288169788938816948591161790557f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f600080a473ffffffffffffffffffffffffffffffffffffffff16600052600060205260406000205490565b9161236c565b600b5480611f6c5750600090565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810111610e8157600b6000527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db8015460301c90565b805480611fd1575050600090565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff918183810111610e8157600052602060002001015460301c90565b604290612018611a79565b90604051917f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201522090565b9161025b939161205d9361270d565b909291926127e3565b9061209a8273ffffffffffffffffffffffffffffffffffffffff166000526008602052604060002080549060018201905590565b8091036120a5575050565b6044925073ffffffffffffffffffffffffffffffffffffffff604051927f752d88c00000000000000000000000000000000000000000000000000000000084521660048301526024820152fd5b9073ffffffffffffffffffffffffffffffffffffffff9182811692831561187c57821693841561184b578061216e7f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259461181a60209573ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b55604051908152a3565b8115612182570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b80156122eb578061228461227d61227361226961225f61225561224b612241600161025b9a6000908b60801c806122df575b508060401c806122d2575b508060201c806122c5575b508060101c806122b8575b508060081c806122ab575b508060041c8061229e575b508060021c80612291575b50821c61228a575b811c1b61223a818b612178565b0160011c90565b61223a818a612178565b61223a8189612178565b61223a8188612178565b61223a8187612178565b61223a8186612178565b61223a8185612178565b8092612178565b90612925565b810161222d565b6002915091019038612225565b600491509101903861221a565b600891509101903861220f565b6010915091019038612204565b60209150910190386121f9565b60409150910190386121ee565b915050608090386121e3565b50600090565b905b8281106122ff57505090565b90918082169080831860011c8201809211610e8157600b60005265ffffffffffff80837f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90154169085161060001461235a5750915b906122f3565b92915061236690611c18565b90612354565b919073ffffffffffffffffffffffffffffffffffffffff9283821693811690848214158061250c575b6123a1575b5050505050565b8161244a575b5050826123b6575b808061239a565b7fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7249161240e6124086124149373ffffffffffffffffffffffffffffffffffffffff16600052600a602052604060002090565b91612937565b90612996565b6040805179ffffffffffffffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152a23880806123af565b6124749073ffffffffffffffffffffffffffffffffffffffff16600052600a602052604060002090565b61247d84612937565b61248643611ba0565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff9182806124ad86611fc3565b169116900392828411610e81577fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72493612502926124e992612e2e565b6040805192851683529316602082015291829190820190565b0390a238806123a7565b50831515612395565b60ff811461256b5760ff811690601f8211612541576040519161253783611675565b8252602082015290565b60046040517fb3512b0c000000000000000000000000000000000000000000000000000000008152fd5b5060405160065481600061257e836115f3565b8083529260209060019081811690811561260a57506001146125a9575b505061025b925003826116ea565b91509260066000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f936000925b8284106125f2575061025b945050508101602001388061259b565b855487850183015294850194869450928101926125d7565b90506020935061025b9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b820101388061259b565b60ff811461266f5760ff811690601f8211612541576040519161253783611675565b50604051600754816000612682836115f3565b8083529260209060019081811690811561260a57506001146126ac57505061025b925003826116ea565b91509260076000527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688936000925b8284106126f5575061025b945050508101602001388061259b565b855487850183015294850194869450928101926126da565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161279e57926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa1561279257805173ffffffffffffffffffffffffffffffffffffffff81161561278957918190565b50809160019190565b604051903d90823e3d90fd5b50505060009160039190565b600411156127b457565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6127ec816127aa565b806127f5575050565b6127fe816127aa565b600181036128305760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b612839816127aa565b60028103612873576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b8061287f6003926127aa565b146128875750565b6040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810191909152602490fd5b80548210156128d25760005260206000200190600090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060405161290e81611675565b915465ffffffffffff8116835260301c6020830152565b9080821015612932575090565b905090565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff9081811161295e571690565b604490604051907f6dfcc65000000000000000000000000000000000000000000000000000000000825260d060048301526024820152fd5b906129a043611ba0565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff9182806129c786611fc3565b16911601918211610e81576129db92612e2e565b9091565b6129e843611ba0565b9079ffffffffffffffffffffffffffffffffffffffffffffffffffff908180612a0f611f5e565b16911601908111610e81576129db91612c85565b612a2c43611ba0565b9079ffffffffffffffffffffffffffffffffffffffffffffffffffff908180612a53611f5e565b1691169003908111610e81576129db91612c85565b9061173891612a7e612a7983612937565b6129df565b505073ffffffffffffffffffffffffffffffffffffffff809116908115612adb575b60096020527fec8156718a8372b1db44bb411437d0870f3e3790d4a08526d024ce1b0b668f6b5460009283526040909220548116911661236c565b612ae7611e2f84612937565b5050612aa0565b90611738929173ffffffffffffffffffffffffffffffffffffffff80809216928315612b52575b16918215612b3f575b6000526009602052806040600020541691600052604060002054169061236c565b612b4b611e2f85612937565b5050612b1e565b612b5e612a7986612937565b5050612b15565b600b549068010000000000000000821015611691576001820180600b558210156128d257600b60005280516020919091015160301b7fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000001665ffffffffffff91909116177f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db990910155565b80546801000000000000000081101561169157612c11916001820181556128ba565b612c565781516020929092015160301b7fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000001665ffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b600b54919291908115612df157612cd0612ccb612ca184611beb565b600b6000527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90190565b612901565b805165ffffffffffff8381169491168410612dc75785602093612d7895612d0b612d00865165ffffffffffff1690565b65ffffffffffff1690565b03612d7c5750612d20612ca1612d5793611beb565b9065ffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000083549260301b169116179055565b015179ffffffffffffffffffffffffffffffffffffffffffffffffffff1690565b9190565b9050612dc29150612d9c612d8e61172b565b65ffffffffffff9092168252565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff871681850152612b65565b612d57565b60046040517f2520601d000000000000000000000000000000000000000000000000000000008152fd5b612e289150612e01612d8e61172b565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff84166020820152612b65565b60009190565b805492939291908215612eff57612e57612ccb612e4a85611beb565b8360005260206000200190565b90612e68825165ffffffffffff1690565b65ffffffffffff84811691168110612dc757612d78946020948892612e96612d00875165ffffffffffff1690565b03612eb95750612d5792612eac612d2092611beb565b9060005260206000200190565b915050612dc291612ed9612ecb61172b565b65ffffffffffff9093168352565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff881682860152612bef565b612e289250612f0f612ecb61172b565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff85166020830152612bef56fea26469706673582212202cf46aeeeedd58a631c259fd2be62635e331bb41a16f53b75118d31d1cfbd4d064736f6c634300081600330175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724";

export const OZ_TIMELOCK_BYTECODE = "0x6080604052346200017557620021d8803803806200001d816200017a565b9283398101906080818303126200017557805160208201516001600160401b039081811162000175578462000054918501620001cb565b9360408401519182116200017557620000766060916200007e938601620001cb565b9301620001b6565b906200008a3062000269565b506001600160a01b039180831662000162575b5060005b8451811015620000e95780620000c784620000bf600194896200023e565b5116620002e9565b50620000e184620000d983896200023e565b51166200038b565b5001620000a1565b50925060005b82518110156200011d578062000115836200010d600194876200023e565b511662000428565b5001620000ef565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560408580600255815190600082526020820152a1604051611cf29081620004c68239f35b6200016d9062000269565b50386200009d565b600080fd5b6040519190601f01601f191682016001600160401b03811183821017620001a057604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200017557565b81601f8201121562000175578051916020916001600160401b038411620001a0578360051b908380620002008185016200017a565b80978152019282010192831162000175578301905b82821062000224575050505090565b8380916200023284620001b6565b81520191019062000215565b8051821015620002535760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b031660008181527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604081205490919060ff16620002e557818052816020526040822081835260205260408220600160ff198254161790553391600080516020620021b88339815191528180a4600190565b5090565b6001600160a01b031660008181527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560205260408120549091907fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc19060ff166200038657808352826020526040832082845260205260408320600160ff19825416179055600080516020620021b8833981519152339380a4600190565b505090565b6001600160a01b031660008181527fc3ad33e20b0c56a223ad5104fff154aa010f8715b9c981fd38fdc60a4d1a52fb60205260408120549091907ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7839060ff166200038657808352826020526040832082845260205260408320600160ff19825416179055600080516020620021b8833981519152339380a4600190565b6001600160a01b031660008181527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205260408120549091907fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff166200038657808352826020526040832082845260205260408320600160ff19825416179055600080516020620021b8833981519152339380a460019056fe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c90816301d5062a14610f6757816301ffc9a714610e7257816307bd026514610e1957838263134008d314610d5d5750816313bc9f2014610d1f578163150b7a0214610c92578163248a9ca314610c4a5781632ab0f52914610c0c5781632f2ff15d14610bc457816331d5075014610b8657816336568abe14610afc578163584b153e14610ab557816364d6235314610a125781637958004c146109985781638065657f146109765781638f2a0bb0146107a15781638f61f4f51461074857816391d14854146106d8578163a217fddf1461069f578163b08e51c014610646578163b1c5f4271461061a578163bc197c811461055c578163c4d252f51461043d578163d45c4435146103f7578163d547741f14610394578163e38335e51461022e578163f23a6e611461019e575063f27a0c9203610011573461019a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a576020906002549051908152f35b5080fd5b82843461022b5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b576101d7611064565b506101e061108c565b506084359067ffffffffffffffff821161022b575060209261020491369101611201565b50517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b80fd5b905061023936611279565b9098949591939296977fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638b528a602052858b208b805260205260ff868c20541615610386575b83831480159061037c575b61033857506102a26102a9918a868a878b888f611636565b9889611a21565b885b8181106102bf57896102bc8a611b0e565b80f35b80808a7fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a61032f6103178f988c610310828e61030a8f60019f610305918591611576565b6115b5565b97611576565b35956115d6565b9061032482828787611ab9565b8d51948594856113e5565b0390a3016102ab565b85517fffb032110000000000000000000000000000000000000000000000000000000081529081019283526020830185905260408301849052918291506060010390fd5b508483141561028a565b61038f33611970565b61027f565b919050346103f357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f3576103ef91356103ea60016103d761108c565b93838752866020528620015433906119e2565b611bd8565b5080f35b8280fd5b9050346103f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f35760209282913581526001845220549051908152f35b919050346103f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f3578135917ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838085528460205282852033865260205260ff83862054161561052857506104b983611490565b156104f35750829082825260016020528120557fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb708280a280f35b8260449251917f5ead8eb500000000000000000000000000000000000000000000000000000000835282015260066024820152fd5b60449251917fe2517d3f00000000000000000000000000000000000000000000000000000000835233908301526024820152fd5b82843461022b5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b57610595611064565b5061059e61108c565b5067ffffffffffffffff9060443582811161019a576105c090369086016112f9565b5060643582811161019a576105d890369086016112f9565b5060843591821161022b57506020926105f391369101611201565b50517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b50503461019a5760209061063f61063036611279565b96959095949194939293611636565b9051908152f35b50503461019a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a57602090517ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7838152f35b50503461019a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a5751908152602090f35b9050346103f357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f3578160209360ff9261071761108c565b9035825281865273ffffffffffffffffffffffffffffffffffffffff83832091168252855220541690519015158152f35b50503461019a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a57602090517fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc18152f35b919050346103f35760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f35767ffffffffffffffff908235828111610972576107f39036908501611248565b9360243584811161096e5761080b9036908301611248565b9460443590811161096a576108239036908401611248565b606493919335906084359760a4359361083b336118c7565b818b14801590610960575b61091c575061085c89848489858f8b908e611636565b99610867858c6117f6565b8a8c5b8a8382106108b0578e838e838161087f578380f35b7f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03879160209151908152a28180808380f35b6001927f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b6109118f8c88978f92898f8f8f6108ff916108f961030586809461090699611576565b9a611576565b35986115d6565b91519687968761139f565b0390a3018b9061086a565b88517fffb032110000000000000000000000000000000000000000000000000000000081529081018b81526020810184905260408101929092529081906060010390fd5b50828b1415610846565b8780fd5b8680fd5b8480fd5b50503461019a5760209061063f61098c366110dd565b949390939291926114f5565b83833461019a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a576109d383356114b9565b905191838210156109e657602083838152f35b806021857f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b919050346103f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f357813591303303610a8657507f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5906002548151908152836020820152a160025580f35b60249151907fe2850c590000000000000000000000000000000000000000000000000000000082523390820152fd5b82843461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5750610af360209235611490565b90519015158152f35b83833461019a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a57610b3461108c565b903373ffffffffffffffffffffffffffffffffffffffff831603610b5e57506103ef919235611bd8565b8390517f6697b232000000000000000000000000000000000000000000000000000000008152fd5b82843461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5750610af360209235611479565b919050346103f357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f3576103ef9135610c0760016103d761108c565b611b2e565b82843461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5750610af360209235611461565b9050346103f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f357816020936001923581528085522001549051908152f35b82843461022b5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b57610ccb611064565b50610cd461108c565b506064359067ffffffffffffffff821161022b5750602092610cf891369101611201565b50517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b82843461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5750610af36020923561141a565b6102bc610ded82610e037fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58610de489610d95366110dd565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638b9a9697939598929a528a602052828b208b805260205260ff838c20541615610e0b575b8985858a8a6114f5565b998a9889611a21565b610df983838888611ab9565b51948594856113e5565b0390a3611b0e565b610e1433611970565b610dda565b50503461019a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261019a57602090517fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638152f35b9050346103f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f35735907fffffffff0000000000000000000000000000000000000000000000000000000082168092036103f357602092507f4e2312e0000000000000000000000000000000000000000000000000000000008214918215610f07575b50519015158152f35b9091507f7965db0b000000000000000000000000000000000000000000000000000000008114908115610f3d575b509038610efe565b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610f35565b919050346103f35760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103f357610fa1611064565b908360243560443567ffffffffffffffff81116103f3577f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca95610fe6913691016110af565b959091606435956110276084359760a43590611001336118c7565b61100f8a828d8a89896114f5565b9a8b9761101c848a6117f6565b8a519687968761139f565b0390a381611033578380f35b7f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03879160209151908152a23880808380f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361108757565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361108757565b9181601f840112156110875782359167ffffffffffffffff8311611087576020838186019501011161108757565b60a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126110875760043573ffffffffffffffffffffffffffffffffffffffff811681036110875791602435916044359067ffffffffffffffff82116110875761114b916004016110af565b90916064359060843590565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761119857604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161119857601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561108757803590611218826111c7565b926112266040519485611157565b8284526020838301011161108757816000926020809301838601378301015290565b9181601f840112156110875782359167ffffffffffffffff8311611087576020808501948460051b01011161108757565b9060a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8301126110875767ffffffffffffffff60043581811161108757836112c491600401611248565b9390939260243583811161108757826112df91600401611248565b939093926044359182116110875761114b91600401611248565b81601f820112156110875780359160209167ffffffffffffffff8411611198578360051b906040519461132e85840187611157565b85528380860192820101928311611087578301905b828210611351575050505090565b81358152908301908301611343565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b9290936113db9273ffffffffffffffffffffffffffffffffffffffff60809699989799168552602085015260a0604085015260a0840191611360565b9460608201520152565b611417949273ffffffffffffffffffffffffffffffffffffffff60609316825260208201528160408201520191611360565b90565b611423906114b9565b60048110156114325760021490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61146a906114b9565b60048110156114325760031490565b611482906114b9565b600481101561143257151590565b611499906114b9565b600481101561143257600181149081156114b1575090565b600291501490565b600052600160205260406000205480156000146114d65750600090565b600181036114e45750600390565b4210156114f057600190565b600290565b946115396115709495929360405196879573ffffffffffffffffffffffffffffffffffffffff602088019a168a52604087015260a0606087015260c0860191611360565b91608084015260a0830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611157565b51902090565b91908110156115865760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3573ffffffffffffffffffffffffffffffffffffffff811681036110875790565b91908110156115865760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561108757019081359167ffffffffffffffff8311611087576020018236038113611087579190565b969294909695919560405196602091828901998060c08b0160a08d525260e08a01919060005b8181106117c0575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe097888a83030160408b01528082527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111611087579089969495939897929160051b80928a830137019380888601878703606089015252604085019460408260051b82010195836000925b84841061171a575050505050506115709550608084015260a083015203908101835282611157565b91939698509193989994967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082820301845289357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181121561108757830186810191903567ffffffffffffffff8111611087578036038313611087576117a988928392600195611360565b9b0194019401918b98969394919a9997959a6116f2565b90919283359073ffffffffffffffffffffffffffffffffffffffff8216809203611087579081528501928501919060010161165c565b9061180082611479565b61188f576002548082106118585750420190814211611829576000526001602052604060002055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60449250604051917f5433660900000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b604482604051907f5ead8eb5000000000000000000000000000000000000000000000000000000008252600482015260016024820152fd5b73ffffffffffffffffffffffffffffffffffffffff1660008181527f3412d5605ac6cd444957cedb533e5dacad6378b4bc819ebe3652188a665066d560205260409020547fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc19060ff1615611939575050565b60449250604051917fe2517d3f00000000000000000000000000000000000000000000000000000000835260048301526024820152fd5b73ffffffffffffffffffffffffffffffffffffffff1660008181527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d706960205260409020547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff1615611939575050565b80600052600060205273ffffffffffffffffffffffffffffffffffffffff60406000209216918260005260205260ff6040600020541615611939575050565b611a2a8161141a565b15611a81575080151580611a71575b611a405750565b602490604051907f90a9a6180000000000000000000000000000000000000000000000000000000082526004820152fd5b50611a7b81611461565b15611a39565b604490604051907f5ead8eb5000000000000000000000000000000000000000000000000000000008252600482015260046024820152fd5b611b0393600093928493826040519384928337810185815203925af13d15611b06573d90611ae6826111c7565b91611af46040519384611157565b82523d6000602084013e611c79565b50565b606090611c79565b611b178161141a565b15611a815760005260016020526001604060002055565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff60408420541615600014611bd35780835282602052604083208284526020526040832060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d339380a4600190565b505090565b906000918083528260205273ffffffffffffffffffffffffffffffffffffffff6040842092169182845260205260ff604084205416600014611bd3578083528260205260408320828452602052604083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4600190565b909190611cba5750805115611c9057805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b56fea26469706673582212206541ecd42480fe732369430189481be8a24453d8fdd0eefc710f8b445fc3063b64736f6c634300081600332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

export const OZ_GOVERNOR_BYTECODE = "0x61018060405234620000b9576200002562000019620001c0565b9094959193956200029a565b604051615872908162000d978239608051816144c8015260a0518161457d015260c05181614499015260e051816145170152610100518161453d01526101205181611779015261014051816117a5015261016051818181611b0101528181612276015281816124590152818161252901528181612eb5015281816133580152818161347701528181613e9801526155610152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117620000f057604052565b620000be565b60c081019081106001600160401b03821117620000f057604052565b601f909101601f19168101906001600160401b03821190821017620000f057604052565b604051906200014582620000d4565b565b6001600160a01b03811603620000b957565b6001600160401b038111620000f057601f01601f191660200190565b60005b838110620001895750506000910152565b818101518382015260200162000178565b519065ffffffffffff82168203620000b957565b519063ffffffff82168203620000b957565b62006629908138038060405193620001d9828662000112565b843982019060e083830312620000b957825190620001f78262000147565b602084015193620002088562000147565b60408101516001600160401b038111620000b957810184601f82011215620000b9578051620002378162000159565b9562000247604051978862000112565b81875260208284010111620000b95762000268916020808801910162000175565b62000276606082016200019a565b926200028560808301620001ae565b9260c060a08401519301519196959493929190565b94620003776200039095620003716200037d94966200036b620001459b604051620002c581620000d4565b6001815260208101603160f81b8152620002df836200080f565b61012052620002ee826200091e565b6101405282516020840120918260e05251902080610100524660a0526040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a081526200035b81620000f6565b5190206080523060c052620004e7565b62000705565b62000752565b620007d6565b6001600160a01b03166101605262000631565b620005e2565b90600182811c92168015620003c8575b6020831014620003b257565b634e487b7160e01b600052602260045260246000fd5b91607f1691620003a6565b601f8111620003e0575050565b60009060036000526020600020906020601f850160051c8301941062000423575b601f0160051c01915b8281106200041757505050565b8181556001016200040a565b909250829062000401565b601f81116200043b575050565b600090600080526020600020906020601f850160051c830194106200047d575b601f0160051c01915b8281106200047157505050565b81815560010162000464565b90925082906200045b565b90601f821162000496575050565b60019160009060016000526020600020906020601f850160051c83019410620004dc575b601f0160051c01915b828110620004d15750505050565b8181558301620004c3565b9092508290620004ba565b80519091906001600160401b038111620000f05762000513816200050d60035462000396565b620003d3565b602080601f83116001146200055a575081906200054993946000926200054e575b50508160011b916000199060031b1c19161790565b600355565b01519050388062000534565b6003600052601f198316949091907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b926000905b878210620005c9575050836001959610620005af575b505050811b01600355565b015160001960f88460031b161c19169055388080620005a4565b806001859682949686015181550195019301906200058e565b600d547f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401604060018060a01b038094169381519084168152846020820152a16001600160a01b03191617600d55565b9060648211620006e557600c5460009290806200069e57506000805160206200660983398151915291925060005b6200067f6200066d62000a0a565b620006788462000ab9565b9062000c42565b5050604080516001600160d01b039290921682526020820192909252a1565b600019908082810111620006d157602085600c600080516020620066098339815191529697522001015460301c6200065f565b634e487b7160e01b85526011600452602485fd5b60405163243e544560e01b81526004810183905260646024820152604490fd5b6008547fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93604065ffffffffffff81519481851686521693846020820152a165ffffffffffff191617600855565b63ffffffff808216918215620007bd577f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828604069ffffffff00000000000093600854958251918760301c1682526020820152a160301b169069ffffffff000000000000191617600855565b60405163f1cfbf0560e01b815260006004820152602490fd5b60075460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc0546191a1600755565b9081516020906020811060001462000832575050906200082f9062000aed565b90565b6001600160401b038111620000f0576000916200085b8262000855855462000396565b6200042e565b602090601f831160011462000897575081908394956200089094926200054e5750508160011b916000199060031b1c19161790565b905560ff90565b60008052601f198316957f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563929185905b8882106200090557505083600195969710620008eb575b505050811b01905560ff90565b015160001960f88460031b161c19169055388080620008de565b80600185968294968601518155019501930190620008c7565b908151602090602081106000146200093e575050906200082f9062000aed565b6001600160401b038111620000f057600191620009678262000961855462000396565b62000488565b602090601f83116001146200099d57508190620008909394956000926200054e5750508160011b916000199060031b1c19161790565b6001600052601f198316959091907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6926000905b888210620009f25750508385969710620008eb57505050811b01905560ff90565b808785968294968601518155019501930190620009d1565b610160516040516324776b7d60e21b815290602090829060049082906001600160a01b03165afa6000918162000a75575b506200082f575065ffffffffffff80431162000a5657431690565b6040516306dfcc6560e41b815260306004820152436024820152604490fd5b9091506020813d60201162000ab0575b8162000a946020938362000112565b81010312620000b95762000aa8906200019a565b903862000a3b565b3d915062000a85565b6001600160d01b039081811162000ace571690565b604490604051906306dfcc6560e41b825260d060048301526024820152fd5b601f81511162000b1b57602081519101516020821062000b0b571790565b6000198260200360031b1b161790565b6044604051809263305a27a960e01b82526020600483015262000b4e815180928160248601526020868601910162000175565b601f01601f19168101030190fd5b60001981019190821162000b6c57565b634e487b7160e01b600052601160045260246000fd5b600c549068010000000000000000821015620000f0576001820180600c5582101562000bf557600c60005280516020919091015160301b65ffffffffffff191665ffffffffffff91909116177fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c790910155565b634e487b7160e01b600052603260045260246000fd5b604080519192919081016001600160401b03811182821017620000f057604052915465ffffffffffff8116835260301c6020830152565b600c5491929190811562000d675762000c9362000c8d62000c638462000b5c565b600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70190565b62000c0b565b805165ffffffffffff838116949116841062000d55578560209362000d139562000cd262000cc7865165ffffffffffff1690565b65ffffffffffff1690565b0362000d17575062000cec62000c6362000d059362000b5c565b9065ffffffffffff82549181199060301b169116179055565b01516001600160d01b031690565b9190565b905062000d4f915062000d3b62000d2d62000136565b65ffffffffffff9092168252565b6001600160d01b0387168185015262000b82565b62000d05565b604051632520601d60e01b8152600490fd5b62000d90915062000d7b62000d2d62000136565b6001600160d01b038416602082015262000b82565b6000919056fe60806040526004361015610023575b361561001957600080fd5b6100216135df565b005b60003560e01c806301ffc9a71461038357806302a251a31461037e57806306f3f9e61461037957806306fdde0314610374578063143489d01461036f578063150b7a021461036a578063160cbed71461036557806316e9eaec146103605780632656227d1461035b5780632d63f693146103565780632e82db94146103515780632fe3e2611461034c5780633932abb1146103475780633e4f49e61461034257806340e58ee51461033d5780634385963214610338578063452115d6146103335780634bf5d7e91461032e578063544ffc9c1461032957806354fd4d5014610324578063567813881461031f5780635b8d0e0d1461031a5780635f398a141461031557806360c4247f14610310578063790518871461030b5780637b3c71d3146103065780637d5e81e2146103015780637ecebe00146102fc57806384b0196e146102f75780638ff262e3146102f257806391ddadf4146102ed57806397c3d334146102e85780639a802a6d146102e3578063a7713a70146102de578063a890c910146102d9578063a9a95294146102d4578063ab58fb8e146102cf578063b58131b0146102ca578063bc197c81146102c5578063c01f9e37146102c0578063c28bc2fa146102bb578063c59057e4146102b6578063d33219b4146102b1578063da35c664146102ac578063dd4e2ba5146102a7578063ddf0b009146102a2578063deaaa7cc1461029d578063e540d01d14610298578063eb9019d414610293578063ece40cc11461028e578063f23a6e6114610289578063f8ce560a14610284578063fc0c546a1461027f5763fe0d94c10361000e5761254d565b6124de565b6123dd565b61232d565b6122ba565b6121d5565b6120e0565b612087565b61201e565b611fa2565b611f66565b611f14565b611ef8565b611e6d565b611e31565b611d5a565b611d1e565b611cc9565b611c8f565b611bd7565b611b7a565b611a4d565b611a13565b6119ca565b611846565b611742565b6116d9565b611621565b6115ad565b611504565b6114b8565b61142a565b611373565b6112df565b611253565b6111e8565b61119a565b61117e565b6110f9565b611089565b61103e565b610faf565b610f56565b610e96565b610e41565b610e2a565b610ddd565b610c81565b6109c4565b610791565b61066c565b6104c8565b610483565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361047357807f65455a860000000000000000000000000000000000000000000000000000000060209214908115610449575b811561041f575b506040519015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610414565b7f4e2312e0000000000000000000000000000000000000000000000000000000008114915061040d565b600080fd5b600091031261047357565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602063ffffffff60085460301c16604051908152f35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435610502613600565b606481116105ba5779ffffffffffffffffffffffffffffffffffffffffffffffffffff908161052f613ee5565b16610538613434565b92808311610582577f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b46339979361056e9184169061537f565b5050604080519182526020820192909252a1005b604483604051907f6dfcc65000000000000000000000000000000000000000000000000000000000825260d060048301526024820152fd5b604490604051907f243e5445000000000000000000000000000000000000000000000000000000008252600482015260646024820152fd5b60005b8381106106055750506000910152565b81810151838201526020016105f5565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610651815180928187528780880191016105f2565b0116010190565b906020610669928181520190610615565b90565b34610473576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261078e576040519080600354906106ae826125b1565b8085529160209160019182811690811561074357506001146106eb575b6106e7866106db818803826108c8565b60405191829182610658565b0390f35b9350600384527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b838510610730575050505081016020016106db826106e7386106cb565b8054868601840152938201938101610713565b8796506106e7979450602093506106db9592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201019293386106cb565b80fd5b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004356000526004602052602073ffffffffffffffffffffffffffffffffffffffff60406000205416604051908152f35b73ffffffffffffffffffffffffffffffffffffffff81160361047357565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161085257604052565b61080f565b6040810190811067ffffffffffffffff82111761085257604052565b6020810190811067ffffffffffffffff82111761085257604052565b60c0810190811067ffffffffffffffff82111761085257604052565b610100810190811067ffffffffffffffff82111761085257604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761085257604052565b604051906080820182811067ffffffffffffffff82111761085257604052565b6040519061093682610857565b565b67ffffffffffffffff811161085257601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b92919261097e82610938565b9161098c60405193846108c8565b829481845281830111610473578281602093846000960137010152565b9080601f830112156104735781602061066993359101610972565b346104735760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576109fe6004356107f1565b610a096024356107f1565b60643567ffffffffffffffff811161047357610a299036906004016109a9565b5073ffffffffffffffffffffffffffffffffffffffff600d54163003610a74576040517f150b7a02000000000000000000000000000000000000000000000000000000008152602090f35b60046040517fe90a651e000000000000000000000000000000000000000000000000000000008152fd5b67ffffffffffffffff81116108525760051b60200190565b9080601f83011215610473576020908235610ad081610a9e565b93610ade60405195866108c8565b81855260208086019260051b82010192831161047357602001905b828210610b07575050505090565b8380918335610b15816107f1565b815201910190610af9565b9080601f83011215610473576020908235610b3a81610a9e565b93610b4860405195866108c8565b81855260208086019260051b82010192831161047357602001905b828210610b71575050505090565b81358152908301908301610b63565b81601f8201121561047357803591602091610b9a84610a9e565b93610ba860405195866108c8565b808552838086019160051b8301019280841161047357848301915b848310610bd35750505050505090565b823567ffffffffffffffff8111610473578691610bf5848480948901016109a9565b815201920191610bc3565b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126104735767ffffffffffffffff916004358381116104735782610c4b91600401610ab6565b926024358181116104735783610c6391600401610b20565b9260443591821161047357610c7a91600401610b80565b9060643590565b34610473576020610c9d610c9436610c00565b92919091612604565b604051908152f35b90815180825260208080930193019160005b828110610cc5575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610cb7565b90815180825260208080930193019160005b828110610d0f575050505090565b835185529381019392810192600101610d01565b90808251908181526020809101926020808460051b8301019501936000915b848310610d525750505050505090565b9091929394958480610d8e837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086600196030187528a51610615565b9801930193019194939290610d42565b949392610dca606093610dbc610dd89460808a5260808a0190610ca5565b9088820360208a0152610cef565b908682036040880152610d23565b930152565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576106e7610e1a600435612a8e565b9060409492945194859485610d9e565b6020610c9d610e3836610c00565b92919091612b85565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004356000526004602052602065ffffffffffff60406000205460a01c16604051908152f35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435600a54811015610f5157610f3990600a6000527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80154610f47610f0a82612a8e565b9392959091610f2b604051978897885260a0602089015260a0880190610ca5565b908682036040880152610cef565b908482036060860152610d23565b9060808301520390f35b612b42565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735760206040517f3e83946653575f9a39005e1545185629e92736b7528ab20ca3816f315424a8118152f35b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602065ffffffffffff60085416604051908152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6008111561102c57565b610ff3565b90600882101561102c5752565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602061107a600435613839565b6110876040518092611031565bf35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435600052600b60205261002160406000206003810154906110da816128da565b906110f360026110ec60018401612941565b9201612992565b91612d40565b346104735760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602060ff61117260243561113b816107f1565b6004356000526009845260036040600020019073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54166040519015158152f35b34610473576020610c9d61119136610c00565b92919091612d40565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576106e76111d4612e71565b604051918291602083526020830190610615565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004356000526009602052604060002080546106e760026001840154930154604051938493846040919493926060820195825260208201520152565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576106e760405161129181610857565b600181527f31000000000000000000000000000000000000000000000000000000000000006020820152604051918291602083526020830190610615565b6024359060ff8216820361047357565b346104735760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576020610c9d61131b6112cf565b60405161132781610873565b600081526040519161133883610873565b6000835233600435613b37565b9181601f840112156104735782359167ffffffffffffffff8311610473576020838186019501011161047357565b346104735760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576113aa6112cf565b604435906113b7826107f1565b67ffffffffffffffff90606435828111610473576113d9903690600401611345565b608435848111610473576113f19036906004016109a9565b9160a435948511610473576106e79561141161141a9636906004016109a9565b94600435612f77565b6040519081529081906020820190565b346104735760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576114616112cf565b67ffffffffffffffff9060443582811161047357611483903690600401611345565b9091606435938411610473576114ae610c9d936114a660209636906004016109a9565b933691610972565b9033600435613b37565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576020610c9d60043561313a565b65ffffffffffff81160361047357565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735760043561153f816114f4565b611547613600565b7fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000006008547fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93604065ffffffffffff81519581851687521694856020820152a11617600855005b346104735760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576115e46112cf565b60443567ffffffffffffffff81116104735760209161161461160d610c9d933690600401611345565b3691610972565b6040519161133883610873565b346104735760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735767ffffffffffffffff60043581811161047357611671903690600401610ab6565b906024358181116104735761168a903690600401610b20565b91604435828111610473576116a3903690600401610b80565b6064359283116104735736602384011215610473576106e7936116d361141a943690602481600401359101610972565b926132a9565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735773ffffffffffffffffffffffffffffffffffffffff600435611729816107f1565b1660005260026020526020604060002054604051908152f35b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735761181761179d7f000000000000000000000000000000000000000000000000000000000000000061506c565b6106e76117c97f00000000000000000000000000000000000000000000000000000000000000006151a4565b611825604051916117d983610873565b600083526040519586957f0f00000000000000000000000000000000000000000000000000000000000000875260e0602088015260e0870190610615565b908582036040870152610615565b90466060850152306080850152600060a085015283820360c0850152610cef565b346104735760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004356118806112cf565b906044359161188e836107f1565b60643567ffffffffffffffff8111610473576119606118b46119649236906004016109a9565b61195a6118ea8773ffffffffffffffffffffffffffffffffffffffff166000526002602052604060002080549060018201905590565b60405160208101917ff2aad550cf55f045cb27e9c559f9889fdfb6e6cdaa032301d6ea397784ae51d7835288604083015260ff8816606083015273ffffffffffffffffffffffffffffffffffffffff8a16608083015260a082015260a081526119528161088f565b5190206139a6565b866139e7565b1590565b61197f579061141a916106e793611979612e25565b9261398a565b6040517f94ab6c0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602490fd5b0390fd5b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576020611a03613434565b65ffffffffffff60405191168152f35b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602060405160648152f35b346104735760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435611a88816107f1565b60443567ffffffffffffffff811161047357604491611aad60209236906004016109a9565b5073ffffffffffffffffffffffffffffffffffffffff92839160405194859384927f3a46b1a800000000000000000000000000000000000000000000000000000000845216600483015260243560248301527f0000000000000000000000000000000000000000000000000000000000000000165afa8015611b75576106e791600091611b46575b506040519081529081906020820190565b611b68915060203d602011611b6e575b611b6081836108c8565b810190613e35565b38611b35565b503d611b56565b612e19565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602079ffffffffffffffffffffffffffffffffffffffffffffffffffff611bce613ee5565b16604051908152f35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435611c12816107f1565b611c1a613600565b7fffffffffffffffffffffffff0000000000000000000000000000000000000000600d547f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401604073ffffffffffffffffffffffffffffffffffffffff8095169481519084168152856020820152a11617600d55005b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602060405160018152f35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004356000526004602052602065ffffffffffff60016040600020015416604051908152f35b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576020600754604051908152f35b346104735760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357611d946004356107f1565b611d9f6024356107f1565b67ffffffffffffffff60443581811161047357611dc0903690600401610b20565b5060643581811161047357611dd9903690600401610b20565b5060843590811161047357611df29036906004016109a9565b506106e7611dfe6134ee565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576020610c9d600435613531565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435611ea3816107f1565b6044359067ffffffffffffffff82116104735760008091611ecb610021943690600401611345565b90611ed4613600565b81604051928392833781018481520391602435905af1611ef2613563565b90613f4a565b34610473576020610c9d611f0b36610c00565b92919091613593565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602073ffffffffffffffffffffffffffffffffffffffff600d5416604051908152f35b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576020600a54604051908152f35b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576106e7604051611fe081610857565b602081527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e6020820152604051918291602083526020830190610615565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435600052600b602052610021604060002060038101549061206f816128da565b9061208160026110ec60018401612941565b91612604565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735760206040517ff2aad550cf55f045cb27e9c559f9889fdfb6e6cdaa032301d6ea397784ae51d78152f35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735763ffffffff600435818116918282036104735761212a613600565b82156121a4577fffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffff917f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828604069ffffffff00000000000093600854968251918860301c1682526020820152a160301b16911617600855600080f35b60246040517ff1cfbf0500000000000000000000000000000000000000000000000000000000815260006004820152fd5b346104735760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104735760446020600435612214816107f1565b600060405161222281610873565b5273ffffffffffffffffffffffffffffffffffffffff92839160405194859384927f3a46b1a800000000000000000000000000000000000000000000000000000000845216600483015260243560248301527f0000000000000000000000000000000000000000000000000000000000000000165afa8015611b75576106e791600091611b4657506040519081529081906020820190565b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576004356122f4613600565b60075460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc0546191a1600755005b346104735760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610473576123676004356107f1565b6123726024356107f1565b60843567ffffffffffffffff8111610473576123929036906004016109a9565b5073ffffffffffffffffffffffffffffffffffffffff600d54163003610a74576040517ff23a6e61000000000000000000000000000000000000000000000000000000008152602090f35b346104735760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435604051907f8e539e8c00000000000000000000000000000000000000000000000000000000825280600483015260208260248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa918215611b75576000926124b9575b506124949061313a565b908181029181830414901517156124b45760405160649091048152602090f35b6130b1565b6124949192506124d79060203d602011611b6e57611b6081836108c8565b919061248a565b346104735760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261047357600435600052600b6020526100216040600020600381015490612599816128da565b906125ab60026110ec60018401612941565b91612b85565b90600182811c921680156125fa575b60208310146125cb57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f16916125c0565b9290919261261482858584613593565b9361261e856136b9565b5061265a612641600d5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b93604051937ff27a0c9200000000000000000000000000000000000000000000000000000000855260209081866004818a5afa958615611b75576000966128bb575b507fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1618958160405180927fb1c5f42700000000000000000000000000000000000000000000000000000000825281806127008c8a8a8d60048601614054565b03915afa918215611b755760009261289e575b505061272987600052600e602052604060002090565b5561274c612641600d5473ffffffffffffffffffffffffffffffffffffffff1690565b90813b15610473576000809461279287604051998a97889687957f8f2a0bb00000000000000000000000000000000000000000000000000000000087526004870161407e565b03925af1908115611b75576127b6926127b192612885575b5042613ce6565b613c8d565b65ffffffffffff81161561285b57612855816128367f9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892936001612803876000526004602052604060002090565b019065ffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000825416179055565b6040805185815265ffffffffffff909216602083015290918291820190565b0390a190565b60046040517f90884a46000000000000000000000000000000000000000000000000000000008152fd5b806128926128989261083e565b80610478565b386127aa565b6128b49250803d10611b6e57611b6081836108c8565b3880612713565b6128d3919650823d8411611b6e57611b6081836108c8565b943861269c565b90604051918281549182825260209260208301916000526020600020936000905b82821061291157505050610936925003836108c8565b855473ffffffffffffffffffffffffffffffffffffffff16845260019586019588955093810193909101906128fb565b90604051918281549182825260209260208301916000526020600020936000905b82821061297857505050610936925003836108c8565b855484526001958601958895509381019390910190612962565b9081549161299f83610a9e565b926040916129b060405195866108c8565b81855260009081526020808220938291908188015b8584106129d55750505050505050565b81518386928954926129e6846125b1565b808252600194808616908115612a545750600114612a1c575b50612a0e8160019603826108c8565b8152019701930192956129c5565b8b8a52838a20955089905b808210612a3d5750810183019450612a0e6129ff565b865483830186015295850195889490910190612a27565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168584015250151560051b810183019450612a0e6129ff565b80600052600b602052604060002091604051906080820182811067ffffffffffffffff82111761085257604052612ac4846128da565b8252612ad260018501612941565b91602081019283526003612ae860028701612992565b9560408301968752015493606082019480865215612b0f5750519151935192519193929190565b6040517f6ad060750000000000000000000000000000000000000000000000000000000081526004810191909152602490fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8051821015610f515760209160051b010190565b91929092612b9582828686613593565b93612b9f85613724565b50612c00612bb7866000526004602052604060002090565b7e010000000000000000000000000000000000000000000000000000000000007fff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff825416179055565b73ffffffffffffffffffffffffffffffffffffffff9384600d54163003612cc9575b90612c2f939291866140cc565b612c513091600d541673ffffffffffffffffffffffffffffffffffffffff1690565b141580612c9f575b612c90575b6040518181527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f908060208101612855565b612c9a6000600555565b612c5e565b50612cc46119606005546fffffffffffffffffffffffffffffffff81169060801c1490565b612c59565b93909491959260005b8551811015612d345760019030612d09612641612cef848b612b71565b5173ffffffffffffffffffffffffffffffffffffffff1690565b14612d15575b01612cd2565b612d2f612d22828b612b71565b516020815191012061378f565b612d0f565b50929591949093612c22565b929190612d4f83838387613593565b612d5881613839565b600881101561102c5760018060ff83161b1615612dd35750600052600460205273ffffffffffffffffffffffffffffffffffffffff604060002054163303612da357610669936142ce565b60246040517f233d98e3000000000000000000000000000000000000000000000000000000008152336004820152fd5b90612e10606492604051927f31b75e4d00000000000000000000000000000000000000000000000000000000845260048401526024830190611031565b60016044820152fd5b6040513d6000823e3d90fd5b60405190612e3282610873565b60008252565b60405190612e4582610857565b601d82527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c740000006020830152565b6040517f4bf5d7e90000000000000000000000000000000000000000000000000000000081526000808260048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90918282612eef575b50506106695750610669612e38565b909192503d8082843e612f0281846108c8565b820191602081840312612f6f5780519067ffffffffffffffff8211612f73570182601f82011215612f6f57805191612f3983610938565b93612f4760405195866108c8565b8385526020848401011161078e575090612f6791602080850191016105f2565b903880612ee0565b5080fd5b8280fd5b93909291969561196061304f9161304987878c8b612fbe8273ffffffffffffffffffffffffffffffffffffffff166000526002602052604060002080549060018201905590565b73ffffffffffffffffffffffffffffffffffffffff612fde368c8e610972565b6020815191012092602081519101209360ff6040519660208801987f3e83946653575f9a39005e1545185629e92736b7528ab20ca3816f315424a8118a52604089015216606087015216608085015260a084015260c083015260e082015260e08152611952816108ab565b8a6139e7565b61306a57610669959691613064913691610972565b92613b37565b6040517f94ab6c0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88166004820152602490fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82019182116124b457565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd882019182116124b457565b600c547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181116124b457811115610f5157600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c68101549165ffffffffffff9281848216111561329f57506131b490613c8d565b6000908260058111613236575b506131cc9350614884565b806131d75750600090565b61323261322b61320179ffffffffffffffffffffffffffffffffffffffffffffffffffff936130e0565b600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70190565b5460301c90565b1690565b909261324182614744565b82039182116124b4576131cc94600c60005280837fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70154169085161060001461328d5750915b386131c1565b92915061329990613cd8565b90613287565b9250505060301c90565b91939290936132b88233613d04565b156134045765ffffffffffff947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff866132ef613434565b1601958087116124b457600060405161330781610873565b52604051967f3a46b1a800000000000000000000000000000000000000000000000000000000885233600489015216602487015260208660448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa958615611b75576000966133e3575b50600754958681106133a357506106699495503393614dc3565b6040517fc242ee16000000000000000000000000000000000000000000000000000000008152336004820152602481019190915260448101879052606490fd5b6133fd91965060203d602011611b6e57611b6081836108c8565b9438613389565b60246040517fd9b39557000000000000000000000000000000000000000000000000000000008152336004820152fd5b6040517f91ddadf400000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa600091816134b1575b50610669575061066943613c8d565b9091506020813d6020116134e6575b816134cd602093836108c8565b8101031261047357516134df816114f4565b90386134a2565b3d91506134c0565b73ffffffffffffffffffffffffffffffffffffffff600d54163003610a74577fbc197c810000000000000000000000000000000000000000000000000000000090565b600052600460205260406000205465ffffffffffff908163ffffffff8260d01c169160a01c16018181116124b4571690565b3d1561358e573d9061357482610938565b9161358260405193846108c8565b82523d6000602084013e565b606090565b92906135ad6135d992604051948593602085019788610d9e565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018352826108c8565b51902090565b73ffffffffffffffffffffffffffffffffffffffff600d54163003610a7457565b73ffffffffffffffffffffffffffffffffffffffff600d541633810361366957300361362857565b61363136610938565b61363e60405191826108c8565b368152602081019036600083376000602036830101525190205b80613661613fc4565b036136585750565b60246040517f47096e47000000000000000000000000000000000000000000000000000000008152336004820152fd5b6040906136b56000939594606083019683526020830190611031565b0152565b6136c281613839565b90600882101561102c576010600160ff84161b16156136df575090565b61371b606492604051927f31b75e4d00000000000000000000000000000000000000000000000000000000845260048401526024830190611031565b60106044820152fd5b61372d81613839565b90600882101561102c576030600160ff84161b161561374a575090565b613786606492604051927f31b75e4d00000000000000000000000000000000000000000000000000000000845260048401526024830190611031565b60306044820152fd5b6005548060801c9160018301926fffffffffffffffffffffffffffffffff809316838516146137f75760005260066020526040600020557fffffffffffffffffffffffffffffffff000000000000000000000000000000006005549260801b16911617600555565b60046040517f8acb5f27000000000000000000000000000000000000000000000000000000008152fd5b90816020910312610473575180151581036104735790565b61384281614191565b9061384c82611022565b60058203613986576138699150600052600e602052604060002090565b5461388c612641600d5473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f584b153e0000000000000000000000000000000000000000000000000000000081526004810183905260209291908381602481855afa908115611b7557600091613969575b50156138e357505050600590565b6040517f2ab0f52900000000000000000000000000000000000000000000000000000000815260048101929092528290829060249082905afa918215611b755760009261393c575b50501561393757600790565b600290565b61395b9250803d10613962575b61395381836108c8565b810190613821565b388061392b565b503d613949565b6139809150843d86116139625761395381836108c8565b386138d5565b5090565b9161066993916040519361399d85610873565b60008552613b37565b6042906139b1614482565b90604051917f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201522090565b6139f183836145a3565b50600481959295101561102c57159384613ab4575b508315613a14575b50505090565b6000929350908291604051613a66816135ad60208201947f1626ba7e00000000000000000000000000000000000000000000000000000000998a87526024840152604060448401526064830190610615565b51915afa90613a73613563565b82613aa6575b82613a89575b5050388080613a0e565b613a9e91925060208082518301019101613e35565b143880613a7f565b915060208251101591613a79565b73ffffffffffffffffffffffffffffffffffffffff838116911614935038613a06565b93909260ff613b039361066997958752166020860152604085015260a0606085015260a0840190610615565b916080818403910152610615565b909260ff6080936106699695845216602083015260408201528160608201520190610615565b92909193613b4484613839565b600881101561102c576002600160ff83161b1615613c475750836000526004602052613b95613b8f613b84604060002065ffffffffffff905460a01c1690565b65ffffffffffff1690565b84613e44565b948591613ba4838387896145df565b8051613bfc575073ffffffffffffffffffffffffffffffffffffffff927fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda49492613bf692604051958695169785613b11565b0390a290565b73ffffffffffffffffffffffffffffffffffffffff937fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87129593613bf693604051968796169886613ad7565b84613c84606492604051927f31b75e4d00000000000000000000000000000000000000000000000000000000845260048401526024830190611031565b60026044820152fd5b65ffffffffffff90818111613ca0571690565b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252603060048301526024820152fd5b90600182018092116124b457565b919082018092116124b457565b908151811015610f51570160200190565b815160348110613e2d577f2370726f706f7365723d307800000000000000000000000000000000000000007fffffffffffffffffffffffff00000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec83860101511603613e2d5791600092613d898161310d565b915b818310613db35750505073ffffffffffffffffffffffffffffffffffffffff80911691161490565b909193613df1613dec613dc68785613cf3565b517fff000000000000000000000000000000000000000000000000000000000000001690565b6148ff565b919015613e225773fffffffffffffffffffffffffffffffffffffff060ff600193169160041b161794019190613d8b565b505050505050600190565b505050600190565b90816020910312610473575190565b602090604473ffffffffffffffffffffffffffffffffffffffff918260405195869485937f3a46b1a800000000000000000000000000000000000000000000000000000000855216600484015260248301527f0000000000000000000000000000000000000000000000000000000000000000165afa908115611b7557600091613ecc575090565b610669915060203d602011611b6e57611b6081836108c8565b600c5480613ef35750600090565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101116124b457600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c6015460301c90565b9091906109365750805115613f6157805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b8115613f95570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600554906fffffffffffffffffffffffffffffffff8083169260801c831461402a57826000526006602052600160406000209360008554955501167fffffffffffffffffffffffffffffffff000000000000000000000000000000006005541617600555565b60046040517f75e52f4f000000000000000000000000000000000000000000000000000000008152fd5b949392610dca608093610dbc6140729460a08a5260a08a0190610ca5565b93600060608201520152565b91926140ad60a09461409f6140bb949998979960c0875260c0870190610ca5565b908582036020870152610cef565b908382036040850152610d23565b946000606083015260808201520152565b9290939173ffffffffffffffffffffffffffffffffffffffff600d541690813b1561047357600093614155604051978895869485947fe38335e50000000000000000000000000000000000000000000000000000000086527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b16189260048601614054565b039134905af1908115611b755760009261417f92614182575b50600052600e602052604060002090565b55565b61418b9061083e565b3861416e565b6141a5816000526004602052604060002090565b5460ff8160f01c166142c75760f81c6142c1576141e1613b846141d2836000526004602052604060002090565b5460a01c65ffffffffffff1690565b801561428f576141f2613b84613434565b809110156142885761420382613531565b1061420e5750600190565b61421a611960826154f3565b8015614263575b1561422c5750600390565b613b846001614248614255936000526004602052604060002090565b015465ffffffffffff1690565b61425e57600490565b600590565b506142836119608260005260096020526040600020600181015490541090565b614221565b5050600090565b6040517f6ad0607500000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b50600290565b5050600790565b906142da939291613593565b6142e381613839565b600881101561102c57603b600160ff83161b161561443c575061435c614313826000526004602052604060002090565b7f01000000000000000000000000000000000000000000000000000000000000007effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff825416179055565b6040518181527f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c90602090a161439c81600052600e602052604060002090565b54806143a6575090565b6143c8612641600d5473ffffffffffffffffffffffffffffffffffffffff1690565b803b15610473576040517fc4d252f500000000000000000000000000000000000000000000000000000000815260048101929092526000908290602490829084905af18015611b7557614429575b506000818152600e602052604081205590565b806128926144369261083e565b38614416565b90614479606492604051927f31b75e4d00000000000000000000000000000000000000000000000000000000845260048401526024830190611031565b603b6044820152fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630148061457a575b156144ea577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a081526135d98161088f565b507f000000000000000000000000000000000000000000000000000000000000000046146144c1565b81519190604183036145d4576145cd92506020820151906060604084015193015160001a906155ef565b9192909190565b505060009160029190565b6145f6909291926000526009602052604060002090565b916003830161462f61462883839073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5460ff1690565b6146fd5761466360ff939261468e929073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00825416179055565b16806146a55750906146a1908254613ce6565b9055565b600181036146bd575060016146a19101918254613ce6565b6002036146d35760026146a19101918254613ce6565b60046040517f06b337c2000000000000000000000000000000000000000000000000000000008152fd5b6040517f71c6af4900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602490fd5b801561487e57806148176148106148066147fc6147f26147e86147de6147d460016106699a6000908b60801c80614872575b508060401c80614865575b508060201c80614858575b508060101c8061484b575b508060081c8061483e575b508060041c80614831575b508060021c80614824575b50821c61481d575b811c1b6147cd818b613f8b565b0160011c90565b6147cd818a613f8b565b6147cd8189613f8b565b6147cd8188613f8b565b6147cd8187613f8b565b6147cd8186613f8b565b6147cd8185613f8b565b8092613f8b565b90615680565b81016147c0565b60029150910190386147b8565b60049150910190386147ad565b60089150910190386147a2565b6010915091019038614797565b602091509101903861478c565b6040915091019038614781565b91505060809038614776565b50600090565b905b82811061489257505090565b90918082169080831860011c82018092116124b457600c60005265ffffffffffff80837fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7015416908516106000146148ed5750915b90614886565b9291506148f990613cd8565b906148e7565b60f81c9081602f10806149cd575b1561493d5760ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd0600193011690565b81604010806149c3575b156149775760ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc9600193011690565b81606010806149b9575b156149b15760ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa9600193011690565b600091508190565b5060678210614981565b5060478210614947565b50603a821061490d565b600a5468010000000000000000811015610852576001810180600a55811015610f5157600a6000527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b818110614a2f575050565b60008155600101614a24565b91818110614a4857505050565b6109369260005260206000209182019101614a24565b81519167ffffffffffffffff83116108525768010000000000000000831161085257614a8f83835481855584614a3b565b60208091019160005260206000209060005b848110614aaf575050505050565b83518382015592810192600101614aa1565b9190601f8111614ad057505050565b610936926000526020600020906020601f840160051c83019310614afc575b601f0160051c0190614a24565b9091508190614aef565b919091825167ffffffffffffffff811161085257614b2e81614b2884546125b1565b84614ac1565b602080601f8311600114614b8a575081906146a1939495600092614b7f575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b015190503880614b4d565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0831695614bbe85600052602060002090565b926000905b888210614c1957505083600195969710614be2575b505050811b019055565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080614bd8565b80600185968294968601518155019501930190614bc3565b815191680100000000000000008311610852578154838355808410614c94575b50614c66602080920192600052602060002090565b6000925b848410614c78575050505050565b60018382614c8883945186614b06565b01920193019290614c6a565b60008360005284602060002092830192015b828110614cb4575050614c51565b80614cc1600192546125b1565b80614cce575b5001614ca6565b601f908181118414614ce65750508281555b38614cc7565b83614d0892614cfa85600052602060002090565b920160051c82019101614a24565b60008181526020812081835555614ce0565b90805180519067ffffffffffffffff82116108525768010000000000000000821161085257614d4e82855481875586614a3b565b6020809101908460005260206000209060005b848110614d9b575050505050606081614d836020600394015160018601614a5e565b614d94604082015160028601614c31565b0151910155565b835173ffffffffffffffffffffffffffffffffffffffff168382015592810192600101614d61565b919493948351614ddb60208601918220838587613593565b948451845190818114801590615061575b8015615059575b61501757505065ffffffffffff80614e186141d2896000526004602052604060002090565b16614fd75786979861066997614f9484897f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0958963ffffffff614e6a614e5c613434565b600854948086169116613ce6565b9260301c16614f72614e86886000526004602052604060002090565b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8b16178155614f1b614ed086613c8d565b82547fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff1660a09190911b79ffffffffffff000000000000000000000000000000000000000016178255565b614f24836157f3565b7fffff00000000ffffffffffffffffffffffffffffffffffffffffffffffffffff7dffffffff000000000000000000000000000000000000000000000000000083549260d01b169116179055565b8c614f87614f808651615692565b9285613ce6565b94604051998a998a6156f9565b0390a1614fa0876149d7565b51902091614fac610909565b938452602084015260408301526060820152614fd283600052600b602052604060002090565b614d1a565b86614fe181613839565b906119c66040519283927f31b75e4d00000000000000000000000000000000000000000000000000000000845260048401613699565b84516040517f447b05d0000000000000000000000000000000000000000000000000000000008152600481019290925260248201526044810191909152606490fd5b508015614df3565b508451811415614dec565b60ff81146150c25760ff811690601f8211615098576040519161508e83610857565b8252602082015290565b60046040517fb3512b0c000000000000000000000000000000000000000000000000000000008152fd5b50604051600081600054916150d6836125b1565b808352926020906001908181169081156151615750600114615101575b5050610669925003826108c8565b915092600080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563936000925b828410615149575061066994505050810160200138806150f3565b8554878501830152948501948694509281019261512e565b9050602093506106699592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b82010138806150f3565b60ff81146151c65760ff811690601f8211615098576040519161508e83610857565b506040516000816001916001546151dc816125b1565b80845293602091600181169081156151615750600114615204575050610669925003826108c8565b91509260016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6936000925b82841061524d575061066994505050810160200138806150f3565b85548785018301529485019486945092810192615232565b600c549068010000000000000000821015610852576001820180600c55821015610f515779ffffffffffffffffffffffffffffffffffffffffffffffffffff602061093693600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7019261531265ffffffffffff825116859065ffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000825416179055565b0151825465ffffffffffff16911660301b7fffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000016179055565b906040516040810181811067ffffffffffffffff82111761085257604052915465ffffffffffff8116835260301c6020830152565b600c549192919081156154b6576153a061539b613201846130e0565b61534a565b805165ffffffffffff838116949116841061548c578560209361543d956153d0613b84865165ffffffffffff1690565b0361544157506153e561320161541c936130e0565b9065ffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000083549260301b169116179055565b015179ffffffffffffffffffffffffffffffffffffffffffffffffffff1690565b9190565b90506154879150615461615453610929565b65ffffffffffff9092168252565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff871681850152615265565b61541c565b60046040517f2520601d000000000000000000000000000000000000000000000000000000008152fd5b6154ed91506154c6615453610929565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff84166020820152615265565b60009190565b60005260096020526040600020600460205265ffffffffffff60406000205460a01c1690604051917f8e539e8c00000000000000000000000000000000000000000000000000000000835280600484015260208360248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa928315611b75576000936155ca575b5061559c9061313a565b918281029281840414901517156124b4576155c38160026001606494015491015490613ce6565b9104111590565b61559c9193506155e89060203d602011611b6e57611b6081836108c8565b9290615592565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161567457926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa15611b7557805173ffffffffffffffffffffffffffffffffffffffff81161561566b57918190565b50809160019190565b50505060009160039190565b908082101561568d575090565b905090565b9061569c82610a9e565b6156a960405191826108c8565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06156d78294610a9e565b019060005b8281106156e857505050565b8060606020809385010152016156dc565b959261573b90615749939b9a989996959261012090895273ffffffffffffffffffffffffffffffffffffffff60209d168d8a01528060408a0152880190610ca5565b908682036060880152610cef565b9784890360808601528251808a52818a019180808360051b8d01019501926000905b8382106157a85750505050506106699697509061578f9184820360a0860152610d23565b9360c083015260e0820152610100818403910152610615565b909192939583806157e48f937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060019582030186528a51610615565b9801920192019093929161576b565b63ffffffff90818111615804571690565b604490604051907f6dfcc650000000000000000000000000000000000000000000000000000000008252602060048301526024820152fdfea2646970667358221220dae01f84847f17ad69c17a615492452137117993f4973126920b9693ba2a7da564736f6c634300081600330553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997";

export const STEWARD_SYSTEM_BYTECODE = "0x60406080815234620002585762002d3e90813803806200001f8162000278565b938439820190608083830312620002585782516001600160401b039290838111620002585784019281601f8501121562000258578351906020946200006e6200006884620002b4565b62000278565b92868085838152019160051b83010191858311620002585787809101915b8383106200025d5750915050860151908111620002585785019180601f8401121562000258578251620000c36200006882620002b4565b93868086848152019260051b820101928311620002585786809101915b838310620002475750505050620000fe6060848701519601620002cc565b8151835103620002115760005b825181101562000196576200014f6001600160a01b036200012d8386620002e1565b51166200013b8387620002e1565b51816000526002895287600020556200030c565b156200015e576001016200010b565b845162461bcd60e51b81526004810187905260116024820152704475706c6963617465206164647265737360781b6044820152606490fd5b6004879055846001600160a01b03808416908115620001f957600580546001600160a01b031981168417909155925192167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36129ae9081620003908239f35b8251631e4fbdf760e01b815260006004820152602490fd5b835162461bcd60e51b815260048101869052600f60248201526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b8251815291810191879101620000e0565b600080fd5b81906200026a84620002cc565b81520191019087906200008c565b6040519190601f01601f191682016001600160401b038111838210176200029e57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116200029e5760051b60200190565b51906001600160a01b03821682036200025857565b8051821015620002f65760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6000818152600160205260408120546200038a5780546801000000000000000081101562000376576001810180835581101562000362579082604092828052602083200155805492815260016020522055600190565b634e487b7160e01b82526032600452602482fd5b634e487b7160e01b82526041600452602482fd5b90509056fe6080604052600436101561001257600080fd5b60003560e01c80630887db2c1461209f5780632e9a68c714611d9c57806356cf41c714611d5d5780636a22e84f14611c93578063715018a614611bf55780637aa45c06146112b05780637e037a751461093657806380551788146108e05780638502a734146108705780638a2de821146104865780638da5cb5b146104345780639b06110114610354578063a0d4639c14610302578063c6b56e1b146102c6578063e5c8898714610241578063f2fde38b1461015f578063f8b5502e146101235763fcf28532146100e257600080fd5b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e576020600354604051908152f35b600080fd5b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e576020600054604051908152f35b3461011e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57610196612152565b61019e612500565b73ffffffffffffffffffffffffffffffffffffffff80911690811561021057600554827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60246040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152fd5b3461011e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e5760206102bc73ffffffffffffffffffffffffffffffffffffffff610292612152565b61029a612500565b6102b66102a682612433565b6102af81612148565b1515612361565b166126ca565b6040519015158152f35b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e576020600454604051908152f35b3461011e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57602061034361033e612152565b612433565b6040519061035081612148565b8152f35b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e5761038b612500565b6103936126e3565b60005b81518110156104325773ffffffffffffffffffffffffffffffffffffffff60026103cb826103c485876123dd565b5116612433565b6103d481612148565b146103e3575b50600101610396565b6103f8906103f183856123dd565b51166126ca565b1561040357826103da565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b005b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57602073ffffffffffffffffffffffffffffffffffffffff60055416604051908152f35b3461011e576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e576004356104da6003916104cc600354821061224b565b6104d58161247f565b612175565b50906002820154421061081257600582019081549060ff9060ff83166107b457600091600091600487018054935b84811061072557505050505060038401549081156106c75781811161066957604291610533916125cd565b1061060b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580549160ff831660028110156105dc57806105ad575061043292506002600173ffffffffffffffffffffffffffffffffffffffff845460081c16930154918360005252604060002055612752565b905060019150146105ba57005b73ffffffffffffffffffffffffffffffffffffffff6104329160081c166126ca565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b606484604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601060248201527f4e6f7420656e6f75676820766f746573000000000000000000000000000000006044820152fd5b606486604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601d60248201527f4c656e677468312063616e6e6f7420657863656564206c656e677468320000006044820152fd5b606486604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601560248201527f43616e6e6f7420646976696465206279207a65726f00000000000000000000006044820152fd5b83610730828461222b565b905490851b1c1661074081612148565b6001809114610753575b50600101610508565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87929714610785570194600161074a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b606486604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601060248201527f416c7265616479206578656375746564000000000000000000000000000000006044820152fd5b606483604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601460248201527f566f74696e6720686173206e6f7420656e6465640000000000000000000000006044820152fd5b3461011e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e5760206102bc73ffffffffffffffffffffffffffffffffffffffff6108c1612152565b6108c9612500565b168060005260028352602435604060002055612752565b3461011e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57604061092161091c612152565b6123f1565b82519161092d81612148565b82526020820152f35b3461011e5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57600435600281101561011e576024359073ffffffffffffffffffffffffffffffffffffffff82169081830361011e5760443560016109a233612433565b6109ab81612148565b03611252576000938215808015611244575b156111e657856105dc57156111385750428111156110b4575b6109e260045442612551565b91901561105657604051926109f684612304565b6000845260405190610a0782612304565b600082526040519660e0880188811067ffffffffffffffff821117610d64576040526105dc5786526020860194855260408601918252606086019283526080860193845260a0860152600060c086015260035468010000000000000000811015610d6457806001610a7b9201600355612175565b9490946110275785519060028210156105dc577fffffffffffffffffffffff00000000000000000000000000000000000000000074ffffffffffffffffffffffffffffffffffffffff0060ff8854941692837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086161789555160081b169216171784555160018401555160028301555180519067ffffffffffffffff8211610d6457680100000000000000008211610d64576020906003840154836003860155808410611007575b500160038301600052602060002060005b838110610fdd57858560a082015180519067ffffffffffffffff8211610d6457680100000000000000008211610d64576020906004840154836004860155808410610f68575b5001906004830160005260206000209060005b8160051c8110610f2f57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08116808203610ed2575b50505050600560c09101910151151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691161790556003547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019080821161078557610c5690821061224b565b610c5e6126e3565b60005b8151811015610d93576001610c8e73ffffffffffffffffffffffffffffffffffffffff6103c484866123dd565b610c9781612148565b14610ca5575b600101610c61565b6003610cb084612175565b500173ffffffffffffffffffffffffffffffffffffffff610cd183856123dd565b511690805468010000000000000000811015610d6457610cf691600182018155612213565b73ffffffffffffffffffffffffffffffffffffffff829392549160031b92831b921b19161790556004610d2884612175565b50019081549168010000000000000000831015610d645782610d50916001809501815561222b565b60ff82549160031b1b191690559050610c9d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b826003610d9f82612175565b50015415610e745780610db360209261247f565b7ffa17f2a6efafb8ef0064b05aac31e24e82d6be9552e2dedb7088e3ca073b46f3610e4660ff610de284612175565b505416610e6973ffffffffffffffffffffffffffffffffffffffff610e0686612175565b505460081c166001610e1787612175565b5001546002610e2588612175565b50015490610e3288612175565b50926040519687968a88528b88019061213b565b60408601526060850152608084015260c060a0840152600360c0840191016122b0565b0390a1604051908152f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f2076616c69642073746577617264730000000000000000000000000000006044820152fd5b9260009360005b8184038110610ef9575050509160c09391600593841c0155918480610be3565b9091946020610f2560019284895191610f1183612148565b9060ff809160031b9316831b921b19161790565b9601929101610ed9565b6000805b60208110610f48575083820155600101610bad565b94906020610f5f60019288855191610f1183612148565b92019501610f33565b610f989060048601600052601f846000209181871680610f9e575b500160051c810190601f860160051c016123c6565b85610b9a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081848a0160051c86010191825491890360031b1c16905589610f83565b600190602073ffffffffffffffffffffffffffffffffffffffff8551169401938184015501610b54565b6110219060038601600052848460002091820191016123c6565b85610b43565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f566f7465206475726174696f6e206f766572666c6f77000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4e6577206578706972652074696d657374616d70206d75737420626520696e2060448201527f74686520667574757265000000000000000000000000000000000000000000006064820152fd5b600094506001831461114b575b506109d6565b6102a661115791612433565b806111625784611145565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4e6577206578706972652074696d657374616d70206d757374206265207a657260448201527f6f000000000000000000000000000000000000000000000000000000000000006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616374696f6e0000000000000000000000000000000000006044820152fd5b5060009550600184146109bd565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4e6f7420612076616c69642073746577617264000000000000000000000000006044820152fd5b3461011e576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57600435906112f1600354831061224b565b6112fa82612175565b509160ff809354169161130c82612175565b505490600161131a84612175565b50015494816003600261132c87612175565b50015461133887612175565b509861136f85600561135361134c8c612175565b509b612175565b500154169a61136860405180968193016122b0565b0384612320565b604051968788968660048c01549283815201916004839c01600052876000206000905b82601f83011061193d57936114d0938a9b938b936115009c73ffffffffffffffffffffffffffffffffffffffff99985493838310611920575b838310611900575b8383106118e0575b8383106118c0575b8383106118a1575b838310611881575b838310611861575b838310611841575b838310611821575b838310611801575b8383106117e1575b8383106117c1575b8383106117a1575b838310611781575b838310611761575b838310611741575b838310611721575b838310611701575b8383106116e1575b8383106116c1575b8383106116a1575b838310611681575b838310611661575b838310611641575b838310611621575b838310611601575b8383106115e1575b8383106115c1575b8383106115a1575b838310611581575b838310611562575b50501061154b575b5090509a999a0389612320565b6114dd604051809c61213b565b60081c16858a01526040890152606088015260e0608088015260e08701906120f1565b9185830360a0870152519182815201929160005b8281106115295786151560c087015285850386f35b909192938280600192875161153d81612148565b815201950193929101611514565b60f81c61155781612148565b8152018990386114c3565b94600192958560f01c1661157581612148565b815201930184386114bb565b919481600191848760e81c1661159681612148565b8152019501916114b3565b919481600191848760e01c166115b681612148565b8152019501916114ab565b919481600191848760d81c166115d681612148565b8152019501916114a3565b919481600191848760d01c166115f681612148565b81520195019161149b565b919481600191848760c81c1661161681612148565b815201950191611493565b919481600191848760c01c1661163681612148565b81520195019161148b565b919481600191848760b81c1661165681612148565b815201950191611483565b919481600191848760b01c1661167681612148565b81520195019161147b565b919481600191848760a81c1661169681612148565b815201950191611473565b919481600191848760a01c166116b681612148565b81520195019161146b565b919481600191848760981c166116d681612148565b815201950191611463565b919481600191848760901c166116f681612148565b81520195019161145b565b919481600191848760881c1661171681612148565b815201950191611453565b919481600191848760801c1661173681612148565b81520195019161144b565b919481600191848760781c1661175681612148565b815201950191611443565b919481600191848760701c1661177681612148565b81520195019161143b565b919481600191848760681c1661179681612148565b815201950191611433565b919481600191848760601c166117b681612148565b81520195019161142b565b919481600191848760581c166117d681612148565b815201950191611423565b919481600191848760501c166117f681612148565b81520195019161141b565b919481600191848760481c1661181681612148565b815201950191611413565b919481600191848760401c1661183681612148565b81520195019161140b565b919481600191848760381c1661185681612148565b815201950191611403565b919481600191848760301c1661187681612148565b8152019501916113fb565b919481600191848760281c1661189681612148565b8152019501916113f3565b9194816001918487831c166118b581612148565b8152019501916113eb565b919481600191848760181c166118d581612148565b8152019501916113e3565b919481600191848760101c166118f581612148565b8152019501916113db565b919481600191848760081c1661191581612148565b8152019501916113d3565b91948160019184871661193281612148565b8152019501916113cb565b95979950919395979092610400600191875487811661195b81612148565b8252878160081c1661196c81612148565b85830152878160101c1661197f81612148565b604083015287816060828260181c1661199781612148565b818601528282608082828c1c166119ad81612148565b81890152828260a092828260281c166119c581612148565b848c0152828260c0988d8a848460301c16916119e083612148565b01528d60e0848460381c16916119f583612148565b01528d610100848460401c1691611a0b83612148565b01528d610120848460481c1691611a2183612148565b01528d610140848460501c1691611a3783612148565b01528d610160848460581c1691611a4d83612148565b01521c16611a5a81612148565b6101808c0152828260681c16611a6f81612148565b6101a08c0152828260701c16611a8481612148565b6101c08c0152828260781c16611a9981612148565b6101e08c01521c16611aaa81612148565b610200890152828260881c16611abf81612148565b610220890152828260901c16611ad481612148565b610240890152828260981c16611ae981612148565b6102608901521c16611afa81612148565b610280860152828260a81c16611b0f81612148565b6102a0860152828260b01c16611b2481612148565b6102c0860152828260b81c16611b3981612148565b6102e08601521c16611b4a81612148565b610300830152878160c81c16611b5f81612148565b610320830152878160d01c16611b7481612148565b610340830152878160d81c16611b8981612148565b610360830152878160e01c16611b9e81612148565b610380830152878160e81c16611bb381612148565b6103a0830152878160f01c16611bc881612148565b6103c083015260f81c611bda81612148565b6103e08201520195019101918a989694928a98969492611392565b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57611c2c612500565b600073ffffffffffffffffffffffffffffffffffffffff6005547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461011e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e576004356000548110611cd38161224b565b15611d2e576040907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154806000526002602052816000205473ffffffffffffffffffffffffffffffffffffffff8351921682526020820152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b3461011e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e57611d94612500565b600480359055005b3461011e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e5760243560043560038083101561011e57611de8600354831061224b565b611df18261247f565b611dfa83612148565b60019160018414801561208c575b1561200857611e1690612175565b50906002820154421015611faa5760009060009360009160038501908154915b828510611f5a575b505050505015611efc5760040160ff611e57838361222b565b90549060031b1c16611e6881612148565b611e9e57611e9a91611e799161222b565b611e84849294612148565b83549060ff809160031b9316831b921b19161790565b9055005b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f416c726561647920766f746564000000000000000000000000000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612076616c696420766f7465720000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff611f7f86839a979a989698612213565b90543391851b1c90911603611f9d5750505050508480808080611e3e565b9396929492830193611e36565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f566f74696e672068617320656e646564000000000000000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f496e76616c696420766f74652c206d75737420626520617070726f7665206f7260448201527f2072656a656374000000000000000000000000000000000000000000000000006064820152fd5b5061209684612148565b60028414611e08565b3461011e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011e576120ed6120d96126e3565b6040519182916020835260208301906120f1565b0390f35b90815180825260208080930193019160005b828110612111575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101612103565b9060028210156105dc5752565b600311156105dc57565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361011e57565b600354811015611d2e576006906003600052027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190600090565b9060009182548110156121e6578280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563019190565b6024837f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b8054821015611d2e5760005260206000200190600090565b9190918054831015611d2e57600052601f60206000208360051c01921690565b1561225257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152fd5b9081548082526020809201926000526020600020916000905b8282106122d7575050505090565b835473ffffffffffffffffffffffffffffffffffffffff16855293840193600193840193909101906122c9565b6020810190811067ffffffffffffffff821117610d6457604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d6457604052565b1561236857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f5374657761726420646f6573206e6f74206578697374000000000000000000006044820152fd5b8181106123d1575050565b600081556001016123c6565b8051821015611d2e5760209160051b010190565b906123fb82612433565b9161240583612148565b821561242d5773ffffffffffffffffffffffffffffffffffffffff61242a911661256a565b90565b50600090565b73ffffffffffffffffffffffffffffffffffffffff16806000526001602052604060002054156000146124665750600090565b61246f9061256a565b421061247a57600290565b600190565b6004612498600361248f84612175565b50015492612175565b500154036124a257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f566f7465727320616e6420566f746573206c656e677468206d69736d617463686044820152fd5b73ffffffffffffffffffffffffffffffffffffffff60055416330361252157565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b919082019182106125625760019190565b600091508190565b806000526002602052604060002054908115806125bb575b61258a575090565b602490604051907f02b566860000000000000000000000000000000000000000000000000000000082526004820152fd5b50600160205260406000205415612582565b9060648202907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff606484099282808510940393808503941461268e578382111561266457606482910981600003821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b60046040517f227bc153000000000000000000000000000000000000000000000000000000008152fd5b508092501561269b570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b61242a908060005260026020526000604081205561281e565b60405190600054808352826020916020820190600080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563936000905b8282106127385750505061273692500383612320565b565b855484526001958601958895509381019390910190612720565b600081815260016020526040812054612819578054680100000000000000008110156127ec57600181018083558110156127bf5790826040927f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630155805492815260016020522055600190565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b905090565b6000818152600160205260408120549091908015612973577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90818101818111612946578454838101908111612919578082036128da575b505050825480156128ad5781019061288d826121b0565b909182549160031b1b191690558255815260016020526040812055600190565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526031600452fd5b6128e66128f3916121b0565b90549060031b1c916121b0565b81549060031b908584831b921b1916179055845260016020526040842055388080612876565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b50509056fea2646970667358221220e1c42fc138fd0c9c8ffd6e87ac276eeae6d4909743ac9fea869e2c67f1c923bc64736f6c63430008160033";

export const WORKING_GROUP_SYSTEM_BYTECODE = "0x60406080815234620003455762003b2e90813803806200001f8162000365565b938439820160e08382031262000345576200003a83620003a1565b916020916200004b838601620003a1565b858301519094906001600160401b03908181116200034557870183601f820112156200034557805191620000896200008384620003b6565b62000365565b918783858152018860059560051b83010191878311620003455789809101915b8383106200034a57505050506060890151818111620003455785620000d0918b01620003ce565b9460808a01519182116200034557620000eb918a01620003ce565b97620000ff60c060a08301519201620003a1565b9860018060a01b039360018060a01b03198560009716818854161787558560049b16818c5416178b556200013785518951146200042c565b865b8551811015620001bc5762000176898c600362000166858c6200015d828e6200046b565b5116946200046b565b5191838d52528c8b205562000521565b15620001855760010162000139565b895162461bcd60e51b8152808d018c905260116024820152704475706c6963617465206164647265737360781b6044820152606490fd5b50868a92878b978f948f95620001d683518a51146200042c565b855b8351811015620002db57808a8a620002018f9489620001f8828b6200046b565b5116936200046b565b51938a8a8662000249575b918681837f1e4109814b4fb1210f81ef6540a9bf7e5834ff79536859d16d6398f0e417c44f96958860019b96528652205551908152a201620001d8565b5050505090916200025a8262000496565b6003811015620002c857600103620002785791908a8e8a8a6200020c565b508c5162461bcd60e51b8152808a018b90526024808201527f5370656e646572206973206e6f7420612076616c696420576f726b696e6720476044820152630726f75760e41b6064820152608490fd5b634e487b7160e01b8a5260218b5260248afd5b5060078a9055831685848c898415620003305750907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09184600854968716176008555194169180a36135859081620005a98239f35b836024925191631e4fbdf760e01b8352820152fd5b600080fd5b81906200035784620003a1565b8152019101908990620000a9565b6040519190601f01601f191682016001600160401b038111838210176200038b57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200034557565b6001600160401b0381116200038b5760051b60200190565b9080601f830112156200034557815190602091620003f06200008382620003b6565b9360208086848152019260051b8201019283116200034557602001905b8282106200041c575050505090565b815181529083019083016200040d565b156200043457565b60405162461bcd60e51b815260206004820152600f60248201526e098cadccee8d040dad2e6dac2e8c6d608b1b6044820152606490fd5b8051821015620004805760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0316600081815260026020526040902054620004b95750600090565b8060005260036020526040600020549081158062000501575b620004e957504210620004e457600290565b600190565b6024906040519063015ab34360e11b82526004820152fd5b506200051a816000526002602052604060002054151590565b15620004d2565b6000908082526002602052604082205415600014620005a45760019182546801000000000000000081101562000590578381018085558110156200057c57908260409285835260208320015583549281526002602052205590565b634e487b7160e01b82526032600452602482fd5b634e487b7160e01b82526041600452602482fd5b509056fe608080604052600436101561001357600080fd5b60003560e01c9081631576f83f14612b62575080631deab2e614612b235780633089c6d1146127595780633e5beab9146126f457806342afe21a146126a2578063508da674146123975780635d0372b71461235b5780636c39e0ed146122d85780636e4ba4801461220e578063715018a61461217057806380ec7b7d146121345780638167f31414611e315780638ad15e1414611ddb5780638da5cb5b14611d895780639a137d7e14611d37578063b3172a1b14611c87578063b402b0b614611bd5578063cdf0642e14611b99578063da4e875f14611b11578063dce88da5146119bf578063edd8f7281461107c578063f2fde38b14610f9a5763fab3c55d1461011c57600080fd5b34610af65760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af65760026004351015610af65773ffffffffffffffffffffffffffffffffffffffff6024351660243503610af6576024602073ffffffffffffffffffffffffffffffffffffffff60045416604051928380927fa0d4639c0000000000000000000000000000000000000000000000000000000082523360048301525afa801561076f57600191600091610f7b575b506101e181612bd4565b03610f1d576101f1600435612c57565b60043515808015610f06575b15610ea85761020d600435612c57565b15610d8457426044351115610d00575b61022960075442613029565b9015610ca25760405161023b81612eb7565b600081526040519061024c82612eb7565b60008252604051928361010081011067ffffffffffffffff61010086011117610711576101008401604052610282600435612c57565b600435845273ffffffffffffffffffffffffffffffffffffffff60243516602085015260443560408501526064356060850152608084015260a083015260c0820152600060e082015260065468010000000000000000811015610711578060016102ef9201600655612c61565b610c735781516102fe81612c57565b61030781612c57565b60ff82549116807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083161783557fffffffffffffffffffffff00000000000000000000000000000000000000000074ffffffffffffffffffffffffffffffffffffffff00602086015160081b1692161717815560408201516001820155606082015160028201556080820151600382015560a082015180519067ffffffffffffffff821161071157680100000000000000008211610711576020906004840154836004860155808410610c53575b500160048301600052602060002060005b838110610c2957858560c082015180519067ffffffffffffffff821161071157680100000000000000008211610711576020906005840154836005860155808410610bbc575b5001906005830160005260206000209060005b8160051c8110610b8357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08116808203610b2a575b50505050600660e09101910151151560ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008354169116179055600654807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810111610afb57610508817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810110612d08565b6004600073ffffffffffffffffffffffffffffffffffffffff825416604051928380927f0887db2c0000000000000000000000000000000000000000000000000000000082525afa90811561076f57600091610a23575b5060005b815181101561077b5773ffffffffffffffffffffffffffffffffffffffff60045416602073ffffffffffffffffffffffffffffffffffffffff6105a68486612f43565b51166024604051809481937fa0d4639c00000000000000000000000000000000000000000000000000000000835260048301525afa801561076f57600191600091610740575b506105f681612bd4565b14610604575b600101610563565b61062f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612c61565b5073ffffffffffffffffffffffffffffffffffffffff61064f8385612f43565b51169060048101546801000000000000000081101561071157600461067c92600183018282015501612da4565b73ffffffffffffffffffffffffffffffffffffffff829392549160031b92831b921b19161790556106ce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612c61565b509060058201549168010000000000000000831015610711578260056106fd9260018096018282015501612c9c565b60ff82549160031b1b1916905590506105fc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610762915060203d602011610768575b61075a8183612ed3565b810190612f14565b856105ec565b503d610750565b6040513d6000823e3d90fd5b8260046107a97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301612c61565b500154156109c557806107df7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60209301612fa8565b7fd190187d4f2df54274d2157410e10d79b258f6e9ad948f164187d189fda73f8660ff61082d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612c61565b50541673ffffffffffffffffffffffffffffffffffffffff6108707fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8501612c61565b505460081c169061099860016108a77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8701612c61565b50015460026108d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8801612c61565b50015460036109077fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901612c61565b500154906109367fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901612c61565b50926040519687967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8b01885261096c81612c57565b8b88015260408701526060860152608085015260a084015260e060c0840152600460e084019101612e63565b0390a17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60405191018152f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f2076616c69642073746577617264730000000000000000000000000000006044820152fd5b90503d806000833e610a358183612ed3565b6020828281010312610af65781519167ffffffffffffffff8311610af657818101601f848301011215610af657828101519267ffffffffffffffff8411610711578360051b60405194610a8b6020830187612ed3565b855260208501938301602082848601010111610af65782820160200193915b60208282860101018510610ac35750505050508261055f565b84519273ffffffffffffffffffffffffffffffffffffffff84168403610af6576020818195829352019501949250610aaa565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9260009360005b8184038110610b4d5750505060051c0155600660e08480610475565b9091946020610b7960019284895191610b6583612bd4565b9060ff809160031b9316831b921b19161790565b9601929101610b31565b6000805b60208110610b9c57508382015560010161043f565b94906020610bb360019288855191610b6583612bd4565b92019501610b87565b610beb906005860160005283600020601f80870160051c82019281881680610bf1575b500160051c0190612f2c565b8561042c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90818601918254918a0360031b1c1690558a610bdf565b600190602073ffffffffffffffffffffffffffffffffffffffff85511694019381840155016103e6565b610c6d906004860160005284846000209182019101612f2c565b386103d5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f566f7465206475726174696f6e206f766572666c6f77000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4e6577206578706972652074696d657374616d70206d75737420626520696e2060448201527f74686520667574757265000000000000000000000000000000000000000000006064820152fd5b610d8f600435612c57565b60016004350361021d57610db7610da7602435612cbc565b610db081612bd4565b1515612dfe565b604435610e24576064351561021d5760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f416c6c6f77616e6365206d757374206265207a65726f000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4e6577206578706972652074696d657374616d70206d757374206265207a657260448201527f6f000000000000000000000000000000000000000000000000000000000000006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616374696f6e0000000000000000000000000000000000006044820152fd5b50610f12600435612c57565b6001600435146101fd565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4e6f7420612076616c69642073746577617264000000000000000000000000006044820152fd5b610f94915060203d6020116107685761075a8183612ed3565b386101d7565b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657610fd1612bb1565b610fd9612f57565b73ffffffffffffffffffffffffffffffffffffffff80911690811561104b57600854827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600855167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60246040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152fd5b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576110ba60065460043510612d08565b60ff6110c7600435612c61565b5054166110d5600435612c61565b505460016110e4600435612c61565b5001549160026110f5600435612c61565b50015490600460036111078235612c61565b500154916111158235612c61565b50926111218335612c61565b509461115060ff60066111348735612c61565b50015416956111496040518097819301612e63565b0385612ed3565b60405197888099602060058a01549182815201906005829a016000526020600020906000915b81601f840110611708579261129a926112e79997959260209b99979554918181106116ec575b8181106116cd575b8181106116ae575b81811061168f575b818110611671575b818110611652575b818110611633575b818110611614575b8181106115f5575b8181106115d6575b8181106115b7575b818110611598575b818110611579575b81811061155a575b81811061153b575b81811061151c575b8181106114fd575b8181106114de575b8181106114bf575b8181106114a0575b818110611481575b818110611462575b818110611443575b818110611424575b818110611405575b8181106113e6575b8181106113c7575b8181106113a8575b818110611389575b81811061136a575b81811061134b575b10611333575b50038c612ed3565b73ffffffffffffffffffffffffffffffffffffffff6040519a610100956112c081612c57565b8c5260081c16878b015260408a0152606089015260808801528060a0880152860190612c0d565b9484860360c0860152519485815201916000945b808610611312575050829350151560e08301520390f35b9092602080600192865161132581612bd4565b8152019401950194906112fb565b908a9160f81c61134281612bd4565b8152018e611292565b928c60019160ff8560f01c1661136081612bd4565b815201930161128c565b928c60019160ff8560e81c1661137f81612bd4565b8152019301611284565b928c60019160ff8560e01c1661139e81612bd4565b815201930161127c565b928c60019160ff8560d81c166113bd81612bd4565b8152019301611274565b928c60019160ff8560d01c166113dc81612bd4565b815201930161126c565b928c60019160ff8560c81c166113fb81612bd4565b8152019301611264565b928c60019160ff8560c01c1661141a81612bd4565b815201930161125c565b928c60019160ff8560b81c1661143981612bd4565b8152019301611254565b928c60019160ff8560b01c1661145881612bd4565b815201930161124c565b928c60019160ff8560a81c1661147781612bd4565b8152019301611244565b928c60019160ff8560a01c1661149681612bd4565b815201930161123c565b928c60019160ff8560981c166114b581612bd4565b8152019301611234565b928c60019160ff8560901c166114d481612bd4565b815201930161122c565b928c60019160ff8560881c166114f381612bd4565b8152019301611224565b928c60019160ff8560801c1661151281612bd4565b815201930161121c565b928c60019160ff8560781c1661153181612bd4565b8152019301611214565b928c60019160ff8560701c1661155081612bd4565b815201930161120c565b928c60019160ff8560681c1661156f81612bd4565b8152019301611204565b928c60019160ff8560601c1661158e81612bd4565b81520193016111fc565b928c60019160ff8560581c166115ad81612bd4565b81520193016111f4565b928c60019160ff8560501c166115cc81612bd4565b81520193016111ec565b928c60019160ff8560481c166115eb81612bd4565b81520193016111e4565b928c60019160ff8560401c1661160a81612bd4565b81520193016111dc565b928c60019160ff8560381c1661162981612bd4565b81520193016111d4565b928c60019160ff8560301c1661164881612bd4565b81520193016111cc565b928c60019160ff8560281c1661166781612bd4565b81520193016111c4565b928c60019160ff85831c1661168581612bd4565b81520193016111bc565b928c60019160ff8560181c166116a481612bd4565b81520193016111b4565b928c60019160ff8560101c166116c381612bd4565b81520193016111ac565b928c60019160ff8560081c166116e281612bd4565b81520193016111a4565b928c60019160ff85166116fe81612bd4565b815201930161119c565b935090916001610400602092865460ff811661172381612bd4565b825260ff8160081c1661173581612bd4565b8583015260ff8160101c1661174981612bd4565b604083015260ff816060828260181c1661176281612bd4565b818601528282608082828c1c1661177881612bd4565b81890152828260a092828260281c1661179081612bd4565b848c0152828260c0988d8a848460301c16916117ab83612bd4565b01528d60e0848460381c16916117c083612bd4565b01528d610100848460401c16916117d683612bd4565b01528d610120848460481c16916117ec83612bd4565b01528d610140848460501c169161180283612bd4565b01528d610160848460581c169161181883612bd4565b01521c1661182581612bd4565b6101808c0152828260681c1661183a81612bd4565b6101a08c0152828260701c1661184f81612bd4565b6101c08c0152828260781c1661186481612bd4565b6101e08c01521c1661187581612bd4565b610200890152828260881c1661188a81612bd4565b610220890152828260901c1661189f81612bd4565b610240890152828260981c166118b481612bd4565b6102608901521c166118c581612bd4565b610280860152828260a81c166118da81612bd4565b6102a0860152828260b01c166118ef81612bd4565b6102c0860152828260b81c1661190481612bd4565b6102e08601521c1661191581612bd4565b61030083015260ff8160c81c1661192b81612bd4565b61032083015260ff8160d01c1661194181612bd4565b61034083015260ff8160d81c1661195781612bd4565b61036083015260ff8160e01c1661196d81612bd4565b61038083015260ff8160e81c1661198381612bd4565b6103a083015260ff8160f01c1661199981612bd4565b6103c083015260f81c6119ab81612bd4565b6103e08201520194019201908c9392611176565b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576119f6612f57565b604051806001918291818354808352602080930190856000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6936000905b87838310611af8578086611a4b81880382612ed3565b6000915b611a5557005b8051821015611af65782809273ffffffffffffffffffffffffffffffffffffffff6002611a8d82611a868588612f43565b5116612cbc565b611a9681612bd4565b14611aa4575b500191611a4f565b819250611ab4611abb9285612f43565b5116613297565b15611ac857829085611a9c565b827f4e487b710000000000000000000000000000000000000000000000000000000060005260045260246000fd5b005b8654855295860195879550938101939190910190611a35565b34610af65760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576020611b4a612bb1565b611b52612f57565b611b8f611b8573ffffffffffffffffffffffffffffffffffffffff831680600052600385526024356040600020556134fd565b916044359061313f565b6040519015158152f35b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576020600754604051908152f35b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657604051806001916001549283825260208092019360016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6926000905b828210611c7257611c6e86611c5a818a0382612ed3565b604051918291602083526020830190612c0d565b0390f35b84548752958601959383019390830190611c43565b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657602073ffffffffffffffffffffffffffffffffffffffff611cd5612bb1565b611cdd612f57565b611ce9610da782612cbc565b16611cf381613297565b908060005260058352600060408120557f1e4109814b4fb1210f81ef6540a9bf7e5834ff79536859d16d6398f0e417c44f8360405160008152a26040519015158152f35b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657602073ffffffffffffffffffffffffffffffffffffffff60045416604051908152f35b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657602073ffffffffffffffffffffffffffffffffffffffff60085416604051908152f35b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576040611e1c611e17612bb1565b612dbc565b825191611e2881612bd4565b82526020820152f35b34610af65760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657602435600435600380831015610af657611e7d6006548310612d08565b611e8682612fa8565b611e8f83612bd4565b600191600184148015612121575b1561209d57611eab90612c61565b5090600382015442101561203f5760009060009360009160048501908154915b828510611fef575b505050505015611f915760050160ff611eec8383612c9c565b90549060031b1c16611efd81612bd4565b611f3357611f2f91611f0e91612c9c565b611f19849294612bd4565b83549060ff809160031b9316831b921b19161790565b9055005b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f416c726561647920766f746564000000000000000000000000000000000000006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612076616c696420766f7465720000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff61201486839a979a989698612da4565b90543391851b1c909116036120325750505050508480808080611ed3565b9396929492830193611ecb565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f566f74696e672068617320656e646564000000000000000000000000000000006044820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f496e76616c696420766f74652c206d75737420626520617070726f7665206f7260448201527f2072656a656374000000000000000000000000000000000000000000000000006064820152fd5b5061212b84612bd4565b60028414611e9d565b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576020600154604051908152f35b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576121a7612f57565b600073ffffffffffffffffffffffffffffffffffffffff6008547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600855167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657600435600154811061224e81612d08565b156122a9576040907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154806000526003602052816000205473ffffffffffffffffffffffffffffffffffffffff8351921682526020820152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af65773ffffffffffffffffffffffffffffffffffffffff612324612bb1565b61232c612f57565b167fffffffffffffffffffffffff00000000000000000000000000000000000000006004541617600455600080f35b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576020600654604051908152f35b34610af65760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576123ce612bb1565b60249081359133600052602092600584526040600020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810361259d575b50604051906040820182811067ffffffffffffffff82111761256f57918593919492604052600281527f30780000000000000000000000000000000000000000000000000000000000008482015273ffffffffffffffffffffffffffffffffffffffff948560005416926040519687957f468721a7000000000000000000000000000000000000000000000000000000008752166004860152840152608060448401528051908160848501528460005b83811061255757505050600060a4847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f858585859886010152856064850152011681010301925af190811561076f57600091612521575b506040519015158152f35b90508181813d8311612550575b6125388183612ed3565b81010312610af657518015158103610af65782612516565b503d61252e565b82810182015188820160a401528795508691016124bd565b837f4e487b710000000000000000000000000000000000000000000000000000000060005260416004526000fd5b8181106126675780828092036125c3575b3360005260058652036040600020558461240d565b905060016125d033612cbc565b6125d981612bd4565b036125e55781906125ae565b60848584604051917f08c379a00000000000000000000000000000000000000000000000000000000083526004830152808201527f5370656e646572206973206e6f7420612076616c696420576f726b696e67204760448201527f726f7570000000000000000000000000000000000000000000000000000000006064820152fd5b60649350604051927f192b9e4e0000000000000000000000000000000000000000000000000000000084523360048501528301526044820152fd5b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af65760206126e36126de612bb1565b612cbc565b604051906126f081612bd4565b8152f35b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af65773ffffffffffffffffffffffffffffffffffffffff612740612bb1565b1660005260056020526020604060002054604051908152f35b34610af6576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af6576127aa60043561279c6006548210612d08565b6127a581612fa8565b612c61565b5060039160038201544210612ac5576006820180549360ff9060ff8616612a6757600091600091600587018054935b848110612a0757505050505060048401549081156129a95781811161294b5760429161280491613042565b106128ed5760017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00611af6951617905581549060ff821661284481612c57565b806128ab5750612883915073ffffffffffffffffffffffffffffffffffffffff835460081c16906003600185015491836000525260406000205561342e565b505b600273ffffffffffffffffffffffffffffffffffffffff825460081c169101549061313f565b600191506128b881612c57565b146128c4575b50612885565b73ffffffffffffffffffffffffffffffffffffffff6128e69160081c16613297565b50826128be565b606482604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601060248201527f4e6f7420656e6f75676820766f746573000000000000000000000000000000006044820152fd5b606484604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601d60248201527f4c656e677468312063616e6e6f7420657863656564206c656e677468320000006044820152fd5b606484604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601560248201527f43616e6e6f7420646976696465206279207a65726f00000000000000000000006044820152fd5b83612a128284612c9c565b905490851b1c16612a2281612bd4565b6001809114612a35575b506001016127d9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87929714610afb5701946001612a2c565b606484604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601060248201527f416c7265616479206578656375746564000000000000000000000000000000006044820152fd5b606490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601460248201527f566f74696e6720686173206e6f7420656e6465640000000000000000000000006044820152fd5b34610af65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af657612b5a612f57565b600435600755005b34610af65760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610af65760209073ffffffffffffffffffffffffffffffffffffffff600054168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610af657565b60031115612bde57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b90815180825260208080930193019160005b828110612c2d575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101612c1f565b60021115612bde57565b6006548110156122a9576007906006600052027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0190600090565b91909180548310156122a957600052601f60206000208360051c01921690565b73ffffffffffffffffffffffffffffffffffffffff1680600052600260205260406000205415600014612cef5750600090565b612cf890613234565b4210612d0357600290565b600190565b15612d0f57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152fd5b6001548110156122a95760016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b80548210156122a95760005260206000200190600090565b90612dc682612cbc565b91612dd083612bd4565b8215612df85773ffffffffffffffffffffffffffffffffffffffff612df59116613234565b90565b50600090565b15612e0557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f576f726b696e672047726f757020646f6573206e6f74206578697374000000006044820152fd5b9081548082526020809201926000526020600020916000905b828210612e8a575050505090565b835473ffffffffffffffffffffffffffffffffffffffff1685529384019360019384019390910190612e7c565b6020810190811067ffffffffffffffff82111761071157604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761071157604052565b90816020910312610af657516003811015610af65790565b818110612f37575050565b60008155600101612f2c565b80518210156122a95760209160051b010190565b73ffffffffffffffffffffffffffffffffffffffff600854163303612f7857565b60246040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152fd5b6005612fc16004612fb884612c61565b50015492612c61565b50015403612fcb57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f566f7465727320616e6420566f746573206c656e677468206d69736d617463686044820152fd5b9190820191821061303a5760019190565b600091508190565b9060648202907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff606484099282808510940393808503941461310357838211156130d957606482910981600003821680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b60046040517f227bc153000000000000000000000000000000000000000000000000000000008152fd5b5080925015613110570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81613198575b602073ffffffffffffffffffffffffffffffffffffffff7f1e4109814b4fb1210f81ef6540a9bf7e5834ff79536859d16d6398f0e417c44f921692836000526005825280604060002055604051908152a2565b60016131a382612cbc565b6131ac81612bd4565b146131455760846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f5370656e646572206973206e6f7420612076616c696420576f726b696e67204760448201527f726f7570000000000000000000000000000000000000000000000000000000006064820152fd5b80600052600360205260406000205490811580613285575b613254575090565b602490604051907f02b566860000000000000000000000000000000000000000000000000000000082526004820152fd5b5060026020526040600020541561324c565b60008181526003602090815260408083208390556002909152812054612df592908015613429577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff908181018181116133fc57600154908382019182116133cf57818103613366575b50505060015480156133395781019061331882612d6d565b909182549160031b1b19169055600155815260026020526040812055600190565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526031600452fd5b6133b961337561338493612d6d565b90549060031b1c928392612d6d565b81939154907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9060031b92831b921b19161790565b9055845260026020526040842055388080613300565b6024867f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6024857f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b505090565b6000818152600260205260408120546134f857600154680100000000000000008110156134cb57600181018060015581101561349e5790826040927fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6015560015492815260026020522055600190565b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526032600452fd5b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b905090565b6000818152600260205260408120546134f857600154680100000000000000008110156134cb57908261353b61338484600160409601600155612d6d565b90556001549281526002602052205560019056fea2646970667358221220b27fbfd3f68a4487c0f57b185cf5e9c7f6fb0766e42a82989f02a58f99d0637c64736f6c63430008160033";
