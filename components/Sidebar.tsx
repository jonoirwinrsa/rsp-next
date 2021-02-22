import { Button, Divider, Flex, View } from "@adobe/react-spectrum";
import Link from "next/link";
import * as React from "react";

const Sidebar = () => (
  <View padding="size-100" minHeight='100vh' borderEndWidth="thin" borderColor="gray-200">
    <Flex direction="column" gap="size-200" minHeight='90vh' justifyContent="space-between" alignSelf="center">
      <h2>DTeam</h2>
      <Flex direction="column" gap="size-100">
        <Link href="/">
          <Button variant="cta">Home</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="primary">Dashboard</Button>
        </Link>
        <Link href="/integrations">
          <Button variant="primary">Integrations</Button>
        </Link>
        <Link href="/marketplace">
          <Button variant="primary">Marketplace</Button>
        </Link>
      </Flex>
      <Divider />
      <Flex direction="column" gap="size-100">
        <Link href="/notifications">
          <Button variant="primary">Notifications</Button>
        </Link>
        <Link href="/comments">
          <Button variant="primary">Comments</Button>
        </Link>
      </Flex>
    </Flex>
  </View>
);

export default Sidebar;
