import { SxProps, useTheme } from "@mui/material";
import { CustomLink } from "shared";

export default function LinkElement(props: { href: string; sx: SxProps }) {
  const theme = useTheme();
  return (
    <CustomLink
      borderColor={{ xs: theme.palette.lincoBlue.main }}
      color="#000"
      textAlign={{ xs: "center", md: "left" }}
      {...props}
    >
      Know more
    </CustomLink>
  );
}
