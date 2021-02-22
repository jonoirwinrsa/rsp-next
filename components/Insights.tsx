import { ProgressCircle } from "@react-spectrum/progress";
import * as React from "react";
import Card from "./Card";

const Insights = () => (
  <Card>
    <h3>Insights</h3>
    <h4>
      Your orders are 6% higher today than yesterday <ProgressCircle value={50} />
    </h4>
    <h4>
      Your on-time percentage yesterday was 67%. We are on track to hit our KPIs of 14% <ProgressCircle value={60} />
    </h4>
    <h4>
      Your average basket size has decreased over the past week <ProgressCircle value={70} />
    </h4>
    <h4>
      Cash on hand has remained stable <ProgressCircle value={80} />
    </h4>
  </Card>
);

export default Insights;
