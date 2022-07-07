import { GetServerSideProps } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { Select } from "../../components/answers/Select";
import { Option } from "../../components/answers/Select/Option";
import { Header } from "../../components/Header";
import { QuestionDTO } from "../../dtos/QuestionDTO";
import styles from "../../styles/pages/Q.module.scss";

interface QuestionVotePageProps {
  question: QuestionDTO;
}

export default function QuestionVotePage({ question }: QuestionVotePageProps) {
  const [option, setOption] = useState<string>("");

  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (optionId === option) {
        setOption("");
      } else {
        setOption(optionId);
      }
    },
    [option]
  );

  async function handleSubmit() {
    try {
      toast.success("Questionamento enviado com sucesso!", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Erro ao enviar o questionamento :D", {
        duration: 4000,
      });
    }
  }

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
                <Option
                  text="React JS"
                  isSelected={option === "a"}
                  isInactive={option !== "" && option !== "a"}
                  onSelect={() => handleSelectOption("a")}
                />
                <Option
                  text="Node"
                  isSelected={option === "b"}
                  isInactive={option !== "" && option !== "b"}
                  onSelect={() => handleSelectOption("b")}
                />
                <Option
                  text="Vue JS"
                  isSelected={option === "c"}
                  isInactive={option !== "" && option !== "c"}
                  onSelect={() => handleSelectOption("c")}
                />
                <Option
                  text="Pure HTML, CSS and JS"
                  isSelected={option === "d"}
                  isInactive={option !== "" && option !== "d"}
                  onSelect={() => handleSelectOption("d")}
                />
              </Select>

              <button
                type="button"
                className={styles.confirmButton}
                onClick={handleSubmit}
              >
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
