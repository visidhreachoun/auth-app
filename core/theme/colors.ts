import { Theme } from "./types";

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: "#6ED7FA",
    background: "#fff",
    dark: "#000",
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#6ED7FA",
    background: "#000",
    dark: "#fff",
  },
};
