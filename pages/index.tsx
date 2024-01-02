import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Governance from "./governance";

const Home: NextPage = () => {
  const dAppName = "NyanDAO Governance Playground";

  return (
    <main className={styles.main}>
      <Head>
        <title>{dAppName}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{dAppName}</h2>
          <div className={styles.connect}>
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
        <hr></hr>
        <div>
          <Governance />
        </div>
      </div>
      <ToastContainer
        theme="dark"
      />
    </main>
  );
};

export default Home;
