import { useTheme } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  renderBrandsLogo,
  retailersDetail,
} from "components/generalComponents/retailers/Retailers";
import { Container, CustomLink } from "shared";

export function Retailers() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        mt: { xs: "70px", mdz: "126px" },
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "& .images-wrap>div": {
          display: "flex !important",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
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
        {retailersDetail.map((detail) =>
          renderBrandsLogo(detail.count, detail.retail)
        )}
      </Slide>
      <CustomLink
        sx={{ pt: 10 }}
        className="centralize"
        color="#000"
        borderColor={{ xs: theme.palette.lincoBlue.main }}
        aSx={{ px: 8 }}
        href="/#retailers"
      >
        All Linco retailers
      </CustomLink>
    </Container>
  );
}
