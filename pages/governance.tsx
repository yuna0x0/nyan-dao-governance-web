import { useSupportedChains, useConnectionStatus, useChain, useSigner, useSwitchChain } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from 'react';

export default function Governance() {
    const supportedChains = useSupportedChains();
    const connectionStatus = useConnectionStatus();
    const chain = useChain();
    const signer = useSigner();

    const switchChain = useSwitchChain();

    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [signedMessage, setSignedMessage] = useState("");

    const isVaildNetwork = () => {
        if (chain === undefined) return false;

        const isNetworkSupported = supportedChains.some((supportedChain) => {
            return supportedChain.chainId === chain.chainId;
        });

        return isNetworkSupported;
    }

    let checkNetwork = async () => {
        if (!isVaildNetwork()) {
            try {
                await switchChain(supportedChains[0].chainId);
            } catch (e) {
                console.error(e);
            }
            return;
        }
    }

    if (connectionStatus === "unknown") return (<p>Loading...</p>);
    if (connectionStatus === "connecting") return (<p>Connecting...</p>);
    if (connectionStatus === "disconnected") return (<p>Connect wallet to access</p>);

    if (!isVaildNetwork()) return (
        <div>
            {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
            <p style={{ color: 'red' }}>Unsupported Chain</p>
            <button onClick={() => { checkNetwork() }}>Switch Network</button>
        </div>
    );

    let getAddress = async () => {
        await checkNetwork();
        try {
            setAddress(`Address: ${await signer?.getAddress()}`);
        } catch (e) {
            console.error(e);
        }
    }

    let getBalance = async () => {
        await checkNetwork();
        try {
            setBalance(`Balance: ${ethers.utils.formatEther(await signer?.getBalance()!)} ${chain?.nativeCurrency.symbol}`);
        } catch (e) {
            console.error(e);
        }
    }

    let signMessage = async () => {
        await checkNetwork();
        try {
            setSignedMessage(`Signed Message: ${await signer?.signMessage("Hello World!")}`);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
            <div>
                <button onClick={async () => await getAddress()}>Get Address</button>
                <br></br>
                {address !== "" && <span>{address}</span>}
            </div>
            <br></br>
            <div>
                <button onClick={async () => await getBalance()}>Get Balance</button>
                <br></br>
                {balance !== "" && <span>{balance}</span>}
            </div>
            <br></br>
            <div>
                <button onClick={async () => await signMessage()}>Sign Message</button>
                <br></br>
                {signedMessage !== "" && <span>{signedMessage}</span>}
            </div>
        </div>
    );
}
