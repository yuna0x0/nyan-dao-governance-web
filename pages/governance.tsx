import { useSupportedChains, useConnectionStatus, useChain, useSigner, useSwitchChain } from "@thirdweb-dev/react";

export default function Governance() {
    const supportedChains = useSupportedChains();
    const connectionStatus = useConnectionStatus();
    const chain = useChain();
    const signer = useSigner();

    const switchChain = useSwitchChain();

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

    let signMessage = async () => {
        await checkNetwork();
        try {
            console.log(`Signed Message: ${await signer?.signMessage("Hello World")}`);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            {chain !== undefined && <p>Connected to {chain.name} ({chain.chainId})</p>}
            <button onClick={async () => await signMessage()}>Sign Message</button>
        </div>
    );
}
