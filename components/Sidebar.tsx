import { Divider, Flex, Heading, Text, View } from "@adobe/react-spectrum";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

const NavButton = ({ link, text, icon }) => {
  const { pathname } = useRouter();
  return (
    <Link href={link}>
      <a>
        <Flex
          direction="row"
          alignItems="center"
          UNSAFE_style={{
            background: pathname === link && "#FFB800",
            borderRadius: "12px",
            padding: "12px",
            color: pathname === link ? "white" : "grey",
          }}
        >
          <img src={icon} style={{ marginRight: "10px", fill: pathname === link ? "white" : "grey" }} />
          <Text>{text}</Text>
        </Flex>
      </a>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <View padding="size-400" minHeight="100vh" borderEndWidth="thin" borderColor="gray-200">
      <Flex direction="column" gap="size-200" minHeight="90vh" justifyContent="space-between" alignSelf="center">
        <Flex direction="row" alignItems="center">
          <img src="logo.svg" height={30} width={30} />
          <Heading level={1} UNSAFE_style={{ fontSize: "3rem" }}>
            DTeam
          </Heading>
        </Flex>
        <Flex direction="column" gap="size-100">
          <NavButton text="Home" icon="icons/home.svg" link="/" />
          <NavButton text="Dashboard" icon="icons/dashboard.svg" link="/dashboard" />
          <NavButton text="Integrations" icon="icons/integrations.svg" link="/integrations" />
          <NavButton text="Marketplace" icon="icons/marketplace.svg" link="/marketplace" />
        </Flex>
        <Divider size="M" />
        <Flex direction="column" gap="size-100">
          <NavButton text="Notifications" icon="icons/notifications.svg" link="/notifications" />
          <NavButton text="Comments" icon="icons/chat.svg" link="/comments" />
        </Flex>
      </Flex>
    </View>
  );
};

export default Sidebar;
