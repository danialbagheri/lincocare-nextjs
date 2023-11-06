import { Box, Popover, useTheme } from "@mui/material";
import { BRANDS } from "components/constants";
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

export function BrandsSimplePopover(props: PropsTypes) {
  const { anchorEle, handleClose } = props;
  const router = useRouter();
  const theme = useTheme();

  const activeStyle = {
    fontWeight: 700,
    borderBottom: `3px solid ${theme.palette.lincoBlue.main}`,
  };
  return (
    <Popover
      open={anchorEle?.textContent === "Brands"}
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
      sx={{ "&>.MuiPopover-paper": { borderRadius: 0 }, zIndex: 1000 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          p: 8,
          width: 187,
          pb: 12,
          "&>a": {
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
            maxWidth: "fit-content",
            px: "10px",
            pb: 1,
            borderBottom: `3px solid transparent`,
          },
          "&>a:hover": {
            fontWeight: 700,
            borderBottom: `3px solid ${theme.palette.lincoBlue.main}`,
          },
        }}
        onMouseLeave={handleClose}
      >
        {BRANDS.map((brand) => {
          if (!brand.privateLabel) {
            return (
              <Link
                key={brand.id}
                href={`/brands/${brand.id}`}
                style={{
                  ...(router.query.brandId === brand.id ? activeStyle : {}),
                }}
              >
                {brand.name}
              </Link>
            );
          }
        })}
      </Box>
    </Popover>
  );
}
