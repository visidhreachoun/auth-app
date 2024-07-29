import { Theme } from "./types";

export const LightTheme: Theme = {
  dark: false,
  colors: {
    inactive: "#E5E5E5",
    primary: "#6ED7FA",
    background: "#fff",
    dark: "#494949",
    divider: "#F5F5FA",
    lightGray: "#C4C4C4",
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    inactive: "#E5E5E5",
    primary: "#6ED7FA",
    background: "#000",
    dark: "#fff",
    divider: "#F5F5FA",
    lightGray: "#C4C4C4",
  },
};
