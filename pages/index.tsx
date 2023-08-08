import { Container } from "shared";
import { Divider } from "@mui/material";
import {
  Accreditations,
  LincoNews,
  Retailers,
} from "components/generalComponents";
import {
  HomePageAboutLinco,
  HomePageBrands,
  HomePageHead,
  HomePagePrivateLabel,
} from "components/homePage";

export default function Home() {
  return (
    <>
      <HomePageHead />
      <HomePagePrivateLabel />

      <Container fullWidth>
        <Divider sx={{ my: 25, display: { xs: "none", md: "block" } }} />
      </Container>

      <HomePageBrands />
      <Retailers />
      <HomePageAboutLinco />

      <Container fullWidth>
        <Divider sx={{ mt: 0, mb: { xs: 19, md: 25 } }} />
      </Container>

      <Accreditations />

      <Container fullWidth>
        <Divider sx={{ mt: { xs: 17, md: 35 }, mb: { xs: 16, md: 17 } }} />
      </Container>

      <LincoNews />
    </>
  );
}
