import * as React from "react";

/* ---------------------------- NextJs Components --------------------------- */
import { GetStaticProps } from "next";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Divider, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { getListOfAllBlogs } from "services";
import { Container } from "shared";
import { ListOfAllBlogsRes } from "services/lincoServicesTypes";
import { NewsSection, SocialMediaSection } from "components/newsPage";
/* -------------------------------------------------------------------------- */

interface PropTypes {
  data: ListOfAllBlogsRes;
  error?: string;
}

export default function News(props: PropTypes) {
  const { error, data } = props;

  return (
    <Container
      sx={{
        pt: { xs: 27, md: 63 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
      fullWidth
    >
      {error ? (
        <Typography variant="h4" color="lincoBlue.main">
          {error}
        </Typography>
      ) : (
        <>
          <NewsSection
            news={data.results}
            sx={{ flexGrow: { xs: 1, md: 2 } }}
          />
          <Divider orientation="vertical" sx={{ height: "unset" }} />

          <SocialMediaSection sx={{ flexGrow: 1 }} />
        </>
      )}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await getListOfAllBlogs({ count: 10 });
    return { props: { data } };
  } catch {
    return { props: { error: "Something went wrong!" } };
  }
};
