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

        <div>
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

          <main className={styles.mainContent}>
            <div>
              <div className={styles.chapter}>
                {/* cinalização do chapter */}
                <div className={styles.initial}>
                  <div className={styles.circle} />
                  <div className={styles.desc}>
                    <h2>Chapter I</h2>
                  </div>
                </div>
                {/* módulos */}
                <div className={styles.module}>
                  <div className={styles.circle} />
                  <a href="h:/courses/node-js/chapter-i">
                    <div>
                      <img src="/assets/node-js.svg" alt="node course" />
                      <div>
                        <div>
                          <h4>Fundamentos do NodeJS</h4>
                          <span>em 7 aulas</span>
                        </div>
                        <p>
                          Nesse módulos nós vamos conhecer os conceitos do
                          Node.js, como é o seu funcionamento e os motivos pelo
                          qual ele foi criado. Iremos estudar sobre os conceitos
                          e regras por trás de uma API Rest, os métodos HTTPs,
                          os principais códigos de retornos e tipos de
                          parâmetros de uma requisição.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.module}>
                  <div className={styles.circle} />
                  <a href="h:/courses/node-js/chapter-i">
                    <div>
                      <img src="/assets/node-js.svg" alt="node course" />
                      <div>
                        <div>
                          <h4>Fundamentos do NodeJS</h4>
                          <span>em 7 aulas</span>
                        </div>
                        <p>
                          Nesse módulos nós vamos conhecer os conceitos do
                          Node.js, como é o seu funcionamento e os motivos pelo
                          qual ele foi criado. Iremos estudar sobre os conceitos
                          e regras por trás de uma API Rest, os métodos HTTPs,
                          os principais códigos de retornos e tipos de
                          parâmetros de uma requisição.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.chapter}>
                {/* cinalização do chapter */}
                <div className={styles.initial}>
                  <div className={styles.circle} />
                  <div className={styles.desc}>
                    <h2>Chapter II</h2>
                  </div>
                </div>
                {/* módulos */}
                <div className={styles.module}>
                  <div className={styles.circle} />
                  <a href="h:/courses/node-js/chapter-i">
                    <div>
                      <img src="/assets/node-js.svg" alt="node course" />
                      <div>
                        <div>
                          <h4>Fundamentos do NodeJS</h4>
                          <span>em 7 aulas</span>
                        </div>
                        <p>
                          Nesse módulos nós vamos conhecer os conceitos do
                          Node.js, como é o seu funcionamento e os motivos pelo
                          qual ele foi criado. Iremos estudar sobre os conceitos
                          e regras por trás de uma API Rest, os métodos HTTPs,
                          os principais códigos de retornos e tipos de
                          parâmetros de uma requisição.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.module}>
                  <div className={styles.circle} />
                  <a href="h:/courses/node-js/chapter-i">
                    <div>
                      <img src="/assets/node-js.svg" alt="node course" />
                      <div>
                        <div>
                          <h4>Fundamentos do NodeJS</h4>
                          <span>em 7 aulas</span>
                        </div>
                        <p>
                          Nesse módulos nós vamos conhecer os conceitos do
                          Node.js, como é o seu funcionamento e os motivos pelo
                          qual ele foi criado. Iremos estudar sobre os conceitos
                          e regras por trás de uma API Rest, os métodos HTTPs,
                          os principais códigos de retornos e tipos de
                          parâmetros de uma requisição.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
