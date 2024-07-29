import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TabBar({}) {
  return (
    <View style={styles.container}>
      <Text>TabBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
  },
});
