import { Divider, Flex, Heading, Text, View } from "@adobe/react-spectrum";
import Link from "next/link";
import * as React from "react";

const Button = ({ link, text, icon, background, color }) => (
  <Link href={link}>
    <Flex direction="row" UNSAFE_style={{ background, borderRadius: "12px", padding: "12px", color }}>
      <img src={icon} style={{ marginRight: "10px", color }} />
      <Text>{text}</Text>
    </Flex>
  </Link>
);

const Sidebar = () => (
  <View padding="size-400" minHeight="100vh" borderEndWidth="thin" borderColor="gray-200">
    <Flex direction="column" gap="size-200" minHeight="90vh" justifyContent="space-between" alignSelf="center">
      <Flex direction="row" alignItems="center">
        <img src="logo.svg" height={30} width={30} />
        <Heading level={1} UNSAFE_style={{ fontSize: "3rem" }}>
          DTeam
        </Heading>
      </Flex>
      <Flex direction="column" gap="size-100">
        <Button text="Home" background="#FFB800" color="white" icon="icons/home.svg" link="/" />
        <Button text="Dashboard" background="" color="grey" icon="icons/dashboard.svg" link="/dashboard" />
        <Button text="Integrations" background="" color="grey" icon="icons/integrations.svg" link="/integrations" />
        <Button text="Marketplace" background="" color="grey" icon="icons/marketplace.svg" link="/marketplace" />
      </Flex>
      <Divider />
      <Flex direction="column" gap="size-100">
        <Button text="Notifications" background="" color="grey" icon="icons/notifications.svg" link="/notifications" />
        <Button text="Comments" background="" color="grey" icon="icons/chat.svg" link="/comments" />
      </Flex>
    </Flex>
  </View>
);

export default Sidebar;
