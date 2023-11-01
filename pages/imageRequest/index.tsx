import { Typography } from "@mui/material";
import { RequestForm } from "components/imageRequestForm";
import { Container } from "shared";

export default function ImageRequest() {
  return (
    <Container sx={{ mt: 50 }}>
      <Typography variant="h3">Product image request form</Typography>
      <RequestForm />
    </Container>
  );
}
