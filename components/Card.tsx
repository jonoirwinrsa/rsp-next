import { View } from "@adobe/react-spectrum";
import * as React from "react";

const Card = ({ children }) => (
  <View
    margin="size-150"
    padding="size-100"
    borderRadius="medium"
    UNSAFE_style={{
      boxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff;",
    }}
  >
    {children}
  </View>
);

export default Card;
