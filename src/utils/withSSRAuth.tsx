import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";

import { AuthTokenError } from "../errors/AuthTokenError";

/**
 * usada em páginas que só serão acessadas por usuários logged
 */
export function withSSRAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    try {
      const cookies = parseCookies(ctx);
      const token = cookies["@cognu_questions.token"];

      if (!token) {
        return {
          redirect: {
            destination: "/authenticate",
            permanent: false,
          },
        };
      }
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "@cognu_questions.token");
        destroyCookie(ctx, "@cognu_questions.refresh_token");

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }

    return fn(ctx);
  };
}
