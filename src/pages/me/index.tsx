import Head from "next/head";

import { Header } from "../../components/Header";
import styles from "../../styles/pages/me/Me.module.scss";

export default function Me() {
  return (
    <>
      <Head>
        <title>Me profile | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mePage}>
        <Header />

        <div>
          <main>
            <header>
              <h2>Elias alexandre</h2>
              <strong>@eliasAllexandre</strong>
            </header>

            <section>
              <p>
                questions
                <span>7</span>
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
