import { Stack } from "expo-router";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { Screens } from "@/constants/Screens";
import Header from "@/components/header/Header";

export default function AuthLayout() {
  const renderHeader = (props: NativeStackHeaderProps) => {
    const title = props.options.title ?? "";
    return <Header title={title} />;
  };

  return (
    <Stack>
      <Stack.Screen
        name={Screens.Auth.login}
        options={{ header: renderHeader }}
      />
      <Stack.Screen
        name={Screens.Auth.profile}
        options={{ header: renderHeader }}
      />
    </Stack>
  );
}
