import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, SxProps, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { ProcessItemTypes } from "./types";
import { NumberElement } from "./ NumberElement";
import LinkElement from "./LinkElement";
import { Container } from "shared";
/* -------------------------------------------------------------------------- */

export function ProcessLevelItem(props: ProcessItemTypes) {
  const { number, imgSrc, title, description, link } = props;
  const [hover, setHover] = React.useState(false);
  const element = React.useRef<HTMLInputElement>();

  const scrollHandler = () => {
    if (element.current) {
      const topPos = element.current.getBoundingClientRect().top;
      if (topPos < 400 && topPos > -100) {
        setHover(true);
      } else if (topPos < -100 || topPos > 1000) {
        setHover(false);
      }
      if (number === 1) console.log(topPos);
    }
  };

  React.useEffect(() => {
    if (window) {
      window.addEventListener("scroll", scrollHandler);
    }
  }, []);
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        position: "relative",
        height: { md: 300, lg: 360, xl: 463 },
        width: { xs: "100%", md: "min(90%,1200px)" },
        bgcolor: { xs: "#FFFFFF", md: "unset" },
        zIndex: 5,
        margin: "0 auto",
        mt: { xs: 25, md: hover ? 16 : 0 },
        pt: { xs: 11, md: 0 },
        pb: { xs: 11, md: 0 },
        ...(hover ? { height: { xs: 500, lg: 600, xl: 740 } } : {}),
        transition: "600ms all",
      }}
      ref={element}
    >
      {hover ? (
        <Image
          src={imgSrc}
          alt="Product Formulation"
          fill
          style={{
            objectFit: "cover",
            filter: hover ? " brightness(0.7)" : "unset",
          }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      ) : null}
      <NumberElement
        hover={hover}
        number={number}
        sx={{ display: { xs: "flex", md: "none" } }}
      />
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: "unset", md: "50%" },
          pt: { xs: 0, md: 17 },
          pr: { xs: 0, md: 17 },
          mt: { xs: "20px", md: 0 },
          mx: { xs: -9, md: "unset" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            pt: { xs: "50%", md: 0 },
            ...(hover ? { display: "none" } : {}),
          }}
          position="relative"
          height="100%"
        >
          <Image
            src={imgSrc}
            alt="Product Formulation"
            fill
            style={{ objectFit: "cover" }}
            sizes={"100vw"}
            loading={"lazy"}
          />
        </Box>
        <LinkElement href={link} display={{ xs: "block", md: "none" }} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: "100%", md: "50%" },

          pt: { xs: 0, md: 17 },
          pl: { xs: 9, md: 17 },
          pr: { xs: 9, md: 0 },

          mt: { md: "60px", lg: "90px", xl: "140px" },

          position: "relative",
        }}
      >
        <NumberElement
          hover={hover}
          number={number}
          sx={{ display: { xs: "none", md: "flex" } }}
        />
        <Typography variant="h5" color={hover ? "#FFFFFF" : "lincoBlue.main"}>
          {title}
        </Typography>
        {!hover ? (
          <>
            <Typography mt={4}>{description}</Typography>
            <LinkElement href={link} display={{ xs: "none", md: "block" }} />
          </>
        ) : null}
      </Box>
    </Box>
  );
}
