import { Box, SxProps } from "@mui/material";

import Link from "next/link";

interface customLinkTypes {
  borderColor: string;
  href: string;
  children: React.ReactNode;
  sx?: SxProps;
}

function CustomLink(props: customLinkTypes) {
  return (
    <Box
      sx={{
        pt: 5,
        "&>a": {
          display: "inline-block",
          textDecoration: "none",
          color: "#fff",
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
