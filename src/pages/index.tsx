import Head from "next/head";
import Link from "next/link";
import { Article, CaretRight, Sparkle, StackSimple } from "phosphor-react";

import styles from "../styles/pages/Welcome.module.scss";

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>Welcome | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.welcomePage}>
        <aside>
          <div>
            <img
              src="/assets/_incognu.svg"
              alt="ilustração simbolizando perguntas e respostas"
              draggable={false}
            />

            <h1>
              Cognu <span>Question</span>
            </h1>
          </div>

          <p>Selecione um tópico para iniciar a avaliação do assunto!</p>

          <Link href="/produtos/genesis-system-bank-gs-bank" passHref>
            <button className={styles.highlight} type="button">
              <Sparkle size={24} weight="bold" color="#dedede" />
              <span>em alta</span>
            </button>
          </Link>
        </aside>

        <main className={styles.mainSection}>
          <div className={styles.mainContent}>
            <div className={styles.seeMore}>
              <Link href="/collections" passHref>
                <a>
                  <Article size={28} weight="light" color="#836afd" />
                  <span>ver mais tópicos</span>
                </a>
              </Link>
            </div>

            <Link href="/" passHref>
              <article className={styles.template}>
                <section className="content">
                  <header>
                    <StackSimple size={64} weight="bold" color="#835afd" />
                    <span>tech</span>
                  </header>
                  <h2>O que o Flutter faz em sua totalidade?</h2>
                  <p>
                    Questionamento da linguagem dart sobre o funcionamento do
                    Flutter. assinale as opções corretas sobre o flutter na web!
                  </p>
                </section>

                <footer>
                  <CaretRight size={24} weight="light" />
                </footer>
              </article>
            </Link>
            <Link href="/" passHref>
              <article className={styles.template}>
                <section className="content">
                  <header>
                    <StackSimple size={64} weight="bold" color="#835afd" />
                    <span>tech</span>
                  </header>
                  <h2>O que o Flutter faz em sua totalidade?</h2>
                  <p>
                    Questionamento da linguagem dart sobre o funcionamento do
                    Flutter. assinale as opções corretas sobre o flutter na web!
                  </p>
                </section>

                <footer>
                  <CaretRight size={24} weight="light" />
                </footer>
              </article>
            </Link>
            <Link href="/" passHref>
              <article className={styles.template}>
                <section className="content">
                  <header>
                    <StackSimple size={64} weight="bold" color="#835afd" />
                    <span>tech</span>
                  </header>
                  <h2>O que o Flutter faz em sua totalidade?</h2>
                  <p>
                    Questionamento da linguagem dart sobre o funcionamento do
                    Flutter. assinale as opções corretas sobre o flutter na web!
                  </p>
                </section>

                <footer>
                  <CaretRight size={24} weight="light" />
                </footer>
              </article>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
