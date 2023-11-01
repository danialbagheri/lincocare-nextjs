import { IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileMenuIconProps {
  handleDrawerToggle: () => void;
  darkNavbar: boolean;
}

export function MobileMenuIcon(props: MobileMenuIconProps) {
  const { handleDrawerToggle, darkNavbar } = props;
  const theme = useTheme();

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ display: { md: "none" } }}
    >
      <MenuIcon
        sx={{
          fill: darkNavbar ? theme.palette.lincoBlue.main : "#fff",
          fontSize: 40,
        }}
      />
    </IconButton>
  );
}
