import * as React from "react";

/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
import { useRouter } from "next/router";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { getSingleBlog } from "services";
import { BlogRes } from "services/lincoServicesTypes";
import { manipulateDate } from "utils";
import { Container, CustomLink } from "shared";
import HTMLReactParser from "html-react-parser";
import { MoreFromLinco } from "./components";
/* -------------------------------------------------------------------------- */

interface NewsDataTypes extends BlogRes {
  properDate: {
    year: string;
    month: string;
    day: string;
  };
}

export function SingleNewsSection() {
  const slug = useRouter().query.slug;
  const theme = useTheme();

  const [newsData, setNewsData] = React.useState<NewsDataTypes | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (slug && typeof slug !== "object") {
      setLoading(true);
      getSingleBlog(slug)
        .then((res) => {
          const properDate = manipulateDate(res.publish_date);
          setNewsData({ ...res, properDate });
          setLoading(false);
        })
        .catch((err) => {
          setError(err || "Something went wrong!");
          setLoading(false);
        });
    }
  }, [slug]);

  if (error) {
    return (
      <Box p={8} width="100%">
        <Typography variant="h5" color="lincoBlue.main" textAlign="center">
          {error}
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box sx={{ width: "100%", maxWidth: "960px" }}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "rgba(0, 0, 0, 0.11)",
            pt: "40%",
            ...(loading
              ? {
                  WebkitAnimation:
                    "animation-c7515d 1.5s ease-in-out 0.5s infinite",
                  animation: "animation-c7515d 1.5s ease-in-out 0.5s infinite",
                }
              : { pt: "40%" }),
          }}
        >
          {loading ? (
            <></>
          ) : (
            <Image
              fill
              alt={newsData?.image_alt_text || ""}
              style={{ objectFit: "cover" }}
              src={newsData?.image || ""}
              sizes={"100vw"}
            />
          )}
        </Box>
        <Container>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: "1rem", mt: 8, width: "30%" }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: "5rem", my: 4, width: "80%" }}
              />
              <Skeleton variant="text" sx={{ fontSize: "1rem", mb: 2 }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem", mb: 2 }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem", mb: 2 }} />
            </>
          ) : (
            <>
              <Typography color="lincoBlue.main" mt={8}>
                {`${newsData?.properDate.day} ${newsData?.properDate.month}, ${newsData?.properDate.year}`}
              </Typography>
              <Typography
                sx={{
                  typography: { xs: "h4", md: "h2" },
                  mt: { xs: 4, md: 6 },
                }}
              >
                {newsData?.title}
              </Typography>
              <div>{HTMLReactParser(newsData?.body || "")}</div>
            </>
          )}

          <MoreFromLinco />

          <Box
            textAlign="center"
            mt={{ xs: 14, md: 19 }}
            mb={{ xs: 22, md: 25 }}
          >
            <CustomLink
              href="/news"
              color="#000"
              borderColor={{ xs: theme.palette.lincoBlue.main }}
            >
              All Linco news
            </CustomLink>
          </Box>
        </Container>
      </Box>
    );
  }
}
