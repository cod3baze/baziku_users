import { CheckCircle } from "phosphor-react";

import styles from "../../../styles/components/answers/Select.module.scss";

type SelectOptionProps = {
  text: string;
  isSelected?: boolean;
  isInactive?: boolean;
  onSelect?: () => void;
};

export function Option({
  text,
  isSelected = false,
  isInactive,
  onSelect,
}: SelectOptionProps) {
  return (
    <button
      onClick={onSelect}
      type="button"
      className={`${styles.simpleOption} ${isSelected ? styles.active : ""} ${
        isInactive ? styles.inactive : ""
      }`}
    >
      <span>{text}</span>
      {isSelected ? (
        <CheckCircle size={32} weight="bold" color="var(--font-primary)" />
      ) : (
        <CheckCircle size={32} weight="light" color="#dedede" />
      )}
    </button>
  );
}
