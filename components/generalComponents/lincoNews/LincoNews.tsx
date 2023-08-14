import * as React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { Container } from "shared";
import { NewsDetail } from "./newsDetail";

const newsArr = [
  {
    id: 1101,
    image: "/images/brands/cabana.png",
    date: "July 11, 2023",
    title: "How Reliable Is Your Sanitiser?",
    description:
      "Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on",
  },
  {
    id: 1102,
    image: "/images/brands/calypso.png",
    date: "July 11, 2023",
    title: "How Reliable Is Your Sanitiser?",
    description:
      "Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on",
  },
  {
    id: 1103,
    image: "/images/brands/dimples.png",
    date: "July 11, 2023",
    title: "How Reliable Is Your Sanitiser?",
    description:
      "Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on",
  },
  {
    id: 1104,
    image: "/images/brands/cabana.png",
    date: "July 11, 2023",
    title: "How Reliable Is Your Sanitiser?",
    description:
      "Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on",
  },
  {
    id: 1105,
    image: "/images/brands/cabana.png",
    date: "July 11, 2023",
    title: "How Reliable Is Your Sanitiser?",
    description:
      "Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on",
  },
  {
    id: 1106,
    image: "/images/brands/cabana.png",
    date: "July 11, 2023",
    title: "How Reliable Is Your Sanitiser?",
    description:
      "Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on Calypso's sanitisers were featured in a Which article recently, which found that some sanitisers sold on",
  },
];

function LincoNews(data: any) {
  const scrollContainer = React.useRef<HTMLHeadingElement>(null);
  const scrollElement = React.useRef<HTMLHeadingElement>(null);
  const [boxShadow, setBoxShadow] = React.useState("unset");

  const scrollHandler = (
    eleWidth: number | undefined,
    containerWidth: number | undefined,
    eleScrollLeft: number | undefined
  ): void => {
    if (
      eleWidth !== undefined &&
      containerWidth !== undefined &&
      eleScrollLeft !== undefined
    ) {
      if (eleWidth <= containerWidth) {
        setBoxShadow("unset");
      } else if (eleScrollLeft === 0) {
        setBoxShadow("-100px 0 24px -70px rgba(0,0,0,0.2) inset");
      } else if (eleScrollLeft + containerWidth > eleWidth - 5) {
        setBoxShadow("100px 0 24px -70px rgba(0,0,0,0.2) inset");
      } else {
        setBoxShadow(
          "-100px 0 24px -70px rgba(0,0,0,0.2) inset,100px 0 24px -70px rgba(0,0,0,0.2) inset"
        );
      }
    }
  };

  React.useEffect(() => {}, []);

  React.useLayoutEffect(() => {
    scrollHandler(
      scrollElement.current?.scrollWidth,
      scrollContainer.current?.clientWidth,
      scrollElement.current?.scrollLeft
    );
  }, []);

  return (
    <Container sx={{ mb: { xs: 18, md: 32 } }}>
      <Typography
        sx={{ typography: { xs: "h4", md: "h4" }, mb: { xs: 10, md: 13 } }}
        textAlign={"center"}
      >
        Linco news
      </Typography>
      <Box
        sx={{
          boxShadow: boxShadow,
        }}
        ref={scrollContainer}
      >
        <Stack
          sx={{ overflow: "scroll", py: 4 }}
          direction={"row"}
          gap={{ xs: 8, md: 13 }}
          ref={scrollElement}
          onScroll={() =>
            scrollHandler(
              scrollElement.current?.scrollWidth,
              scrollContainer.current?.clientWidth,
              scrollElement.current?.scrollLeft
            )
          }
        >
          {newsArr.map((news) => (
            <NewsDetail
              key={news.id}
              image={news.image}
              title={news.title}
              description={news.description}
              date={news.date}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default LincoNews;
