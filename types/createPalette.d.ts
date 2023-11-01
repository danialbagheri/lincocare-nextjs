import { SimpleSimplePaletteColorOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    golden: SimpleSimplePaletteColorOptions;
    sun: SimplePaletteColorOptions;
    palm: SimplePaletteColorOptions;
    sand: SimplePaletteColorOptions;
    earth: SimplePaletteColorOptions;
    calypsoOrange: SimplePaletteColorOptions;
    lincoYellow: SimplePaletteColorOptions;
    lincoBlue: SimplePaletteColorOptions;
    silkiaBlue: SimplePaletteColorOptions;
    regenPink: SimplePaletteColorOptions;
    dimplesBlue: SimplePaletteColorOptions;
    cabanaBrown: SimplePaletteColorOptions;
    silkiaDepilatory: SimplePaletteColorOptions;
    sunTropic: SimplePaletteColorOptions;
    gray: SimplePaletteColorOptions;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    golden: SimpleSimplePaletteColorOptions;
    sun: SimplePaletteColorOptions;
    palm: SimplePaletteColorOptions;
    sand: SimplePaletteColorOptions;
    earth: SimplePaletteColorOptions;
    calypsoOrange: SimplePaletteColorOptions;
    lincoYellow: SimplePaletteColorOptions;
    lincoBlue: SimplePaletteColorOptions;
    silkiaBlue: SimplePaletteColorOptions;
    regenPink: SimplePaletteColorOptions;
    dimplesBlue: SimplePaletteColorOptions;
    cabanaBrown: SimplePaletteColorOptions;
    silkiaDepilatory: SimplePaletteColorOptions;
    sunTropic: SimplePaletteColorOptions;
    gray: SimplePaletteColorOptions;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    largeTitle: React.CSSProperties;
    h7: React.CSSProperties;
    h3thin: React.CSSProperties;
    h0: React.CSSProperties;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    largeTitle: React.CSSProperties;
    h7?: React.CSSProperties;
    h3thin?: React.CSSProperties;
    h0?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    largeTitle: true;
    h7: true;
    h3thin: true;
    h0: true;
  }
}
