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

  const dataRef = useRef<HTMLInputElement>();

  return (
    <Box
      className="centralize"
      sx={{
        transition: "1s all",
        height: 600,
        width: shiftUI ? "min(1100px,80%)" : "100%",
        bgcolor: shiftUI ? "transparent" : theme.palette.lincoBlue.dark,
        position: "relative",
        overflow: "hidden",
        py: "150px",
        gap: "140px",
      }}
    >
      {!shiftUI ? (
        <>
          <Box
            sx={{
              width: "1px",
              height: 137,
              position: "absolute",
              top: 0,
              left: "50%",
              bgcolor: "#FFF",
            }}
          />
          <NumberElement number={index + 1} sx={{ top: 171 }} />
          <Box
            sx={{
              width: "1px",
              height: 137,
              position: "absolute",
              top: 206,
              left: "50%",
              bgcolor: "#FFF",
            }}
          />
        </>
      ) : null}
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
            right: 0,
            display: shiftUI ? "none" : "block",
          }}
          style={{ top: -top }}
          ref={dataRef}
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
        <Typography
          variant="h1"
          color={shiftUI ? theme.palette.lincoBlue.main : "#FFF"}
          sx={{
            ...(!shiftUI
              ? {
                  position: "absolute",
                  top: 137,
                  maxWidth: 480,
                }
              : {}),
          }}
        >
          {title}
        </Typography>
        <Typography mt={4} sx={{ display: shiftUI ? "flex" : "none" }}>
          {description}
        </Typography>
        <LinkElement href={link} sx={{ display: shiftUI ? "flex" : "none" }} />
        <NumberElement
          number={index + 1}
          sx={{
            display: shiftUI ? "flex" : "none",
            color: theme.palette.lincoBlue.main,
            bgcolor: "#FFF",
            borderColor: theme.palette.lincoBlue.main,
          }}
        />
      </Box>
    </Box>
  );
}
