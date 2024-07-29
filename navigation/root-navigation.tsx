import { Screens } from "@/constants/Screens";
import useTheme from "@/core/theme/theme-hooks";
import { Stack } from "expo-router";
import React from "react";

export default function RootNavigation() {
  const theme = useTheme();
  return (
    <Stack
      initialRouteName={Screens.Auth.index}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name={Screens.Auth.index} />
    </Stack>
  );
}
