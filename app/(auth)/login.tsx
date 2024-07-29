import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import email from "./email";
import phone from "./phone";
import useTheme from "@/core/theme/theme-hooks";
import { Dimension } from "@/constants/Dimensions";

const Tab = createMaterialTopTabNavigator();
export default function LoginTab() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      style={{
        paddingTop: 30,
      }}
      screenOptions={{
        lazy: true,
        tabBarLabelStyle: {
          color: theme.colors.dark,
          textTransform: "none",
          fontSize: 17,
          marginBottom: 18,
          fontFamily: "500",
        },
        tabBarPressColor: theme.colors.dark,

        tabBarIndicatorStyle: {
          width: "50%",
          borderColor: theme.colors.primary,
          marginBottom: -2,
        },

        tabBarStyle: {
          height: 55,
          elevation: 0,
          borderBottomWidth: 2,
          borderBottomColor: theme.colors.inactive,
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="Email" component={email} />
      <Tab.Screen name="Phone" component={phone} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
