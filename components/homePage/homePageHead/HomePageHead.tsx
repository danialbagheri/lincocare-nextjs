/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
/* -------------------------------------------------------------------------- */

/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
import Link from "next/link";
import { HeadContainer } from "shared";
/* -------------------------------------------------------------------------- */

function HomePageHead() {
  const theme = useTheme();

  return (
    <>
      <HeadContainer sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <Image
          src={"/images/homePage/head/homePageBG.png"}
          fill
          alt="Home page head"
          style={{ objectFit: "cover", filter: " brightness(0.7)" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
        <Box
          sx={{
            position: "absolute",
            maxWidth: "378px",
            top: "40%",
            right: { xs: "50%", md: "45%" },
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
          <Typography sx={{ typography: { xs: "h2", md: "h1" } }} color="#fff">
            700+ Product Formulations
          </Typography>
          <Typography
            mt={4}
            color={"lincoBlue.main"}
            sx={{ typography: { xs: "h3", md: "h2" } }}
          >
            Supporting sentence
          </Typography>
          <Link href={""}>Know more</Link>
        </Box>
      </HeadContainer>
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
            color: theme.palette.lincoBlue.main,
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

export default HomePageHead;
