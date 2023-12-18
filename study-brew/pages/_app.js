import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Study Brew</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
