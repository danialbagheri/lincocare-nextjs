import * as React from "react";

import { IconButton, Stack, Typography } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { BrandDetail } from "./brandDetail";
import { Container } from "shared";
import SwipeableViews from "react-swipeable-views";
import Tab from "@mui/material/Tab";
import { TabPanelProps } from "../HomePageTypes";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

const NEXT = "next";
const PREVIOUS = "previous";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, brandDetail, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <BrandDetail brandDetail={brandDetail} />}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomePageBrands() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const brands = [
    {
      name: "Calypso",
      imageSrc: "calypso.png",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
      bgColor: theme.palette.primary.main,
    },
    {
      name: "Cabana",
      imageSrc: "cabana.png",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
      bgColor: theme.palette.cabanaBrown.main,
    },
    {
      name: "Silkia",
      imageSrc: "silkia.png",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
      bgColor: theme.palette.silkiaBlue.main,
    },
    {
      name: "Dimples",
      imageSrc: "dimples.png",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
      bgColor: theme.palette.dimplesBlue.main,
    },
    {
      name: "Re-Gen",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
      bgColor: theme.palette.regenPink.main,
    },
    {
      name: "Safa",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
      bgColor: theme.palette.cabanaBrown.main,
    },
  ];
  const brandsCount = brands.length;

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    event.preventDefault();
    setValue(newValue);
  };

  const handleChangeIndex = (index: number): void => {
    setValue(index);
  };

  const changeBrandHandler = (type: string) => {
    switch (type) {
      case NEXT:
        if (value < brandsCount - 1) {
          setValue(value + 1);
        } else setValue(0);
        break;
      case PREVIOUS:
        if (value > 0) {
          setValue(value - 1);
        } else setValue(brandsCount - 1);
    }
  };

  return (
    <Box
      sx={{
        mt: { xs: 15, md: 0 },
        p: { xs: "60px 40px", md: "unset" },
        bgcolor: { xs: brands[value].bgColor, md: "unset" },
        transition: "all 500ms",
      }}
    >
      <Container>
        <Typography
          align="center"
          mb={{ xs: 15, md: 20 }}
          color={{ xs: "#fff", md: "#000" }}
          sx={{ typography: { xs: "h5", md: "h4" } }}
        >
          Linco brands
        </Typography>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{ width: "100%", display: { xs: "flex", md: "none" } }}
        >
          <IconButton
            aria-label="previous"
            color="primary"
            sx={{ color: "white " }}
            onClick={() => changeBrandHandler(PREVIOUS)}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h5"
            color={"#fff"}
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              minWidth: "165px",
              textAlign: "center",
            }}
          >
            {brands[value].name}
          </Typography>
          <IconButton
            aria-label="delete"
            color="primary"
            sx={{ color: "white !important" }}
            onClick={() => changeBrandHandler(NEXT)}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          scrollButtons={true}
          aria-label="full width tabs example"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiTabs-flexContainer": {
              width: "100%",
              justifyContent: "space-between",
              "&>button": {
                flexGrow: "unset",
                flexBasis: "unset",

                fontSize: "21px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "30px",
                textTransform: "unset",
              },
              "&>button.Mui-selected": {
                fontWeight: 700,
                height: 75,
                justifyContent: "flex-start",
              },
            },
            "& .MuiTabs-indicator": {
              top: "60px",
              bgcolor: theme.palette.primary.main,
            },
          }}
        >
          {brands.map((brand, i) => (
            <Tab key={brand.name} label={brand.name} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Container>

      <SwipeableViews
        axis={"x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {brands.map((brand, i) => (
          <TabPanel
            key={brand.name}
            value={value}
            index={i}
            brandDetail={brand}
          />
        ))}
      </SwipeableViews>
    </Box>
  );
}
