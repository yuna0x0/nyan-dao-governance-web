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
import ozERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";
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

    const [balance, setBalance] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [wethBalance, setWETHBalance] = useState("");

    const clearState = () => {
        if (lastChainId !== undefined) setLastChainId(undefined);
        if (lastAddress !== undefined) setLastAddress(undefined);

        if (balance !== "") setBalance("");
        if (signedMessage !== "") setSignedMessage("");
        if (wethBalance !== "") setWETHBalance("");
    }

    const isVaildNetwork = () => {
        if (chain === undefined) return false;

        const isNetworkSupported = supportedChains.some((supportedChain) => {
            return supportedChain.chainId === chain.chainId;
        });

        return isNetworkSupported;
    }

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
    }
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

    //#region ETH
    const getBalance = async () => {
        if (!await checkNetwork()) return;
        try {
            setBalance(`Balance: ${ethers.utils.formatEther(await signer?.getBalance()!)} ${chain?.nativeCurrency.symbol}`);
        } catch (e) {
            console.error(e);
            toast.error(`${e}`);
        }
    }

    const signMessage = async () => {
        if (!await checkNetwork()) return;
        try {
            const signedMessage = signer!.signMessage("Hello World");
            toast.promise(
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
    }

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
            toast.promise(
                tx,
                {
                    pending: `Sending ${amount} ${chain?.nativeCurrency.symbol} to ${to}...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${data?.hash}`;
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
    }

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
    }
    //#endregion ETH

    //#region WETH
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
            toast.promise(
                tx,
                {
                    pending: `Wrapping ${amount} ETH...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data as ethers.providers.TransactionResponse).hash}`;
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
    }

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
            toast.promise(
                tx,
                {
                    pending: `Unwrapping ${amount} WETH...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data as ethers.providers.TransactionResponse).hash}`;
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
    }

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
            toast.promise(
                tx,
                {
                    pending: `Sending ${amount} WETH to ${to}...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data as ethers.providers.TransactionResponse).hash}`;
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
    }

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
            toast.promise(
                tx,
                {
                    pending: `Approving ${amount} WETH to ${spender}...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data as ethers.providers.TransactionResponse).hash}`;
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
    }

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
            toast.promise(
                tx,
                {
                    pending: `Sending ${amount} WETH from ${from} to ${to}...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data as ethers.providers.TransactionResponse).hash}`;
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
    }
    //#endregion WETH

    //#region ERC20 Factory
    const deployERC20 = async (owner: string, name: string, symbol: string, initSupply: string) => {
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
            const factory = new ethers.ContractFactory(ERC20_ABI, ERC20_BYTECODE, signer);
            const tx = factory.deploy(owner, name, symbol, initSupply);

            let deployedAddress: string | undefined;

            await toast.promise(
                tx,
                {
                    pending: `Deploying ERC20 Token...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data?.deployTransaction as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`;
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
                                if (chainExplorerUrl !== undefined)
                                    return <div>Deployed Contract Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${(data?.contractAddress as string)}`} target="_blank" rel="noreferrer">{(data?.contractAddress as string)}</a></div>;
                                else
                                    return `Deployed Contract Address: ${(data?.contractAddress as string)}`;
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
    //#endregion ERC20 Factory

    //#region ERC20
    const ERC20 = {
        getName: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, ozERC20.abi, signer);
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
                    const contract = new ethers.Contract(address, ozERC20.abi, signer);
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
                    const contract = new ethers.Contract(address, ozERC20.abi, signer);
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
                    const contract = new ethers.Contract(address, ozERC20.abi, signer);
                    const totalSupply = await contract.totalSupply();
                    toast.success(`Total Supply: ${totalSupply.div(BigNumber.from(10).pow(await contract.decimals()))} ${await contract.symbol()} (${totalSupply})`);
                } catch (e) {
                    console.error(e);
                    toast.error(`${e}`);
                }
            }
        }
    };
    //#endregion ERC20

    //#region OpenZeppelin Governor Factory
    const deployOZTimelock = async (minDelay: string, proposers: string, executors: string, admin: string) => {
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
            const factory = new ethers.ContractFactory(OZ_TIMELOCK_ABI, OZ_TIMELOCK_BYTECODE, signer);
            const tx = factory.deploy(minDelay, proposersArray, executorsArray, admin);

            let deployedAddress: string | undefined;

            await toast.promise(
                tx,
                {
                    pending: `Deploying OZ Timelock...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data?.deployTransaction as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`;
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
                                if (chainExplorerUrl !== undefined)
                                    return <div>Deployed Contract Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${(data?.contractAddress as string)}`} target="_blank" rel="noreferrer">{(data?.contractAddress as string)}</a></div>;
                                else
                                    return `Deployed Contract Address: ${(data?.contractAddress as string)}`;
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
    };

    const deployOZGovernor = async (tokenAddress: string, timelockAddress: string, governorName: string, votingDelayBlock: string, votingPeriodBlock: string, proposalThreshold: string, quorumNumerator: string) => {
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
            const factory = new ethers.ContractFactory(OZ_GOVERNOR_ABI, OZ_GOVERNOR_BYTECODE, signer);
            const tx = factory.deploy(tokenAddress, timelockAddress, governorName, votingDelayBlock, votingPeriodBlock, proposalThreshold, quorumNumerator);

            let deployedAddress: string | undefined;

            await toast.promise(
                tx,
                {
                    pending: `Deploying OZ Governor...`,
                    success: {
                        render({ data }) {
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data?.deployTransaction as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`;
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
                                if (chainExplorerUrl !== undefined)
                                    return <div>Deployed Contract Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${(data?.contractAddress as string)}`} target="_blank" rel="noreferrer">{(data?.contractAddress as string)}</a></div>;
                                else
                                    return `Deployed Contract Address: ${(data?.contractAddress as string)}`;
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
        } catch (e) {
            console.error(e);
            toast.error(`${e}`);
        }
    };


    //#endregion OpenZeppelin Governor Factory

    //#region OpenZeppelin Governor
    const OZTimelock = {
        getMinDelay: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, OZ_TIMELOCK_ABI, signer);
                    const minDelay = await contract.getMinDelay();
                    toast.success(`Minimum Delay: ${minDelay}`);
                } catch (e) {
                    console.error(e);
                    toast.error(`${e}`);
                }
            }
        }
    }

    const OZGovernor = {
        getName: async (address: string) => {
            {
                if (!await checkNetwork()) return;

                if (address === "") {
                    toast.error("Address cannot be empty");
                    return;
                }

                try {
                    const contract = new ethers.Contract(address, OZ_GOVERNOR_ABI, signer);
                    const governorName = await contract.name();
                    toast.success(`Governor Name: ${governorName}`);
                } catch (e) {
                    console.error(e);
                    toast.error(`${e}`);
                }
            }
        }
    }
    //#endregion OpenZeppelin Governor

    //#region Steward System Factory
    const deployStewardSystem = async (stewardAddresses: string, stewardExpireTimestamps: string, stewardProposalVoteDuration: string, owner: string) => {
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
                            if (chainExplorerUrl !== undefined)
                                return <div>Tx Hash: <a className="ts-text is-link" href={`${chainExplorerUrl}/tx/${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`} target="_blank" rel="noreferrer">{(data?.deployTransaction as ethers.providers.TransactionResponse).hash}</a></div>;
                            else
                                return `Tx Hash: ${(data?.deployTransaction as ethers.providers.TransactionResponse).hash}`;
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
                                if (chainExplorerUrl !== undefined)
                                    return <div>Deployed Contract Address: <a className="ts-text is-link" href={`${chainExplorerUrl}/address/${(data?.contractAddress as string)}`} target="_blank" rel="noreferrer">{(data?.contractAddress as string)}</a></div>;
                                else
                                    return `Deployed Contract Address: ${(data?.contractAddress as string)}`;
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
    //#endregion Steward System Factory

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
                <summary>ERC20 Token Factory</summary>
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
                    <button className="ts-button" onClick={async () => await deployERC20((document.getElementById("erc20-deploy-owner") as HTMLInputElement).value, (document.getElementById("erc20-deploy-name") as HTMLInputElement).value, (document.getElementById("erc20-deploy-symbol") as HTMLInputElement).value, (document.getElementById("erc20-deploy-init-supply") as HTMLInputElement).value)}>Deploy ERC20 Token</button>
                </div>
                <br></br>
                <p>Testing</p>
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
                <summary>OpenZeppelin Governor Factory</summary>
                <div className="ts-grid">
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Minimum Delay" id="oz-timelock-deploy-min-delay" />
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
                    <button className="ts-button" onClick={async () => await deployOZTimelock((document.getElementById("oz-timelock-deploy-min-delay") as HTMLInputElement).value, (document.getElementById("oz-timelock-deploy-proposers") as HTMLInputElement).value, (document.getElementById("oz-timelock-deploy-executors") as HTMLInputElement).value, (document.getElementById("oz-timelock-deploy-admin") as HTMLInputElement).value)}>Deploy OZ Timelock</button>
                </div>
                <br></br>
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
                        <input type="text" placeholder="Voting Delay Block" id="oz-governor-deploy-voting-delay-block" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Voting Period Block" id="oz-governor-deploy-voting-period-block" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Proposal Threshold" id="oz-governor-deploy-proposal-threshold" />
                    </div>
                    <div className="ts-input column is-3-wide">
                        <input type="text" placeholder="Quorum Numerator" id="oz-governor-deploy-quorum-numerator" />
                    </div>
                    <button className="ts-button" onClick={async () => await deployOZGovernor((document.getElementById("oz-governor-deploy-token-address") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-timelock-address") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-governor-name") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-voting-delay-block") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-voting-period-block") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-proposal-threshold") as HTMLInputElement).value, (document.getElementById("oz-governor-deploy-quorum-numerator") as HTMLInputElement).value)}>Deploy OZ Governor</button>
                </div>
                <br></br>
                <p>Testing</p>
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
                <summary>DAO Token (ERC20)</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>OpenZeppelin Governor</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>Founder Features</summary>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Addresses" id="founder-features-steward-addresses" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Expire Timestamps" id="founder-features-steward-expire-timestamps" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward Proposal Vote Duration" id="founder-features-steward-proposal-vote-duration" />
                    </div>
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Steward System Owner" id="founder-features-steward-owner" />
                    </div>
                    <button className="ts-button" onClick={async () => await deployStewardSystem((document.getElementById("founder-features-steward-addresses") as HTMLInputElement).value, (document.getElementById("founder-features-steward-expire-timestamps") as HTMLInputElement).value, (document.getElementById("founder-features-steward-proposal-vote-duration") as HTMLInputElement).value, (document.getElementById("founder-features-steward-owner") as HTMLInputElement).value)}>Deploy Steward System</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>Steward Features</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>Working Group Features</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>Token Holder Features</summary>
            </details>
        </div>
    );
}
