import { Head as BrandsHeader, LincoBrands } from "components/brandsPage";
import { Accreditations } from "components/generalComponents";
import Head from "next/head";
import { LincoDivider } from "shared";

function Brands() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Linco care Brands" />
        <meta
          property="og:image"
          content="https://linco-site.s3.amazonaws.com/media/django-summernote/2023-10-17/e7cac042-ae72-49b9-8b24-d6ca4a792e01.jpg"
        />
      </Head>
      <BrandsHeader />
      <LincoBrands />

      <LincoDivider fullWidth sx={{ mb: { xs: 16, md: 32 } }} />

      <Accreditations sx={{ xs: 16, mb: 46 }} />
    </>
  );
}

export default Brands;
