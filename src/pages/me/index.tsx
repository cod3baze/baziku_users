import Head from "next/head";

import { Header } from "../../components/Header";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "../../styles/pages/me/Me.module.scss";
import { withSSRAuth } from "../../utils/withSSRAuth";

export default function Me() {
  const { user } = useAuthContext();

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
              <div>
                <img
                  draggable={false}
                  src={user?.avatar}
                  alt={`${user?.name} avatar`}
                />
              </div>

              <article>
                <h2>{user?.name}</h2>
                <strong>{user?.email}</strong>
              </article>
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

// eslint-disable-next-line no-unused-vars
export const getServerSideProps = withSSRAuth(async (_ctx) => {
  return { props: {} };
});
