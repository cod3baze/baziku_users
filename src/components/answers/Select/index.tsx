import { ReactNode } from "react";

import styles from "../../../styles/components/answers/Select.module.scss";

type answersSelectProps = {
  children: ReactNode;
};

export function Select({ children }: answersSelectProps) {
  return <div id={styles.selectElement}>{children}</div>;
}
