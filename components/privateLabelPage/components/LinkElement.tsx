import { useTheme } from "@mui/material";
import { CustomLink } from "shared";

export default function LinkElement(props: {
  href: string;
  display: { xs: string; md: string };
}) {
  const theme = useTheme();
  return (
    <CustomLink
      href={props.href}
      borderColor={{ xs: theme.palette.lincoBlue.main }}
      color="#000"
      display={{ ...props.display }}
      textAlign={{ xs: "center", md: "left" }}
    >
      Know more
    </CustomLink>
  );
}
