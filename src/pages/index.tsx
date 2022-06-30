import Head from "next/head";

import styles from "../styles/pages/Courses.module.css";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SignUp | Baziku platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.coursesPage}>
        <h1>eliasallex</h1>
      </div>
    </>
  );
}
