import styles from "./form.module.scss";

interface FormButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isLoading?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

export function FormButton({
  isLoading,
  text,
  type = "submit",
  ...rest
}: FormButtonProps) {
  return (
    <div className={styles.formController}>
      <button type={type} disabled={isLoading} {...rest}>
        {isLoading ? <span>loading...</span> : text}
      </button>
    </div>
  );
}
