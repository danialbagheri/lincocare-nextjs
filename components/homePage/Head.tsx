/* ---------------------------- NextJs Components --------------------------- */
import Link from "next/link";
import { HeadContainer } from "shared";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
/* -------------------------------------------------------------------------- */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
/* -------------------------------------------------------------------------- */

const HEADER_TITLES = [
  {
    id: "formulation",
    title: "700+ Product Formulations",
    href: "/privateLabel",
  },
  {
    id: "crafting",
    title: "Crafting Excellence, Nurturing beauty",
    href: "/aboutUs",
  },
  {
    id: "custom",
    title:
      "Private Label Pioneers: Four Decades of Cosmetic Manufacturing Expertise",
    href: "/privateLabel",
  },
];

export function Head() {
  const theme = useTheme();

  return (
    <>
      <HeadContainer
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", overflow: "hidden" }}
      >
        <Box
          position="relative"
          sx={{
            "&>video": { scale: { xs: "4", md: "1.4", xl: "unset" } },

            "*::-webkit-media-controls-panel": {
              display: "none !important",
              webkitAppearance: "none",
            },

            "*::-webkit-media-controls-play-button": {
              display: "none !important",
              webkitAppearance: "none",
            },

            "*::-webkit-media-controls-start-playback-button": {
              display: "none !important",
              webkitAppearance: "none",
            },
          }}
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
            width: { xs: "90%", md: "800px" },
            top: "40%",
            left: { xs: "50%", md: "20%" },
            textAlign: { xs: "center", md: "left" },
            transform: { xs: "translate(-50%,0)", md: "translate(0,0)" },

            "& a": {
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
          <Slide
            autoplay
            slidesToScroll={1}
            duration={3000}
            transitionDuration={500}
            slidesToShow={1}
            indicators={false}
            arrows={false}
          >
            {HEADER_TITLES.map((headerTitle) => (
              <Box key={headerTitle.id}>
                <Typography
                  sx={{ typography: { xs: "h4", md: "h1" } }}
                  color="#fff"
                >
                  {headerTitle.title}
                </Typography>
                <Link href={headerTitle.href}>Know more</Link>
              </Box>
            ))}
          </Slide>
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
