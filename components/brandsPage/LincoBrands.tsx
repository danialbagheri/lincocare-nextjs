/* ---------------------------- Local Components ---------------------------- */
import { BRANDS } from "components/constants";
import { BrandDetail } from "components/generalComponents";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export function LincoBrands() {
  return (
    <>
      {BRANDS.map((brand) => (
        <BrandDetail
          key={brand.id}
          color={brand.color}
          borderColor={brand.borderColor}
          description={brand.description}
          imageSrc={brand.imageSrc}
          name={brand.name}
          privateLabel={brand.privateLabel}
        />
      ))}
    </>
  );
}
