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
import {
    BASE_GOERLI_WETH_ADDRESS,
    ERC20_BYTECODE,
    ERC20_ABI,
    OZ_TIMELOCK_BYTECODE,
    OZ_TIMELOCK_ABI,
    OZ_GOVERNOR_BYTECODE,
    OZ_GOVERNOR_ABI,
    STEWARD_SYSTEM_BYTECODE,
    STEWARD_SYSTEM_ABI
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

    const [customSafeFactory, setCustomSafeFactory] = useState(false);

    const [balance, setBalance] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [wethBalance, setWETHBalance] = useState("");

    const clearState = () => {
        if (lastChainId !== undefined) setLastChainId(undefined);
        if (lastAddress !== undefined) setLastAddress(undefined);

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
    //#endregion Toast Callback

    //#region ETH
    const getBalance = async () => {
        if (!await checkNetwork()) return;
        try {
            setBalance(`Balance: ${ethers.utils.formatEther(await signer?.getBalance()!)} ${chain?.nativeCurrency.symbol}`);
        } catch (e) {
            console.error(e);
            toast.error(`${e}`);
        }
    };

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
                toast.error(`${e}`);
            });
        } catch (e) {
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
            console.error(e);
            toast.error(`${e}`);
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
                console.error(e);
                toast.error(`${e}`);
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
                console.error(e);
                toast.error(`${e}`);
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
                console.error(e);
                toast.error(`${e}`);
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
                    console.error(e);
                    toast.error(`${e}`);
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
                    console.error(e);
                    toast.error(`${e}`);
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
                    console.error(e);
                    toast.error(`${e}`);
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
                    console.error(e);
                    toast.error(`${e}`);
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
                        console.error(e);
                    });
                }, (e) => {
                    console.error(e);
                });

                return deployedAddress;
            } catch (e) {
                console.error(e);
                toast.error(`${e}`);
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
                    console.error(e);
                    toast.error(`${e}`);
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
                        console.error(e);
                    });
                }, (e) => {
                    console.error(e);
                });

                return deployedAddress;
            } catch (e) {
                console.error(e);
                toast.error(`${e}`);
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
                    console.error(e);
                    toast.error(`${e}`);
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
                        console.error(e);
                    });
                }, (e) => {
                    console.error(e);
                });

                return deployedAddress;
            } catch (e) {
                console.error(e);
                toast.error(`${e}`);
            }
        }

    };
    //#endregion OpenZeppelin Governor

    //#region Safe
    const Safe = {
        deploy: async (owners: string, threshold: string) => {
            if (!await checkNetwork()) return;

            if (owners === "") {
                toast.error("Owners cannot be empty");
                return;
            }

            if (threshold === "") {
                toast.error("Threshold cannot be empty");
                return;
            }

            toast.error("Unimplemented function");
        },
        addModule: async (moduleAddress: string) => {
            if (!await checkNetwork()) return;

            if (moduleAddress === "") {
                toast.error("Module Address cannot be empty");
                return;
            }

            toast.error("Unimplemented function");
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
            console.error(e);
            toast.error(`${e}`);
        }
    };
    //#endregion DAO Deployment

    //#region Steward System
    const StewardSystem = {
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
                        console.error(e);
                    });
                }, (e) => {
                    console.error(e);
                });

                return deployedAddress;
            } catch (e) {
                console.error(e);
                toast.error(`${e}`);
            }
        }
    };
    //#endregion Steward System

    return (
        <div>
            {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
            <div>
                {address !== "" && <span>Address: {address}</span>}
            </div>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>ETH</summary>
                <div>
                    <button className="ts-button" onClick={async () => await getBalance()}>Get Balance</button>
                    <br></br>
                    {balance !== "" && <span>{balance}</span>}
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
            <details className="ts-accordion">
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
            <details className="ts-accordion">
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
            <details className="ts-accordion">
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
            <details className="ts-accordion">
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
            <details className="ts-accordion">
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
            <details className="ts-accordion">
                <summary><strong>Safe Deployment</strong></summary>
                <fieldset className="ts-fieldset ts-wrap is-vertical">
                    <label className="ts-checkbox has-top-spaced-small">
                        <input type="checkbox" id="safe-deployment-custom-factory" onClick={(e) => { setCustomSafeFactory(e.currentTarget.checked); }} />
                        Custom Safe Factory
                    </label>
                    {customSafeFactory &&
                        <div className="ts-grid">
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Safe Singleton Address" id="safe-deployment-custom-factory-singleton-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Safe Proxy Factory Address" id="safe-deployment-custom-factory-proxy-factory-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Multi Send Address" id="safe-deployment-custom-factory-multi-send-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Multi Send Call Only Address" id="safe-deployment-custom-factory-multi-send-call-only-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Fallback Handler Address" id="safe-deployment-custom-factory-fallback-handler-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Sign Message Lib Address" id="safe-deployment-custom-factory-sign-message-lib-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Create Call Address" id="safe-deployment-custom-create-call-address" />
                            </div>
                            <div className="ts-input column is-5-wide">
                                <input type="text" placeholder="Simulate Tx Accessor Address" id="safe-deployment-simulate-tx-accessor-address" />
                            </div>
                        </div>
                    }
                </fieldset>
                <div className="has-vertically-spaced"></div>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Owner Addresses" id="safe-deployment-owner-addresses" />
                    </div>
                    <div className="ts-input column is-2-wide">
                        <input type="text" placeholder="Threshold" id="safe-deployment-owner-threshold" />
                    </div>
                    <button className="ts-button" onClick={async () => await Safe.deploy((document.getElementById("safe-deployment-owner-addresses") as HTMLInputElement).value, (document.getElementById("safe-deployment-owner-threshold") as HTMLInputElement).value)}>Deploy Safe</button>
                </div>
                <br></br>
                <p>Module Management</p>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Module Address" id="safe-deployment-module-address" />
                    </div>
                    <button className="ts-button" onClick={async () => await Safe.addModule((document.getElementById("safe-deployment-module-address") as HTMLInputElement).value)}>Add Safe Module</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary><strong>Founder Features</strong></summary>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Addresses" id="founder-features-steward-addresses" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Expire Timestamps" id="founder-features-steward-expire-timestamps" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Proposal Vote Duration (in seconds)" id="founder-features-steward-proposal-vote-duration" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward System Owner" id="founder-features-steward-owner" />
                    </div>
                    <button className="ts-button" onClick={async () => await StewardSystem.deploy((document.getElementById("founder-features-steward-addresses") as HTMLInputElement).value, (document.getElementById("founder-features-steward-expire-timestamps") as HTMLInputElement).value, (document.getElementById("founder-features-steward-proposal-vote-duration") as HTMLInputElement).value, (document.getElementById("founder-features-steward-owner") as HTMLInputElement).value)}>Deploy Steward System</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary><strong>Steward Features</strong></summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary><strong>Working Group Features</strong></summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary><strong>Token Holder Features</strong></summary>
            </details>
            <div className="has-vertically-spaced"></div>
        </div >
    );
}
