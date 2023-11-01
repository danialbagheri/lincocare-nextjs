import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, useTheme } from "@mui/system";
import { Divider } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Container } from "shared";
import {
  AboutLincoDescription,
  AboutLincoStatistics,
  AboutLincoValues,
} from "./components";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export function AboutLinco() {
  const [valuesComponentHeight, setValuesComponentHeight] = React.useState<
    number | undefined
  >(0);
  const theme = useTheme();
  return (
    <>
      <Box
        py={{ xs: 19, md: 25 }}
        mt={{ xs: 16, md: 30 }}
        sx={{ position: "relative", bgcolor: theme.palette.lincoBlue.dark }}
      >
        <Container>
          <AboutLincoDescription />
          <AboutLincoStatistics />

          <Divider
            sx={{
              mb: { xs: 9, sm: 20, md: 28 },
              mt: { xs: 23, sm: 8 },
              borderColor: "#D2E7FF",
            }}
          />

          <AboutLincoValues setEleHeight={setValuesComponentHeight} />
        </Container>
      </Box>
      <Box sx={{ height: valuesComponentHeight + "px" }} />
    </>
  );
}
