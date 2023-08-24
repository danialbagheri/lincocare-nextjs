import { Box, Popover, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface PropsTypes {
  anchorEle: HTMLButtonElement | null;
  handleClose: () => void;
}

const LINKS = [
  { href: "/aboutUs", title: "About us" },
  { href: "/sustainability", title: "Sustainability" },
  { href: "/news", title: "News" },
];

export function AboutUsPopOver(props: PropsTypes) {
  const { anchorEle, handleClose } = props;
  const router = useRouter();
  const theme = useTheme();

  const activeStyle = {
    fontWeight: 700,
    borderBottom: `3px solid ${theme.palette.lincoBlue.main}`,
  };

  return (
    <Popover
      open={anchorEle?.textContent === "About us"}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={anchorEle}
      onClose={handleClose}
      disableRestoreFocus
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          p: 8,
          pb: 12,
          "&>a": {
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
            maxWidth: "fit-content",
            px: "10px",
            pb: 1,
          },
          "&>a:hover": {
            fontWeight: 700,
          },
        }}
        onMouseLeave={handleClose}
      >
        {LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            style={{
              ...(router.pathname === link.href ? activeStyle : {}),
            }}
          >
            {link.title}
          </Link>
        ))}
      </Box>
    </Popover>
  );
}
