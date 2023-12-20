import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import { CookieConsentBanner } from "@porscheofficial/cookie-consent-banner-react";
import ReactGA from "react-ga4";

ReactGA.gtag("consent", "default", {
  analytics_storage: "denied",
});
ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

function MyApp({ Component, pageProps }) {
  const initConsent = ({ acceptedCategories }) => {
    if (acceptedCategories.includes("analytics")) {
      ReactGA.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };
  return (
    <>
      <Head>
        <title>Study Brew</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <CookieConsentBanner
          handlePreferencesUpdated={initConsent}
          handlePreferencesRestored={initConsent}
          btnLabelAcceptAndContinue="Agree and continue"
          btnLabelOnlyEssentialAndContinue="Continue with technically required cookies only"
          availableCategories={[
            {
              description: "Enable you to navigate and use the basic functions and to store preferences.",
              key: "technically_required",
              label: "Technically necessary cookies",
              isMandatory: true,
            },
            {
              description: "Enable us to determine how visitors interact with our service in order to improve the user experience.",
              key: "analytics",
              label: "Analysis cookies",
            },
          ]}
        >
          We use cookies and similar technologies to provide certain features, enhance the user experience and deliver content that is
          relevant to your interests. Depending on their purpose, analysis and marketing cookies may be used in addition to technically
          necessary cookies. By clicking on &quot;Agree and continue&quot;, you declare your consent to the use of the aforementioned
          cookies.
        </CookieConsentBanner>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
