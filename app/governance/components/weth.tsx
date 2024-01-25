'use client';

import { ethers } from "ethers";
import type { Signer } from "ethers";
import type { Chain } from "@thirdweb-dev/chains";
import { BaseGoerli } from "@thirdweb-dev/chains";
import { toast } from 'react-toastify';
import { useState } from 'react';
import type { SetStateAction } from 'react';
import {
    checkNetwork,
    handleError,
    toastSuccessTx
} from "../governance";
import { BASE_GOERLI_WETH_ADDRESS } from "../../constants";

export const getWETHAddress = (chain: Chain) => {
    switch (chain.chainId) {
        case BaseGoerli.chainId:
            return BASE_GOERLI_WETH_ADDRESS;
        default:
            toast.error("Unsupported Chain");
            return;
    }
}

export const getWETHBalance = async (
    chain: Chain,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>,
    setWETHBalance: (value: SetStateAction<string>) => void) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;
    try {
        const wethAddress = getWETHAddress(chain);
        if (!wethAddress) return;
        const wethContract = new ethers.Contract(wethAddress, ["function balanceOf(address) view returns (uint256)"], signer);
        const balance = await wethContract.balanceOf(await signer?.getAddress());
        setWETHBalance(`WETH Balance: ${ethers.utils.formatEther(balance)} WETH`);
    } catch (e) {
        handleError(e);
    }
};

export const wrapETH = async (
    amount: string,
    chain: Chain,
    chainExplorerUrl: string | undefined,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

    if (amount === "") {
        toast.error("Amount cannot be empty");
        return;
    }

    try {
        const wethAddress = getWETHAddress(chain);
        if (!wethAddress) return;
        const wethContract = new ethers.Contract(wethAddress, ["function deposit() payable"], signer);
        const tx = wethContract.deposit({ value: ethers.utils.parseEther(amount) });
        await toast.promise(
            tx,
            {
                pending: `Wrapping ${amount} ETH...`,
                success: {
                    render({ data }) {
                        return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                    }
                }
            }
        ).catch((e) => {
            throw e;
        });
    } catch (e) {
        handleError(e);
    }
};

export const unwrapETH = async (
    amount: string,
    chain: Chain,
    chainExplorerUrl: string | undefined,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

    if (amount === "") {
        toast.error("Amount cannot be empty");
        return;
    }

    try {
        const wethAddress = getWETHAddress(chain);
        if (!wethAddress) return;
        const wethContract = new ethers.Contract(wethAddress, ["function withdraw(uint256 wad)"], signer);
        const tx = wethContract.withdraw(ethers.utils.parseEther(amount));
        await toast.promise(
            tx,
            {
                pending: `Unwrapping ${amount} WETH...`,
                success: {
                    render({ data }) {
                        return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                    }
                }
            }
        ).catch((e) => {
            throw e;
        });
    } catch (e) {
        handleError(e);
    }
};

export const transferWETH = async (
    to: string,
    amount: string,
    chain: Chain,
    chainExplorerUrl: string | undefined,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

    if (to === "") {
        toast.error("To Address cannot be empty");
        return;
    }

    if (amount === "") {
        toast.error("Amount cannot be empty");
        return;
    }

    try {
        const wethAddress = getWETHAddress(chain);
        if (!wethAddress) return;
        const wethContract = new ethers.Contract(wethAddress, ["function transfer(address dst, uint256 wad)"], signer);
        const tx = wethContract.transfer(to, ethers.utils.parseEther(amount));
        await toast.promise(
            tx,
            {
                pending: `Sending ${amount} WETH to ${to}...`,
                success: {
                    render({ data }) {
                        return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                    }
                }
            }
        ).catch((e) => {
            throw e;
        });
    } catch (e) {
        handleError(e);
    }
};

export const approveWETH = async (
    spender: string,
    amount: string,
    chain: Chain,
    chainExplorerUrl: string | undefined,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

    if (spender === "") {
        toast.error("Spender cannot be empty");
        return;
    }

    if (amount === "") {
        toast.error("Amount cannot be empty");
        return;
    }

    try {
        const wethAddress = getWETHAddress(chain);
        if (!wethAddress) return;
        const wethContract = new ethers.Contract(wethAddress, ["function approve(address guy, uint256 wad)"], signer);
        const tx = wethContract.approve(spender, ethers.utils.parseEther(amount));
        await toast.promise(
            tx,
            {
                pending: `Approving ${amount} WETH to ${spender}...`,
                success: {
                    render({ data }) {
                        return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                    }
                }
            }
        ).catch((e) => {
            throw e;
        });
    } catch (e) {
        handleError(e);
    }
};

