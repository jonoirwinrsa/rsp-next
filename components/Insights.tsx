import { Flex } from "@adobe/react-spectrum";
import { ProgressCircle } from "@react-spectrum/progress";
import * as React from "react";
import Card from "./Card";

const InsightRow = ({ image, text, percentage }) => (
  <Flex justifyContent="space-between" alignItems="center" marginBottom="size-100">
    <img src={image} style={{borderRadius: '10px'}}/>
    <h4>{text}</h4>
    <ProgressCircle value={percentage} />
  </Flex>
);

const Insights = () => (
  <Card>
    <h3>Insights</h3>
    <InsightRow text="Your orders are 6% higher today than yesterday" image="images/tag.png" percentage={60} />
    <InsightRow text="Your on-time percentage yesterday was 67%. We are on track to hit our KPIs of 14%" image="images/shield.png" percentage={50} />
    <InsightRow text="Your average basket size has decreased over the past week" image="images/dial.png" percentage={50} />
    <InsightRow text="Cash on hand has remained stable " image="images/cash.png" percentage={50} />
  </Card>
);

export default Insights;
