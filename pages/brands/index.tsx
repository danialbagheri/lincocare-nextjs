import { Head, LincoBrands } from "components/brandsPage";
import { Accreditations } from "components/generalComponents";
import { LincoDivider } from "shared";

function Brands() {
  return (
    <>
      <Head />
      <LincoBrands />

      <LincoDivider fullWidth sx={{ mt: 17, mb: { xs: 16, md: 32 } }} />

      <Accreditations sx={{ xs: 16, mb: 46 }} />
    </>
  );
}

export default Brands;
