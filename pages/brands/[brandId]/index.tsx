import { useRouter } from "next/router";

import { BRANDS } from "components/constants";
import { Brands, LincoNews } from "components/generalComponents";
import {
  Description,
  Head,
  Links,
  Products,
} from "components/individualBrandsPage";

import { Container, LincoDivider } from "shared";

export default function BrandPage() {
  const brandId = useRouter().query.brandId?.toString();
  const brandDetails = BRANDS.find((b) => b.id === brandId)!;

  return (
    <>
      <Head brandDetails={brandDetails} id={brandId} />
      <Container sx={{ width: { xs: "100%", md: "min(865px,80%)" } }}>
        <Links brandDetails={brandDetails} />
        <Description brandDetails={brandDetails} />
        <Products brandDetails={brandDetails} />
      </Container>
      <LincoDivider sx={{ mb: { xs: 1, md: 6 } }} fullWidth />

      <Brands />

      <LincoDivider sx={{ mb: { xs: 16, md: 26 } }} fullWidth />
      <LincoNews
        collectionSlug={brandDetails?.newsSlug}
        title={`${brandDetails.name} latest`}
      />
    </>
  );
}
