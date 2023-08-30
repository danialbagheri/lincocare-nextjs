import { BRANDS } from "components/constants";
import { Brands, LincoNews } from "components/generalComponents";
import {
  Description,
  Head,
  Links,
  Products,
} from "components/individualBrandsPage";

import { useRouter } from "next/router";
import { Container, LincoDivider } from "shared";

export default function BrandPage() {
  const brandId = useRouter().query.brandId?.toString();
  const brandDetails = BRANDS.filter((b) => b.id === brandId)[0];

  return (
    <>
      <Head brandDetails={brandDetails} id={brandId} />
      <Container sx={{ width: { xs: "100%", md: "min(865px,80%)" } }}>
        <Links brandDetails={brandDetails} />
        <Description brandDetails={brandDetails} />
        <Products brandDetails={brandDetails} />
      </Container>
      <LincoDivider sx={{ mb: { xs: 1, md: 6 } }} fullWidth />
      <Container>
        <Brands />
      </Container>
      <LincoDivider sx={{ mb: { xs: 16, md: 26 } }} fullWidth />
      <LincoNews />
    </>
  );
}
