/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
import { useRouter } from "next/router";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Slideshow Library --------------------------- */
import { Slide } from "react-slideshow-image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, SxProps } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Container, CustomLink } from "shared";
import { BRANDS } from "components/constants";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Style Components ---------------------------- */
import "react-slideshow-image/dist/styles.css";
/* -------------------------------------------------------------------------- */

export function Brands(props: { sx?: SxProps }) {
  const router = useRouter();
  return (
    <Container
      pt={{ xs: 15, md: 20 }}
      pb={{ xs: 15, md: 19 }}
      textAlign="center"
      sx={{ ...props.sx }}
    >
      <Slide
        autoplay
        slidesToScroll={1}
        duration={1750}
        transitionDuration={500}
        slidesToShow={2}
        indicators={false}
        arrows={false}
        responsive={[
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {BRANDS.map((brand) => {
          if (brand.whiteLogoSrc) {
            return (
              <Box
                key={brand.id}
                onClick={() => {
                  router.push(`/brands/${brand.id}`);
                }}
                sx={{ cursor: "pointer" }}
              >
                <Image
                  src={brand.whiteLogoSrc || ""}
                  alt={brand.name}
                  width={200}
                  height={136}
                  style={{
                    filter:
                      "invert(0%) sepia(100%) saturate(0%) hue-rotate(151deg) brightness(0) contrast(104%)",
                  }}
                />
              </Box>
            );
          }
        })}
      </Slide>

      <CustomLink
        href="/brands"
        color="#000"
        borderColor={{ xs: "lincoBlue.main" }}
        mt={3}
        aSx={{ px: 8 }}
      >
        Linco Care brands
      </CustomLink>
    </Container>
  );
}
