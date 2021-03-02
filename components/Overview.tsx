import { Flex, Text } from "@adobe/react-spectrum";
import * as React from "react";
import Card from "./Card";

const Highlight = ({ title, icon, value, color }) => (
  <Flex direction="column" justifyContent="center">
    <Flex direction="row" justifyContent="start">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="6" fill={color} />
      </svg>
      <Text marginStart="size-100">{title}</Text>
    </Flex>
    <h2 style={{ fontSize: "2.5rem", margin: 0 }}>{value}</h2>
    <svg width="170" height="2" viewBox="0 0 170 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="170" height="2" rx="1" fill="#E4E4E4" />
      <rect width="49" height="2" rx="1" fill={color} />
    </svg>
  </Flex>
);

const Overview = () => (
  <Card>
    <h3>Overview</h3>
    <Flex
      direction="row"
      justifyContent="space-between"
      UNSAFE_style={{ borderRadius: "10px", border: "thin solid #e1e1e1", padding: "20px" }}
    >
      <Highlight title="Orders" value="4k" color="#6C5DD3" icon="" />
      <Highlight title="Cash" value="400k" color="#FFA2C0" icon="" />
      <Highlight title="Avg. basket size" value="$36" color="#FF9A7B" icon="" />
      <Highlight title="On time" value="96.7%" color="#7FBA7A" icon="" />
    </Flex>
  </Card>
);

export default Overview;
