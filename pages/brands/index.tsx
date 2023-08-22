import { Divider } from "@mui/material";
import { Head, LincoBrands } from "components/brandsPage";
import { Accreditations } from "components/generalComponents";
import { Container, LincoDivider } from "shared";

function Brands() {
  return (
    <>
      <Head />
      <LincoBrands />

      <LincoDivider fullWidth sx={{ mt: 17, mb: { xs: 16, md: 17 } }} />

      <Accreditations />
    </>
  );
}

export default Brands;
