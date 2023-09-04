import {
  AboutLinco,
  Achievements,
  GlobalMarket,
  Head,
  HeadOffice,
  Retailers,
} from "components/aboutUsPage";
import {
  Accreditations,
  Brands,
  LincoNews,
} from "components/generalComponents";
import { LincoDivider } from "shared";

function AboutUs() {
  return (
    <>
      <Head />
      <AboutLinco />

      <LincoDivider sx={{ display: { xs: "none", md: "block" } }} />
      <HeadOffice />
      <GlobalMarket />
      <Achievements />
      <Retailers />

      <LincoDivider sx={{ mt: { xs: 17, md: 19 } }} />
      <Accreditations sx={{ pt: 25 }} />

      <LincoDivider sx={{ mt: { xs: 17, md: 19 } }} />
      <Brands />

      <LincoDivider sx={{ mb: 19 }} />
      <LincoNews />
    </>
  );
}

export default AboutUs;
