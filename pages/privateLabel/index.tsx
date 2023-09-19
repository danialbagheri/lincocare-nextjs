/* ----------------------------- MUI Components ----------------------------- */
import { Divider } from "@mui/material";
import { LincoNews } from "components/generalComponents";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import {
  CommunicatePart,
  Head,
  ProcessLevels,
} from "components/privateLabelPage";
import { GetStaticProps } from "next";
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
      <Head />

      <Container>
        <Divider
          sx={{
            bgcolor: "lincoBlue.main",
            display: { xs: "none", md: "block" },
          }}
        />
      </Container>

      <ProcessLevels faq={faq.results} />

      <CommunicatePart />

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

    return { props: { faq: faq.results } };
  } catch {
    return { props: { error: "Something went wrong in loading faq!" } };
  }
};
