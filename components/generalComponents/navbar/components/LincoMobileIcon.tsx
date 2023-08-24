import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export function LincoMobileIcon(props: { darkNavbar: boolean }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "block", md: "none" },
        textAlign: "left",
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
              ? "/icons/Linco-logo-blue-mobile.png"
              : "/icons/Linco-logo-white-mobile.svg"
          }
          width={30}
          height={40}
        />
      </IconButton>
    </Box>
  );
}
