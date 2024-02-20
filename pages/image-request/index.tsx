import { Typography } from "@mui/material";
import { RequestForm } from "components/imageRequestForm";
import { Container } from "shared";

export default function ImageRequest() {
  return (
    <Container sx={{ mt: 50 }}>
      <Typography variant="h3">Product image request form</Typography>
      <Typography variant="body1" sx={{ mt: 4 }}>
        Kindly use the form below to request product photos and detailed
        information. Upon submission of the form, anticipate receiving an email
        within 15 minutes. This email will contain a zip file containing product
        images, along with an Excel sheet containing comprehensive details such
        as descriptions, titles, barcodes, and more.
      </Typography>
      <RequestForm />
    </Container>
  );
}
