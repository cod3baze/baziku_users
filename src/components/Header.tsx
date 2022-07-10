import Link from "next/link";
import { useRouter } from "next/router";
import { Article, SignOut } from "phosphor-react";

import { useAuthContext } from "../hooks/useAuthContext";
import styles from "../styles/components/Header.module.scss";

export function Header() {
  const { asPath } = useRouter();
  const { user, signOutOnGoogle } = useAuthContext();

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

      {user?.token && (
        <div className={styles.sessions}>
          <button onClick={signOutOnGoogle} type="button">
            <SignOut size={24} weight="bold" />
            <span>Sair</span>
          </button>
        </div>
      )}
    </header>
  );
}
