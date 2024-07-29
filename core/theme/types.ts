import { DarkTheme } from "./colors";

export type Theme = {
  dark: boolean;
  colors: ThemeColors;
};

export type ThemeColors = typeof DarkTheme.colors;
