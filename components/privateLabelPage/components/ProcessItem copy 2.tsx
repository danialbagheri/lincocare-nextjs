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
  const { index, imgSrc, title, description, link, data } = props;
  // const { top } = itemsScrollSpecs;
  const theme = useTheme();
  const [doScroll, setDoScroll] = useState(true);
  const detailsEle = useRef<HTMLInputElement>(null);

  const windowScrollHandler = () => {};

  const renderTopLevel = () => {
    // const defaultTopLevel = top + 504;
    // if (index === 0) {
    //   return defaultTopLevel;
    // } else if (index === 1) {
    //   return defaultTopLevel + 737;
    // } else {
    //   return defaultTopLevel + 737 + (index - 1) * 877;
    // }
  };

  return (
    <Container
      pt={"68px"}
      sx={{ width: { xs: "100%", md: "min(1120px,80%)" } }}
    >
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          left: 0,
          right: 0,
        }}
      >
        <>
          {index !== 0 ? (
            <Box
              sx={{
                height: 140,
                width: "100%",
                bgcolor: "#FFF",
              }}
            />
          ) : null}

          <Box
            sx={{
              height: 737,
              width: "100%",
              bgcolor: theme.palette.lincoBlue.dark,
              position: "relative",
            }}
          >
            <Image
              src={imgSrc}
              alt="Product Formulation"
              fill
              style={{
                objectFit: "cover",
                opacity: "0.5",
              }}
              sizes={"100vw"}
              loading={"lazy"}
            />
          </Box>
        </>
        {/* ) : (
          <Box sx={{ height: 877, width: "100%", bgcolor: "#FFF" }} />
        )} */}
      </Box>

      <Box
        // bgcolor="red"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          gap: 80,
          mt: !index ? "600px" : 0,
        }}
      >
        <Box width="50%" mb={{ xs: 15, md: 100 }} ref={detailsEle}>
          {data.map((d, i) => (
            <Box key={d.title + i}>
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
        <Box width="50%"></Box>
      </Box>
    </Container>
  );
}
