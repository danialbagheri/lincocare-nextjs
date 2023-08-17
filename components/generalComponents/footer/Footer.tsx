import { Box, Stack, Typography } from "@mui/material";
import { Contact, FooterAccreditations, SiteMap } from "./components";

import { Container } from "shared";
import { SocialMedia } from "../socialMedia";

function Footer() {
  return (
    <Box bgcolor={"lincoBlue.dark"}>
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
        <SocialMedia />
        <Typography
          variant="body2"
          color={"#5A7EA8"}
          sx={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translate(-50%,0)",
          }}
        >
          ©2023 Linco Care Ltd. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
