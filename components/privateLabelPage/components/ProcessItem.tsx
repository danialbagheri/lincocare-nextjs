/* ----------------------------- MUI Components ----------------------------- */
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "shared";
import { NumberElement } from "./ NumberElement";
import LinkElement from "./LinkElement";

/* ---------------------------- Local Components ---------------------------- */
import { ProcessItemTypes } from "./types";
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
    itemSpecs: { active, top },
  } = props;

  const dataRef = useRef<HTMLInputElement>();

  return (
    <Box
      className="centralize"
      sx={{
        transition: "1s all ease-out",
        height: 600,
        width: active ? { xs: "100%", md: "min(1100px,80%)" } : "100%",
        bgcolor: active
          ? { xs: "#FFF", md: "transparent" }
          : theme.palette.lincoBlue.dark,
        position: "relative",
        overflow: "hidden",
        pt: { xs: !active ? "170px" : "100px", md: "150px" },
        pb: { xs: 0, md: "150px" },
        gap: { xs: "16px", md: "140px" },
        flexDirection: { xs: active ? "column-reverse" : "column", md: "row" },
      }}
    >
      {!active ? (
        <>
          <Box
            sx={{
              width: "1px",
              height: 137,
              position: "absolute",
              top: 0,
              left: "50%",
              bgcolor: "#FFF",
              display: { xs: "none", md: "block" },
            }}
          />
          <NumberElement number={index + 1} sx={{ top: { xs: 60, md: 171 } }} />
          <Box
            sx={{
              width: "1px",
              height: 137,
              position: "absolute",
              top: 206,
              left: "50%",
              bgcolor: "#FFF",
              display: { xs: "none", md: "block" },
            }}
          />
        </>
      ) : null}
      <LinkElement
        href={link}
        sx={{ display: { xs: active ? "flex" : "none", md: "none" } }}
      />
      <Image
        src={imgSrc}
        alt={title}
        fill
        style={{
          objectFit: "cover",
          opacity: "0.5",
          display: active ? "none" : "block",
        }}
        sizes={"100vw"}
        loading={"lazy"}
      />

      <Box
        sx={{
          overflow: "hidden",
          width: { xs: "90%", md: "50%" },
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
            display: active ? "block" : "none",
          }}
          sizes={"100vw"}
          loading={"lazy"}
        />

        <Box
          sx={{
            width: { xs: "min(400px , 90%))", md: 400 },
            position: "absolute",
            right: { xs: "50%", md: 0 },
            transform: { xs: "translate(50%,0)", md: "unset" },
            display: active ? "none" : "block",
          }}
          style={{ top: -top }}
          ref={dataRef}
        >
          {data.map((d, i) => (
            <Box key={d.title + i} sx={{ overflow: "hidden" }} color="#FFF">
              <Box>
                <Typography
                  display="inline-block"
                  sx={{ typography: { xs: "h2", md: "largeTitle" } }}
                >
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

      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          zIndex: 1,
          ...(active
            ? {
                display: { xs: "flex", md: "unset" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }
            : {}),
        }}
      >
        <Typography
          color={active ? theme.palette.lincoBlue.main : "#FFF"}
          sx={{
            ...(!active
              ? {
                  typography: { xs: "h4", md: "h1" },
                  position: "absolute",
                  top: { xs: 110, md: 137 },
                  maxWidth: { xs: "100%", md: 480 },
                  left: { xs: "50%", md: "unset" },
                  transform: { xs: "translate(-50%)", md: "unset" },
                  width: "100%",
                }
              : {}),
          }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {title}
        </Typography>
        <Typography
          mt={4}
          sx={{ display: active ? "flex" : "none" }}
          textAlign={{ xs: active ? "center" : "left", md: "left" }}
        >
          {description}
        </Typography>
        <LinkElement
          href={link}
          sx={{ display: active ? { xs: "none", md: "flex" } : "none" }}
        />
        <NumberElement
          number={index + 1}
          sx={{
            display: active ? "flex" : "none",
            color: theme.palette.lincoBlue.main,
            bgcolor: "#FFF",
            borderColor: theme.palette.lincoBlue.main,
            top: !active ? "50%" : { xs: "36px", md: "50%" },
          }}
        />
      </Box>
    </Box>
  );
}
