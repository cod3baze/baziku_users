import Head from "next/head";
import NextLink from "next/link";

import { Form } from "../components/Form";
import { FormButton } from "../components/Form/Button";
import { FormInput } from "../components/Form/Input";
import styles from "../styles/pages/Auth.module.scss";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SignUp | Baziku platform</title>
        <meta name="description" content="Baziku users courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.authContainerPage}>
        <main>
          <div>
            <h1>Entrar na plataforma</h1>
          </div>

          <Form method="POST" onSubmit={() => {}}>
            <FormInput
              placeholder="nome de usuário"
              label="Username"
              htmlFor="username"
              id="username"
              autoComplete="email"
            />
            <FormInput
              placeholder="código de acesso"
              spanLabel="esqueci a senha"
              spanLabelHref="/reset_password"
              label="Senha"
              htmlFor="password"
              id="password"
              type="password"
              autoComplete="current-password"
            />

            <FormButton isLoading={false} type="submit" text="Entrar" />
          </Form>

          <footer>
            <p>
              Não tem uma conta?{" "}
              <NextLink href="/session" passHref>
                <a>Registre-se</a>
              </NextLink>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
