'use client';
import { useSupportedChains, useConnectionStatus, useChainId, useChain, useSigner, useAddress, useSwitchChain } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BaseGoerli } from "@thirdweb-dev/chains";
import { baseGoerliWethAddress } from "../constants";

export default function Governance() {
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
                    wethAddress = baseGoerliWethAddress;
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
                    wethAddress = baseGoerliWethAddress;
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
                    wethAddress = baseGoerliWethAddress;
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
                    wethAddress = baseGoerliWethAddress;
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
                    wethAddress = baseGoerliWethAddress;
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
                    wethAddress = baseGoerliWethAddress;
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
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Address" id="eth-send-to" />
                    </div>
                    <div className="ts-input column is-4-wide">
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
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Amount" id="weth-wrap-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await wrapETH((document.getElementById("weth-wrap-amount") as HTMLInputElement).value)}>Wrap ETH</button>
                    <button className="ts-button" onClick={async () => await unwrapETH((document.getElementById("weth-wrap-amount") as HTMLInputElement).value)}>Unwrap WETH</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="To Address" id="weth-transfer-to" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Amount" id="weth-transfer-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await transferWETH((document.getElementById("weth-transfer-to") as HTMLInputElement).value, (document.getElementById("weth-transfer-amount") as HTMLInputElement).value)}>Transfer WETH</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Spender" id="weth-approve-spender" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Amount" id="weth-approve-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await approveWETH((document.getElementById("weth-approve-spender") as HTMLInputElement).value, (document.getElementById("weth-approve-amount") as HTMLInputElement).value)}>Approve WETH</button>
                </div>
                <br></br>
                <div className="ts-grid">
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="From Address" id="weth-transfer-from-from" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="To Address" id="weth-transfer-from-to" />
                    </div>
                    <div className="ts-input column is-4-wide">
                        <input type="text" placeholder="Amount" id="weth-transfer-from-amount" />
                    </div>
                    <button className="ts-button" onClick={async () => await transferWETHFrom((document.getElementById("weth-transfer-from-from") as HTMLInputElement).value, (document.getElementById("weth-transfer-from-to") as HTMLInputElement).value, (document.getElementById("weth-transfer-from-amount") as HTMLInputElement).value)}>Transfer WETH From</button>
                </div>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>ERC20 Token Factory</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>OpenZeppelin Governance Factory</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>DAO Token (ERC20)</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>OpenZeppelin Governance</summary>
            </details>
            <div className="ts-divider has-vertically-spaced"></div>
            <details className="ts-accordion">
                <summary>Founder Features</summary>
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
