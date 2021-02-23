import { View } from "@adobe/react-spectrum";
import * as React from "react";

const Card = ({ children }) => (
  <View
    margin="size-150"
    padding="size-100"
    borderRadius="medium"
    backgroundColor="static-white"
  >
    {children}
  </View>
);

export default Card;
