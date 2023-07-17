import { Box, Divider } from "@mui/material";

import { HomePageBrands, HomePageHead, PrivateLabel } from "components";
import { Container } from "shared";

export default function Home() {
  return (
    <>
      <HomePageHead />
      <PrivateLabel />

      <Container>
        <Divider sx={{ my: 25, display: { xs: "none", md: "block" } }} />
      </Container>

      <HomePageBrands />
    </>
  );
}
