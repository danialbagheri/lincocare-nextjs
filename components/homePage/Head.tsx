/* ---------------------------- NextJs Components --------------------------- */
import Link from "next/link";
import { HeadContainer } from "shared";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export function Head() {
  const theme = useTheme();

  return (
    <>
      <HeadContainer
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", overflow: "hidden" }}
      >
        <Box
          position="relative"
          sx={{ "&>video": { scale: { xs: "4", md: "1.4", xl: "unset" } } }}
        >
          <video width="100%" height="100%" autoPlay={true} loop muted>
            <source
              src="/images/homePage/head/homePageVideo.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
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
          <Typography sx={{ typography: { xs: "h4", md: "h1" } }} color="#fff">
            700+ Product Formulations
          </Typography>
          <Typography
            mt={4}
            color={"lincoBlue.dark"}
            sx={{ typography: { xs: "h3", md: "h4" } }}
          >
            Unique Formulation
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
