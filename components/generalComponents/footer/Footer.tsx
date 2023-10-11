import * as React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Contact, FooterAccreditations, SiteMap } from "./components";

import { Container } from "shared";
import { SocialMedia } from "../socialMedia";
import { AppContext } from "components/appProvider";
import { getIcons } from "services";

function Footer() {
  const [appState, setAppState] = React.useContext(AppContext);

  React.useEffect(() => {
    if (!appState?.accreditations) {
      getIcons("accreditations").then((res) => {
        if (setAppState) {
          setAppState((prev: any) => ({ ...prev, accreditations: res }));
        }
      });
    }
  }, []);

  return (
    <Box bgcolor={"lincoBlue.dark"}>
      <Container sx={{ py: 25, position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 12, md: 20 }}
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
