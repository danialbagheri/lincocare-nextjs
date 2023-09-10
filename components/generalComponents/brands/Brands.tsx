import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { Container, CustomLink } from "shared";

import { BRANDS_IMAGE } from "../../aboutUsPage/components";

export function Brands() {
  return (
    <Container
      pt={{ xs: 15, md: 20 }}
      pb={{ xs: 15, md: 19 }}
      textAlign="center"
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
        {BRANDS_IMAGE.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            width={168}
            height={79}
            alt={img.id}
          />
        ))}
      </Slide>

      <CustomLink
        href="/brands"
        color="#000"
        borderColor={{ xs: "lincoBlue.main" }}
        mt={8}
        aSx={{ px: 8 }}
      >
        All Linco brands
      </CustomLink>
    </Container>
  );
}
