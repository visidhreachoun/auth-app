import React from "react";
import { DimensionValue, View } from "react-native";

type SizedBox = {
  height?: DimensionValue;
  width?: DimensionValue;
};

export default function SizedBox({ height, width }: SizedBox) {
  return <View style={{ height, width }} />;
}
