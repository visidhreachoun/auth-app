import { Languages } from "@/constants/Language";
import { EnglishFont, Font, KhmerFont } from "@/constants/font-constant";
import useTheme from "@/core/theme/theme-hooks";
import { ThemeColors } from "@/core/theme/types";

import { StyleProp } from "react-native";

type Styles = {
  [key: string]: StyleProp<any>;
};

export default function useThemeStyle<T extends Styles>(
  styles: (theme: ThemeColors, font: Font) => T
) {
  const theme = useTheme();

  const font = EnglishFont;

  const themeStyle = styles(theme.colors, font);

  return { theme, themeStyle, font };
}
