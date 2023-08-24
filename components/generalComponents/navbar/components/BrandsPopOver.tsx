import * as React from "react";

import SwipeableViews from "react-swipeable-views";

import { Box, Popover, Tab, Tabs, Typography, useTheme } from "@mui/material";

import Image from "next/image";

interface PropsTypes {
  anchorEle: HTMLButtonElement | null;
  handleClose: () => void;
}

const BRANDS = [
  {
    title: "Calypso",
    imageSrc: "/images/brandsPopup/calypso.png",
    text: "Calypso is a sun and skin care brand with a wide range of products.",
  },
  {
    title: "Cabana",
    imageSrc: "/images/brandsPopup/cabana.png",
    text: "Cabana Sun offers protection and tan in the same bottle.",
  },
  {
    title: "Silkia Deplaitory",
    imageSrc: "/images/brandsPopup/silkia.png",
    text: "Calypso is a sun and skin care brand with a wide range of products.",
  },
  {
    title: "Silkia Pedicare",
    imageSrc: "/images/brandsPopup/silkiaPedicare.png",
    text: "Silkia is hair removal that leaves you with long lasting smoothness.",
  },
  {
    title: "Dimples",
    imageSrc: "/images/brandsPopup/dimples.png",
    text: "Dimples is a British brand with decades of experience in hair removal.",
  },
  {
    title: "Sun tropic",
    imageSrc: "/images/brandsPopup/sunTropic.png",
    text: "Sun Tropic is a unique handbag size range offers both UVA and UVB protection.",
  },
];

export function BrandsPopOver(props: PropsTypes) {
  const { anchorEle, handleClose } = props;
  const [value, setValue] = React.useState(-1);
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
    >
      <Box onMouseLeave={handleClose}>
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
                fontWeight: 500,
                lineHeight: "30px",
                textTransform: "unset",
              },
              "&>button.Mui-selected": {
                fontWeight: 700,
                borderBottom: `3px solid ${theme.palette.lincoBlue.main}`,
              },
            },
            "& .MuiTabs-indicator": {
              top: "70px",
              bgcolor: theme.palette.primary.main,
            },
          }}
        >
          {BRANDS.map((brand, i) => (
            <Tab
              key={brand.title}
              label={brand.title}
              {...a11yProps(i)}
              onMouseOver={() => setValue(i)}
            />
          ))}
        </Tabs>
        <SwipeableViews
          axis={"x"}
          index={value}
          onChangeIndex={(value: number) => setValue(value)}
        >
          {BRANDS.map((brand, i) => (
            <div
              hidden={i !== value}
              role="tabpanel"
              id={`full-width-tabpanel-${value}`}
              aria-labelledby={`full-width-tab-${value}`}
              style={{ marginTop: "30px" }}
            >
              <>
                <Typography textAlign="center" fontSize="14px">
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
