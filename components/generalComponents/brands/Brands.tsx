import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { Container, CustomLink } from "shared";

import { BRANDS } from "components/constants";
import { SxProps } from "@mui/material";

export function Brands(props: { sx?: SxProps }) {
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
              <Image
                key={brand.id}
                src={brand.whiteLogoSrc || ""}
                alt={brand.name}
                width={200}
                height={136}
                style={{
                  filter:
                    "invert(0%) sepia(100%) saturate(0%) hue-rotate(151deg) brightness(0) contrast(104%)",
                }}
              />
            );
          }
        })}
      </Slide>

      <CustomLink
        href="/brands"
        color="#000"
        borderColor={{ xs: "lincoBlue.main" }}
        mt={8}
        aSx={{ px: 8 }}
      >
        Linco Care brands
      </CustomLink>
    </Container>
  );
}
