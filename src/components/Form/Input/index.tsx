import { HTMLProps } from "react";

import styles from "./styles.module.scss";

interface IFormInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  spanLabel?: string;
  spanLabelHref?: string;
}

export function FormInput({
  label,
  spanLabel,
  spanLabelHref,
  htmlFor,
  ...rest
}: IFormInputProps) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputGroupMeta}>
        <label htmlFor={htmlFor}>{label}</label>
        {!!spanLabel && (
          <span>
            {spanLabelHref ? (
              <a href={spanLabelHref}>{spanLabel}</a>
            ) : (
              spanLabel
            )}
          </span>
        )}
      </div>
      <input {...rest} />
    </div>
  );
}
