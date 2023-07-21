import { SimpleSimplePaletteColorOptions } from "@mui/material";

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
  }
}
