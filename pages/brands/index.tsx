import { Divider } from "@mui/material";
import { BrandsHead, LincoBrands } from "components/brandsPage";
import { Accreditations } from "components/generalComponents";
import { Container } from "shared";

function Brands() {
  return (
    <>
      <BrandsHead />

      <LincoBrands />

      <Container fullWidth>
        <Divider sx={{ mt: 17, mb: { xs: 16, md: 17 } }} />
      </Container>

      <Accreditations />
    </>
  );
}

export default Brands;
