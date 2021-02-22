import { defaultTheme, Flex, Footer, Grid, Provider, View } from "@adobe/react-spectrum";
import { SSRProvider } from "@react-aria/ssr";
import React from "react";
import Header from "../components/Header";
import Insights from "../components/Insights";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";

const Home = () => (
  <SSRProvider>
    <Provider theme={defaultTheme} colorScheme="light" minHeight="100%">
      <Grid
        areas={["sidebar  header", "sidebar content", "sidebar  footer"]}
        columns={["1fr", "4fr"]}
        rows={["size-2000", "1fr", "size-1000"]}
        minHeight="100vh"
        gap="size-100"
      >
        <View gridArea="header" padding='size-100' marginBottom='size-200'>
          <Header />
        </View>
        <View flex={1} gridArea="sidebar">
          <Sidebar />
        </View>
        <View gridArea="content" padding='size-100'>
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
