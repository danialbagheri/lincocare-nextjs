import * as React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { Container } from "shared";
import { NewsDetail } from "./newsDetail";
import { getListOfAllBlogs } from "services";
import { BlogRes, ListOfAllBlogsRes } from "services/lincoServicesTypes";

function LincoNews(data: any) {
  const scrollElement = React.useRef<HTMLHeadingElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [news, setNews] = React.useState<BlogRes[]>([]);

  React.useEffect(() => {
    setLoading(true);
    getListOfAllBlogs({ count: "3" }).then((res: ListOfAllBlogsRes) => {
      setNews(res.results);
    });
  }, []);

  return (
    <Container sx={{ mb: { xs: 18, md: 32 } }}>
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" }, mb: { xs: 10, md: 13 } }}
        textAlign={"center"}
      >
        Linco news
      </Typography>
      <Box>
        <Stack
          sx={{ py: 4 }}
          direction={"row"}
          gap={{ xs: 8, md: 11 }}
          ref={scrollElement}
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          {news.map((n) => (
            <NewsDetail key={n.id} newsData={n} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default LincoNews;
