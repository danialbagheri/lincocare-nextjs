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
import { Container } from "shared";
/* -------------------------------------------------------------------------- */

function PrivateLabel() {
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

      <ProcessLevels />

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
