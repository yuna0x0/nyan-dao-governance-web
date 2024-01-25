'use client';

import { ethers } from "ethers";
import type { Signer } from "ethers";
import type { Chain } from "@thirdweb-dev/chains";
import { toast } from 'react-toastify';
import { useState } from 'react';
import type { SetStateAction } from 'react';
import {
    checkNetwork,
    handleError,
    toastSuccessTx
} from "../governance";

export const getBalance = async (
    chain: Chain,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>,
    setBalance: (value: SetStateAction<string>) => void) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;
    try {
        setBalance(`Balance: ${ethers.utils.formatEther(await signer?.getBalance()!)} ${chain?.nativeCurrency.symbol}`);
    } catch (e) {
        handleError(e);
    }
};

export const getBalanceOf = async (
    address: string,
    chain: Chain,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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

export const signMessage = async (
    chain: Chain,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>,
    setSignedMessage: (value: SetStateAction<string>) => void) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;
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

export const sendETH = async (
    to: string,
    amount: string,
    chain: Chain,
    chainExplorerUrl: string | undefined,
    signer: Signer,
    supportedChains: Chain[],
    switchChain: (chain: number) => Promise<void>
) => {
    if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
                        return toastSuccessTx(data, chainExplorerUrl);
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

export default function Eth({
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

    const [balance, setBalance] = useState("");
    const [signedMessage, setSignedMessage] = useState("");

    return (
        <details className="ts-accordion" open>
            <summary>ETH</summary>
            <div>
                <button className="ts-button" onClick={async () =>
                    await getBalance(
                        chain,
                        signer,
                        supportedChains,
                        switchChain,
                        setBalance)}>Get Balance</button>
                <br></br>
                {balance !== "" && <span>{balance}</span>}
            </div>
            <br></br>
            <div>
                <div className="ts-grid">
                    <div className="ts-input column is-5-wide">
                        <input type="text" placeholder="Address" id="eth-get-balance-of" />
                    </div>
                    <button className="ts-button" onClick={async () =>
                        await getBalanceOf(
                            (document.getElementById("eth-get-balance-of") as HTMLInputElement).value,
                            chain,
                            signer,
                            supportedChains,
                            switchChain)}>Get Balance Of</button>
                </div>
            </div>
            <br></br>
            <div>
                <button className="ts-button" onClick={async () =>
                    await signMessage(
                        chain,
                        signer,
                        supportedChains,
                        switchChain,
                        setSignedMessage)}>Sign Message</button>
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
                <button className="ts-button" onClick={async () =>
                    await sendETH(
                        (document.getElementById("eth-send-to") as HTMLInputElement).value,
                        (document.getElementById("eth-send-amount") as HTMLInputElement).value,
                        chain,
                        chainExplorerUrl,
                        signer,
                        supportedChains,
                        switchChain)}>Send ETH</button>
            </div>
        </details>
    );
}
