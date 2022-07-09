import Head from "next/head";

import { Header } from "../components/Header";
import styles from "../styles/pages/Authenticate.module.scss";

export default function Authenticate() {
  return (
    <>
      <Head>
        <title>SignUp | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.authenticationPage}>
        <Header />

        <div>
          <main>
            <button type="button">Authenticação</button>
          </main>
        </div>
      </div>
    </>
  );
}
