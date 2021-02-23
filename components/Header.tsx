import { Header as Wrapper, Heading } from "@adobe/react-spectrum";
import * as React from "react";

const Header = () => (
  <Wrapper>
    <Heading level={2} marginBottom={0}>Hi Michael Louis,</Heading>
    <Heading level={1} marginTop={0} UNSAFE_style={{ fontSize: "3rem" }}>
      Welcome back 👋
    </Heading>
  </Wrapper>
);

export default Header;
