import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Header = {
  title: string;
};

export default function Header({ title }: Readonly<Header>) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.light.background,
    fontSize: 15,
  },
});
