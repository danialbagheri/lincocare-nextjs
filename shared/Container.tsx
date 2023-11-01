import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, BoxProps } from "@mui/material";
/* -------------------------------------------------------------------------- */

interface ContainerTypes extends BoxProps {
  fullWidth?: boolean;
}

export function Container(props: ContainerTypes) {
  return (
    <Box
      {...props}
      sx={{
        width: { xs: "100%", md: "min(980px,80%)" },
        margin: "0 auto",
        px: { xs: props.fullWidth ? 0 : 9, md: 0 },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        ...props.sx,
      }}
    />
  );
}
