import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Divider } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { SingleNewsSection, SocialMediaSection } from "components/newsPage";
import { LincoDivider } from "shared";
/* -------------------------------------------------------------------------- */

export default function NewsItem() {
  return (
    <>
      <Box
        pt={{ xs: 27, md: 63 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",

          width: "100%",
        }}
      >
        <SingleNewsSection />
        <Divider
          orientation="vertical"
          sx={{ height: "unset", display: { xs: "none", md: "block" } }}
        />
        <LincoDivider conSx={{ display: { xs: "block", md: "none" } }} />
        <SocialMediaSection
          sx={{ flexGrow: 1, maxWidth: "min(30%,500px)", minWidth: "350px" }}
        />
      </Box>
    </>
  );
}
