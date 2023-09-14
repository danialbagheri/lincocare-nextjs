import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { HeadContainer } from "shared";

export function Head() {
  const theme = useTheme();
  return (
    <HeadContainer
      sx={{
        backgroundColor: theme.palette.lincoBlue.main,
        overflow: "hidden",
        height: { xs: 470, md: 600 },
      }}
    >
      <Image
        src={"/images/sustainability/head.jpg"}
        alt="Accreditations"
        fill
        style={{ objectFit: "cover" }}
        sizes={"100vw"}
        loading={"lazy"}
      />

      <Box
        sx={{
          position: "absolute",
          maxWidth: "378px",
          top: { xs: "70%", md: "50%" },
          right: { xs: "70%", md: "55%" },
          textAlign: "left",
          transform: { xs: "translate(50%,50%)", md: "translate(0,0)" },
        }}
      >
        <Typography sx={{ typography: { xs: "h4", md: "h1" } }} color="#fff">
          Sustainability Mission
        </Typography>
      </Box>
    </HeadContainer>
  );
}
