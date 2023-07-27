import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Container, CustomLink } from "shared";
import { BrandDetail } from "./brandDetail";

function LincoBrands() {
  const theme = useTheme();

  const brands = [
    {
      id: "calypso",
      name: "calypso",
      imageSrc: "/images/brands/calypso.png",
      description:
        "Calypso sun protection offers a comprehensive range of sun care products for all skin types and for the whole family.",
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "cabana",
      name: "cabana",
      imageSrc: "/images/brands/cabana.png",
      description:
        "Cabana Sun offers protection and tan in the same bottle helping you stay safe while tanning. Our bestsellers are our Dry Coco Oil and our Tropical Sun Lotion Spray.",
      color: theme.palette.cabanaBrown.main,
      borderColor: theme.palette.lincoBlue.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "silkiaPedicare",
      name: "Silkia Pedicare",
      imageSrc: "/images/brands/silkia.png",
      description:
        "Silkia PediCare Cracked Heel Repair Cream is a specially formulated treatment using multi-patented Keratin technology to actively repair your dry, cracked heels.",
      color: theme.palette.silkiaBlue.main,
      borderColor: theme.palette.primary.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "silkiaDepilatory",
      name: "Silkia Depilatory",
      imageSrc: "/images/brands/silkiaDepilatory.png",
      description:
        "Silkia Depilatory is your one stop hair removal product providing you with long lasting smoothness that will make everyone else wonder what your secret is.",
      color: theme.palette.silkiaDepilatory.main,
      borderColor: theme.palette.primary.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "reGen",
      name: "Re-Gen",
      imageSrc: "/images/brands/reGen.png",
      description:
        "Re-Gen is a range of specialised skin care products that help to fight against ageing, scars, stretch marks, dry skin and uneven skin tone.",
      color: theme.palette.regenPink.main,
      borderColor: theme.palette.primary.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "dimples",
      name: "Dimples",
      imageSrc: "/images/brands/dimples.png",
      description:
        "Dimples range includes body wax strips, hair removal cream, bleach cream and spray foams so that no matter your skin type or preferences, there’s a Dimples product for you.",
      color: theme.palette.dimplesBlue.main,
      borderColor: theme.palette.lincoBlue.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "sunTropic",
      name: "Sun Tropic",
      imageSrc: "/images/brands/sunTropic.png",
      description:
        "This unique handbag size range offers both UVA and UVB protection. All products are water-resistant, so you don’t need to worry about getting burned at the beach or in the pool.",
      color: theme.palette.sunTropic.main,
      borderColor: theme.palette.lincoBlue.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
    },
    {
      id: "privateLabel",
      name: "Private label",
      imageSrc: "/images/brands/privateLabel.png",
      description:
        "This unique handbag size range offers both UVA and UVB protection. All products are water-resistant, so you don’t need to worry about getting burned at the beach or in the pool.",
      color: "#EFF1F3",
      borderColor: theme.palette.lincoBlue.main,
      knowMoreLink: "",
      brandWebsiteLink: "",
      privateLabel: true,
    },
  ];

  return (
    <>
      {brands.map((brand) => (
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

export default LincoBrands;
