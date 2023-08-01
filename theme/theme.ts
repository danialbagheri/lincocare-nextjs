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
      main: "#FF6B00",
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
  },

  spacing: 4,

  typography: {
    h1: {
      /* Extra Large Title */
      fontFamily: inter.style.fontFamily,
      fontSize: "56px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    h2: {
      fontFamily: inter.style.fontFamily,
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "40px",
    },
    h3: {
      fontFamily: inter.style.fontFamily,
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "35px",
    },
    h4: {
      fontFamily: inter.style.fontFamily,
      fontSize: "42px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "52px",
    },
    h5: {
      fontFamily: inter.style.fontFamily,
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "40px",
    },
    h6: {
      fontFamily: inter.style.fontFamily,
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
    },
    h7: {
      fontFamily: inter.style.fontFamily,
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h7thin: {
      fontFamily: inter.style.fontFamily,
      fontSize: "36px",
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
