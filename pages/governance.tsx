import { useSupportedChains, useConnectionStatus, useChain, useSigner, useSwitchChain } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from 'react';
import { BaseGoerli } from "@thirdweb-dev/chains";

export default function Governance() {
    const supportedChains = useSupportedChains();
    const connectionStatus = useConnectionStatus();
    const chain = useChain();
    const signer = useSigner();

    const switchChain = useSwitchChain();

    const [lastChainId, setLastChainId] = useState<number | undefined>(undefined);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [wethBalance, setWETHBalance] = useState("");

    const clearState = () => {
        if (lastChainId !== undefined) setLastChainId(undefined);
        if (address !== "") setAddress("");
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
                {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
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

    const getAddress = async () => {
        if (!await checkNetwork()) return;
        try {
            setAddress(`Address: ${await signer?.getAddress()}`);
        } catch (e) {
            console.error(e);
        }
    }

    const getBalance = async () => {
        if (!await checkNetwork()) return;
        try {
            setBalance(`Balance: ${ethers.utils.formatEther(await signer?.getBalance()!)} ${chain?.nativeCurrency.symbol}`);
        } catch (e) {
            console.error(e);
        }
    }

    const signMessage = async () => {
        if (!await checkNetwork()) return;
        try {
            setSignedMessage(`Signed Message: ${await signer?.signMessage("Hello World!")}`);
        } catch (e) {
            console.error(e);
        }
    }

    const getWETHBalance = async () => {
        if (!await checkNetwork()) return;
        try {
            let wethAddress;
            switch (chain?.chainId) {
                case BaseGoerli.chainId:
                    wethAddress = "0x4200000000000000000000000000000000000006";
                    break;
                default:
                    setWETHBalance("Unsupported Chain");
                    return;
            }
            const wethContract = new ethers.Contract(wethAddress, ["function balanceOf(address account) view returns (uint256)"], signer);
            const balance = await wethContract.balanceOf(await signer?.getAddress());
            setWETHBalance(`WETH Balance: ${ethers.utils.formatEther(balance)} WETH`);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
            <hr></hr>
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
            <hr></hr>
            <div>
                <button onClick={async () => await getWETHBalance()}>Get WETH Balance</button>
                <br></br>
                {wethBalance !== "" && <span>{wethBalance}</span>}
            </div>
        </div>
    );
}
