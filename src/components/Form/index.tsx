import { HTMLProps, ReactNode } from "react";

import styles from "./form.module.scss";

interface IFormProps extends HTMLProps<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...rest }: IFormProps) {
  return (
    <form {...rest} className={styles.formContainer}>
      {children}
    </form>
  );
}
