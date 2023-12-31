/* ---------------------------- Local Components ---------------------------- */
import { BRANDS } from "components/constants";
import { BrandDetail } from "components/generalComponents";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export function LincoBrands() {
  return (
    <>
      {BRANDS.map((brand) => {
        if (!brand.privateLabel) {
          return <BrandDetail key={brand.id} details={brand} />;
        }
      })}
    </>
  );
}
