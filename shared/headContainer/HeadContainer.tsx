import { Box, BoxProps, SxProps } from "@mui/material";
import React from "react";

interface HeadContainerTypes extends BoxProps {
  sx?: SxProps;
}

function HeadContainer(props: HeadContainerTypes) {
  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        position: "relative",
        height: { xs: 500, md: 600, xl: 700 },
        width: "100%",
      }}
    />
  );
}

export default HeadContainer;
