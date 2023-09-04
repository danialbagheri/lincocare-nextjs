import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { HeadContainer } from "shared";

export function Head() {
  return (
    <HeadContainer
      sx={{
        backgroundColor: "#002C60",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        src={"/images/aboutUsPage/head.png"}
        alt="Accreditations"
        fill
        style={{
          objectFit: "cover",
          opacity: 0.5,
          backgroundBlendMode: "color",
        }}
        sizes={"100vw"}
        loading={"lazy"}
      />
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "90%",
        }}
      >
        <Typography sx={{ typography: { xs: "h4", md: "h1" } }} color="#fff">
          40 years of manufacturing excellence
        </Typography>
      </Box>
    </HeadContainer>
  );
}
