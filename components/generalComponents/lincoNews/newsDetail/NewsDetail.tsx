import { Box, Stack, Typography, useTheme } from "@mui/material";

import { CustomLink } from "shared";
import Image from "next/image";
import { BlogRes } from "services/lincoServicesTypes";
import { manipulateDate } from "utils";
import { useRouter } from "next/router";

function NewsDetail(props: { newsData: BlogRes }) {
  const { newsData } = props;
  const theme = useTheme();
  const router = useRouter();

  const properDate = newsData.publish_date
    ? manipulateDate(newsData.publish_date)
    : { day: "", month: "", year: "" };

  return (
    <Stack
      sx={{
        width: "100%",
        cursor: "pointer",
        maxWidth: 300,
      }}
      gap={{ xs: 4, md: 5 }}
      onClick={() => router.push(`/news/${newsData.slug}`)}
    >
      <Box sx={{ position: "relative", width: "100%", pt: "72%" }}>
        <Image
          src={newsData.image || ""}
          fill
          style={{ objectFit: "cover" }}
          alt={newsData.image_alt_text}
        />
      </Box>
      <Box height={70}>
        <Typography
          sx={{
            typography: { xs: "h6", md: "h5" },
            fontWeight: { xs: 700, md: 500 },
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            whiteSpace: "pre-wrap",
          }}
        >
          {newsData.title}
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",

          justifyContent: "space-between",
        }}
      >
        <Typography
          color={"lincoBlue.main"}
        >{`${properDate.day} ${properDate.month}, ${properDate.year}`}</Typography>
        <Box sx={{ height: 67, mt: 2 }}>
          <Typography
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3",
              whiteSpace: "pre-wrap",
            }}
          >
            {newsData?.plain_excerpt}
          </Typography>
        </Box>
        <CustomLink
          color={"#000"}
          href={`/news/${newsData.slug}`}
          borderColor={{ xs: theme.palette.lincoBlue.main }}
        >
          Read more
        </CustomLink>
      </Box>
    </Stack>
  );
}

export default NewsDetail;
