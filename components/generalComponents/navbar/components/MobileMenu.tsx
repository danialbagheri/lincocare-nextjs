/* ---------------------------- NextJs Components --------------------------- */
import Link from "next/link";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { NAV_ITEMS } from "./constants";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Constants ------------------------------- */
const DRAWER_WIDTH = 375;
/* -------------------------------------------------------------------------- */

/* ------------------------------- Interfaces ------------------------------- */
interface MobileMenuProps {
  window?: () => Window;
  mobileOpen: boolean;
  handleClose: () => void;
}
/* -------------------------------------------------------------------------- */

export function MobileMenu(props: MobileMenuProps) {
  const { window, mobileOpen, handleClose } = props;
  const theme = useTheme();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav" sx={{ width: 375 }}>
      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        <Box
          onClick={handleClose}
          sx={{
            textAlign: "center",
            bgcolor: theme.palette.lincoBlue.dark,
            height: "100%",
          }}
        >
          <Box textAlign="end" sx={{ pt: 8, pr: 7 }}>
            <IconButton>
              <CloseIcon sx={{ color: "#FFF" }} />
            </IconButton>
          </Box>

          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    borderBottom: `1px solid ${theme.palette.lincoBlue.main}`,
                    py: 4,
                    px: 0,
                    ml: "54px",
                    mr: "47px",
                    "&>a": { color: "white", textDecoration: "none" },
                  }}
                >
                  <Link href={item.link}>{item.name}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
