import * as React from "react";

import SwipeableViews from "react-swipeable-views";

import { Box, Popover, Tab, Tabs, Typography, useTheme } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";
import { BRANDS_ID } from "components/constants";

interface PropsTypes {
  anchorEle: HTMLButtonElement | null;
  handleClose: () => void;
}

const BRANDS = [
  {
    id: BRANDS_ID.CALYPSO,
    title: "Calypso",
    imageSrc: "/images/brandsPopup/calypso.png",
    text: "Calypso is a sun and skin care brand with a wide range of products.",
  },
  {
    id: BRANDS_ID.CABANA,
    title: "Cabana",
    imageSrc: "/images/brandsPopup/cabana.png",
    text: "Cabana Sun offers protection and tan in the same bottle.",
  },
  {
    id: BRANDS_ID.SILKIA_DEPILATORY,
    title: "Silkia",
    imageSrc: "/images/brandsPopup/silkiaDepilatory.png",
    text: "Silkia is hair removal that leaves you with long lasting smoothness.",
  },
  {
    id: BRANDS_ID.SILKIA_PEDICARE,
    title: "Silkia Skin",
    imageSrc: "/images/brandsPopup/silkiaPedicare.png",
    text: "Silkia Skin is treatment to actively repair your dry, cracked heels.",
  },
  {
    id: BRANDS_ID.DIMPLES,
    title: "Dimples",
    imageSrc: "/images/brandsPopup/dimples.png",
    text: "Dimples is a British brand with decades of experience in hair removal.",
  },
  // {
  //   id: BRANDS_ID.SUN_TROPIC,
  //   title: "Sun tropic",
  //   imageSrc: "/images/brandsPopup/sunTropic.png",
  //   text: "Sun Tropic is a unique handbag size range offers both UVA and UVB protection.",
  // },
  {
    id: BRANDS_ID.RE_GEN,
    title: "Re-gen",
    imageSrc: "/images/brandsPopup/regen.png",
    text: "Specialised to fight against ageing, scars, stretch marks, dry skin and uneven skin tone.",
  },
];

export function BrandsPopOver(props: PropsTypes) {
  const { anchorEle, handleClose } = props;
  const [value, setValue] = React.useState(-1);
  const router = useRouter();
  const theme = useTheme();

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Popover
      open={anchorEle?.textContent === "Brands"}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={anchorEle}
      onClose={handleClose}
      disableRestoreFocus
      sx={{ "&>.MuiPopover-paper": { borderRadius: 0 }, zIndex: 1000 }}
    >
      <Box onMouseLeave={handleClose} sx={{ width: 950, borderRadius: 0 }}>
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          scrollButtons={true}
          aria-label="full width tabs example"
          sx={{
            display: { xs: "none", md: "block" },
            px: "90px",
            pt: 11,
            "& .MuiTabs-flexContainer": {
              width: "100%",
              justifyContent: "space-between",
              "&>button": {
                flexGrow: "unset",
                flexBasis: "unset",

                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "30px",
                textTransform: "unset",

                padding: "8px 16px",

                color: "#AFBCCC",
              },
              "&>button.Mui-selected": {
                fontWeight: 700,
                borderBottom: `3px solid ${theme.palette.lincoBlue.dark}`,
                color: theme.palette.lincoBlue.dark,
              },
            },
          }}
        >
          {/* To do ::: Use main brands Json instead of this brands */}
          {BRANDS.map((brand, i) => (
            <Tab
              key={brand.title}
              label={brand.title}
              {...a11yProps(i)}
              onMouseOver={() => setValue(i)}
              onClick={() => router.push(`/brands/${brand.id}`)}
            />
          ))}
        </Tabs>
        {value === -1 ? (
          <Typography
            color="#E2E2E2"
            textAlign="center"
            sx={{
              fontSize: 58,
              fontWeight: 600,
              marginBottom: 15,
              marginTop: 17,
            }}
          >
            Linco brands
          </Typography>
        ) : null}
        <SwipeableViews
          axis={"x"}
          index={value}
          onChangeIndex={(value: number) => setValue(value)}
        >
          {BRANDS.map((brand, i) => (
            <div
              key={brand.id}
              hidden={i !== value}
              role="tabpanel"
              id={`full-width-tabpanel-${value}`}
              aria-labelledby={`full-width-tab-${value}`}
              style={{ marginTop: "30px" }}
            >
              <>
                <Typography
                  textAlign="center"
                  fontSize="14px"
                  color={theme.palette.lincoBlue.dark}
                >
                  {brand.text}
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    height: "76px",
                    width: "100%",
                    mt: 6,
                  }}
                >
                  <Image
                    alt={brand.title}
                    src={brand.imageSrc}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </>
            </div>
          ))}
        </SwipeableViews>
      </Box>
    </Popover>
  );
}
