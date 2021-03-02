import { Flex, Header as Wrapper, Heading, Text } from "@adobe/react-spectrum";
import * as React from "react";

const Header = () => (
  <Wrapper>
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="column">
        <Heading level={2} marginBottom={0}>
          Hi Michael Louis,
        </Heading>
        <Heading level={1} marginTop={0} UNSAFE_style={{ fontSize: "3rem" }}>
          Welcome back 👋
        </Heading>
      </Flex>
      <Flex>
        <img src="icons/search.svg" />
        <Text marginStart="size-100">Search</Text>
      </Flex>
      <Flex
        UNSAFE_style={{
          borderRadius: "50%",
          background: "white",
          boxShadow: "#0000001f 3px 3px 16px",
          padding: "10px",
        }}
      >
        <img src="icons/notifications.svg" />
      </Flex>
    </Flex>
  </Wrapper>
);

export default Header;
