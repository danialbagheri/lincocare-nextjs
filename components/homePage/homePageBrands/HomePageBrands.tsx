import * as React from "react";

import SwipeableViews from "react-swipeable-views";

import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Image from "next/image";

import { Container } from "shared";
import { Typography } from "@mui/material";
import Link from "next/link";

interface brandDetail {
  name: string;
  imageSrc: string;
  description: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  brandDetail: brandDetail;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, brandDetail, ...other } = props;
  const theme = useTheme();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            position: "relative",
            height: { md: 300, lg: 400, xl: 500 },
          }}
        >
          <Image
            src={brandDetail.imageSrc}
            fill
            alt="home-page-photo"
            style={{ objectFit: "cover" }}
            sizes={"100vw"}
            loading={"lazy"}
          />
          <Box
            sx={{
              position: "absolute",
              top: { md: "15%", lg: "25%", xl: "40%" },
              left: { md: "40%", lg: "45%", xl: "48%" },
              transform: "translate(50%,0)",
              maxWidth: 350,
            }}
          >
            <Typography
              variant="h4"
              color={"#fff"}
              sx={{ fontWeight: 700, textTransform: "uppercase" }}
            >
              {brandDetail.name}
            </Typography>
            <Typography variant="body1" color={"#fff"} sx={{ mt: 5 }}>
              {brandDetail.description}
            </Typography>
            <Box
              sx={{
                pt: 5,
                "&>a": {
                  display: "inline-block",
                  textDecoration: "none",
                  color: "#fff",
                  borderBottom: "2px solid " + theme.palette.lincoYellow.main,
                  p: 2,
                },
              }}
            >
              <Link href="">Know more</Link>
            </Box>
          </Box>
        </Box>
      )}
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
      imageSrc: "/images/homePageBrandsCalypso.png",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
    },
    {
      name: "Cabana",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
    },
    {
      name: "Silkia",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
    },
    {
      name: "Dimples",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
    },
    {
      name: "Re-Gen",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
    },
    {
      name: "Safa",
      imageSrc: "",
      description:
        "Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info Brief info  Brief info Brief info Brief info",
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Container>
        <Typography variant="h4" align="center" mb={20}>
          Linco brands
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
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
            <Tab key={i} label={brand.name} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Container>

      <SwipeableViews
        axis={"x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {brands.map((brand, i) => (
          <TabPanel value={value} index={i} brandDetail={brand} />
        ))}
      </SwipeableViews>
    </Box>
  );
}
