import Head from "next/head";

import { Header } from "../../components/Header";
import styles from "../../styles/pages/Courses.module.scss";

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Cursos | Baziku</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.coursesPage}>
        <Header />
      </div>
    </>
  );
}
