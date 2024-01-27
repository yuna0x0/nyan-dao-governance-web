'use client';

import { ethers } from "ethers";
import type { Signer } from "ethers";
import { toast } from 'react-toastify';
import type { Chain } from "@thirdweb-dev/chains";
import {
    checkNetwork,
    handleError,
    toastSuccessContractDeployTx,
    toastSuccessContractDeployed
} from "../governance";
import {
    OZ_TIMELOCK_BYTECODE,
    OZ_TIMELOCK_ABI,
    OZ_GOVERNOR_BYTECODE,
    OZ_GOVERNOR_ABI
} from "../../constants";

export const OZGovernor = {
    abi: OZ_GOVERNOR_ABI,
    bytecode: OZ_GOVERNOR_BYTECODE,
    getName: async (
        address: string,
        chain: Chain,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>
    ) => {
        {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
    deploy: async (
        tokenAddress: string,
        timelockAddress: string,
        governorName: string,
        votingDelayBlock: string,
        votingPeriodBlock: string,
        proposalThreshold: string,
        quorumNumerator: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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

export const OZTimelock = {
    abi: OZ_TIMELOCK_ABI,
    bytecode: OZ_TIMELOCK_BYTECODE,
    getMinDelay: async (
        address: string,
        chain: Chain,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>) => {
        {
            if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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
    deploy: async (
        minDelay: string,
        proposers: string,
        executors: string,
        admin: string,
        chain: Chain,
        chainExplorerUrl: string | undefined,
        signer: Signer,
        supportedChains: Chain[],
        switchChain: (chain: number) => Promise<void>) => {
        if (!await checkNetwork(chain, supportedChains, switchChain)) return;

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

export default function OzGovernor({
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
                <button className="ts-button" onClick={async () => await OZTimelock.deploy(
                    (document.getElementById("oz-timelock-deploy-min-delay") as HTMLInputElement).value,
                    (document.getElementById("oz-timelock-deploy-proposers") as HTMLInputElement).value,
                    (document.getElementById("oz-timelock-deploy-executors") as HTMLInputElement).value,
                    (document.getElementById("oz-timelock-deploy-admin") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain
                )}>Deploy OZ Timelock</button>
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
                <button className="ts-button" onClick={async () => await OZGovernor.deploy(
                    (document.getElementById("oz-governor-deploy-token-address") as HTMLInputElement).value,
                    (document.getElementById("oz-governor-deploy-timelock-address") as HTMLInputElement).value,
                    (document.getElementById("oz-governor-deploy-governor-name") as HTMLInputElement).value,
                    (document.getElementById("oz-governor-deploy-voting-delay-block") as HTMLInputElement).value,
                    (document.getElementById("oz-governor-deploy-voting-period-block") as HTMLInputElement).value,
                    (document.getElementById("oz-governor-deploy-proposal-threshold") as HTMLInputElement).value,
                    (document.getElementById("oz-governor-deploy-quorum-numerator") as HTMLInputElement).value,
                    chain,
                    chainExplorerUrl,
                    signer,
                    supportedChains,
                    switchChain
                )}>Deploy OZ Governor</button>
            </div>
            <br></br>
            <p>Contract Read</p>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Timelock Address" id="oz-timelock-test-address" />
                </div>
                <button className="ts-button" onClick={async () => await OZTimelock.getMinDelay(
                    (document.getElementById("oz-timelock-test-address") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get OZ Timelock Minimum Delay</button>
            </div>
            <br></br>
            <div className="ts-grid">
                <div className="ts-input column is-5-wide">
                    <input type="text" placeholder="Governor Address" id="oz-governor-test-address" />
                </div>
                <button className="ts-button" onClick={async () => await OZGovernor.getName(
                    (document.getElementById("oz-governor-test-address") as HTMLInputElement).value,
                    chain,
                    signer,
                    supportedChains,
                    switchChain
                )}>Get OZ Governor Name</button>
            </div>
        </details>
    );
}
