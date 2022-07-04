import Head from "next/head";
import { Stack } from "phosphor-react";

import { Header } from "../../components/Header";
import styles from "../../styles/pages/CoursesModule.module.scss";

export default function CourseModule() {
  return (
    <>
      <Head>
        <title>Cursos | Baziku</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.courseModuleContainer}>
        <Header />

        <main>
          <aside className={styles.asideInfo}>
            <div>
              <section className={styles.sectionHeader}>
                <div className={styles.top}>
                  <span>
                    <img
                      src="/assets/node-js.svg"
                      alt="node.js illustration"
                      draggable={false}
                    />
                  </span>
                  <div>
                    <h2>Node.js</h2>
                    <p>back-end</p>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <p>
                    início da jornada: <strong>12/09/200</strong>
                  </p>
                  <p>
                    início da jornada: <strong>12/09/200</strong>
                  </p>
                  <p>
                    início da jornada: <strong>12/09/200</strong>
                  </p>
                </div>
              </section>

              <section className={styles.sectionMain}>
                <h3>Acesso rápido</h3>
                <div>
                  <a href="h:/courses/node-js/bonus">
                    <div>
                      <Stack size={20} weight="bold" color="#fba94c" />
                    </div>
                    <span>conteúdo extra</span>
                  </a>
                  <a href="h:/courses/node-js">
                    <div>
                      <Stack size={20} weight="bold" color="#fba94c" />
                    </div>
                    <span>Fórum</span>
                  </a>
                </div>
              </section>

              <section className={styles.sectionFooter}>
                <h3>Links úteis</h3>
                <nav>
                  <a href="https://github.com/eliasallex">
                    eliasallex (github)
                  </a>
                  <a href="https://instagram.com/eliasall3x">instagram</a>
                </nav>
              </section>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
