import { Box, Stack, Typography, useTheme } from "@mui/material";

import { Container } from "shared";
import { ProcessLevelItem } from "./components";

const PROCESS_ITEMS = [
  {
    title: "Product Formulation",
    imgSrc: "/images/privateLabelPage/body/Formulation.jpg",
    description:
      "Brief info Brief info Brief info Brief info Brief info Brief info Brief info",
    link: "",
  },
  {
    title: "Manufacturing",
    imgSrc: "/images/privateLabelPage/body/Manufacturing.jpg",
    description:
      "Brief info Brief info Brief info Brief info Brief info Brief info Brief info",
    link: "",
  },
  {
    title: "Quality Assurance",
    imgSrc: "/images/privateLabelPage/body/Quality-control.jpg",
    description:
      "Brief info Brief info Brief info Brief info Brief info Brief info Brief info",
    link: "",
  },
  {
    title: "Packaging",
    imgSrc: "/images/privateLabelPage/body/Packaging.jpg",
    description:
      "Brief info Brief info Brief info Brief info Brief info Brief info Brief info",
    link: "",
  },
  {
    title: "Branding & Packaging Design",
    imgSrc: "/images/privateLabelPage/body/Branding.jpg",
    description:
      "Brief info Brief info Brief info Brief info Brief info Brief info Brief info",
    link: "",
  },
  {
    title: "Support Services",
    imgSrc: "/images/privateLabelPage/body/Customer-service.jpg",
    description:
      "Brief info Brief info Brief info Brief info Brief info Brief info Brief info",
    link: "",
  },
];

export function ProcessLevels() {
  const theme = useTheme();
  return (
    <>
      <Container
        py={{ xs: 9, md: 22 }}
        sx={{
          bgcolor: { xs: "#F4F4F4", md: "unset" },
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            typography: { xs: "h3", md: "h5" },
            bgcolor: { xs: "#F4F4F4", md: "unset" },
          }}
        >
          We are expert in “Private Label”
        </Typography>
      </Container>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "2px",
            minHeight: "100%",
            position: "absolute",
            top: 104,

            left: "50%",
            transform: "translate(-50%)",
            backgroundImage: `linear-gradient(${theme.palette.lincoBlue.main} 33%, rgba(255,255,255,0) 0%)`,
            backgroundPosition: "right",
            backgroundSize: "2px 20px",
            backgroundRepeat: "repeat-y",
          }}
        />
        <Stack alignItems="center">
          <Typography
            textAlign="center"
            mt={{ xs: 6, md: 10 }}
            mb={5}
            variant="h7"
            color="lincoBlue.main"
          >
            Start
          </Typography>
          <Box
            sx={{ width: 16, height: 16, borderRadius: "50%" }}
            bgcolor="lincoBlue.main"
          />
        </Stack>

        <Box>
          {PROCESS_ITEMS.map((item, i) => (
            <ProcessLevelItem
              key={item.title}
              number={i + 1}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
