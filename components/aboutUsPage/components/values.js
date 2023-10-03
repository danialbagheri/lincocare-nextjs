import { Typography } from "@mui/material";

export const ABOUT_ITEM = [
  {
    title: "Quality",
    description:
      "With an enduring commitment to practical skincare and sun protection, Linco Care has evolved to a diverse range of specially crafted formulations that address a wide spectrum of skincare needs. Our dedication extends globally, catering to private label brand needs in various countries worldwide. We pride ourselves on tailoring formulas that best suit each unique project, ensuring excellence and satisfaction across borders.",
  },
  {
    title: "Ethics",
    customDescription: (
      <>
        <Typography as="p" textAlign="justify" mt={6}>
          At Linco Care, ethical responsibility is incorporated into all of our
          operations. We take pride in our commitment to sustainability, evident
          through our utilisation of solar-panelled warehouses and
          environmentally-conscious production methods.
        </Typography>
        <Typography as="p" textAlign="justify">
          Our dedication to reducing our environmental footprint extends from
          production processes to water management and responsible sourcing of
          supplies.
        </Typography>
        <Typography as="p" textAlign="justify">
          Furthermore, we firmly believe in giving back to our community. We
          actively support charitable initiatives, local businesses, cultivate a
          fair and inclusive workplace, and prioritise ethical values above all
          else.
        </Typography>
        <Typography as="p" textAlign="justify">
          We are actively working to implement The ETI Base Code throughout our
          company and across our network of suppliers.
        </Typography>
        <Typography as="p" textAlign="justify">
          We proudly participate in SMETA, the world's most widely recognized
          social audit program. 
        </Typography>
        <Typography as="p" textAlign="justify">
          The SMETA Audit is built on four fundamental pillars:
        </Typography>

        <li>Labour Standards</li>
        <li>Health and Safety</li>
        <li> Environment</li>
        <li> Business Ethics</li>

        <Typography as="p" textAlign="justify">
          By setting these business standards, we continue to create a
          sustainable, responsible, and ethical future for our company and the
          wider industry.
        </Typography>
      </>
    ),
  },
  {
    title: "Innovation",
    description:
      "From humble grassroots beginnings, where our primary focus was practical and no-nonsense sun protection, Linco Care has evolved into a brand that offers a discerning range of meticulously crafted, cutting-edge formulations designed to address a diverse spectrum of skincare needs. Our commitment to innovation and forward-thinking has firmly established Linco Care as a leader in the skincare industry.",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "1M",
    unit: "/month",
    subtitle: "Filling capacity",
  },
  {
    title: "60",
    subtitle: "Countries",
  },

  {
    title: "700+",
    subtitle: "Product formulations",
  },
  {
    title: "70+",
    subtitle: "Sun care formulations",
  },
];

export const BRANDS_IMAGE = [
  {
    id: "cabana",
    src: "/images/brandsSample/cabanaSun.png",
  },
  {
    id: "calypso",
    src: "/images/brandsSample/calypso.png",
  },
  {
    id: "dimples",
    src: "/images/brandsSample/dimples.png",
  },
  {
    id: "silkia",
    src: "/images/brandsSample/silkia.png",
  },
];
