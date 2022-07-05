import Head from "next/head";

import { Header } from "../../components/Header";

export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Welcome | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />

        <h1>collections</h1>
      </div>
    </>
  );
}
