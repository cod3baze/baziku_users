import Head from "next/head";

import { Header } from "../components/Header";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "../styles/pages/Authenticate.module.scss";
import { withSSRGuest } from "../utils/withSSRGuess";

export default function Authenticate() {
  const { signInWithGoogle } = useAuthContext();

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
            <button onClick={signInWithGoogle} type="button">
              Authenticação
            </button>
          </main>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
export const getServerSideProps = withSSRGuest(async (_context) => {
  return {
    props: {},
  };
});
