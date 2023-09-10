/* ----------------------------- MUI Components ----------------------------- */
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "shared";
import { NumberElement } from "./ NumberElement";
import LinkElement from "./LinkElement";

/* ---------------------------- Local Components ---------------------------- */
import { ProcessItemTypes, SpecificsTypes } from "./types";
/* -------------------------------------------------------------------------- */

export function ProcessLevelItem(props: ProcessItemTypes) {
  const theme = useTheme();
  const {
    index,
    imgSrc,
    title,
    description,
    link,
    data,
    itemSpecs: { shiftUI, top, respectiveScroll },
  } = props;

  return (
    <Box
      className="centralize"
      sx={{
        transition: "1s",
        height: 600,
        width: shiftUI ? "min(1100px,80%)" : "100%",
        bgcolor: shiftUI ? "transparent" : theme.palette.lincoBlue.dark,
        position: "relative",
        overflow: "hidden",
        py: "150px",
        gap: "min(2% , 140px)",
      }}
    >
      <Image
        src={imgSrc}
        alt="Product Formulation"
        fill
        style={{
          objectFit: "cover",
          opacity: "0.5",
          display: shiftUI ? "none" : "block",
        }}
        sizes={"100vw"}
        loading={"lazy"}
      />

      <Box
        sx={{
          overflow: "hidden",
          width: "50%",
          zIndex: 1,
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          src={imgSrc}
          alt="Product Formulation"
          fill
          style={{
            objectFit: "cover",
            display: shiftUI ? "block" : "none",
          }}
          sizes={"100vw"}
          loading={"lazy"}
        />
        <Box
          sx={{
            width: 400,
            position: "absolute",
            right: "176px",
            display: shiftUI ? "none" : "block",
          }}
          style={{ top: -top }}
        >
          {data.map((d, i) => (
            <Box key={d.title + i} sx={{ overflow: "hidden" }} color="#FFF">
              <Box>
                <Typography display="inline-block" variant="largeTitle">
                  {d.title}
                </Typography>
                <Typography
                  display="inline-block"
                  ml={4}
                  variant="h4"
                  color="lincoYellow.main"
                >
                  {d.unit}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "38px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                {d.description}
              </Typography>
              <Divider sx={{ borderColor: "#FFF", mt: 16 }} variant="middle" />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ width: "50%", zIndex: 1 }}>
        <Typography variant="h1" color="#FFF">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
