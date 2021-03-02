import { Flex, Footer, Grid, View } from "@adobe/react-spectrum";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const LoggedInLayout = ({ children }) => (
  <Grid
    areas={["sidebar  header", "sidebar content", "sidebar  footer"]}
    columns={["1fr", "4fr"]}
    rows={["size-2000", "1fr", "size-1000"]}
    minHeight="100vh"
    gap="size-100"
    UNSAFE_style={{
      background: "radial-gradient(#00000010, #FFFFFF)",
      backgroundColor: "white",
    }}
  >
    <View gridArea="header" padding="size-400" marginBottom="size-200">
      <Header />
    </View>
    <View flex={1} gridArea="sidebar">
      <Sidebar />
    </View>
    <View gridArea="content" padding="size-400">
      {children}
    </View>
    <Flex justifyContent="center" gridArea="footer">
      <Footer>&copy; All rights reserved D-Team.</Footer>
    </Flex>
  </Grid>
);
