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
      }}
    >
      <Image
        src={"/images/aboutUsPage/head/main.png"}
        alt="Accreditations"
        fill
        style={{ objectFit: "cover", opacity: 0.5 }}
        sizes={"100vw"}
        loading={"lazy"}
      />
      <Box
        sx={{
          position: "absolute",
          maxWidth: "378px",
          top: "50%",
          right: { xs: "50%", md: "55%" },
          textAlign: { xs: "center", md: "left" },
          transform: { xs: "translate(50%,0)", md: "translate(0,0)" },

          "&>a": {
            display: "inline-block",
            textDecoration: "none",
            p: 2,
            mt: 7,
            color: "#fff",
            borderBottom: `1px solid ${theme.palette.lincoYellow.main}`,
            typography: { xs: "body2", md: "body1" },
          },
        }}
      >
        <Typography sx={{ typography: { xs: "h4", md: "h1" } }} color="#fff">
          40 years of ...
        </Typography>
        <Typography mt={4} color={"lincoBlue.dark"} variant="h4">
          Skin Care Specialists
        </Typography>
      </Box>
    </HeadContainer>
  );
}
