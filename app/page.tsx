'use client';

import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    safeWallet,
    localWallet,
    embeddedWallet,
    trustWallet,
    zerionWallet,
    bloctoWallet,
    frameWallet,
    rainbowWallet,
    phantomWallet,
    ConnectWallet,
    darkTheme
} from "@thirdweb-dev/react";
import { BaseGoerli, Localhost } from "@thirdweb-dev/chains";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { dAppName } from './constants';
import Governance from "./components/governance";

export default function Home() {
    return (
        <ThirdwebProvider
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
            supportedChains={[BaseGoerli, Localhost]}
            supportedWallets={[
                metamaskWallet({ recommended: true }),
                coinbaseWallet(),
                walletConnect(),
                safeWallet({
                    personalWallets: [
                        metamaskWallet({ recommended: true }),
                        coinbaseWallet(),
                        walletConnect(),
                        localWallet(),
                        embeddedWallet({
                            auth: {
                                options: [
                                    "email",
                                    "google",
                                    "apple",
                                    "facebook",
                                ],
                            },
                        }),
                        trustWallet(),
                        zerionWallet(),
                        bloctoWallet(),
                        frameWallet(),
                        rainbowWallet(),
                        phantomWallet(),
                    ],
                }),
                localWallet(),
                embeddedWallet({
                    auth: {
                        options: [
                            "email",
                            "google",
                            "apple",
                            "facebook",
                        ],
                    },
                }),
                trustWallet(),
                zerionWallet(),
                bloctoWallet(),
                frameWallet(),
                rainbowWallet(),
                phantomWallet(),
            ]}
        >
            <main>
                <div className="ts-container">
                    <div>
                        <h1 className="ts-text is-massive is-bold has-vertically-spaced">{dAppName}</h1>
                        <div>
                            <ConnectWallet
                                theme={darkTheme({
                                    colors: {
                                        accentText: "#ff5c9d",
                                        accentButtonBg: "#ff5c9d",
                                    },
                                })}
                                modalSize={"wide"}
                                welcomeScreen={{
                                    img: {
                                        src: "https://cdn.fbk.moe/cute-fox-anim.png",
                                        width: 150,
                                        height: 150,
                                    },
                                    title:
                                        `Welcome to ${dAppName}`,
                                }}
                                modalTitleIconUrl={""}
                            />
                        </div>
                    </div>
                    <div className="ts-divider has-vertically-spaced"></div>
                    <div>
                        <Governance />
                    </div>
                </div>
                <ToastContainer
                    closeOnClick={false}
                    draggable={false}
                    theme="dark"
                />
            </main>
        </ThirdwebProvider>
    )
}
