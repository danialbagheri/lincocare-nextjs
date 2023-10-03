import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Installed library --------------------------- */
import ReactPlayer from "react-player/lazy";
import { Slide } from "react-slideshow-image";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { HeadContainer } from "shared";
/* -------------------------------------------------------------------------- */

const PRIVATE_LABEL_INFO = [
  {
    id: "privateLabel_1",
    title: "360 degree services",
    imgSrc: "/images/privateLabelPage/head/privateLabel.png",
  },
  {
    id: "privateLabel_2",
    title: "From idea to market ",
    imgSrc: "/images/privateLabelPage/head/privateLabel.png",
  },
  {
    id: "privateLabel_3",
    title: "Four decades of cosmetic manufacturing expertise ",
    imgSrc: "/images/privateLabelPage/head/privateLabel.png",
  },
];

const PRIVATE_INFO_SIZE = PRIVATE_LABEL_INFO.length;

export function Head() {
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setInitialized(true);
    }
  }, []);

  return (
    <HeadContainer
      sx={{
        bgcolor: "#939eae",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "&>div": { scale: { xs: "3", md: "1.4", lg: "2" } },
        }}
      >
        {initialized ? (
          <ReactPlayer
            url="/videos/private-label-banner-small.mp4"
            height="100%"
            width="100%"
            loop={true}
            playing={true}
            muted
          />
        ) : null}
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: { xs: "90%", md: "800px" },
          top: "40%",
          left: { xs: "50%", md: "20%" },
          textAlign: { xs: "center", md: "left" },
          transform: { xs: "translate(-50%,0)", md: "translate(0,0)" },
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
          {PRIVATE_LABEL_INFO.map((info) => (
            <Box key={info.id}>
              <Typography
                sx={{ typography: { xs: "h4", md: "h1" } }}
                color="#fff"
              >
                {info.title}
              </Typography>
            </Box>
          ))}
        </Slide>
      </Box>
    </HeadContainer>
  );
}
