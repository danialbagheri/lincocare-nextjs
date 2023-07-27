/* ----------------------------- MUI Components ----------------------------- */
import { Divider } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Head, ProcessLevels } from "components/privateLabelPage";
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
    </>
  );
}

export default PrivateLabel;
