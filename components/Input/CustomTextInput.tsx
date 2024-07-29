import { DimensionValue, StyleSheet, TextInput, View } from "react-native";
import React, { ReactNode } from "react";
import useThemeStyle from "@/hooks/useThemeStyle";
import { ThemeColors } from "@/core/theme/types";
import SizedBox from "../SizedBox";

interface customTextInputProps {
  placeholder: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange?: (inp: string) => void;
  keyboard?: "default" | "number-pad";
  value?: string;
  isRequired?: boolean;
  limit?: number;
  width?: DimensionValue;
  editable?: boolean;
  isHideText?: boolean;
}

export default function CustomTextInput({
  placeholder,
  leftIcon,
  rightIcon,
  onChange = () => {},
  keyboard = "default",
  value,
  isRequired,
  limit,
  width = "100%",
  editable = true,
  isHideText = false,
}: customTextInputProps) {
  const { themeStyle, theme } = useThemeStyle(styles);
  return (
    <View style={[themeStyle.textContainer, { width: width }]}>
      {leftIcon}
      {leftIcon && <SizedBox width={8} />}
      <TextInput
        keyboardType={keyboard}
        numberOfLines={1}
        value={value}
        maxLength={limit}
        onChangeText={(inp) => onChange(inp)}
        editable={editable}
        style={themeStyle.textInputStyle}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.lightGray}
        secureTextEntry={isHideText}
      />
      {rightIcon}
    </View>
  );
}

const styles = (color: ThemeColors) =>
  StyleSheet.create({
    textContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: color.divider,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: color.inactive,
      height: 50,
    },
    textInputStyle: {
      flexGrow: 1,
      height: "100%",
      color: color.dark,
      fontSize: 16,
      fontWeight: "400",
    },
  });
