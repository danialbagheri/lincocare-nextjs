import { LincoNews } from "components/generalComponents";
import {
  Head as SustainabilityHeader,
  Body,
} from "components/sustainabilityPage";
import Head from "next/head";
import { LincoDivider } from "shared";

export default function Sustainability() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Linco Care Sustainability" />
        <title>Linco Care Sustainability</title>
      </Head>
      <SustainabilityHeader />
      <Body />

      <LincoDivider fullWidth={true} sx={{ mb: { xs: 16, md: 34 } }} />
      <LincoNews />
    </>
  );
}
