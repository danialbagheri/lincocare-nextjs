import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, SxProps, Typography, useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { BlogRes } from "services/lincoServicesTypes";
import { NewsItem } from "./components";
/* -------------------------------------------------------------------------- */

interface PropTypes {
  sx?: SxProps;
  news: BlogRes[];
}

export function NewsSection(props: PropTypes) {
  const { sx } = props;
  const [news, setNews] = React.useState(props.news);
  const [loading, setLoading] = React.useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ ...sx }}>
      <Typography
        sx={{
          typography: { xs: "h4", md: "h2" },
          mb: { xs: 7, md: 9 },
          display: { xs: "none", md: "block" },
        }}
      >
        News
      </Typography>
      <Stack
        sx={{
          "&>div:first-child": {
            flexDirection: "column",
            gap: 7,
            "&>div": { width: "100%" },
          },
        }}
        gap={{ xs: 10, md: 14 }}
      >
        {news.map((n) => (
          <NewsItem key={n.id} data={n} />
        ))}
      </Stack>
      <Box pt={{ xs: 15, md: 30 }} pb={{ xs: 15, md: 50 }} textAlign="center">
        <LoadingButton
          loading={loading}
          sx={{
            textTransform: "unset",
            color: "#000",
            borderBottom: "3px solid " + theme.palette.lincoBlue.main,
            borderRadius: 0,
            px: 7,
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          Load more
        </LoadingButton>
      </Box>
    </Box>
  );
}
