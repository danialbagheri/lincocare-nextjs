import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, SxProps, Typography, useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { BlogRes, ListOfAllBlogsRes } from "services/lincoServicesTypes";
import { NewsItem } from "./components";
import { getListOfAllBlogs } from "services";
/* -------------------------------------------------------------------------- */

interface PropTypes {
  sx?: SxProps;
  news: BlogRes[];
  count: number | string;
}

const LoadErrorComponent = (props: { err: string | null }) => (
  <Typography variant="h4" textAlign="center" p={5}>
    {props.err || "Something went wrong with loading more news!"}
  </Typography>
);

export function NewsSection(props: PropTypes) {
  const { sx, count } = props;
  const [news, setNews] = React.useState(props.news);
  const [loading, setLoading] = React.useState(false);
  const [btnDisable, setBtnDisable] = React.useState(false);
  const [loadMoreNewsError, setLoadMoreNewsError] = React.useState("");
  const page = React.useRef(1);
  const theme = useTheme();

  const loadMoreHandler = () => {
    const maxPage = Math.ceil(+count / 10);

    if (maxPage <= page.current) {
      setBtnDisable(true);
    } else {
      page.current = ++page.current;
      setLoading(true);
      getListOfAllBlogs({ page: page.current.toString() })
        .then((res: ListOfAllBlogsRes) => {
          if (res.results.length) {
            const newsArr = [...news, ...res.results];
            setNews(newsArr);
            if (+maxPage === +page.current) {
              setBtnDisable(true);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoadMoreNewsError(err);
          setLoading(false);
        });
    }
  };

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
        {news?.map((n) => (
          <NewsItem key={n.id} data={n} />
        ))}
      </Stack>
      <Box pt={{ xs: 15, md: 30 }} pb={{ xs: 15, md: 50 }} textAlign="center">
        {loadMoreNewsError ? (
          <LoadErrorComponent err={loadMoreNewsError} />
        ) : (
          <LoadingButton
            loading={loading}
            sx={{
              textTransform: "unset",
              color: "#000",
              borderBottom: "3px solid ",
              borderColor: btnDisable
                ? "rgba(0, 0, 0, 0.26)"
                : theme.palette.lincoBlue.main,
              borderRadius: 0,
              px: 7,
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
            disabled={btnDisable}
            onClick={loadMoreHandler}
          >
            Load more
          </LoadingButton>
        )}
      </Box>
    </Box>
  );
}
