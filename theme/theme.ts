import { Inter } from "next/font/google";
import { createTheme } from "@mui/material";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#004EAA",
    },
    secondary: {
      main: "#226F61",
    },
    golden: {
      main: "#F5AF3F",
    },
    sun: { main: "#F5AF3F" },
    palm: {
      main: "#226F61",
    },
    sand: {
      main: "#FCF5EC",
    },
    earth: {
      main: "#3C1510",
    },
    calypsoOrange: {
      light: "#F47B47",
      main: "#EC6B1C",
    },
    lincoYellow: {
      main: "#FBFF00",
    },
    lincoBlue: {
      light: "#247DE7",
      main: "#004EAA",
      dark: "#062952",
    },
    cabanaBrown: { main: "#CEA974" },
    silkiaBlue: {
      main: "#2B69B1",
    },
    silkiaDepilatory: {
      main: "#CF639F",
    },
    regenPink: {
      main: "#FEA08C",
    },
    dimplesBlue: {
      main: "#AECEF4",
    },
    sunTropic: {
      main: "#5BB087",
    },
    gray: {
      light: "#C2C2C2",
      main: "#B1B1B1",
    },
  },

  spacing: 4,

  typography: {
    largeTitle: {
      fontFamily: inter.style.fontFamily,
      fontSize: "72px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    h0: {
      fontFamily: inter.style.fontFamily,
      fontSize: "68px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },

    h1: {
      fontFamily: inter.style.fontFamily,
      fontSize: "56px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    h2: {
      fontFamily: inter.style.fontFamily,
      fontSize: "42px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "52px",
    },
    h3: {
      fontFamily: inter.style.fontFamily,
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4: {
      fontFamily: inter.style.fontFamily,
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "40px",
    },
    h5: {
      fontFamily: inter.style.fontFamily,
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "35px",
    },
    h6: {
      fontFamily: inter.style.fontFamily,
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
    },
    h7: {},
    h3thin: {
      fontFamily: inter.style.fontFamily,
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    subtitle1: {
      fontFamily: inter.style.fontFamily,
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    body1: {
      fontFamily: inter.style.fontFamily,
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
    },

    body2: {
      fontFamily: inter.style.fontFamily,
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
