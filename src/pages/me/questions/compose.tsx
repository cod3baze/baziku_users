import Head from "next/head";
import { Plus } from "phosphor-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Selection from "react-select";
import { object, string } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "../../../components/Header";
import styles from "../../../styles/pages/me/ComposeQuestion.module.scss";

type QuestionFormData = {
  title: string;
  description: string;
  option_a: string;
  option_b: string;
  option_c?: string;
  option_d?: string;
  expire_at?: Date;
};

type ISelectTransferData = {
  label: string;
  value: string;
};

const NewQuestionFormSchema = object().shape({
  title: string().required("Nome de usuário obrigatório"),
  description: string(),
});

export default function ComposeQuestionPage() {
  const [optionInputList, setOptionInputList] = useState([
    {
      label: "Opção A",
      value: "option_a",
    },
    {
      label: "Opção B",
      value: "option_b",
    },
  ]);
  const [questionCategory, setQuestionCategory] =
    useState<ISelectTransferData>();
  const [questionAnswer, setQuestionAnswer] = useState<ISelectTransferData>();

  const category_options = [
    {
      label: "tech",
      value: "technology",
    },
    {
      label: "Dúvida",
      value: "question",
    },
    {
      label: "Alimentação",
      value: "food",
    },
    {
      label: "Outro",
      value: "any",
    },
  ];
  const answer_options = [
    {
      label: "A",
      value: "a",
    },
    {
      label: "B",
      value: "b",
    },
    {
      label: "C",
      value: "c",
    },
    {
      label: "D",
      value: "d",
    },
  ];

  function releaseNewInputOption() {
    if (optionInputList.length >= 4) return;

    if (optionInputList.length === 2) {
      setOptionInputList((state) => [
        ...state,
        {
          label: "Opção C",
          value: "option_c",
        },
      ]);
    } else if (optionInputList.length === 3) {
      setOptionInputList((state) => [
        ...state,
        {
          label: "Opção D",
          value: "option_d",
        },
      ]);
    }
  }

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(NewQuestionFormSchema),
  });

  const handleChangeCategory = ({ label, value }: ISelectTransferData) => {
    setQuestionCategory({
      label,
      value,
    });
  };

  const handleChangeAnswer = ({ label, value }: ISelectTransferData) => {
    setQuestionAnswer({
      label,
      value,
    });
  };

  const handleNewScheduleService: SubmitHandler<QuestionFormData> = async (
    values
  ) => {
    const formattedValues = {
      title: values.title,
      description: values.description,
      category: questionCategory.value,
      expire_at: values?.expire_at,
      created_at: new Date(),
      users: [],
      options: [
        {
          id: "a",
          label: values.option_a,
        },
        {
          id: "b",
          label: values.option_b,
        },
        {
          id: "c",
          label: values?.option_c,
        },
        {
          id: "d",
          label: values?.option_d,
        },
      ],
      answer: {
        id: questionAnswer.value,
        label: questionAnswer.label,
      },
      owner_id: "",
    };

    console.log(`values: ${JSON.stringify(formattedValues, null, 2)}`);
  };

  return (
    <>
      <Head>
        <title>Create question | Cognu Questions platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.composeQuestionPage}>
        <Header />

        <div>
          <section>
            <h1>Create question</h1>
          </section>
          <form
            onSubmit={handleSubmit(handleNewScheduleService)}
            className={styles.form}
          >
            <div className={styles.inputGroup}>
              <div>
                <label htmlFor="title">título</label>
                <input
                  type="text"
                  id="title"
                  placeholder="ex: como sera que x work?"
                  {...register("title")}
                />
              </div>

              <div>
                <label htmlFor="description">descrição</label>
                <textarea
                  id="description"
                  placeholder="ex: como sera que x work?"
                  {...register("description")}
                />
              </div>

              <div>
                <div className={styles.flexGroup}>
                  <label htmlFor="category">categoria</label>
                  <Selection
                    instanceId="category"
                    options={category_options}
                    onChange={handleChangeCategory}
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputOptionsGroup}>
              <section>
                {optionInputList.map((option) => (
                  <div key={option.value}>
                    <label htmlFor={option.value}>{option.label}</label>
                    <input
                      type="text"
                      id={option.value}
                      {...register(option.value)}
                    />
                  </div>
                ))}

                <button
                  onClick={releaseNewInputOption}
                  className={styles.moreButton}
                  type="button"
                >
                  <Plus size={34} weight="bold" color="var(--white)" />
                </button>
              </section>

              <div className={styles.flexGroup}>
                <label htmlFor="question_answer">Opção correta?</label>
                <Selection
                  instanceId="question_answer"
                  options={answer_options}
                  onChange={handleChangeAnswer}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div>
                <div className={styles.flexGroup}>
                  <label htmlFor="expire_at">data de expiração</label>
                  <input type="date" {...register("expire_at")} />
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              criar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
