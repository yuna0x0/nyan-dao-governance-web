import type { AppProps } from "next/app";
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
  phantomWallet
} from "@thirdweb-dev/react";
import { BaseGoerli, Localhost } from "@thirdweb-dev/chains";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
