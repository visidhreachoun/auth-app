import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationHelper } from "@/utils/navigation-helper";
import { Screens } from "@/constants/Screens";

export default function index() {
  useEffect(() => {
    setTimeout(() => {
      NavigationHelper.reset({ pathname: Screens.Auth.login });
    }, 500);
  });
  return (
    <View>
      <Text>Tov Trip</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
