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
import { ethers, BigNumber } from "ethers";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BaseGoerli } from "@thirdweb-dev/chains";
import ozOwnable from "@openzeppelin/contracts/build/contracts/Ownable.json";
import { EthersAdapter, ContractNetworksConfig, SafeFactory, SafeAccountConfig, SafeTransactionOptionalProps } from '@safe-global/protocol-kit';
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
    BASE_GOERLI_WETH_ADDRESS,
    ERC20_BYTECODE,
    ERC20_ABI,
    OZ_TIMELOCK_BYTECODE,
    OZ_TIMELOCK_ABI,
    OZ_GOVERNOR_BYTECODE,
    OZ_GOVERNOR_ABI,
    STEWARD_SYSTEM_BYTECODE,
    STEWARD_SYSTEM_ABI,
    WORKING_GROUP_SYSTEM_BYTECODE,
    WORKING_GROUP_SYSTEM_ABI
} from "../constants";

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

    const [lastChainId, setLastChainId] = useState<number | undefined>(undefined);
    const [lastAddress, setLastAddress] = useState<string | undefined>(undefined);

    const [safeIsL1Singleton, setSafeIsL1Singleton] = useState(false);
    const [customSafeFactory, setCustomSafeFactory] = useState(false);

    const [balance, setBalance] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [wethBalance, setWETHBalance] = useState("");

    const clearState = () => {
        if (lastChainId !== undefined) setLastChainId(undefined);
        if (lastAddress !== undefined) setLastAddress(undefined);

        if (safeIsL1Singleton !== false) setSafeIsL1Singleton(false);
        if (customSafeFactory !== false) setCustomSafeFactory(false);

        if (balance !== "") setBalance("");
        if (signedMessage !== "") setSignedMessage("");
        if (wethBalance !== "") setWETHBalance("");
    };

    const isVaildNetwork = () => {
        if (chain === undefined) return false;

        const isNetworkSupported = supportedChains.some((supportedChain) => {
            return supportedChain.chainId === chain.chainId;
        });

        return isNetworkSupported;
    };

    const checkNetwork = async () => {
        if (!isVaildNetwork()) {
            clearState();
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
    //#endregion Init

    //#region NetworkCheck
    switch (connectionStatus) {
        case "connected":
            break;
        case "unknown":
            clearState();
            return (<p>Loading...</p>);
        case "connecting":
            clearState();
            return (<p>Connecting...</p>);
        case "disconnected":
            clearState();
            return (<p>Connect wallet to access</p>);
        default:
            clearState();
            return (<p>Unknown connection status</p>);
    }

    if (!isVaildNetwork()) {
        clearState();
        return (
            <div>
                {(chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>) || <p>Connected to Chain ID: {chainId}</p>}
                <p style={{ color: 'red' }}>Unsupported Chain</p>
                <button onClick={() => { checkNetwork() }}>Switch Network</button>
            </div>
        );
    }
    //#endregion NetworkCheck

    //#region StateCheck
    if (lastChainId === undefined) {
        setLastChainId(chain?.chainId);
    } else if (lastChainId !== chain?.chainId) {
        clearState();
        setLastChainId(chain?.chainId);
    }

    if (lastAddress === undefined) {
        setLastAddress(address);
    } else if (lastAddress !== address) {
        clearState();
        setLastAddress(address);
    }
    //#endregion StateCheck

    //#region ErrorHandling
    const handleError = (e: any) => {
        console.error(e);
        toast.error(`${e}`);
    };
    //#endregion ErrorHandling

    //#region Toast Callback
    const toastSuccessTx = (data: ethers.providers.TransactionResponse) => {
        if (chainExplorerUrl !== undefined)
            return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${data.hash}`} target="_blank" rel="noreferrer">{data.hash}</a></div>;
        else
            return `Tx Hash: ${data.hash}`;
    };

    const toastSuccessContractDeployTx = (data: ethers.Contract) => {
        if (chainExplorerUrl !== undefined)
            return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${data.deployTransaction.hash}`} target="_blank" rel="noreferrer">{data.deployTransaction.hash}</a></div>;
        else
            return `Tx Hash: ${data.deployTransaction.hash}`;
    };

    const toastSuccessContractDeployed = (data: ethers.providers.TransactionReceipt) => {
        if (chainExplorerUrl !== undefined)
            return <div>Deployed Contract Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${data.contractAddress}`} target="_blank" rel="noreferrer">{data.contractAddress}</a></div>;
        else
            return `Deployed Contract Address: ${data.contractAddress}`;
    };

    const toastSuccessDaoDeployed = (daoTimelockAddress: string, daoTokenAddress: string, daoGovernorAddress: string) => {
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

    const toastSuccessSafeDeployed = async (safeAddress: string) => {
        if (chainExplorerUrl !== undefined)
            return <div>Deployed Safe Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${safeAddress}`} target="_blank" rel="noreferrer">{safeAddress}</a></div>;
        else
            return `Deployed Safe Address: ${safeAddress}`;
    };
    //#endregion Toast Callback

    //#region ETH
    const getBalance = async () => {
        if (!await checkNetwork()) return;
        try {
            setBalance(`Balance: ${ethers.utils.formatEther(await signer?.getBalance()!)} ${chain?.nativeCurrency.symbol}`);
        } catch (e) {
            handleError(e);
        }
    };

    const getBalanceOf = async (address: string) => {
        if (!await checkNetwork()) return;

        if (address === "") {
            toast.error("Address cannot be empty");
            return;
        }

        try {
            const balance = await signer?.provider?.getBalance(address);
            toast.success(`Balance of ${address}: ${ethers.utils.formatEther(balance!)} ${chain?.nativeCurrency.symbol}`);
        } catch (e) {
            handleError(e);
        }
    }

    const signMessage = async () => {
        if (!await checkNetwork()) return;
        try {
            const signedMessage = signer!.signMessage("Hello World");
            await toast.promise(
                signedMessage,
                {
                    pending: `Signing Message...`,
                    success: {
                        render({ data }) {
                            return `Signed message: ${data}`;
                        }
                    }
                }
            ).then((v) => {
                setSignedMessage(`Signed Message: ${v}`);
            }).catch((e) => {
                throw e;
            });
        } catch (e) {
            handleError(e);
        }
    };

    const sendETH = async (to: string, amount: string) => {
        if (!await checkNetwork()) return;

        if (to === "") {
            toast.error("Address cannot be empty");
            return;
        }

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            const tx = signer!.sendTransaction({
                to: to,
                value: ethers.utils.parseEther(amount)
            });
            await toast.promise(
                tx,
                {
                    pending: `Sending ${amount} ${chain?.nativeCurrency.symbol} to ${to}...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data);
                        }
                    },
                    error: {
                        render({ data }) {
                            return `${(data as any).message}`;
                        }
                    }
                }
            )
        } catch (e) {
            handleError(e);
        }
    };
    //#endregion ETH

    //#region WETH
    const getWETHBalance = async () => {
        if (!await checkNetwork()) return;
        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = BASE_GOERLI_WETH_ADDRESS;
                    break;
                default:
                    toast.error("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function balanceOf(address) view returns (uint256)"], signer);
            const balance = await wethContract.balanceOf(await signer?.getAddress());
            setWETHBalance(`WETH Balance: ${ethers.utils.formatEther(balance)} WETH`);
        } catch (e) {
            handleError(e);
        }
    };

    const wrapETH = async (amount: string) => {
        if (!await checkNetwork()) return;

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = BASE_GOERLI_WETH_ADDRESS;
                    break;
                default:
                    toast.error("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function deposit() payable"], signer);
            const tx = wethContract.deposit({ value: ethers.utils.parseEther(amount) });
            await toast.promise(
                tx,
                {
                    pending: `Wrapping ${amount} ETH...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
                        }
                    },
                    error: {
                        render({ data }) {
                            return `${(data as any).message}`;
                        }
                    }
                }
            )
        } catch (e) {
            handleError(e);
        }
    };

    const unwrapETH = async (amount: string) => {
        if (!await checkNetwork()) return;

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = BASE_GOERLI_WETH_ADDRESS;
                    break;
                default:
                    toast.error("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function withdraw(uint256 wad)"], signer);
            const tx = wethContract.withdraw(ethers.utils.parseEther(amount));
            await toast.promise(
                tx,
                {
                    pending: `Unwrapping ${amount} WETH...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
                        }
                    },
                    error: {
                        render({ data }) {
                            return `${(data as any).message}`;
                        }
                    }
                }
            )
        } catch (e) {
            handleError(e);
        }
    };

    const transferWETH = async (to: string, amount: string) => {
        if (!await checkNetwork()) return;

        if (to === "") {
            toast.error("To Address cannot be empty");
            return;
        }

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = BASE_GOERLI_WETH_ADDRESS;
                    break;
                default:
                    toast.error("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function transfer(address dst, uint256 wad)"], signer);
            const tx = wethContract.transfer(to, ethers.utils.parseEther(amount));
            await toast.promise(
                tx,
                {
                    pending: `Sending ${amount} WETH to ${to}...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
                        }
                    },
                    error: {
                        render({ data }) {
                            return `${(data as any).message}`;
                        }
                    }
                }
            )
        } catch (e) {
            handleError(e);
        }
    };

    const approveWETH = async (spender: string, amount: string) => {
        if (!await checkNetwork()) return;

        if (spender === "") {
            toast.error("Spender cannot be empty");
            return;
        }

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = BASE_GOERLI_WETH_ADDRESS;
                    break;
                default:
                    toast.error("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function approve(address guy, uint256 wad)"], signer);
            const tx = wethContract.approve(spender, ethers.utils.parseEther(amount));
            await toast.promise(
                tx,
                {
                    pending: `Approving ${amount} WETH to ${spender}...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
                        }
                    },
                    error: {
                        render({ data }) {
                            return `${(data as any).message}`;
                        }
                    }
                }
            )
        } catch (e) {
            handleError(e);
        }
    };

    const transferWETHFrom = async (from: string, to: string, amount: string) => {
        if (!await checkNetwork()) return;

        if (from === "") {
            toast.error("From Address cannot be empty");
            return;
        }

        if (to === "") {
            toast.error("To Address cannot be empty");
            return;
        }

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = BASE_GOERLI_WETH_ADDRESS;
                    break;
                default:
                    toast.error("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function transferFrom(address src, address dst, uint256 wad)"], signer);
            const tx = wethContract.transferFrom(from, to, ethers.utils.parseEther(amount));
            await toast.promise(
                tx,
                {
                    pending: `Sending ${amount} WETH from ${from} to ${to}...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
                        }
                    },
                    error: {
                        render({ data }) {
                            return `${(data as any).message}`;
                        }
                    }
                }
            )
        } catch (e) {
            handleError(e);
        }
    };
    //#endregion WETH

    //#region OpenZeppelin Ownable
    const OZOwnable = {
        getOwner: async (address: string) => {
            if (!await checkNetwork()) return;

            if (address === "") {
                toast.error("Address cannot be empty");
                return;
            }

            try {
                const contract = new ethers.Contract(address, ozOwnable.abi, signer);
                const owner = await contract.owner();
                toast.success(`Owner: ${owner}`);
            } catch (e) {
                handleError(e);
            }
        },
        transferOwnership: async (address: string, newOwner: string) => {
            if (!await checkNetwork()) return;

            if (address === "") {
                toast.error("Address cannot be empty");
                return;
            }

            if (newOwner === "") {
                toast.error("New Owner cannot be empty");
                return;
            }

            try {
                const contract = new ethers.Contract(address, ozOwnable.abi, signer);
                const tx = contract.transferOwnership(newOwner);
                await toast.promise(
                    tx,
                    {
                        pending: `Transferring ownership to ${newOwner}...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
        renounceOwnership: async (address: string) => {
            if (!await checkNetwork()) return;

            if (address === "") {
                toast.error("Address cannot be empty");
                return;
            }

            try {
                const contract = new ethers.Contract(address, ozOwnable.abi, signer);
                const tx = contract.renounceOwnership();
                await toast.promise(
                    tx,
                    {
                        pending: `Renouncing ownership...`,
                        success: {
                            render({ data }) {
                                return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
        }
    };
    //#endregion OpenZeppelin Ownable

    //#region ERC20
    const ERC20 = {
        abi: ERC20_ABI,
        bytecode: ERC20_BYTECODE,
        getName: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, ERC20.abi, signer);
                    const name = await contract.name();
                    toast.success(`Name: ${name}`);
                } catch (e) {
                    handleError(e);
                }
            }
        },
        getSymbol: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, ERC20.abi, signer);
                    const symbol = await contract.symbol();
                    toast.success(`Symbol: ${symbol}`);
                } catch (e) {
                    handleError(e);
                }
            }
        },
        getDecimals: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, ERC20.abi, signer);
                    const decimals = await contract.decimals();
                    toast.success(`Decimals: ${decimals}`);
                } catch (e) {
                    handleError(e);
                }
            }
        },
        getTotalSupply: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, ERC20.abi, signer);
                    const totalSupply = await contract.totalSupply();
                    toast.success(`Total Supply: ${totalSupply.div(BigNumber.from(10).pow(await contract.decimals()))} ${await contract.symbol()} (${totalSupply})`);
                } catch (e) {
                    handleError(e);
                }
            }
        },
        deploy: async (owner: string, name: string, symbol: string, initSupply: string) => {
            if (!await checkNetwork()) return;

            if (owner === "") {
                toast.error("Owner cannot be empty");
                return;
            }

            if (name === "") {
                toast.error("Token Name cannot be empty");
                return;
            }

            if (symbol === "") {
                toast.error("Symbol cannot be empty");
                return;
            }

            if (initSupply === "") {
                toast.error("Initial Supply cannot be empty");
                return;
            }

            try {
                const factory = new ethers.ContractFactory(ERC20.abi, ERC20.bytecode, signer);
                const tx = factory.deploy(owner, name, symbol, initSupply);

                let deployedAddress: string | undefined;

                await toast.promise(
                    tx,
                    {
                        pending: `Deploying ERC20 Token...`,
                        success: {
                            render({ data }) {
                                return toastSuccessContractDeployTx(data);
                            }
                        },
                        error: {
                            render({ data }) {
                                return `${(data as any).message}`;
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
                                    return toastSuccessContractDeployed(data);
                                }
                            },
                            error: {
                                render({ data }) {
                                    return `${(data as any).message}`;
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
    //#endregion ERC20

    //#region OpenZeppelin Governor
    const OZGovernor = {
        abi: OZ_GOVERNOR_ABI,
        bytecode: OZ_GOVERNOR_BYTECODE,
        getName: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, OZGovernor.abi, signer);
                    const governorName = await contract.name();
                    toast.success(`Governor Name: ${governorName}`);
                } catch (e) {
                    handleError(e);
                }
            }
        },
        deploy: async (tokenAddress: string, timelockAddress: string, governorName: string, votingDelayBlock: string, votingPeriodBlock: string, proposalThreshold: string, quorumNumerator: string) => {
            if (!await checkNetwork()) return;

            if (tokenAddress === "") {
                toast.error("Token Address cannot be empty");
                return;
            }

            if (timelockAddress === "") {
                toast.error("Timelock Address cannot be empty");
                return;
            }

            if (governorName === "") {
                toast.error("Governor Name cannot be empty");
                return;
            }

            if (votingDelayBlock === "") {
                toast.error("Voting Delay Block cannot be empty");
                return;
            }

            if (votingPeriodBlock === "") {
                toast.error("Voting Period Block cannot be empty");
                return;
            }

            if (proposalThreshold === "") {
                toast.error("Proposal Threshold cannot be empty");
                return;
            }

            if (quorumNumerator === "") {
                toast.error("Quorum Numerator cannot be empty");
                return;
            }

            try {
                const factory = new ethers.ContractFactory(OZGovernor.abi, OZGovernor.bytecode, signer);
                const tx = factory.deploy(tokenAddress, timelockAddress, governorName, votingDelayBlock, votingPeriodBlock, proposalThreshold, quorumNumerator);

                let deployedAddress: string | undefined;

                await toast.promise(
                    tx,
                    {
                        pending: `Deploying OZ Governor...`,
                        success: {
                            render({ data }) {
                                return toastSuccessContractDeployTx(data);
                            }
                        },
                        error: {
                            render({ data }) {
                                return `${(data as any).message}`;
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
                                    return toastSuccessContractDeployed(data);
                                }
                            },
                            error: {
                                render({ data }) {
                                    return `${(data as any).message}`;
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

    const OZTimelock = {
        abi: OZ_TIMELOCK_ABI,
        bytecode: OZ_TIMELOCK_BYTECODE,
        getMinDelay: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, OZTimelock.abi, signer);
                    const minDelay = await contract.getMinDelay();
                    toast.success(`Minimum Delay: ${minDelay}`);
                } catch (e) {
                    handleError(e);
                }
            }
        },
        deploy: async (minDelay: string, proposers: string, executors: string, admin: string) => {
            if (!await checkNetwork()) return;

            if (minDelay === "") {
                toast.error("Minimum Delay cannot be empty");
                return;
            }

            if (proposers === "") {
                toast.error("Proposers cannot be empty");
                return;
            }

            if (executors === "") {
                toast.error("Executors cannot be empty");
                return;
            }

            if (admin === "") {
                toast.error("Admin cannot be empty");
                return;
            }

            let proposersArray: string[] = [];
            proposers.split(",").forEach((proposer) => {
                proposersArray.push(proposer.trim());
            });

            let executorsArray: string[] = [];
            executors.split(",").forEach((executor) => {
                executorsArray.push(executor.trim());
            });

            try {
                const factory = new ethers.ContractFactory(OZTimelock.abi, OZTimelock.bytecode, signer);
                const tx = factory.deploy(minDelay, proposersArray, executorsArray, admin);

                let deployedAddress: string | undefined;

                await toast.promise(
                    tx,
                    {
                        pending: `Deploying OZ Timelock...`,
                        success: {
                            render({ data }) {
                                return toastSuccessContractDeployTx(data);
                            }
                        },
                        error: {
                            render({ data }) {
                                return `${(data as any).message}`;
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
                                    return toastSuccessContractDeployed(data);
                                }
                            },
                            error: {
                                render({ data }) {
                                    return `${(data as any).message}`;
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
    //#endregion OpenZeppelin Governor

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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
            if (!await checkNetwork()) return;

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

            const daoTimelockAddress = await OZTimelock.deploy(timelockMinDelay, deployerAddress, deployerAddress, deployerAddress);
            if (daoTimelockAddress === undefined) return;
            const daoTimelock = DAOTimelock.attach(daoTimelockAddress);

            let daoTokenAddress;
            if (tokenOwner === "Timelock")
                daoTokenAddress = await ERC20.deploy(daoTimelockAddress, tokenName, tokenSymbol, "0");
            else
                daoTokenAddress = await ERC20.deploy(tokenOwner, tokenName, tokenSymbol, "0");

            if (daoTokenAddress === undefined) return;
            // const daoToken = DAOToken.attach(daoTokenAddress!);

            const daoGovernorAddress = await OZGovernor.deploy(daoTokenAddress, daoTimelockAddress, governorName, governorVotingDelayBlock, governorVotingPeriodBlock, governorProposalThreshold, governorQuorumNumerator);
            if (daoGovernorAddress === undefined) return;
            // const daoGovernor = DAOGovernor.attach(daoGovernorAddress!);

            // Grant timelock role "PROPOSER_ROLE" to governor
            await toast.promise(
                daoTimelock.grantRole("0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1", daoGovernorAddress),
                {
                    pending: `Granting timelock role "PROPOSER_ROLE" to governor...`,
                    success: {
                        render({ data }) {
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
                            return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
            if (!await checkNetwork()) return;

            if (contractAddress === "") {
                toast.error("Contract Address cannot be empty");
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
        deploy: async (stewardAddresses: string, stewardExpireTimestamps: string, stewardProposalVoteDuration: string, owner: string) => {
            if (!await checkNetwork()) return;

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
                                return toastSuccessContractDeployTx(data);
                            }
                        },
                        error: {
                            render({ data }) {
                                return `${(data as any).message}`;
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
                                    return toastSuccessContractDeployed(data);
                                }
                            },
                            error: {
                                render({ data }) {
                                    return `${(data as any).message}`;
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

    // StewardSystem.isSelfSteward("0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0");
    // Working Group: 0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE

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
            if (!await checkNetwork()) return;

            if (contractAddress === "") {
                toast.error("Contract Address cannot be empty");
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
            if (!await checkNetwork()) return;

            if (contractAddress === "") {
                toast.error("Contract Address cannot be empty");
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
            if (!await checkNetwork()) return;

            if (contractAddress === "") {
                toast.error("Contract Address cannot be empty");
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
            if (!await checkNetwork()) return;

            if (contractAddress === "") {
                toast.error("Contract Address cannot be empty");
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
                                return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
            if (!await checkNetwork()) return;

            if (contractAddress === "") {
                toast.error("Contract Address cannot be empty");
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
                                return toastSuccessTx(data as ethers.providers.TransactionResponse);
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
            if (!await checkNetwork()) return;

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
                                return toastSuccessContractDeployTx(data);
                            }
                        },
                        error: {
                            render({ data }) {
                                return `${(data as any).message}`;
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
                                    return toastSuccessContractDeployed(data);
                                }
                            },
                            error: {
                                render({ data }) {
                                    return `${(data as any).message}`;
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
            <details className="ts-accordion" open>
                <summary>ETH</summary>
                <div>
                    <button className="ts-button" onClick={async () => await getBalance()}>Get Balance</button>
                    <br></br>
                    {balance !== "" && <span>{balance}</span>}
                </div>
                <br></br>
                <div>
                    <div className="ts-grid">
                        <div className="ts-input column is-5-wide">
                            <input type="text" placeholder="Address" id="eth-get-balance-of" />
                        </div>
                        <button className="ts-button" onClick={async () => await getBalanceOf((document.getElementById("eth-get-balance-of") as HTMLInputElement).value)}>Get Balance Of</button>
                    </div>
                </div>
                <br></br>
                <div>
                    <button className="ts-button" onClick={async () => await signMessage()}>Sign Message</button>
                    <br></br>
                    {signedMessage !== "" && <span>{signedMessage}</span>}
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Address" id="eth-send-to" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Amount" id="eth-send-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await sendETH((document.getElementById("eth-send-to") as HTMLInputElement).value, (document.getElementById("eth-send-amount") as HTMLInputElement).value)}>Send ETH</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary>WETH</summary>
                <div>
                    <button className="ts-button" onClick={async () => await getWETHBalance()}>Get WETH Balance</button>
                    <br></br>
                    {wethBalance !== "" && <span>{wethBalance}</span>}
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Amount" id="weth-wrap-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await wrapETH((document.getElementById("weth-wrap-amount") as HTMLInputElement).value)}>Wrap ETH</button>
                    <button className="ts-button" onClick={async () => await unwrapETH((document.getElementById("weth-wrap-amount") as HTMLInputElement).value)}>Unwrap WETH</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="To Address" id="weth-transfer-to" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Amount" id="weth-transfer-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await transferWETH((document.getElementById("weth-transfer-to") as HTMLInputElement).value, (document.getElementById("weth-transfer-amount") as HTMLInputElement).value)}>Transfer WETH</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Spender" id="weth-approve-spender" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Amount" id="weth-approve-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await approveWETH((document.getElementById("weth-approve-spender") as HTMLInputElement).value, (document.getElementById("weth-approve-amount") as HTMLInputElement).value)}>Approve WETH</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="From Address" id="weth-transfer-from-from" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="To Address" id="weth-transfer-from-to" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Amount" id="weth-transfer-from-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await transferWETHFrom((document.getElementById("weth-transfer-from-from") as HTMLInputElement).value, (document.getElementById("weth-transfer-from-to") as HTMLInputElement).value, (document.getElementById("weth-transfer-from-amount") as HTMLInputElement).value)}>Transfer WETH From</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary>OpenZeppelin Ownable</summary>
                <p>Get Owner</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Target Contract Address" id="ownable-get-owner-target" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZOwnable.getOwner((document.getElementById("ownable-get-owner-target") as HTMLInputElement).value)}>Get Owner</button>
                </div>
                <br></br>
                <p>Transfer Ownership</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Target Contract Address" id="ownable-transfer-owner-target" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="New Owner Address" id="ownable-transfer-owner-address" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZOwnable.transferOwnership((document.getElementById("ownable-transfer-owner-target") as HTMLInputElement).value, (document.getElementById("ownable-transfer-owner-address") as HTMLInputElement).value)}>Transfer Ownership</button>
                </div>
                <br></br>
                <p>Renounce Ownership</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Target Contract Address" id="ownable-renounce-owner-target" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZOwnable.renounceOwnership((document.getElementById("ownable-renounce-owner-target") as HTMLInputElement).value)}>Renounce Ownership</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary>ERC20 Token</summary>
                <p>Deployment</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Owner Address" id="erc20-deploy-owner" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Token Name" id="erc20-deploy-name" />
                    </div>
                    <div className="ts-input column is-2-wide">
                        <input type="text" placeholder="Symbol" id="erc20-deploy-symbol" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Initial Supply" id="erc20-deploy-init-supply" />
                    </div>
                    <button className="ts-button" onClick={async () => await ERC20.deploy((document.getElementById("erc20-deploy-owner") as HTMLInputElement).value, (document.getElementById("erc20-deploy-name") as HTMLInputElement).value, (document.getElementById("erc20-deploy-symbol") as HTMLInputElement).value, (document.getElementById("erc20-deploy-init-supply") as HTMLInputElement).value)}>Deploy ERC20 Token</button>
                </div>
                <br></br>
                <p>Contract Read</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Token Address" id="erc20-test-address" />
                    </div>
                    <button className="ts-button" onClick={async () => await ERC20.getName((document.getElementById("erc20-test-address") as HTMLInputElement).value)}>Get ERC20 Name</button>
                    <button className="ts-button" onClick={async () => await ERC20.getSymbol((document.getElementById("erc20-test-address") as HTMLInputElement).value)}>Get ERC20 Symbol</button>
                    <button className="ts-button" onClick={async () => await ERC20.getDecimals((document.getElementById("erc20-test-address") as HTMLInputElement).value)}>Get ERC20 Decimals</button>
                    <button className="ts-button" onClick={async () => await ERC20.getTotalSupply((document.getElementById("erc20-test-address") as HTMLInputElement).value)}>Get ERC20 Total Supply</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion" open>
                <summary>OpenZeppelin Governor</summary>
                <p>Timelock Deployment</p>
                <div className="ts-grid">
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Minimum Delay (in seconds)" id="oz-timelock-deploy-min-delay" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Proposers" id="oz-timelock-deploy-proposers" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Executors" id="oz-timelock-deploy-executors" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Admin" id="oz-timelock-deploy-admin" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZTimelock.deploy((document.getElementById("oz-timelock-deploy-min-delay") as HTMLInputElement).value, (document.getElementById("oz-timelock-deploy-proposers") as HTMLInputElement).value, (document.getElementById("oz-timelock-deploy-executors") as HTMLInputElement).value, (document.getElementById("oz-timelock-deploy-admin") as HTMLInputElement).value)}>Deploy OZ Timelock</button>
                </div>
                <br></br>
                <p>Governor Deployment</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Token Address" id="oz-governor-deploy-token-address" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Timelock Address" id="oz-governor-deploy-timelock-address" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Governor Name" id="oz-governor-deploy-governor-name" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Voting Delay (in blocks)" id="oz-governor-deploy-voting-delay-block" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Voting Period (in blocks)" id="oz-governor-deploy-voting-period-block" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Proposal Threshold" id="oz-governor-deploy-proposal-threshold" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Quorum Numerator (%)" id="oz-governor-deploy-quorum-numerator" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZGovernor.deploy((document.getElementById("oz-governor-deploy-token-address") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-timelock-address") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-governor-name") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-voting-delay-block") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-voting-period-block") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-proposal-threshold") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-quorum-numerator") as HTMLInputElement).value)}>Deploy OZ Governor</button>
                </div>
                <br></br>
                <p>Contract Read</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Timelock Address" id="oz-timelock-test-address" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZTimelock.getMinDelay((document.getElementById("oz-timelock-test-address") as HTMLInputElement).value)}>Get OZ Timelock Minimum Delay</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Governor Address" id="oz-governor-test-address" />
                    </div>
                    <button className="ts-button" onClick={async () => await OZGovernor.getName((document.getElementById("oz-governor-test-address") as HTMLInputElement).value)}>Get OZ Governor Name</button>
                </div>
            </details>
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
                        workingGroups.forEach(async (workingGroup: string) => {
                            const allowance = await WorkingGroupSystem.getAllowance((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, workingGroup);
                            const workingGroupData = await WorkingGroupSystem.getWorkingGroup((document.getElementById("steward-features-working-group-address") as HTMLInputElement).value, workingGroup);
                            console.log(workingGroupData[1]);
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
                </div>
                {/* <br></br>
                <p>Steward Proposal</p>
                <div className="ts-grid">

                </div> */}
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
