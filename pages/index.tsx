import {
  HomePageAboutLinco,
  HomePageBrands,
  HomePageHead,
  HomePageRetailers,
  PrivateLabel,
} from "components";

import { Container } from "shared";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <HomePageHead />
      <PrivateLabel />

      <Container>
        <Divider sx={{ my: 25, display: { xs: "none", md: "block" } }} />
      </Container>

      <HomePageBrands />
      <HomePageRetailers />
      <HomePageAboutLinco />
    </>
  );
}
