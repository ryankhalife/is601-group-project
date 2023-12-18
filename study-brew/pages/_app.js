import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Study Brew</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <NextUIProvider>
        <div className="container">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
