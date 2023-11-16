import * as React from "react";

import { Box, Stack, Typography, useTheme } from "@mui/material";

import { Container, CustomLink } from "shared";
import { NewsDetail } from "./newsDetail";
import { getListOfAllBlogs, getSingleBlogCollectionBySlug } from "services";
import {
  BlogRes,
  ListOfAllBlogsRes,
  ListOfCollectionBlogBySlug,
} from "services/lincoServicesTypes";

interface PropsTypes {
  collectionSlug?: string;
  title?: string;
}

function LincoNews(props: PropsTypes) {
  const scrollElement = React.useRef<HTMLHeadingElement>(null);
  const { collectionSlug, title } = props;
  const [news, setNews] = React.useState<BlogRes[]>([]);
  const theme = useTheme();

  React.useEffect(() => {
    if (collectionSlug) {
      getSingleBlogCollectionBySlug(collectionSlug).then(
        (res: ListOfCollectionBlogBySlug) => {
          if (res.items.length) {
            const newsArr: BlogRes[] = [];

            res.items.forEach((item, i) => {
              if (i < 3) {
                newsArr.push(item.item);
              }
            });

            setNews(newsArr);
          } else {
            getListOfAllBlogs({ count: "3" }).then((res: ListOfAllBlogsRes) => {
              setNews(res.results);
            });
          }
        }
      );
    } else {
      getListOfAllBlogs({ count: "3" }).then((res: ListOfAllBlogsRes) => {
        setNews(res.results);
      });
    }
  }, [collectionSlug]);

  return (
    <Container sx={{ mb: { xs: 18, md: 32 } }}>
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" }, mb: { xs: 10, md: 13 } }}
        textAlign={"center"}
      >
        {title ?? "Skincare Spotlight"}
      </Typography>
      <Box>
        <Stack
          sx={{ py: 4 }}
          direction={"row"}
          gap={{ xs: 8, md: 11 }}
          ref={scrollElement}
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          justifyContent="center"
        >
          {news.map((n) => (
            <NewsDetail key={n.id} newsData={n} />
          ))}
        </Stack>
      </Box>
      <CustomLink
        color={"#000"}
        href={`/news`}
        borderColor={{ xs: theme.palette.lincoBlue.main }}
        sx={{ textAlign: "center" }}
        aSx={{ px: 5 }}
      >
        Discover more
      </CustomLink>
    </Container>
  );
}

export default LincoNews;
