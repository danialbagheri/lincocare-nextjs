import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import {
  Box,
  IconButton,
  // Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
/* -------------------------------------------------------------------------- */

/* ---------------------------- NextJs Component ---------------------------- */
// import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Installed library --------------------------- */
// import SwipeableViews from "react-swipeable-views";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import {
  // Container,
  HeadContainer,
} from "shared";
import { handleSwipeChange } from "utils";
import { ArrowButtonTypes } from "./types";
import { Slide } from "react-slideshow-image";
/* -------------------------------------------------------------------------- */

const PRIVATE_LABEL_INFO = [
  {
    id: "privateLabel_1",
    title: "360 degree services",
    imgSrc: "/images/privateLabelPage/head/privateLabel.png",
  },
  {
    id: "privateLabel_2",
    title: "From Idea to the market",
    imgSrc: "/images/privateLabelPage/head/privateLabel.png",
  },
  {
    id: "privateLabel_3",
    title: "Four Decades of Cosmetic Manufacturing Expertise",
    imgSrc: "/images/privateLabelPage/head/privateLabel.png",
  },
];

const PRIVATE_INFO_SIZE = PRIVATE_LABEL_INFO.length;

const ArrowButton = (props: ArrowButtonTypes) => {
  const { state, index, setIndex } = props;
  return (
    <IconButton
      sx={{
        position: "absolute",
        ...(state === -1
          ? { left: { xs: 10, md: -80 } }
          : { right: { xs: 10, md: -80 } }),
        top: { xs: "8%", md: "50%" },
        transform: "translate(0,-50%)",
        zIndex: 10,
      }}
      onClick={() =>
        handleSwipeChange({
          state,
          arraySize: PRIVATE_INFO_SIZE,
          index,
          setIndex,
        })
      }
    >
      {state === -1 ? (
        <ArrowBackIosNewIcon fontSize="large" />
      ) : (
        <ArrowForwardIosIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export function Head() {
  // const [index, setIndex] = React.useState(0);

  return (
    <HeadContainer
      // pt={{ xs: 36, md: 62 }}
      // pb={{ xs: 11, md: 26 }}
      sx={{
        // height: "unset",
        bgcolor: "#939eae",
      }}
    >
      <Box
        position="relative"
        sx={{
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
            src="/videos/private-label-banner-small.mp4"
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
      {/* <Container sx={{ position: "relative" }}>
        <ArrowButton index={index} setIndex={setIndex} state={1} />
        <ArrowButton index={index} setIndex={setIndex} state={-1} />

        <SwipeableViews axis={"x"} index={index}>
          {PRIVATE_LABEL_INFO.map((info) => (
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              key={info.id}
              alignItems="center"
              justifyContent="center"
              gap={{ xs: 19, md: 14 }}
            >
              <Box
                width={{ xs: "100%", md: "60%" }}
                position="relative"
                pt={{ xs: "50%", md: "30%" }}
              >
                <Image
                  src={info.imgSrc}
                  alt={info.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes={"100vw"}
                  loading={"lazy"}
                />
              </Box>
              <Box width={{ xs: "100%", md: "40%" }}>
                <Typography
                  color="lincoBlue.main"
                  sx={{ typography: { xs: "h3", md: "h4" } }}
                  mt={4}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  {info.title}
                </Typography>
              </Box>
            </Stack>
          ))}
        </SwipeableViews>
      </Container> */}
    </HeadContainer>
  );
}
