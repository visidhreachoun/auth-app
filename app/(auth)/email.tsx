import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "@/components/Input/CustomTextInput";
import useThemeStyle from "@/hooks/useThemeStyle";
import { ThemeColors } from "@/core/theme/types";
import SizedBox from "@/components/SizedBox";
import { IconAsset } from "@/assets/icon-assets";

export default function Page() {
  const { themeStyle, theme } = useThemeStyle(styles);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState(true);

  const handleChangeForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  const handleViewPassword = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <View style={themeStyle.container}>
      <SizedBox height={10} />

      <CustomTextInput
        leftIcon={
          <IconAsset.EmailIcon
            width={20}
            height={20}
            fill={theme.colors.dark}
            strokeWidth={15}
            stroke={theme.colors.dark}
          />
        }
        value={form.email}
        placeholder="Email"
        onChange={(inp) => handleChangeForm("email", inp)}
      />
      <SizedBox height={20} />
      <CustomTextInput
        leftIcon={
          <IconAsset.Lock width={22} height={20} fill={theme.colors.dark} />
        }
        value={form.password}
        placeholder="Password"
        onChange={(inp) => handleChangeForm("password", inp)}
        isHideText={hidePassword}
        rightIcon={
          <TouchableOpacity onPress={handleViewPassword}>
            {hidePassword ? (
              <IconAsset.EyeClose
                width={23}
                height={23}
                fill={theme.colors.dark}
              />
            ) : (
              <IconAsset.Eye width={23} height={23} fill={theme.colors.dark} />
            )}
          </TouchableOpacity>
        }
      />
      <SizedBox height={20} />
      <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => {}}>
        <Text style={themeStyle.forgotText}>Forgot password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (color: ThemeColors) =>
  StyleSheet.create({
    container: {
      padding: 15,
    },
    forgotPasswordContainer: {},
    forgotText: {
      color: color.primary,
      fontSize: 15,
      fontWeight: "400",
    },
  });
