'use client';

import { ethers } from "ethers";
import type { Signer } from "ethers";
import { toast } from 'react-toastify';
import type { Chain } from "@thirdweb-dev/chains";
import ozOwnable from "@openzeppelin/contracts/build/contracts/Ownable.json";
import {
    checkNetwork,
    handleError,
    toastSuccessTx
} from "../governance";

export const OZOwnable = {
    getOwner: async (
        address: string,
        chain: Chain,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>
    ) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
    transferOwnership: async (
        address: string,
        newOwner: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>
    ) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
    renounceOwnership: async (
        address: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>
    ) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
    }
};

export default function OzOwnable({
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
    return (
        <details className="ts-accordion" open>
            <summary>OpenZeppelin Ownable</summary>
            <p>Get Owner</p>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Target Contract Address" id="ownable-get-owner-target" />
                </div>
                <button className="ts-button" onClick={async () => await OZOwnable.getOwner(
                    (document.getElementById("ownable-get-owner-target") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get Owner</button>
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
                <button className="ts-button" onClick={async () => await OZOwnable.transferOwnership(
                    (document.getElementById("ownable-transfer-owner-target") as HTMLInputElement).value,
                    (document.getElementById("ownable-transfer-owner-address") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain)}>Transfer Ownership</button>
            </div>
            <br></br>
            <p>Renounce Ownership</p>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Target Contract Address" id="ownable-renounce-owner-target" />
                </div>
                <button className="ts-button" onClick={async () => await OZOwnable.renounceOwnership(
                    (document.getElementById("ownable-renounce-owner-target") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain)}>Renounce Ownership</button>
            </div>
        </details>
    );
}
