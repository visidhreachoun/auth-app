import useTheme from "@/core/theme/theme-hooks";
import { ThemeColors } from "@/core/theme/types";

import { StyleProp } from "react-native";

type Styles = {
  [key: string]: StyleProp<any>;
};

export default function useThemeStyle<T extends Styles>(
  styles: (theme: ThemeColors) => T
) {
  const theme = useTheme();

  const themeStyle = styles(theme.colors);

  return { theme, themeStyle };
}
