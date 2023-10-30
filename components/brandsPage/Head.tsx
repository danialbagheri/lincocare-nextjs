/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
/* -------------------------------------------------------------------------- */

export function Head() {
  const theme = useTheme();
  return (
    <>
      <Box
        bgcolor={"lincoBlue.dark"}
        sx={{ height: { xs: 630, md: 800, xl: 850 }, position: "relative" }}
      >
        <Image
          alt="Brands"
          src="/images/brandsPage/header.jpg"
          fill
          style={{ objectFit: "cover" }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography variant={"h1"} color={"#FFF"}>
            Our Brands
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ p: 3, bgcolor: "#F5F5F5", display: { xs: "none", md: "flex" } }}
      >
        <Box
          sx={{
            m: "0 auto",
            maxWidth: "70%",
            minWidth: { md: "60%", lg: "50%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.palette.lincoBlue.dark,
          }}
        >
          {["Quality", "Ethics", "Innovation"].map((item) => (
            <Stack key={item} direction="row" alignItems={"center"} gap={2}>
              <StarIcon sx={{ fill: "#C2C2C2", fontSize: 16 }} />
              <Typography>{item}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </>
  );
}
