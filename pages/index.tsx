/* ---------------------------- Local Components ---------------------------- */
import { LincoDivider } from "shared";
import {
  Accreditations,
  LincoNews,
  Retailers,
} from "components/generalComponents";
import { AboutLinco, Brands, Head, PrivateLabel } from "components/homePage";
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Head />
      <PrivateLabel />

      <LincoDivider
        sx={{ my: 25, display: { xs: "none", md: "block" } }}
        fullWidth
      />

      <Brands />
      <Retailers />
      <AboutLinco />

      <LincoDivider sx={{ mt: 0, mb: { xs: 19, md: 25 } }} fullWidth />

      <Accreditations />

      <LincoDivider
        sx={{ mt: { xs: 17, md: 35 }, mb: { xs: 16, md: 17 } }}
        fullWidth
      />

      <LincoNews />
    </>
  );
}
