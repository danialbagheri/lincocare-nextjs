/* ----------------------------- MUI Components ----------------------------- */
import { Divider } from "@mui/material";
import { LincoNews } from "components/generalComponents";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import {
  Head as PrivateLabelHeader,
  ProcessLevels,
} from "components/privateLabelPage";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getFaq } from "services";
import { FaqTypes } from "services/lincoServicesTypes";
import { Container } from "shared";
/* -------------------------------------------------------------------------- */

interface PropsTypes {
  faq: FaqTypes;
}

function PrivateLabel(props: PropsTypes) {
  const { faq } = props;

  return (
    <>
      <Head>
        <meta property="og:title" content="Linco Care Private Label" />
        <title>Linco Care Private Label</title>
      </Head>
      <PrivateLabelHeader />

      <ProcessLevels faq={faq} />

      {/* <CommunicatePart /> */}

      <Container fullWidth>
        <Divider
          sx={{
            bgcolor: "gray.light",
            mb: 16,
          }}
        />
      </Container>

      <LincoNews />
    </>
  );
}

export default PrivateLabel;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const faq = await getFaq();

    return { props: { faq } };
  } catch {
    return { props: { error: "Something went wrong in loading faq!" } };
  }
};
