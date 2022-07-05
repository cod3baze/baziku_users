import Link from "next/link";
import { useRouter } from "next/router";
import { Article } from "phosphor-react";

import styles from "../styles/components/Header.module.scss";

export function Header() {
  const { asPath } = useRouter();

  const isOnCollectionsPage = asPath === "/collections";

  return (
    <header className={styles.headerElement}>
      <nav>
        <Link href="/" passHref>
          <a className={styles.logo}>
            <img src="/assets/_incognu.svg" alt="cognu questions" />
          </a>
        </Link>

        {!isOnCollectionsPage && (
          <Link href="/collections" passHref>
            <a>
              <Article size={28} weight="light" color="#836afd" />
              <span>ver mais tópicos</span>
            </a>
          </Link>
        )}
      </nav>
    </header>
  );
}
