import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Container } from "shared";
import { BrandsTab } from "./components";
import { BRANDS, BRANDS_ID } from "components/constants";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

const NEXT = "next";
const PREVIOUS = "previous";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export function Brands() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const brandsCount = BRANDS.length;

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    event.preventDefault();
    setValue(newValue);
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
        pt: { xs: 20, md: 40 },
        px: { xs: 10, md: "unset" },
        bgcolor: { xs: BRANDS[value].color, md: "unset" },
        transition: "all 500ms",
      }}
    >
      <Container>
        <Typography
          align="center"
          mb={{ xs: 15, md: 20 }}
          color={{
            xs: BRANDS[value].privateLabel ? "#000" : "#fff",
            md: "#000",
          }}
          sx={{ typography: { xs: "h3", md: "h2" } }}
        >
          Our brands
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
            sx={{ color: BRANDS[value].privateLabel ? "#000" : "white " }}
            onClick={() => changeBrandHandler(PREVIOUS)}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h4"
            color={BRANDS[value].privateLabel ? "#000" : "#fff"}
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              minWidth: "165px",
              textAlign: "center",
            }}
          >
            {BRANDS[value].name}
          </Typography>
          <IconButton
            aria-label="delete"
            color="primary"
            sx={{
              color: BRANDS[value].privateLabel ? "#000" : "white !important",
            }}
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

                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "30px",
                textTransform: "unset",
                color: "#000",
                opacity: 1,
              },
              "&>button.Mui-selected": {
                fontWeight: 700,
                paddingTop: 0,
              },
            },
            "& .MuiTabs-indicator": {
              top: "50px",
              bgcolor: BRANDS[value].privateLabel
                ? theme.palette.lincoBlue.dark
                : BRANDS[value].color,
            },
          }}
        >
          {BRANDS.filter((b) => b.id !== BRANDS_ID.PRIVATE_LABEL).map(
            (brand, i) => (
              <Tab key={brand.name} label={brand.name} {...a11yProps(i)} />
            )
          )}
        </Tabs>
      </Container>

      <BrandsTab setValue={setValue} value={value} />
    </Box>
  );
}
