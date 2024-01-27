'use client';

import { ethers, BigNumber } from "ethers";
import type { Signer } from "ethers";
import { toast } from 'react-toastify';
import type { Chain } from "@thirdweb-dev/chains";
import {
    checkNetwork,
    handleError,
    toastSuccessTx,
    toastSuccessContractDeployTx,
    toastSuccessContractDeployed
} from "../governance";
import {
    ERC20_BYTECODE,
    ERC20_ABI
} from "../../constants";

export const ERC20 = {
    abi: ERC20_ABI,
    bytecode: ERC20_BYTECODE,
    getName: async (
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
            const contract = new ethers.Contract(address, ERC20.abi, signer);
            const name = await contract.name();
            toast.success(`Name: ${name}`);
        } catch (e) {
            handleError(e);
        }
    },
    getSymbol: async (
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
            const contract = new ethers.Contract(address, ERC20.abi, signer);
            const symbol = await contract.symbol();
            toast.success(`Symbol: ${symbol}`);
        } catch (e) {
            handleError(e);
        }
    },
    getDecimals: async (
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
            const contract = new ethers.Contract(address, ERC20.abi, signer);
            const decimals = await contract.decimals();
            toast.success(`Decimals: ${decimals}`);
        } catch (e) {
            handleError(e);
        }
    },
    getTotalSupply: async (
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
            const contract = new ethers.Contract(address, ERC20.abi, signer);
            const totalSupply = await contract.totalSupply();
            toast.success(`Total Supply: ${totalSupply.div(BigNumber.from(10).pow(await contract.decimals()))} ${await contract.symbol()} (${totalSupply})`);
        } catch (e) {
            handleError(e);
        }
    },
    mint: async (
        contractAddress: string,
        to: string,
        amount: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

        if (contractAddress === "") {
            toast.error("Contract Address cannot be empty");
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
            const contract = new ethers.Contract(contractAddress, ERC20.abi, signer);
            const tx = contract.mint(to, ethers.utils.parseEther(amount));
            await toast.promise(
                tx,
                {
                    pending: `Minting ${amount} ${await contract.symbol()} to ${to}...`,
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
    burnFrom: async (
        contractAddress: string,
        account: string,
        amount: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

        if (contractAddress === "") {
            toast.error("Contract Address cannot be empty");
            return;
        }

        if (account === "") {
            toast.error("Account Address cannot be empty");
            return;
        }

        if (amount === "") {
            toast.error("Amount cannot be empty");
            return;
        }

        try {
            const contract = new ethers.Contract(contractAddress, ERC20.abi, signer);
            const tx = contract.burnFrom(account, ethers.utils.parseEther(amount));
            await toast.promise(
                tx,
                {
                    pending: `Burning ${amount} ${await contract.symbol()} from ${account}...`,
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
        owner: string,
        name: string,
        symbol: string,
        initSupply: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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

export default function Erc20({
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
                <button className="ts-button" onClick={async () => await ERC20.deploy(
                    (document.getElementById("erc20-deploy-owner") as HTMLInputElement).value,
                    (document.getElementById("erc20-deploy-name") as HTMLInputElement).value,
                    (document.getElementById("erc20-deploy-symbol") as HTMLInputElement).value,
                    (document.getElementById("erc20-deploy-init-supply") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain
                )}>Deploy ERC20 Token</button>
            </div>
            <br></br>
            <p>Write</p>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Token Address" id="erc20-write-mint-address" />
                </div>
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Mint To" id="erc20-write-mint-to" />
                </div>
                <div className="ts-input column is-3-wide">
                    <input type="text" placeholder="Value" id="erc20-write-mint-value" />
                </div>
                <button className="ts-button" onClick={async () => await ERC20.mint(
                    (document.getElementById("erc20-write-mint-address") as HTMLInputElement).value,
                    (document.getElementById("erc20-write-mint-to") as HTMLInputElement).value,
                    (document.getElementById("erc20-write-mint-value") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain
                )}>Mint</button>
            </div>
            <br></br>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Token Address" id="erc20-write-burn-address" />
                </div>
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Burn From" id="erc20-write-burn-from" />
                </div>
                <div className="ts-input column is-3-wide">
                    <input type="text" placeholder="Value" id="erc20-write-burn-value" />
                </div>
                <button className="ts-button" onClick={async () => await ERC20.burnFrom(
                    (document.getElementById("erc20-write-burn-address") as HTMLInputElement).value,
                    (document.getElementById("erc20-write-burn-from") as HTMLInputElement).value,
                    (document.getElementById("erc20-write-burn-value") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain
                )}>Burn From</button>
            </div>
            <br></br>
            <p>Contract Read</p>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Token Address" id="erc20-test-address" />
                </div>
                <button className="ts-button" onClick={async () => await ERC20.getName(
                    (document.getElementById("erc20-test-address") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get ERC20 Name</button>
                <button className="ts-button" onClick={async () => await ERC20.getSymbol(
                    (document.getElementById("erc20-test-address") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get ERC20 Symbol</button>
                <button className="ts-button" onClick={async () => await ERC20.getDecimals(
                    (document.getElementById("erc20-test-address") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get ERC20 Decimals</button>
                <button className="ts-button" onClick={async () => await ERC20.getTotalSupply(
                    (document.getElementById("erc20-test-address") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get ERC20 Total Supply</button>
            </div>
        </details>
    );
}
