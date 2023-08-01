import { SimpleSimplePaletteColorOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface Palette {
    golden: SimpleSimplePaletteColorOptions;
    sun: SimplePaletteColorOptions;
    palm: SimplePaletteColorOptions;
    sand: SimplePaletteColorOptions;
    earth: SimplePaletteColorOptions;
    lincoYellow: SimplePaletteColorOptions;
    lincoBlue: SimplePaletteColorOptions;
    silkiaBlue: SimplePaletteColorOptions;
    regenPink: SimplePaletteColorOptions;
    dimplesBlue: SimplePaletteColorOptions;
    cabanaBrown: SimplePaletteColorOptions;
    silkiaDepilatory: SimplePaletteColorOptions;
    sunTropic: SimplePaletteColorOptions;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    golden: SimpleSimplePaletteColorOptions;
    sun: SimplePaletteColorOptions;
    palm: SimplePaletteColorOptions;
    sand: SimplePaletteColorOptions;
    earth: SimplePaletteColorOptions;
    lincoYellow: SimplePaletteColorOptions;
    lincoBlue: SimplePaletteColorOptions;
    silkiaBlue: SimplePaletteColorOptions;
    regenPink: SimplePaletteColorOptions;
    dimplesBlue: SimplePaletteColorOptions;
    cabanaBrown: SimplePaletteColorOptions;
    silkiaDepilatory: SimplePaletteColorOptions;
    sunTropic: SimplePaletteColorOptions;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    h7: React.CSSProperties;
    h7thin: React.CSSProperties;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    h7?: React.CSSProperties;
    h7thin?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h7thin: true;
  }
}
