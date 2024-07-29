import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ThemeColors } from "@/core/theme/types";
import useThemeStyle from "@/hooks/useThemeStyle";

type Header = {
  title: string;
};

export default function Header({ title }: Readonly<Header>) {
  const { themeStyle } = useThemeStyle(styles);

  return (
    <View style={themeStyle.container}>
      <Text style={themeStyle.title}>{title}</Text>
    </View>
  );
}

const styles = (color: ThemeColors) =>
  StyleSheet.create({
    container: {
      height: 100,
      paddingTop: 60,
      paddingLeft: 15,
    },
    title: {
      color: color.dark,
      fontSize: 35,
      fontWeight: "400",
    },
  });
