'use client';
import {
    useSupportedChains,
    useConnectionStatus,
    useChainId,
    useChain,
    useSigner,
    useAddress,
    useSwitchChain
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from 'react';
import { toast } from 'react-toastify';
import type { Chain } from "@thirdweb-dev/chains";
import {
    EthersAdapter,
    ContractNetworksConfig,
    SafeFactory,
    SafeAccountConfig,
    SafeTransactionOptionalProps
} from '@safe-global/protocol-kit';
import Safe from '@safe-global/protocol-kit';
import { SafeVersion, MetaTransactionData } from '@safe-global/safe-core-sdk-types';
import { randomBytes } from 'crypto';
import {
    DEFAULT_SAFE_FACTORY_SINGLETON_ADDRESS,
    DEFAULT_SAFE_FACTORY_L2_SINGLETON_ADDRESS,
    DEFAULT_SAFE_FACTORY_PROXY_FACTORY_ADDRESS,
    DEFAULT_SAFE_FACTORY_MULTI_SEND_ADDRESS,
    DEFAULT_SAFE_FACTORY_MULTI_SEND_CALL_ONLY_ADDRESS,
    DEFAULT_SAFE_FACTORY_FALLBACK_HANDLER_ADDRESS,
    DEFAULT_SAFE_FACTORY_SIGN_MESSAGE_LIB_ADDRESS,
    DEFAULT_SAFE_FACTORY_CREATE_CALL_ADDRESS,
    DEFAULT_SAFE_FACTORY_SIMULATE_TX_ACCESSOR_ADDRESS,
    STEWARD_SYSTEM_BYTECODE,
    STEWARD_SYSTEM_ABI,
    WORKING_GROUP_SYSTEM_BYTECODE,
    WORKING_GROUP_SYSTEM_ABI
} from "../constants";
import { ERC20 } from "./components/erc20";
import { OZTimelock, OZGovernor } from "./components/oz-governor";
import Eth from "./components/eth";
import Weth from "./components/weth";
import OzOwnable from "./components/oz-ownable";
import Erc20 from "./components/erc20";
import OzGovernor from "./components/oz-governor";

//#region NetworkCheckFunctions
export const isVaildNetwork = (
    chain: Chain | undefined,
    supportedChains: Chain[]) => {
    if (chain === undefined) return false;

    const isNetworkSupported = supportedChains.some((supportedChain) => {
        return supportedChain.chainId === chain.chainId;
    });

    return isNetworkSupported;
};

export const checkNetwork = async (
    chain: Chain | undefined,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!isVaildNetwork(chain, supportedChains)) {
        try {
            await switchChain(supportedChains[0].chainId);
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
    return true;
};
//#endregion NetworkCheckFunctions

//#region ErrorHandling
export const handleError = (e: any) => {
    console.error(e);
    toast.error(`${e}`);
};
//#endregion ErrorHandling

//#region Toast Callback
export const toastSuccessTx = (data: ethers.providers.TransactionResponse, chainExplorerUrl?: string) => {
    if (chainExplorerUrl !== undefined)
        return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${data.hash}`} target="_blank" rel="noreferrer">{data.hash}</a></div>;
    else
        return `Tx Hash: ${data.hash}`;
};

export const toastSuccessContractDeployTx = (data: ethers.Contract, chainExplorerUrl?: string) => {
    if (chainExplorerUrl !== undefined)
        return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${data.deployTransaction.hash}`} target="_blank" rel="noreferrer">{data.deployTransaction.hash}</a></div>;
    else
        return `Tx Hash: ${data.deployTransaction.hash}`;
};

export const toastSuccessContractDeployed = (data: ethers.providers.TransactionReceipt, chainExplorerUrl?: string) => {
    if (chainExplorerUrl !== undefined)
        return <div>Deployed Contract Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${data.contractAddress}`} target="_blank" rel="noreferrer">{data.contractAddress}</a></div>;
    else
        return `Deployed Contract Address: ${data.contractAddress}`;
};
//#endregion Toast Callback

export default function Governance() {
    //#region Init
    const supportedChains = useSupportedChains();
    const connectionStatus = useConnectionStatus();
    const chainId = useChainId();
    const chain = useChain();
    const chainExplorerUrl = (chain?.explorers && chain.explorers.length > 0 && chain.explorers[0].url) || undefined;
    const signer = useSigner();
    const address = useAddress();

    const switchChain = useSwitchChain();

    const [safeIsL1Singleton, setSafeIsL1Singleton] = useState(false);
    const [customSafeFactory, setCustomSafeFactory] = useState(false);
    //#endregion Init

    //#region NetworkCheck
    switch (connectionStatus) {
        case "connected":
            break;
        case "unknown":
            return (<p>Loading...</p>);
        case "connecting":
            return (<p>Connecting...</p>);
        case "disconnected":
            return (<p>Connect wallet to access</p>);
        default:
            return (<p>Unknown connection status</p>);
    }

    if (!isVaildNetwork(chain, supportedChains)) {
        return (
            <div>
                {(chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>) || <p>Connected to Chain ID: {chainId}</p>}
                <p style={{ color: 'red' }}>Unsupported Chain</p>
                <button onClick={() => { checkNetwork(chain, supportedChains, switchChain) }}>Switch Network</button>
            </div>
        );
    }
    //#endregion NetworkCheck

    const toastSuccessDaoDeployed = (daoTimelockAddress: string, daoTokenAddress: string, daoGovernorAddress: string, chainExplorerUrl?: string) => {
        if (chainExplorerUrl !== undefined)
            return (
                <div>
                    <p>DAO deployed successfully.</p>
                    <br></br>
                    <div>DAO Timelock Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${daoTimelockAddress}`} target="_blank" rel="noreferrer">{daoTimelockAddress}</a></div>
                    <br></br>
                    <div>DAO Token Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${daoTokenAddress}`} target="_blank" rel="noreferrer">{daoTokenAddress}</a></div>
                    <br></br>
                    <div>DAO Governor Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${daoGovernorAddress}`} target="_blank" rel="noreferrer">{daoGovernorAddress}</a></div>
                </div>
            );
        else
            return (
                <div>
                    <p>DAO deployed successfully.</p>
                    <br></br>
                    <div>DAO Timelock Address: {daoTimelockAddress}</div>
                    <br></br>
                    <div>DAO Token Address: {daoTokenAddress}</div>
                    <br></br>
                    <div>DAO Governor Address: {daoGovernorAddress}</div>
                </div>
            );
    };

    const toastSuccessSafeDeployed = async (safeAddress: string, chainExplorerUrl?: string) => {
        if (chainExplorerUrl !== undefined)
            return <div>Deployed Safe Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${safeAddress}`} target="_blank" rel="noreferrer">{safeAddress}</a></div>;
        else
            return `Deployed Safe Address: ${safeAddress}`;
    };

    //#region Safe
    const onClickSafeConfig = (customSafeFactory: boolean) => {
        if (customSafeFactory) {
            return {
                isL1SafeSingleton: safeIsL1Singleton,
                contractNetworks: {
                    [chainId!]: {
                        safeMasterCopyAddress: (document.getElementById("safe-custom-factory-singleton-address") as HTMLInputElement).value,
                        safeProxyFactoryAddress: (document.getElementById("safe-custom-factory-proxy-factory-address") as HTMLInputElement).value,
                        multiSendAddress: (document.getElementById("safe-custom-factory-multi-send-address") as HTMLInputElement).value,
                        multiSendCallOnlyAddress: (document.getElementById("safe-custom-factory-multi-send-call-only-address") as HTMLInputElement).value,
                        fallbackHandlerAddress: (document.getElementById("safe-custom-factory-fallback-handler-address") as HTMLInputElement).value,
                        signMessageLibAddress: (document.getElementById("safe-custom-factory-sign-message-lib-address") as HTMLInputElement).value,
                        createCallAddress: (document.getElementById("safe-custom-create-call-address") as HTMLInputElement).value,
                        simulateTxAccessorAddress: (document.getElementById("safe-simulate-tx-accessor-address") as HTMLInputElement).value
                    }
                }
            }
        }
        else {
            return {
                isL1SafeSingleton: safeIsL1Singleton
            }
        }
    };

    const SafeAccount = {
        _checkSafeConfig: (isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (isL1SafeSingleton === undefined) {
                toast.error("Is L1 Safe Singleton cannot be empty");
                return false;
            }

            if (contractNetworks !== undefined) {
                if (contractNetworks[chainId!].safeMasterCopyAddress === "") {
                    toast.error("Safe Singleton Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].safeProxyFactoryAddress === "") {
                    toast.error("Safe Proxy Factory Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].multiSendAddress === "") {
                    toast.error("Multi Send Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].multiSendCallOnlyAddress === "") {
                    toast.error("Multi Send Call Only Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].fallbackHandlerAddress === "") {
                    toast.error("Fallback Handler Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].signMessageLibAddress === "") {
                    toast.error("Sign Message Lib Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].createCallAddress === "") {
                    toast.error("Create Call Address cannot be empty");
                    return false;
                }

                if (contractNetworks[chainId!].simulateTxAccessorAddress === "") {
                    toast.error("Simulate Tx Accessor Address cannot be empty");
                    return false;
                }
            }

            return true;
        },
        connect: async (safeAddress: string, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (safeAddress === "") {
                toast.error("Safe Address cannot be empty");
                return;
            }

            if (!SafeAccount._checkSafeConfig(isL1SafeSingleton, contractNetworks)) return;

            const ethAdapter = new EthersAdapter({
                ethers,
                signerOrProvider: signer!
            });

            return await Safe.create({ ethAdapter, safeAddress, isL1SafeMasterCopy: isL1SafeSingleton, contractNetworks });
        },
        getOwners: async (safeAddress: string, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (safeAddress === "") {
                toast.error("Safe Address cannot be empty");
                return;
            }

            const safe = await SafeAccount.connect(safeAddress, isL1SafeSingleton, contractNetworks);

            if (safe === undefined) {
                toast.error("Safe Account cannot be connected");
                return;
            }

            const owners = await safe.getOwners();
            toast.success(
                <div>
                    Owners:
                    <br></br>
                    {owners.map((owner) => { return `${owner}\n` })}
                </div>
            );
        },
        getThreshold: async (safeAddress: string, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (safeAddress === "") {
                toast.error("Safe Address cannot be empty");
                return;
            }

            const safe = await SafeAccount.connect(safeAddress, isL1SafeSingleton, contractNetworks);

            if (safe === undefined) {
                toast.error("Safe Account cannot be connected");
                return;
            }

            const threshold = await safe.getThreshold();
            toast.success(`Threshold: ${threshold}`);
        },
        createTransaction: async (safeAddress: string, isL1SafeSingleton: boolean, transactions: MetaTransactionData[], contractNetworks?: ContractNetworksConfig, callsOnly?: boolean, options?: SafeTransactionOptionalProps) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (safeAddress === "") {
                toast.error("Safe Address cannot be empty");
                return;
            }

            if (transactions.length === 0) {
                toast.error("Transactions cannot be empty");
                return;
            }

            let transactionFormError = false;
            transactions.forEach(transaction => {
                if (transaction.to === "") {
                    toast.error("Transaction To cannot be empty");
                    transactionFormError = true;
                    return;
                }

                if (transaction.data === "") {
                    toast.error("Transaction Data cannot be empty");
                    transactionFormError = true;
                    return;
                }

                if (transaction.value === "") {
                    toast.error("Transaction Value cannot be empty");
                    transactionFormError = true;
                    return;
                }
            });

            if (transactionFormError) return;

            const safe = await SafeAccount.connect(safeAddress, isL1SafeSingleton, contractNetworks);

            if (safe === undefined) {
                toast.error("Safe Account cannot be connected");
                return;
            }

            const safeTransaction = await safe.createTransaction({ safeTransactionData: transactions, options, onlyCalls: callsOnly });
            const safeTransactionHash = await safe.getTransactionHash(safeTransaction);
            toast.success(`Safe Transaction Hash to sign: ${safeTransactionHash}`);
            return safeTransactionHash;
        },
        enableModule: async (safeAddress: string, moduleAddress: string, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (moduleAddress === "") {
                toast.error("Module Address cannot be empty");
                return;
            }

            const safe = await SafeAccount.connect(safeAddress, isL1SafeSingleton, contractNetworks);

            if (safe === undefined) {
                toast.error("Safe Account cannot be connected");
                return;
            }

            const safeTransaction = await safe.createEnableModuleTx(moduleAddress);
            const txResponse = await safe.executeTransaction(safeTransaction);
            const contractReceipt = await txResponse.transactionResponse?.wait();
            contractReceipt?.status === 1 ? toast.success("Module enabled successfully") : toast.error("Module enable failed");
        },
        disableModule: async (safeAddress: string, moduleAddress: string, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (moduleAddress === "") {
                toast.error("Module Address cannot be empty");
                return;
            }

            const safe = await SafeAccount.connect(safeAddress, isL1SafeSingleton, contractNetworks);

            if (safe === undefined) {
                toast.error("Safe Account cannot be connected");
                return;
            }

            const safeTransaction = await safe.createDisableModuleTx(moduleAddress);
            const txResponse = await safe.executeTransaction(safeTransaction);
            const contractReceipt = await txResponse.transactionResponse?.wait();
            contractReceipt?.status === 1 ? toast.success("Module disabled successfully") : toast.error("Module disable failed");
        },
        swapOwner: async (safeAddress: string, oldOwnerAddress: string, newOwnerAddress: string, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (oldOwnerAddress === "") {
                toast.error("Old Owner Address cannot be empty");
                return;
            }

            if (newOwnerAddress === "") {
                toast.error("New Owner Address cannot be empty");
                return;
            }

            const safe = await SafeAccount.connect(safeAddress, isL1SafeSingleton, contractNetworks);

            if (safe === undefined) {
                toast.error("Safe Account cannot be connected");
                return;
            }

            const safeTransaction = await safe.createSwapOwnerTx({ oldOwnerAddress, newOwnerAddress });
            const txResponse = await safe.executeTransaction(safeTransaction);
            const contractReceipt = await txResponse.transactionResponse?.wait();
            contractReceipt?.status === 1 ? toast.success("Owner swapped successfully") : toast.error("Owner swap failed");
        },
        deploy: async (owners: string, threshold: string, safeVersion: SafeVersion, isL1SafeSingleton: boolean, contractNetworks?: ContractNetworksConfig) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (owners === "") {
                toast.error("Owners cannot be empty");
                return;
            }

            if (threshold === "") {
                toast.error("Threshold cannot be empty");
                return;
            }

            if (safeVersion === undefined) {
                toast.error("Safe Version cannot be empty");
                return;
            }

            if (!SafeAccount._checkSafeConfig(isL1SafeSingleton, contractNetworks)) return;

            let ownersArray: string[] = [];
            owners.split(",").forEach((ownerAddress) => {
                ownersArray.push(ownerAddress.trim());
            });

            try {
                const ethAdapter = new EthersAdapter({
                    ethers,
                    signerOrProvider: signer!
                });

                const safeFactory = await SafeFactory.create({ ethAdapter, safeVersion, isL1SafeMasterCopy: isL1SafeSingleton, contractNetworks });

                const safeAccountConfig: SafeAccountConfig = {
                    owners: ownersArray,
                    threshold: parseInt(threshold)
                };

                const saltNonce = `0x${randomBytes(32).toString('hex')}`;

                let deployedSafeAddress: string | undefined;
                await toast.promise(
                    safeFactory.deploySafe({ safeAccountConfig, saltNonce }),
                    {
                        success: {
                            async render({ data }) {
                                deployedSafeAddress = await data.getAddress();
                                return toastSuccessSafeDeployed(deployedSafeAddress);
                            }
                        }
                    }
                ).catch((e) => {
                    throw e;
                });
                return deployedSafeAddress;
            } catch (e) {
                handleError(e);
            }
        }
    };
    //#endregion Safe

    //#region DAO Deployment
    const deployDAO = async (timelockMinDelay: string, tokenOwner: string, tokenName: string, tokenSymbol: string, governorName: string, governorVotingDelayBlock: string, governorVotingPeriodBlock: string, governorProposalThreshold: string, governorQuorumNumerator: string) => {
        try {
            const deployerAddress = await signer!.getAddress();

            const DAOTimelock = new ethers.ContractFactory(OZTimelock.abi, OZTimelock.bytecode, signer);
            // const DAOToken = new ethers.ContractFactory(ERC20.abi, ERC20.bytecode, signer);
            // const DAOGovernor = new ethers.ContractFactory(OZGovernor.abi, OZGovernor.bytecode, signer);

            const daoTimelockAddress = await OZTimelock.deploy(
                timelockMinDelay,
                deployerAddress,
                deployerAddress,
                deployerAddress,
                chain!,
                chainExplorerUrl,
                signer!,
                supportedChains,
                switchChain);
            if (daoTimelockAddress === undefined) return;
            const daoTimelock = DAOTimelock.attach(daoTimelockAddress);

            let daoTokenAddress;
            if (tokenOwner === "Timelock")
                daoTokenAddress = await ERC20.deploy(
                    daoTimelockAddress,
                    tokenName,
                    tokenSymbol,
                    "0",
                    chain!,
                    chainExplorerUrl,
                    signer!,
                    supportedChains,
                    switchChain);
            else
                daoTokenAddress = await ERC20.deploy(
                    tokenOwner,
                    tokenName,
                    tokenSymbol,
                    "0",
                    chain!,
                    chainExplorerUrl,
                    signer!,
                    supportedChains,
                    switchChain);

            if (daoTokenAddress === undefined) return;
            // const daoToken = DAOToken.attach(daoTokenAddress!);

            const daoGovernorAddress = await OZGovernor.deploy(
                daoTokenAddress,
                daoTimelockAddress,
                governorName,
                governorVotingDelayBlock,
                governorVotingPeriodBlock,
                governorProposalThreshold,
                governorQuorumNumerator,
                chain!,
                chainExplorerUrl,
                signer!,
                supportedChains,
                switchChain);
            if (daoGovernorAddress === undefined) return;
            // const daoGovernor = DAOGovernor.attach(daoGovernorAddress!);

            // Grant timelock role "PROPOSER_ROLE" to governor
            await toast.promise(
                daoTimelock.grantRole("0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1", daoGovernorAddress),
                {
                    pending: `Granting timelock role "PROPOSER_ROLE" to governor...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            // Grant timelock role "CANCELLER_ROLE" to governor
            await toast.promise(
                daoTimelock.grantRole("0xfd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783", daoGovernorAddress),
                {
                    pending: `Grant timelock role "CANCELLER_ROLE" to governor...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            // Grant timelock role "EXECUTOR_ROLE" to governor
            await toast.promise(
                daoTimelock.grantRole("0xd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63", daoGovernorAddress),
                {
                    pending: `Grant timelock role "EXECUTOR_ROLE" to governor...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            // Renounce timelock role "PROPOSER_ROLE" from deployer
            await toast.promise(
                daoTimelock.renounceRole("0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1", deployerAddress),
                {
                    pending: `Renounce timelock role "PROPOSER_ROLE" from deployer...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            // Renounce timelock role "CANCELLER_ROLE" from deployer
            await toast.promise(
                daoTimelock.renounceRole("0xfd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783", deployerAddress),
                {
                    pending: `Renounce timelock role "CANCELLER_ROLE" from deployer...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            // Renounce timelock role "EXECUTOR_ROLE" from deployer
            await toast.promise(
                daoTimelock.renounceRole("0xd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63", deployerAddress),
                {
                    pending: `Renounce timelock role "EXECUTOR_ROLE" from deployer...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            // Renounce timelock role "TIMELOCK_ADMIN_ROLE" from deployer
            await toast.promise(
                daoTimelock.renounceRole("0x5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5", deployerAddress),
                {
                    pending: `Renounce timelock role "TIMELOCK_ADMIN_ROLE" from deployer...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                        }
                    }
                }
            ).then(async (tx) => {
                await toast.promise(
                    (tx as ethers.providers.TransactionResponse).wait(),
                    {
                        pending: `Waiting for transaction...`,
                        success: "Transaction confirmed"
                    }
                ).catch((e) => {
                    throw e;
                });
            }, (e) => {
                throw e;
            });

            toast.success(toastSuccessDaoDeployed(daoTimelockAddress, daoTokenAddress, daoGovernorAddress));
        }
        catch (e) {
            handleError(e);
        }
    };
    //#endregion DAO Deployment

    const enum Vote {
        Abstain,
        Approve,
        Reject
    }

    //#region Steward System
    const enum StewardStatus {
        NotExist,
        Valid,
        Expired
    }

    const enum StewardAction {
        Set,
        Remove
    }

    const StewardSystem = {
        getSteward: async (contractAddress: string, targetAddress: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Steward Contract Address cannot be empty");
                return;
            }

            if (targetAddress === "") {
                toast.error("Target Address cannot be empty");
                return;
            }

            try {
                const stewardSystem = new ethers.Contract(contractAddress, STEWARD_SYSTEM_ABI, signer);
                return await stewardSystem.getSteward(targetAddress);
            } catch (e) {
                handleError(e);
            }
        },
        proposeSteward: async (contractAddress: string, stewardAction: StewardAction, targetAddress: string, newExpireTimestamp: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Steward Contract Address cannot be empty");
                return;
            }

            if (targetAddress === "") {
                toast.error("Target Address cannot be empty");
                return;
            }

            if (newExpireTimestamp === "") {
                toast.error("New Expire Timestamp cannot be empty");
                return;
            }

            try {
                const stewardSystem = new ethers.Contract(contractAddress, STEWARD_SYSTEM_ABI, signer);
                const tx = stewardSystem.proposeSteward(stewardAction, targetAddress, newExpireTimestamp);

                await toast.promise(
                    tx,
                    {
                        pending: `Proposing Steward...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (tx) => {
                    await toast.promise(
                        (tx as ethers.providers.TransactionResponse).wait(),
                        {
                            pending: `Waiting for transaction...`,
                            success: "Transaction confirmed"
                        }
                    ).catch((e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });
            } catch (e) {
                handleError(e);
            }
        },
        voteOnStewardProposal: async (contractAddress: string, proposalId: string, vote: Vote) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Steward Contract Address cannot be empty");
                return;
            }

            if (proposalId === "") {
                toast.error("Proposal ID cannot be empty");
                return;
            }

            try {
                const stewardSystem = new ethers.Contract(contractAddress, STEWARD_SYSTEM_ABI, signer);
                const tx = stewardSystem.voteOnStewardProposal(proposalId, vote);

                await toast.promise(
                    tx,
                    {
                        pending: `Voting on Steward Proposal...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (tx) => {
                    await toast.promise(
                        (tx as ethers.providers.TransactionResponse).wait(),
                        {
                            pending: `Waiting for transaction...`,
                            success: "Transaction confirmed"
                        }
                    ).catch((e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });
            } catch (e) {
                handleError(e);
            }
        },
        executeStewardProposal: async (contractAddress: string, proposalId: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Steward Contract Address cannot be empty");
                return;
            }

            if (proposalId === "") {
                toast.error("Proposal ID cannot be empty");
                return;
            }

            try {
                const stewardSystem = new ethers.Contract(contractAddress, STEWARD_SYSTEM_ABI, signer);
                const tx = stewardSystem.executeStewardProposal(proposalId);

                await toast.promise(
                    tx,
                    {
                        pending: `Executing Steward Proposal...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (tx) => {
                    await toast.promise(
                        (tx as ethers.providers.TransactionResponse).wait(),
                        {
                            pending: `Waiting for transaction...`,
                            success: "Transaction confirmed"
                        }
                    ).catch((e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });
            } catch (e) {
                handleError(e);
            }
        },
        deploy: async (stewardAddresses: string, stewardExpireTimestamps: string, stewardProposalVoteDuration: string, owner: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (stewardAddresses === "") {
                toast.error("Steward Addresses cannot be empty");
                return;
            }

            if (stewardExpireTimestamps === "") {
                toast.error("Steward Expire Timestamps cannot be empty");
                return;
            }

            if (stewardProposalVoteDuration === "") {
                toast.error("Steward Proposal Vote Duration cannot be empty");
                return;
            }

            if (owner === "") {
                toast.error("Owner cannot be empty");
                return;
            }

            let stewardAddressesArray: string[] = [];
            stewardAddresses.split(",").forEach((stewardAddress) => {
                stewardAddressesArray.push(stewardAddress.trim());
            });

            let stewardExpireTimestampsArray: string[] = [];
            stewardExpireTimestamps.split(",").forEach((stewardExpireTimestamp) => {
                stewardExpireTimestampsArray.push(stewardExpireTimestamp.trim());
            });

            try {
                const factory = new ethers.ContractFactory(STEWARD_SYSTEM_ABI, STEWARD_SYSTEM_BYTECODE, signer);
                const tx = factory.deploy(stewardAddressesArray, stewardExpireTimestampsArray, stewardProposalVoteDuration, owner);

                let deployedAddress: string | undefined;

                await toast.promise(
                    tx,
                    {
                        pending: `Deploying Steward System...`,
                        success: {
                            render({ data }) {
                                return toastSuccessContractDeployTx(data, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (contract) => {
                    await toast.promise(
                        contract.deployTransaction.wait(),
                        {
                            pending: `Waiting for deployment...`,
                            success: {
                                render({ data }) {
                                    return toastSuccessContractDeployed(data, chainExplorerUrl);
                                }
                            }
                        }
                    ).then((transactionReceipt) => {
                        deployedAddress = transactionReceipt.contractAddress;
                    }, (e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });

                return deployedAddress;
            } catch (e) {
                handleError(e);
            }
        }
    };
    //#endregion Steward System

    //#region Working Group System
    const enum WorkingGroupStatus {
        NotExist,
        Valid,
        Expired
    }

    const enum WorkingGroupAction {
        Set,
        Remove
    }

    const WorkingGroupSystem = {
        getWorkingGroups: async (contractAddress: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Working Group Contract Address cannot be empty");
                return;
            }

            try {
                const workingGroupSystem = new ethers.Contract(contractAddress, WORKING_GROUP_SYSTEM_ABI, signer);
                return await workingGroupSystem.getWorkingGroups();
            } catch (e) {
                handleError(e);
            }
        },
        getAllowance: async (contractAddress: string, workingGroupAddress: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Working Group Contract Address cannot be empty");
                return;
            }

            if (workingGroupAddress === "") {
                toast.error("Working Group Address cannot be empty");
                return;
            }

            try {
                const workingGroupSystem = new ethers.Contract(contractAddress, WORKING_GROUP_SYSTEM_ABI, signer);
                return await workingGroupSystem.allowance(workingGroupAddress);
            } catch (e) {
                handleError(e);
            }
        },
        getWorkingGroup: async (contractAddress: string, targetAddress: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Working Group Contract Address cannot be empty");
                return;
            }

            if (targetAddress === "") {
                toast.error("Target Address cannot be empty");
                return;
            }

            try {
                const workingGroupSystem = new ethers.Contract(contractAddress, WORKING_GROUP_SYSTEM_ABI, signer);
                return await workingGroupSystem.getWorkingGroup(targetAddress);
            } catch (e) {
                handleError(e);
            }
        },
        proposeWorkingGroup: async (contractAddress: string, workingGroupAction: WorkingGroupAction, targetAddress: string, expireTimestamp: string, allowance: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Working Group Contract Address cannot be empty");
                return;
            }

            if (targetAddress === "") {
                toast.error("Target Address cannot be empty");
                return;
            }

            if (expireTimestamp === "") {
                toast.error("Expire Timestamp cannot be empty");
                return;
            }

            if (allowance === "") {
                toast.error("Allowance cannot be empty");
                return;
            }

            try {
                const workingGroupSystem = new ethers.Contract(contractAddress, WORKING_GROUP_SYSTEM_ABI, signer);
                const tx = workingGroupSystem.proposeWorkingGroup(workingGroupAction, targetAddress, expireTimestamp, allowance);

                await toast.promise(
                    tx,
                    {
                        pending: `Proposing Working Group...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (tx) => {
                    await toast.promise(
                        (tx as ethers.providers.TransactionResponse).wait(),
                        {
                            pending: `Waiting for transaction...`,
                            success: "Transaction confirmed"
                        }
                    ).catch((e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });
            } catch (e) {
                handleError(e);
            }
        },
        executeWorkingGroupProposal: async (contractAddress: string, proposalId: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Working Group Contract Address cannot be empty");
                return;
            }

            if (proposalId === "") {
                toast.error("Proposal ID cannot be empty");
                return;
            }

            try {
                const workingGroupSystem = new ethers.Contract(contractAddress, WORKING_GROUP_SYSTEM_ABI, signer);
                const tx = workingGroupSystem.executeWorkingGroupProposal(proposalId);

                await toast.promise(
                    tx,
                    {
                        pending: `Executing Working Group Proposal...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (tx) => {
                    await toast.promise(
                        (tx as ethers.providers.TransactionResponse).wait(),
                        {
                            pending: `Waiting for transaction...`,
                            success: "Transaction confirmed"
                        }
                    ).catch((e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });
            } catch (e) {
                handleError(e);
            }
        },
        voteOnWorkingGroupProposal: async (contractAddress: string, proposalId: string, vote: Vote) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (contractAddress === "") {
                toast.error("Working Group Contract Address cannot be empty");
                return;
            }

            if (proposalId === "") {
                toast.error("Proposal ID cannot be empty");
                return;
            }

            try {
                const workingGroupSystem = new ethers.Contract(contractAddress, WORKING_GROUP_SYSTEM_ABI, signer);
                const tx = workingGroupSystem.voteOnWorkingGroupProposal(proposalId, vote);

                await toast.promise(
                    tx,
                    {
                        pending: `Voting on Working Group Proposal...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (tx) => {
                    await toast.promise(
                        (tx as ethers.providers.TransactionResponse).wait(),
                        {
                            pending: `Waiting for transaction...`,
                            success: "Transaction confirmed"
                        }
                    ).catch((e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });
            } catch (e) {
                handleError(e);
            }
        },
        deploy: async (
            safeAccountAddress: string,
            stewardSystemAddress: string,
            workingGroupAddresses: string,
            workingGroupExpireTimestamps: string,
            workingGroupAllowances: string,
            workingGroupProposalVoteDuration: string,
            owner: string) => {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

            if (safeAccountAddress === "") {
                toast.error("Safe Account Address cannot be empty");
                return;
            }

            if (stewardSystemAddress === "") {
                toast.error("Steward System Address cannot be empty");
                return;
            }

            if (workingGroupAddresses === "") {
                toast.error("Working Group Addresses cannot be empty");
                return;
            }

            if (workingGroupExpireTimestamps === "") {
                toast.error("Working Group Expire Timestamps cannot be empty");
                return;
            }

            if (workingGroupAllowances === "") {
                toast.error("Working Group Allowances cannot be empty");
                return;
            }

            if (workingGroupProposalVoteDuration === "") {
                toast.error("Working Group Proposal Vote Duration cannot be empty");
                return;
            }

            if (owner === "") {
                toast.error("Owner cannot be empty");
                return;
            }

            let workingGroupAddressesArray: string[] = [];
            workingGroupAddresses.split(",").forEach((workingGroupAddress) => {
                workingGroupAddressesArray.push(workingGroupAddress.trim());
            });

            let workingGroupExpireTimestampsArray: string[] = [];
            workingGroupExpireTimestamps.split(",").forEach((workingGroupExpireTimestamp) => {
                workingGroupExpireTimestampsArray.push(workingGroupExpireTimestamp.trim());
            });

            let workingGroupAllowancesArray: string[] = [];
            workingGroupAllowances.split(",").forEach((workingGroupAllowance) => {
                workingGroupAllowancesArray.push(workingGroupAllowance.trim());
            });

            try {
                const factory = new ethers.ContractFactory(WORKING_GROUP_SYSTEM_ABI, WORKING_GROUP_SYSTEM_BYTECODE, signer);
                const tx = factory.deploy(safeAccountAddress, stewardSystemAddress, workingGroupAddressesArray, workingGroupExpireTimestampsArray, workingGroupAllowancesArray, workingGroupProposalVoteDuration, owner);

                let deployedAddress: string | undefined;

                await toast.promise(
                    tx,
                    {
                        pending: `Deploying Working Group System...`,
                        success: {
                            render({ data }) {
                                return toastSuccessContractDeployTx(data, chainExplorerUrl);
                            }
                        }
                    }
                ).then(async (contract) => {
                    await toast.promise(
                        contract.deployTransaction.wait(),
                        {
                            pending: `Waiting for deployment...`,
                            success: {
                                render({ data }) {
                                    return toastSuccessContractDeployed(data, chainExplorerUrl);
                                }
                            }
                        }
                    ).then((transactionReceipt) => {
                        deployedAddress = transactionReceipt.contractAddress;
                    }, (e) => {
                        throw e;
                    });
                }, (e) => {
                    throw e;
                });

                return deployedAddress;
            } catch (e) {
                handleError(e);
            }
        }
    };
    //#endregion Working Group System

    return (
        <div>
            {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
            <div>
                {address !== "" && <span>Address: {address}</span>}
            </div>
            <div className="ts-divider has-vertically-spaced"></div>
            <Eth
                chain={chain!}
                chainExplorerUrl={chainExplorerUrl}
                signer={signer!}
                supportedChains={supportedChains}
                switchChain={switchChain}
            />
            <div className="ts-divider has-vertically-spaced"></div>
            <Weth
                chain={chain!}
                chainExplorerUrl={chainExplorerUrl}
                signer={signer!}
                supportedChains={supportedChains}
                switchChain={switchChain}
            />
            <div className="ts-divider has-vertically-spaced"></div>
            <OzOwnable
                chain={chain!}
                chainExplorerUrl={chainExplorerUrl}
                signer={signer!}
                supportedChains={supportedChains}
                switchChain={switchChain}
            />
            <div className="ts-divider has-vertically-spaced"></div>
            <Erc20
                chain={chain!}
                chainExplorerUrl={chainExplorerUrl}
                signer={signer!}
                supportedChains={supportedChains}
                switchChain={switchChain}
            />
            <div className="ts-divider has-vertically-spaced"></div>
            <OzGovernor
                chain={chain!}
                chainExplorerUrl={chainExplorerUrl}
                signer={signer!}
                supportedChains={supportedChains}
                switchChain={switchChain}
            />
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary><strong>DAO Deployment</strong></summary>
                <p>Timelock</p>
                <div className="ts-grid has-vertically-spaced">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Timelock Min Delay (in seconds)" id="dao-deploy-timelock-min-delay" />
                    </div>
                </div>
                <p>Token</p>
                <div className="ts-grid has-vertically-spaced">
                    <div className="ts-input column is-7-wide">
                        <input type="text" placeholder="Token Owner Address (or &quot;Timelock&quot; for deployed timelock)" id="dao-deploy-token-owner" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Token Name" id="dao-deploy-token-name" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Token Symbol" id="dao-deploy-token-symbol" />
                    </div>
                </div>
                <p>Governor</p>
                <div className="ts-grid has-vertically-spaced">
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Governor Name" id="dao-deploy-governor-name" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Governor Voting Delay (in blocks)" id="dao-deploy-governor-voting-delay-block" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Governor Voting Period (in blocks)" id="dao-deploy-governor-voting-period-block" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Governor Proposal Threshold" id="dao-deploy-governor-proposal-threshold" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Governor Quorum Numerator (%)" id="dao-deploy-governor-quorum-numerator" />
                    </div>
                </div>
                <div className="ts-grid">
                    <button className="ts-button" onClick={async () => await deployDAO((document.getElementById("dao-deploy-timelock-min-delay") as HTMLInputElement).value, (document.getElementById("dao-deploy-token-owner") as HTMLInputElement).value, (document.getElementById("dao-deploy-token-name") as HTMLInputElement).value, (document.getElementById("dao-deploy-token-symbol") as HTMLInputElement).value, (document.getElementById("dao-deploy-governor-name") as HTMLInputElement).value, (document.getElementById("dao-deploy-governor-voting-delay-block") as HTMLInputElement).value, (document.getElementById("dao-deploy-governor-voting-period-block") as HTMLInputElement).value, (document.getElementById("dao-deploy-governor-proposal-threshold") as HTMLInputElement).value, (document.getElementById("dao-deploy-governor-quorum-numerator") as HTMLInputElement).value)}>Deploy DAO</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary><strong>Safe Deployment</strong></summary>
                <fieldset className="ts-fieldset ts-grid is-vertical">
                    <label className="ts-checkbox has-top-spaced-small column is-16-wide">
                        <input type="checkbox" id="safe-is-l1-singleton" onChange={(e) => { setSafeIsL1Singleton(e.currentTarget.checked); }} checked={safeIsL1Singleton} />
                        Is L1 Safe Singleton (<a className="ts-text is-underlined" href="https://docs.safe.global/safe-core-aa-sdk/protocol-kit/reference#create">Read more</a>)
                    </label>
                    <label className="ts-checkbox has-top-spaced-small">
                        Safe Version:
                    </label>
                    <div className="ts-select">
                        <select id="safe-version" defaultValue="1.4.1">
                            <option value="1.4.1">1.4.1</option>
                            <option value="1.3.0">1.3.0</option>
                            <option value="1.2.0">1.2.0</option>
                            <option value="1.1.1">1.1.1</option>
                            <option value="1.0.0">1.0.0</option>
                        </select>
                    </div>
                    <label className="ts-checkbox has-top-spaced-small">
                        <input type="checkbox" id="safe-custom-factory" onChange={(e) => { setCustomSafeFactory(e.currentTarget.checked); }} checked={customSafeFactory} />
                        Use Custom Safe Factory:<br></br>When you get SafeProxyFactory contract error. You will have to use custom factory because canonical Safe Factory is not deployed on the current network.
                    </label>
                    {customSafeFactory &&
                        <div className="ts-grid">
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Safe Singleton Address" id="safe-custom-factory-singleton-address" defaultValue={safeIsL1Singleton ? DEFAULT_SAFE_FACTORY_SINGLETON_ADDRESS : DEFAULT_SAFE_FACTORY_L2_SINGLETON_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Safe Proxy Factory Address" id="safe-custom-factory-proxy-factory-address" defaultValue={DEFAULT_SAFE_FACTORY_PROXY_FACTORY_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Multi Send Address" id="safe-custom-factory-multi-send-address" defaultValue={DEFAULT_SAFE_FACTORY_MULTI_SEND_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Multi Send Call Only Address" id="safe-custom-factory-multi-send-call-only-address" defaultValue={DEFAULT_SAFE_FACTORY_MULTI_SEND_CALL_ONLY_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Fallback Handler Address" id="safe-custom-factory-fallback-handler-address" defaultValue={DEFAULT_SAFE_FACTORY_FALLBACK_HANDLER_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Sign Message Lib Address" id="safe-custom-factory-sign-message-lib-address" defaultValue={DEFAULT_SAFE_FACTORY_SIGN_MESSAGE_LIB_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Create Call Address" id="safe-custom-create-call-address" defaultValue={DEFAULT_SAFE_FACTORY_CREATE_CALL_ADDRESS} />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Simulate Tx Accessor Address" id="safe-simulate-tx-accessor-address" defaultValue={DEFAULT_SAFE_FACTORY_SIMULATE_TX_ACCESSOR_ADDRESS} />
                            </div>
                        </div>
                    }
                </fieldset>
                <div className="has-vertically-spaced"></div>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Owner Addresses (use &quot;,&quot; to split address)" id="safe-deployment-owner-addresses" />
                    </div>
                    <div className="ts-input column is-2-wide">
                        <input type="text" placeholder="Threshold" id="safe-deployment-owner-threshold" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const safeVersion = (document.getElementById("safe-version") as HTMLSelectElement).value;
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        await SafeAccount.deploy(
                            (document.getElementById("safe-deployment-owner-addresses") as HTMLInputElement).value,
                            (document.getElementById("safe-deployment-owner-threshold") as HTMLInputElement).value,
                            safeVersion as SafeVersion,
                            isL1SafeSingleton,
                            contractNetworks
                        );
                    }}>Deploy Safe</button>
                </div>
                <br></br>
                <p>Read Contract</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Address" id="safe-get-owners-safe-address" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        await SafeAccount.getOwners(
                            (document.getElementById("safe-get-owners-safe-address") as HTMLInputElement).value,
                            isL1SafeSingleton,
                            contractNetworks
                        );
                    }}>Get Safe Owners</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Address" id="safe-get-threshold-safe-address" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        await SafeAccount.getThreshold(
                            (document.getElementById("safe-get-threshold-safe-address") as HTMLInputElement).value,
                            isL1SafeSingleton,
                            contractNetworks
                        );
                    }}>Get Safe Threshold</button>
                </div>
                <br></br>
                <p>Transaction</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Address (From)" id="safe-create-transaction-safe-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="To" id="safe-create-transaction-to" />
                    </div>
                    <div className="ts-input column is-16-wide is-resizable">
                        <textarea placeholder="Data (Input &quot;0x&quot; for transaction without data)" id="safe-create-transaction-data" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Value (Amount)" id="safe-create-transaction-value" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        const transactions: MetaTransactionData[] = [
                            {
                                to: (document.getElementById("safe-create-transaction-to") as HTMLInputElement).value,
                                data: (document.getElementById("safe-create-transaction-data") as HTMLInputElement).value,
                                value: (document.getElementById("safe-create-transaction-value") as HTMLInputElement).value
                            }
                        ];
                        await SafeAccount.createTransaction(
                            (document.getElementById("safe-create-transaction-safe-address") as HTMLInputElement).value,
                            isL1SafeSingleton,
                            transactions,
                            contractNetworks
                        );
                    }}>Create Transaction</button>
                </div>
                <br></br>
                <p>Module Management (Only support self-owned Safe that requires no additional signature to execute the transaction)</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Address" id="safe-enable-module-safe-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Module Address" id="safe-enable-module-address" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        await SafeAccount.enableModule(
                            (document.getElementById("safe-enable-module-safe-address") as HTMLInputElement).value,
                            (document.getElementById("safe-enable-module-address") as HTMLInputElement).value,
                            isL1SafeSingleton,
                            contractNetworks
                        );
                    }}>Enable Safe Module</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Address" id="safe-disable-module-safe-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Module Address" id="safe-disable-module-address" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        await SafeAccount.disableModule(
                            (document.getElementById("safe-disable-module-safe-address") as HTMLInputElement).value,
                            (document.getElementById("safe-disable-module-address") as HTMLInputElement).value,
                            isL1SafeSingleton,
                            contractNetworks
                        );
                    }}>Disable Safe Module</button>
                </div>
                <br></br>
                <p>Owner Management (Only support self-owned Safe that requires no additional signature to execute the transaction)</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Address" id="safe-swap-owner-safe-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Old Owner Address" id="safe-swap-owner-old-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="New Owner Address" id="safe-swap-owner-new-address" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        const { isL1SafeSingleton, contractNetworks } = onClickSafeConfig(customSafeFactory);
                        await SafeAccount.swapOwner(
                            (document.getElementById("safe-swap-owner-safe-address") as HTMLInputElement).value,
                            (document.getElementById("safe-swap-owner-old-address") as HTMLInputElement).value,
                            (document.getElementById("safe-swap-owner-new-address") as HTMLInputElement).value,
                            isL1SafeSingleton,
                            contractNetworks
                        );
                    }}>Swap Safe Owner</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary><strong>Founder Features</strong></summary>
                <p>Steward System Deployment</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Addresses (use &quot;,&quot; to split address)" id="founder-features-steward-addresses" />
                    </div>
                    <div className="ts-input column is-6-wide">
                        <input type="text" placeholder="Steward Expire Timestamps (use &quot;,&quot; to split timestamp)" id="founder-features-steward-expire-timestamps" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Proposal Vote Duration (in seconds)" id="founder-features-steward-proposal-vote-duration" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward System Owner Address" id="founder-features-steward-owner" />
                    </div>
                    <button className="ts-button" onClick={async () => await StewardSystem.deploy((document.getElementById("founder-features-steward-addresses") as HTMLInputElement).value, (document.getElementById("founder-features-steward-expire-timestamps") as HTMLInputElement).value, (document.getElementById("founder-features-steward-proposal-vote-duration") as HTMLInputElement).value, (document.getElementById("founder-features-steward-owner") as HTMLInputElement).value)}>Deploy Steward System</button>
                </div>
                <br></br>
                <p>Working Group System Deployment</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Safe Account Address" id="founder-features-working-group-safe-account-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward System Address" id="founder-features-working-group-steward-system-address" />
                    </div>
                    <div className="ts-input column is-6-wide">
                        <input type="text" placeholder="Working Group Addresses (use &quot;,&quot; to split address)" id="founder-features-working-group-addresses" />
                    </div>
                    <div className="ts-input column is-6-wide">
                        <input type="text" placeholder="Working Group Expire Timestamps (use &quot;,&quot; to split timestamp)" id="founder-features-working-group-expire-timestamps" />
                    </div>
                    <div className="ts-input column is-6-wide">
                        <input type="text" placeholder="Working Group Allowances (use &quot;,&quot; to split allowance)" id="founder-features-working-group-allowances" />
                    </div>
                    <div className="ts-input column is-6-wide">
                        <input type="text" placeholder="Working Group Proposal Vote Duration (in seconds)" id="founder-features-working-group-proposal-vote-duration" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Working Group System Owner Address" id="founder-features-working-group-owner" />
                    </div>
                    <button className="ts-button" onClick={async () => await WorkingGroupSystem.deploy((document.getElementById("founder-features-working-group-safe-account-address") as HTMLInputElement).value, (document.getElementById("founder-features-working-group-steward-system-address") as HTMLInputElement).value, (document.getElementById("founder-features-working-group-addresses") as HTMLInputElement).value, (document.getElementById("founder-features-working-group-expire-timestamps") as HTMLInputElement).value, (document.getElementById("founder-features-working-group-allowances") as HTMLInputElement).value, (document.getElementById("founder-features-working-group-proposal-vote-duration") as HTMLInputElement).value, (document.getElementById("founder-features-working-group-owner") as HTMLInputElement).value)}>Deploy Working Group System</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary><strong>Steward Features</strong></summary>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward System Address" id="steward-features-system-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Working Group System Address" id="steward-features-working-group-address" />
                    </div>
                </div>
                <br></br>
                <div className="ts-grid">
                    <button className="ts-button" onClick={async () => {
                        const stewardData = await StewardSystem.getSteward((document.getElementById("steward-features-system-address") as HTMLInputElement).value, address!);
                        if (stewardData === undefined) return;
                        const isSteward = stewardData[0] === StewardStatus.Valid;
                        if (isSteward)
                            toast.info(`You are a steward. Steward Expire Date: ${new Date((stewardData[1] * 1000))} (${stewardData[1].toString()})`);
                        else
                            toast.info("You are not a steward.");
                    }}>Connect Steward</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <button className="ts-button" onClick={async () => {
                        const workingGroups = await WorkingGroupSystem.getWorkingGroups((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value);
                        if (workingGroups === undefined) return;
                        workingGroups.forEach(async (workingGroup: string) => {
                            const allowance = await WorkingGroupSystem.getAllowance((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, workingGroup);
                            const workingGroupData = await WorkingGroupSystem.getWorkingGroup((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, workingGroup);
                            toast.info(`${workingGroup} / ${allowance} ${chain?.nativeCurrency.symbol} / ${new Date((workingGroupData[1] * 1000))} (${workingGroupData[1].toString()})`);
                        });
                    }}>Get Working Groups / Allowance / Expire Date</button>
                </div>
                <br></br>
                <p>Working Group Proposal</p>
                <div className="ts-grid">
                    <div className="ts-select">
                        <select id="steward-features-working-group-proposal-action" defaultValue="">
                            <option value="">Action</option>
                            <option value="set">Set</option>
                            <option value="remove">Remove</option>
                        </select>
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Target Address" id="steward-features-working-group-proposal-target-address" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="New Expire Timestamp" id="steward-features-working-group-new-expire-timestamp" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Allowance" id="steward-features-working-group-allowance" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        let action;
                        if ((document.getElementById("steward-features-working-group-proposal-action") as HTMLSelectElement).value == "set")
                            action = WorkingGroupAction.Set;
                        else if ((document.getElementById("steward-features-working-group-proposal-action") as HTMLSelectElement).value == "remove")
                            action = WorkingGroupAction.Remove;
                        else
                            return;
                        const targetAddress = (document.getElementById("steward-features-working-group-proposal-target-address") as HTMLInputElement).value;
                        const newExpireTimestamp = (document.getElementById("steward-features-working-group-new-expire-timestamp") as HTMLInputElement).value;
                        const allowance = (document.getElementById("steward-features-working-group-allowance") as HTMLInputElement).value;
                        await WorkingGroupSystem.proposeWorkingGroup((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, action, targetAddress, newExpireTimestamp, allowance);
                    }}>Create Working Group Proposal</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Proposal ID" id="steward-features-working-group-proposal-id" />
                    </div>
                    <div className="ts-select">
                        <select id="steward-features-working-group-proposal-vote" defaultValue="">
                            <option value="">Vote</option>
                            <option value="abstain">Abstain</option>
                            <option value="approve">Approve</option>
                            <option value="reject">Reject</option>
                        </select>
                    </div>
                    <button className="ts-button" onClick={async () => {
                        let vote;
                        if ((document.getElementById("steward-features-working-group-proposal-vote") as HTMLSelectElement).value == "abstain")
                            vote = Vote.Abstain;
                        else if ((document.getElementById("steward-features-working-group-proposal-vote") as HTMLSelectElement).value == "approve")
                            vote = Vote.Approve;
                        else if ((document.getElementById("steward-features-working-group-proposal-vote") as HTMLSelectElement).value == "reject")
                            vote = Vote.Reject;
                        else
                            return;
                        await WorkingGroupSystem.voteOnWorkingGroupProposal((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, (document.getElementById("steward-features-working-group-proposal-id") as HTMLInputElement).value, vote);
                    }}>Vote On Proposal</button>
                    <button className="ts-button" onClick={async () => {
                        await WorkingGroupSystem.executeWorkingGroupProposal((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, (document.getElementById("steward-features-working-group-proposal-id") as HTMLInputElement).value);
                    }}>Execute Proposal</button>
                </div>
                <br></br>
                <p>Steward Proposal</p>
                <div className="ts-grid">
                    <div className="ts-select">
                        <select id="steward-features-steward-proposal-action" defaultValue="">
                            <option value="">Action</option>
                            <option value="set">Set</option>
                            <option value="remove">Remove</option>
                        </select>
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Target Address" id="steward-features-steward-proposal-target-address" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="New Expire Timestamp" id="steward-features-steward-new-expire-timestamp" />
                    </div>
                    <button className="ts-button" onClick={async () => {
                        let action;
                        if ((document.getElementById("steward-features-steward-proposal-action") as HTMLSelectElement).value == "set")
                            action = StewardAction.Set;
                        else if ((document.getElementById("steward-features-steward-proposal-action") as HTMLSelectElement).value == "remove")
                            action = StewardAction.Remove;
                        else
                            return;
                        const targetAddress = (document.getElementById("steward-features-steward-proposal-target-address") as HTMLInputElement).value;
                        const newExpireTimestamp = (document.getElementById("steward-features-steward-new-expire-timestamp") as HTMLInputElement).value;
                        await StewardSystem.proposeSteward((document.getElementById("steward-features-system-address") as HTMLInputElement).value, action, targetAddress, newExpireTimestamp);
                    }}>Create Steward Proposal</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Proposal ID" id="steward-features-steward-proposal-id" />
                    </div>
                    <div className="ts-select">
                        <select id="steward-features-steward-proposal-vote" defaultValue="">
                            <option value="">Vote</option>
                            <option value="abstain">Abstain</option>
                            <option value="approve">Approve</option>
                            <option value="reject">Reject</option>
                        </select>
                    </div>
                    <button className="ts-button" onClick={async () => {
                        let vote;
                        if ((document.getElementById("steward-features-steward-proposal-vote") as HTMLSelectElement).value == "abstain")
                            vote = Vote.Abstain;
                        else if ((document.getElementById("steward-features-steward-proposal-vote") as HTMLSelectElement).value == "approve")
                            vote = Vote.Approve;
                        else if ((document.getElementById("steward-features-steward-proposal-vote") as HTMLSelectElement).value == "reject")
                            vote = Vote.Reject;
                        else
                            return;
                        await StewardSystem.voteOnStewardProposal((document.getElementById("steward-features-system-address") as HTMLInputElement).value, (document.getElementById("steward-features-steward-proposal-id") as HTMLInputElement).value, vote);
                    }}>Vote On Proposal</button>
                    <button className="ts-button" onClick={async () => {
                        await StewardSystem.executeStewardProposal((document.getElementById("steward-features-system-address") as HTMLInputElement).value, (document.getElementById("steward-features-steward-proposal-id") as HTMLInputElement).value);
                    }}>Execute Proposal</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            {/* <details className="ts-accordion" open>
                <summary><strong>Working Group Features</strong></summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary><strong>Token Holder Features</strong></summary>
            </details> */}
            <div className="has-vertically-spaced"></div>
        </div >
    );
}
