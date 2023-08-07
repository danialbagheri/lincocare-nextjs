import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Divider, Stack, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { ProcessItemTypes } from "./types";
import { NumberElement } from "./ NumberElement";
import LinkElement from "./LinkElement";
import { theme } from "theme";

/* -------------------------------------------------------------------------- */

export function ProcessLevelItem(props: ProcessItemTypes) {
  const { number, imgSrc, title, description, link } = props;
  const [data, setData] = React.useState([...props.data]);
  const [hover, setHover] = React.useState(false);
  const element = React.useRef<HTMLInputElement>();
  const descriptionElement = React.useRef<HTMLInputElement>();

  const eleDetails = React.useRef({ height: 0 });

  //To Do : Make scroll Handler and Refactor

  const scrollHandler = () => {
    if (element.current) {
      if (hover) {
      } else {
        const topPos = element.current.getBoundingClientRect().top;
        if (topPos < 400 && topPos > -100) {
          setHover(true);
        } else if (topPos < -100 || topPos > 1000) {
          setHover(false);
        }
      }
    }
  };

  const desEleScrollHandler = (e: any) => {
    console.log("E::::", e.target.lastChild.childNodes[0].offsetTop);
  };

  React.useEffect(() => {
    if (window) {
      window.addEventListener("scroll", scrollHandler);
    }

    if (descriptionElement.current) {
      descriptionElement.current?.addEventListener(
        "scroll",
        desEleScrollHandler
      );
    }
  }, [hover]);

  return (
    <Box
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        position: "relative",

        height: {
          ...(hover
            ? { xs: 830, md: 500, lg: 600, xl: 740 }
            : { xs: "unset", md: 300, lg: 360, xl: 463 }),
        },

        width: { xs: "100%", md: hover ? "100%" : "min(90%,1200px)" },
        bgcolor: {
          ...(hover
            ? { xs: theme.palette.lincoBlue.dark }
            : {
                xs: "#FFFFFF",
                md: "unset",
              }),
        },
        zIndex: 5,
        margin: "0 auto",
        mt: { xs: 20, md: hover ? 16 : 0 },
        pt: { xs: 23, md: 0 },
        pb: { xs: 20, md: hover ? 35 : 0 },
        transition: "1000ms ease-out all",
        overflow: "hidden",
      }}
      ref={element}
    >
      {hover ? (
        <>
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
        </>
      ) : null}
      <NumberElement
        hover={hover}
        number={number}
        sx={{ display: { xs: "flex", md: "none" }, top: hover ? 65 : 50 }}
      />
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: "unset", md: "50%" },
          pt: { xs: 0, md: hover ? 0 : 17 },
          pr: { xs: 5, md: 17 },
          mt: 0,
          mx: { xs: -9, md: 0 },
          height: { xs: 400, md: "100%" },
        }}
      >
        <Box
          sx={{
            p: 12,
            overflow: "scroll",
            display: hover ? "flex" : "none",
            maxHeight: "100%",

            justifyContent: { xs: "center", md: "space-between" },
          }}
          color="#FFFFFF"
          ref={descriptionElement}
        >
          {/*  --------------------------------- Bullets --------------------------------  */}
          <Stack
            sx={{
              position: "sticky",
              top: 0,
              mr: 7,
              display: "flex",
              direction: "column",
              alignItems: "center",
            }}
            gap={4}
          >
            {data.map((d, i) => (
              <Box
                key={i}
                sx={{
                  width: { xs: d.active ? 16 : 10, md: 16 },
                  height: { xs: d.active ? 16 : 10, md: 16 },
                  bgcolor: d.active
                    ? theme.palette.lincoYellow.main
                    : { xs: "#FFF", md: "#3F5B7C" },
                  borderRadius: "50%",
                }}
              />
            ))}
          </Stack>
          {/*  --------------------------------------------------------------------------  */}

          {/*  ---------------------------- Details of label ----------------------------  */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              gap: { xs: 10, md: 30 },
            }}
            zIndex={1}
            ref={(e: HTMLInputElement) => {
              if (e?.clientHeight) {
                eleDetails.current.height = e.clientHeight;
              }
            }}
          >
            {data.map((d, i) => (
              <Stack
                key={i}
                ref={(e) => {
                  if (e?.offsetTop && eleDetails.current.height) {
                    if (
                      e.offsetTop > 0 &&
                      e.offsetTop < eleDetails.current.height / 2
                    ) {
                      const newData = [...data];
                      newData.forEach((data, index) => {
                        if (index === i) {
                          newData[index].active = true;
                        } else newData[index].active = false;
                      });
                    }
                  }
                }}
              >
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
                <Divider
                  sx={{ borderColor: "#FFF", mt: 16 }}
                  variant="middle"
                />
              </Stack>
            ))}
          </Box>
        </Box>
        {/*  --------------------------------------------------------------------------  */}
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

          pt: { xs: 0, md: hover ? 14 : 17 },
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
        <Typography
          variant={hover ? "h1" : "h4"}
          color={hover ? "#FFFFFF" : "lincoBlue.main"}
          textAlign={{
            xs: hover ? "center" : "left",
            md: "left",
          }}
        >
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
