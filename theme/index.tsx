"use client";

import { Bebas_Neue } from "next/font/google";
import {
 PropsWithChildren,
 createContext,
 useEffect,
 useMemo,
 useState,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type ModeOptions = "light" | "dark";

const roboto = Bebas_Neue({
 weight: ["400"],
 subsets: ["latin"],
 display: "swap",
});

const getDesignTokens = (mode: ModeOptions) => ({
 typography: {
  fontSize: 16,
  fontFamily: roboto.style.fontFamily,
 },
 components: {
  MuiButton: {
   styleOverrides: {
    root: { borderRadius: ".7rem" },
   },
  },
 },
 palette: {
  mode,
  ...(mode === "light"
   ? {
      // palette values for light mode
      primary: { main: "#ffde59" },
      // main: "#ffde59",
      text: {
       primary: "#000000",
      },
     }
   : {
      primary: { main: "#ffde59" },
      // main: "#ffde59",
      text: {
       primary: "#ffffff",
      },
     }),
 },
});

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function CustomThemeProvider({ children }: PropsWithChildren) {
 const [mode, setMode] = useState<ModeOptions>("light");

 useEffect(() => {
  // Check localStorage first
  const savedTheme = localStorage.getItem("theme") as ModeOptions;

  if (savedTheme) {
   setMode(savedTheme);
  } else {
   // Check system preference if no saved theme
   const isDarkMode = window?.matchMedia(
    "(prefers-color-scheme: dark)"
   ).matches;
   setMode(isDarkMode ? "dark" : "light");
  }
 }, []);

 const toggleColorMode = () => {
  if (!mode) return; // Guard against null
  const newMode = mode === "light" ? "dark" : "light";
  setMode(newMode);
  localStorage.setItem("theme", newMode);
 };

 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

 return (
  <ColorModeContext.Provider value={{ toggleColorMode }}>
   <ThemeProvider theme={theme}>
    <div className={theme.palette.mode}>{children}</div>
   </ThemeProvider>
  </ColorModeContext.Provider>
 );
}
