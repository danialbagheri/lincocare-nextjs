import * as React from "react";

import { Box, useTheme } from "@mui/system";

import { AboutLincoDescription } from "./aboutLincoDescription";
import { AboutLincoStatistics } from "./aboutLincoStatistics";
import { AboutLincoValues } from "./aboutLincoValues";
import { Container } from "shared";
import { Divider } from "@mui/material";

function HomePageAboutLinco() {
  const [valuesComponentHeight, setValuesComponentHeight] = React.useState<
    number | undefined
  >(0);
  const theme = useTheme();
  return (
    <>
      <Box
        py={{ xs: 19, md: 25 }}
        mt={{ xs: 16, md: 30 }}
        sx={{ position: "relative", bgcolor: theme.palette.lincoBlue.main }}
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

export default HomePageAboutLinco;
