import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
/* -------------------------------------------------------------------------- */

type ContainerTypes = { children: React.ReactNode; sx?: SxProps };

function Container({ children, sx }: ContainerTypes) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "min(980px,80%)" },
        margin: "0 auto",
        px: { xs: 9, md: 0 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
