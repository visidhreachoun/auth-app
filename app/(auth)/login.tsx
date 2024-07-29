import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import email from "./email";
import phone from "./phone";

const Tab = createMaterialTopTabNavigator();
export default function LoginTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={email} />
      <Tab.Screen name="Settings" component={phone} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
