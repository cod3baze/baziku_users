import { GetServerSideProps } from "next";
import Head from "next/head";

import { Select } from "../../components/answers/Select";
import { Option } from "../../components/answers/Select/Option";
import { Header } from "../../components/Header";
import { QuestionDTO } from "../../dtos/QuestionDTO";
import styles from "../../styles/pages/Q.module.scss";

interface QuestionVotePageProps {
  question: QuestionDTO;
}

export default function QuestionVotePage({ question }: QuestionVotePageProps) {
  return (
    <>
      <Head>
        <title>Welcome | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.qPage}>
        <Header />

        <main>
          <div>
            <section>
              <h1>{question.title}</h1>
              <p>{question.description}</p>
            </section>

            <div className={styles.answerActionContainer}>
              <Select>
                <Option isSelected text="React JS" />
                <Option text="Node" />
                <Option isInactive text="Vue JS" />
                <Option text="Pure HTML, CSS and JS" />
              </Select>

              <button className={styles.confirmButton} type="button">
                confirmar
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const question = {
    id: "question_01",
    title: "O que o Flutter faz em sua totalidade?",
    description:
      "Questionamento da linguagem dart sobre o funcionamento do Flutter. assinale as opções corretas sobre o flutter na web!",
    category: "tech",
  };

  return {
    props: {
      question,
    },
  };
};