export const transferWETHFrom = async (
    from: string,
    to: string,
    amount: string,
    chain: Chain,
    chainExplorerUrl: string | undefined,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
        const wethAddress = getWETHAddress(chain);
        if (!wethAddress) return;
        const wethContract = new ethers.Contract(wethAddress, ["function transferFrom(address src, address dst, uint256 wad)"], signer);
        const tx = wethContract.transferFrom(from, to, ethers.utils.parseEther(amount));
        await toast.promise(
            tx,
            {
                pending: `Sending ${amount} WETH from ${from} to ${to}...`,
                success: {
                    render({ data }) {
                        return toastSuccessTx(data as ethers.providers.TransactionResponse, chainExplorerUrl);
                    }
                }
            }
        ).catch((e) => {
            throw e;
        });
    } catch (e) {
        handleError(e);
    }
};

export default function Weth({
    chain,
    chainExplorerUrl,
    signer,
    supportedChains,
    switchChain }: {
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>
    }) {
    const [wethBalance, setWETHBalance] = useState("");

    return (
        <details className="ts-accordion" open>
            <summary>WETH</summary>
            <div>
                <button className="ts-button" onClick={async () => await getWETHBalance(
                    chain,
                    signer,
                    supportedChains,
                    switchChain,
                    setWETHBalance
                )}>Get WETH Balance</button>
                <br></br>
                {wethBalance !== "" && <span>{wethBalance}</span>}
            </div>
            <br></br>
            <div className="ts-grid">
                <div className="ts-input column is-3-wide">
                    <input type="text" placeholder="Amount" id="weth-wrap-amount" />
                </div>
                <button className="ts-button" onClick={async () =>
                    await wrapETH(
                        (document.getElementById("weth-wrap-amount") as HTMLInputElement).value,
                        chain,
                        chainExplorerUrl,
                        signer,
                        supportedChains,
                        switchChain
                    )}>Wrap ETH</button>
                <button className="ts-button" onClick={async () =>
                    await unwrapETH(
                        (document.getElementById("weth-wrap-amount") as HTMLInputElement).value,
                        chain,
                        chainExplorerUrl,
                        signer,
                        supportedChains,
                        switchChain
                    )}>Unwrap WETH</button>
            </div>
            <br></br>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="To Address" id="weth-transfer-to" />
                </div>
                <div className="ts-input column is-3-wide">
                    <input type="text" placeholder="Amount" id="weth-transfer-amount" />
                </div>
                <button className="ts-button" onClick={async () =>
                    await transferWETH(
                        (document.getElementById("weth-transfer-to") as HTMLInputElement).value,
                        (document.getElementById("weth-transfer-amount") as HTMLInputElement).value,
                        chain,
                        chainExplorerUrl,
                        signer,
                        supportedChains,
                        switchChain
                    )}>Transfer WETH</button>
            </div>
            <br></br>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Spender" id="weth-approve-spender" />
                </div>
                <div className="ts-input column is-3-wide">
                    <input type="text" placeholder="Amount" id="weth-approve-amount" />
                </div>
                <button className="ts-button" onClick={async () =>
                    await approveWETH(
                        (document.getElementById("weth-approve-spender") as HTMLInputElement).value,
                        (document.getElementById("weth-approve-amount") as HTMLInputElement).value,
                        chain,
                        chainExplorerUrl,
                        signer,
                        supportedChains,
                        switchChain
                    )}>Approve WETH</button>
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
                <button className="ts-button" onClick={async () =>
                    await transferWETHFrom(
                        (document.getElementById("weth-transfer-from-from") as HTMLInputElement).value,
                        (document.getElementById("weth-transfer-from-to") as HTMLInputElement).value,
                        (document.getElementById("weth-transfer-from-amount") as HTMLInputElement).value,
                        chain,
                        chainExplorerUrl,
                        signer,
                        supportedChains,
                        switchChain
                    )}>Transfer WETH From</button>
            </div>
        </details>
    );
}
