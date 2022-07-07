import Link from "next/link";
import { StackSimple, CaretRight } from "phosphor-react";

import { QuestionDTO } from "../dtos/QuestionDTO";
import styles from "../styles/components/Question.module.scss";

type QuestionElementProps = QuestionDTO & {};

export default function Question({
  id,
  title,
  description,
  category,
}: QuestionElementProps) {
  return (
    <Link href={`/q/${id}`} passHref>
      <a className={styles.questionElement}>
        <section className="content">
          <header>
            <StackSimple size={64} weight="bold" color="#835afd" />
            <span>{category}</span>
          </header>
          <h2>{title}</h2>
          <p>{description}</p>
        </section>

        <footer>
          <CaretRight size={24} weight="light" />
        </footer>
      </a>
    </Link>
  );
}
