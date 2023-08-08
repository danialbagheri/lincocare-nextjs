import {
  AboutLinco,
  Achievements,
  Brands,
  GlobalMarket,
  Head,
  HeadOffice,
} from "components/aboutUsPage";
import {
  Accreditations,
  LincoNews,
  Retailers,
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
      <Retailers sx={{ pt: 40 }} />

      <LincoDivider sx={{ mt: { xs: 17, md: 19 } }} />
      <Accreditations sx={{ pt: 25 }} />

      <LincoDivider sx={{ mt: { xs: 17, md: 19 } }} />
      <Brands />

      <LincoDivider sx={{ mt: { xs: 17, md: 19 }, mb: 19 }} />
      <LincoNews />
    </>
  );
}

export default AboutUs;
