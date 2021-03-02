// import App from "next/app";
import { defaultTheme } from "@adobe/react-spectrum";
import { SSRProvider } from "@react-aria/ssr";
import { Provider } from "@react-spectrum/provider";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { LoggedInLayout } from "../layouts/LoggedInLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme} colorScheme="light" minHeight="100%">
        <Head>
          <title>DTeam</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <LoggedInLayout>
          <Component {...pageProps} />
        </LoggedInLayout>
      </Provider>
      <style jsx global>{`
        html,
        body,
        #__next {
          width: 100%;
          height: 100%;
          margin: 0;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </SSRProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
