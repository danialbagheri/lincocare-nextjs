import { ConditionPages } from "components/conditionPages";
import { LincoNews } from "components/generalComponents";
import Head from "next/head";
import { LincoDivider } from "shared";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Linco Care Privacy and Policy" />
        <title>Linco Care Privacy and Policy</title>
      </Head>
      <ConditionPages title="Privacy Policy" pageType={"privacyPolicy"} />
      <LincoDivider sx={{ my: { xs: 20, md: 30 } }} />
      <LincoNews />
    </>
  );
}
