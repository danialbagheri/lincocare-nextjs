import { Box, Stack, Typography, useTheme } from "@mui/material";

import { CustomLink } from "shared";
import Image from "next/image";

interface NewsDetailTypes {
  image: string;
  title: string;
  description: string;
  date: string;
}

function NewsDetail(props: NewsDetailTypes) {
  const theme = useTheme();

  return (
    <Stack
      sx={{ width: { xs: 193, md: 300 }, minWidth: { xs: 193, md: 300 } }}
      gap={{ xs: 4, md: 5 }}
    >
      <Box sx={{ position: "relative", width: "100%", pb: "100%" }}>
        <Image
          src={props.image}
          fill
          style={{ objectFit: "contain" }}
          alt={props.title}
        />
      </Box>
      <Typography
        sx={{
          typography: { xs: "h6", md: "h3" },
          fontWeight: { xs: 700, md: 500 },
        }}
      >
        {props.title}
      </Typography>
      <Box sx={{ overflow: "hidden", display: { xs: "none", md: "block" } }}>
        <Typography color={"#A4A4A4"}>{props.date}</Typography>
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
          {props.description}
        </Typography>
        <CustomLink
          color={"#000"}
          href=""
          borderColor={theme.palette.lincoBlue.main}
        >
          Read more
        </CustomLink>
      </Box>
    </Stack>
  );
}

export default NewsDetail;
