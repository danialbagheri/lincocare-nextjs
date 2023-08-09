import { Box, BoxProps, SxProps } from "@mui/material";

interface HeadContainerTypes extends BoxProps {
  sx?: SxProps;
}

export function HeadContainer(props: HeadContainerTypes) {
  return (
    <Box
      {...props}
      sx={{
        position: "relative",
        height: { xs: 500, md: 600, xl: 700 },
        width: "100%",
        ...props.sx,
      }}
    />
  );
}
