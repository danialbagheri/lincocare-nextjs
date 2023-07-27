import { Typography } from "@mui/material";
import { Container } from "shared";

export function ProcessLevels() {
  return (
    <Container>
      <Typography
        py={{ xs: 9, md: 22 }}
        textAlign="center"
        sx={{ typography: { xs: "h3", md: "h5" } }}
      >
        We are expert in “Private Label”
      </Typography>
    </Container>
  );
}
