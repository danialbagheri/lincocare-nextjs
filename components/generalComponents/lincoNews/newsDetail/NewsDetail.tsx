import { Box, Stack, Typography, useTheme } from "@mui/material";

import { CustomLink } from "shared";
import Image from "next/image";
import { BlogRes } from "services/lincoServicesTypes";
import HTMLReactParser from "html-react-parser";
import { manipulateDate } from "utils";

function NewsDetail(props: { newsData: BlogRes }) {
  const { newsData } = props;
  const theme = useTheme();
  const properDate = manipulateDate(newsData.publish_date);

  return (
    <Stack
      sx={{ width: { xs: 193, md: 300 }, minWidth: { xs: 193, md: 300 } }}
      gap={{ xs: 4, md: 5 }}
    >
      <Box sx={{ position: "relative", width: "100%", pb: "100%" }}>
        <Image
          src={newsData.image || ""}
          fill
          style={{ objectFit: "contain" }}
          alt={newsData.image_alt_text}
        />
      </Box>
      <Typography
        sx={{
          typography: { xs: "h6", md: "h3" },
          fontWeight: { xs: 700, md: 500 },
        }}
      >
        {newsData.title}
      </Typography>
      <Box
        sx={{
          overflow: "hidden",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <Typography
          color={"#A4A4A4"}
        >{`${properDate.day} ${properDate.month}, ${properDate.year}`}</Typography>
        <Box>
          <Typography
            color={"lincoBlue.main"}
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              " -webkit-box-orient": "vertical",
              "-webkit-line-clamp": "3",
              whiteSpace: "pre-wrap",
            }}
          >
            {HTMLReactParser(newsData?.body || "")}
          </Typography>
          <CustomLink
            color={"#000"}
            href=""
            borderColor={theme.palette.lincoBlue.main}
          >
            Read more
          </CustomLink>
        </Box>
      </Box>
    </Stack>
  );
}

export default NewsDetail;
