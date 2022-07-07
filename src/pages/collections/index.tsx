import Head from "next/head";

import { Header } from "../../components/Header";
import Question from "../../components/Question";
import { QuestionDTO } from "../../dtos/QuestionDTO";
import styles from "../../styles/pages/Collections.module.scss";

const data: Array<QuestionDTO> = [
  {
    id: "question_01",
    title: "O que o Flutter faz em sua totalidade?",
    description:
      "Questionamento da linguagem dart sobre o funcionamento do Flutter. assinale as opções corretas sobre o flutter na web!",
    category: "tech",
  },
  {
    id: "question_02",
    title: "Qual a principal framework utilizado para construir app WEB?",
    description:
      "Com o crescimento da web vários libs surgiram. com base na sua experiência assinale!",
    category: "tech",
  },
  {
    id: "question_03",
    title: "O que o Flutter faz em sua totalidade?",
    description:
      "Questionamento da linguagem dart sobre o funcionamento do Flutter. assinale as opções corretas sobre o flutter na web!",
    category: "tech",
  },
  {
    id: "question_04",
    title: "O que o Flutter faz em sua totalidade?",
    description:
      "Questionamento da linguagem dart sobre o funcionamento do Flutter. assinale as opções corretas sobre o flutter na web!",
    category: "tech",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Welcome | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.collectionsPage}>
        <Header />

        <section>
          <div>
            <h1>find better collections</h1>
            <p>em breve novas formas de adicionar Questions</p>
          </div>

          <main>
            {data.map((question) => (
              <Question key={question.id} {...question} />
            ))}
          </main>
        </section>
      </div>
    </>
  );
}
