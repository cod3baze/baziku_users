import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import AppContexts from "../contexts/appContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContexts>
      <Toaster />
      <Component {...pageProps} />
    </AppContexts>
  );
}

export default MyApp;
