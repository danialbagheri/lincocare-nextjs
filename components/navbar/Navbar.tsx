import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useScrollTrigger } from "@mui/material";

import Image from "next/image";
import { theme } from "theme";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Brands", "Private label", "About us", "Contact us"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Lincocare
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color={"primary"}
        sx={{
          backgroundColor: trigger
            ? theme.palette.lincoBlue.main
            : "transparent",
          boxShadow: trigger
            ? "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
            : "unset",
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 7, md: 24, lg: 40 },
            pt: { xs: trigger ? 3 : 6, md: trigger ? 6 : 10 },
            pb: { xs: trigger ? 3 : 6, md: trigger ? 6 : 0 },
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon sx={{ fill: "#fff", fontSize: 40 }} />
          </IconButton>

          {/* Linco mobile icon */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", md: "none" },
              textAlign: "left",
            }}
          >
            <IconButton color="inherit" aria-label="open drawer">
              <Image
                alt={"linco-logo"}
                src={"/icons/Linco-logo-white-mobile.svg"}
                width={30}
                height={40}
              />
            </IconButton>
          </Box>

          {/* Linco desktop icon */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              textAlign: "left",
            }}
          >
            <IconButton color="inherit" aria-label="open drawer">
              <Image
                alt={"linco-logo"}
                src={"/icons/Linco-logo-white-small.svg"}
                width={177}
                height={40}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              px: 3,
              gap: 4,
              borderBottom: "1px solid",
              borderColor: "lincoYellow.main",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#ffffff", textTransform: "none" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
