import { defaultTheme, Flex, Footer, Grid, Provider, View } from "@adobe/react-spectrum";
import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Insights from "../components/Insights";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";

const Home = () => (
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
      <Grid
        areas={["sidebar  header", "sidebar content", "sidebar  footer"]}
        columns={["1fr", "4fr"]}
        rows={["size-2000", "1fr", "size-1000"]}
        minHeight="100vh"
        gap="size-100"
        UNSAFE_style={{
          background: "radial-gradient(#00000010, #FFFFFF)",
          backgroundColor: 'white'
        }}
      >
        <View gridArea="header" padding="size-400" marginBottom="size-200">
          <Header />
        </View>
        <View flex={1} gridArea="sidebar">
          <Sidebar />
        </View>
        <View gridArea="content" padding="size-400">
          <Overview />
          <Insights />
        </View>
        <Flex justifyContent="center" gridArea="footer">
          <Footer>&copy; All rights reserved D-Team.</Footer>
        </Flex>
      </Grid>
    </Provider>
    <style jsx global>{`
      html,
      body,
      #__next {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    `}</style>
  </SSRProvider>
);

export default Home;
