import React, { createContext } from "react";
import { LightTheme } from "./colors";
import { Theme } from "./types";

export const ThemeContext = createContext<Theme>(LightTheme);

export default function ThemeProvider({
  value,
  children,
}: Readonly<{
  value: Theme;
  children: React.ReactNode;
}>) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
