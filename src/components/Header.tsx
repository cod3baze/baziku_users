import styles from "../styles/components/Header.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul>
          <li>
            <a
              className={`${styles.navigable} ${styles.active}`}
              href="/cursos"
            >
              cursos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
