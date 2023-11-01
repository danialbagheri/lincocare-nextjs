import {
  AboutLinco,
  Achievements,
  GlobalMarket,
  Head as AboutUsHeader,
  HeadOffice,
  Retailers,
} from "components/aboutUsPage";
import {
  Accreditations,
  Brands,
  LincoNews,
} from "components/generalComponents";
import Head from "next/head";
import { LincoDivider } from "shared";

function AboutUs() {
  return (
    <>
      <Head>
        <meta property="og:title" content="About Linco Care" />
        <title>About Linco Care</title>
      </Head>
      <AboutUsHeader />
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
