import { Box, BoxProps, SxProps, useTheme } from "@mui/material";

import Link from "next/link";

interface CustomLinkTypes extends BoxProps {
  borderColor?: { xs: string; md: string } | { xs: string };
  href: string;
  children: React.ReactNode;
  sx?: SxProps;
}

export function CustomLink(props: CustomLinkTypes) {
  const theme = useTheme();

  return (
    <Box
      {...props}
      sx={{
        pt: 5,
        "&>a": {
          display: "inline-block",
          textDecoration: "none",
          color: props.color || "#fff",
          borderBottom: `2px solid`,
          borderColor: props.borderColor
            ? { ...props.borderColor }
            : theme.palette.lincoYellow.main,
          p: 2,
        },
        ...props.sx,
      }}
    >
      <Link href={props.href}>{props.children}</Link>
    </Box>
  );
}