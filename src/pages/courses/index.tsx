import Head from "next/head";
import NextLink from "next/link";
import { PlayCircle } from "phosphor-react";

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

        <div className={styles.coverContent}>
          <main>
            <div className={styles.helloHeader}>
              <h1>Olá, Elias</h1>
              <div>
                <p />
                <p>Selecione um curso para começar o aprendizado.</p>
              </div>
            </div>

            <div className={styles.coursesBox}>
              <h3>disponíveis</h3>

              <section className={styles.section}>
                <div className={styles.course}>
                  <header>
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
                  </header>
                  <main>
                    <p>
                      Construa arquiteturas escaláveis e simples para a web
                      utilizando uma linguagem flexível e popular
                    </p>
                  </main>
                  <footer>
                    <NextLink href="/courses/node-js" passHref>
                      <button type="button">
                        <span>
                          <PlayCircle color="#835afd" size={28} weight="bold" />
                          <span>Acessar</span>
                        </span>
                      </button>
                    </NextLink>
                  </footer>
                </div>

                <div className={styles.course}>
                  <header>
                    <span>
                      <img
                        src="/assets/node-js.svg"
                        alt="node.js illustration"
                        draggable={false}
                      />
                    </span>
                    <div>
                      <h2>React</h2>
                      <p>front-end</p>
                    </div>
                  </header>
                  <main>
                    <p>
                      Construa páginas escaláveis e simples para a web
                      utilizando uma linguagem flexível e popular
                    </p>
                  </main>
                  <footer>
                    <NextLink href="/courses/react-js" passHref>
                      <button type="button">
                        <span>
                          <PlayCircle color="#835afd" size={28} weight="bold" />
                          <span>Acessar</span>
                        </span>
                      </button>
                    </NextLink>
                  </footer>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
