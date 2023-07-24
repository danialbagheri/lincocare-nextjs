import { Box, Stack } from "@mui/material";
import {
  Contact,
  FooterAccreditations,
  FooterSocialMedia,
  SiteMap,
} from "./components";

import { Container } from "shared";

function Footer() {
  return (
    <Box bgcolor={"lincoBlue.main"}>
      <Container sx={{ py: 25, position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 12, md: 31 }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Contact />
          <SiteMap />
        </Stack>
        <FooterAccreditations />
        <FooterSocialMedia />
      </Container>
    </Box>
  );
}

export default Footer;
