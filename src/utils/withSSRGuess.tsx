// usada em páginas que só serão acessadas por visitantes

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (cookies["@cognu_questions.token"]) {
      return {
        redirect: {
          destination: "/me",
          permanent: false,
        },
      };
    }

    return fn(ctx);
  };
}
