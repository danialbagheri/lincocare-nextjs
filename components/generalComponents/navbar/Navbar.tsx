import * as React from "react";

/* ---------------------------- NextJs Components --------------------------- */
import { useRouter } from "next/router";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useScrollTrigger } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import {
  DesktopMenu,
  LincoDesktopIcon,
  LincoMobileIcon,
  MobileMenu,
  MobileMenuIcon,
} from "./components";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Interface ------------------------------- */
interface Props {
  window?: () => Window;
}
/* -------------------------------------------------------------------------- */

export default function Navbar(props: Props) {
  const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const darkNavbar =
    router.pathname !== "/" &&
    !router.pathname.includes("/brands") &&
    !router.pathname.includes("/about-us");

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const renderProperDrawerColor = () => {
    if (darkNavbar) {
      return "#FFF";
    } else return "lincoBlue.dark";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color={"primary"}
        sx={{
          backgroundColor: trigger ? renderProperDrawerColor() : "transparent",
          boxShadow: "unset",
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 7, md: 24, lg: 40 },
            pt: { xs: 6, md: 10 },
            pb: { xs: trigger ? 0 : 6, md: 0 },
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          <MobileMenuIcon
            handleDrawerToggle={handleDrawerToggle}
            darkNavbar={darkNavbar}
          />
          <LincoMobileIcon darkNavbar={darkNavbar} />
          <LincoDesktopIcon darkNavbar={darkNavbar} />
          <DesktopMenu darkNavbar={darkNavbar} trigger={trigger} />
        </Toolbar>
      </AppBar>

      <MobileMenu
        window={window}
        mobileOpen={mobileOpen}
        handleClose={handleDrawerToggle}
      />
    </Box>
  );
}
