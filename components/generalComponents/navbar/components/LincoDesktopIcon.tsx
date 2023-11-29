/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
import { useRouter } from "next/router";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, IconButton } from "@mui/material";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export function LincoDesktopIcon(props: { darkNavbar: boolean }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "block" },
        textAlign: "left",
        paddingBottom: 3,
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => router.push("/")}
      >
        <Image
          alt={"linco-logo"}
          src={
            props.darkNavbar
              ? "/icons/Linco-logo.svg"
              : "/icons/Linco-logo-white.svg"
          }
          width={177}
          height={40}
        />
      </IconButton>
    </Box>
  );
}
