import { Box, SxProps } from "@mui/material";

import Link from "next/link";

interface CustomLinkTypes {
  borderColor: string;
  href: string;
  children: React.ReactNode;
  sx?: SxProps;
  color?: string;
}

function CustomLink(props: CustomLinkTypes) {
  return (
    <Box
      sx={{
        pt: 5,
        "&>a": {
          display: "inline-block",
          textDecoration: "none",
          color: props.color || "#fff",
          borderBottom: "2px solid " + props.borderColor,
          p: 2,
        },
        ...props.sx,
      }}
    >
      <Link href={props.href}>{props.children}</Link>
    </Box>
  );
}

export default CustomLink;
