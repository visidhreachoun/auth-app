import { Stack } from "expo-router";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { Screens } from "@/constants/Screens";
import Header from "@/components/header/Header";

export default function _layout() {
  const renderHeader = (props: any) => {
    const title = props.options.title;
    return <Header title={title} />;
  };

  return (
    <Stack screenOptions={{ header: renderHeader }}>
      <Stack.Screen name={Screens.Auth.login} options={{ title: "Login" }} />
      <Stack.Screen
        name={Screens.Auth.profile}
        options={{ title: "Profile" }}
      />
    </Stack>
  );
}
