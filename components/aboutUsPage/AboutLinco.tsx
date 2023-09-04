import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "shared";
import { AboutItem, ABOUT_ITEM } from "./components";

export function AboutLinco() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        py: { xs: 25, md: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          py: { xs: 0, md: 25 },
          pr: { xs: 0, md: 25 },
          position: { xs: "static", md: "sticky" },
          top: { xs: 0, md: 200 },
          height: "fit-content",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "325px", md: "100%" },
            position: "relative",
            pt: "27%",
          }}
        >
          <Image
            alt="Linco care"
            src="/images/aboutUsPage/about/logo.png"
            fill
            style={{ objectFit: "contain" }}
            loading={"lazy"}
          />
        </Box>
        <Box position="relative">
          <Typography
            textAlign={{ xs: "unset", md: "justify" }}
            mt={{ xs: 7, md: 10 }}
          >
            Putting SPF & skincare at the “sun-kissed” epicentre of our purpose,
            our brand family is something that has professionally matured and
            grown with over forty years of experimentation and commitment. With
            dedication to constant improvement, Linco Skincare is constantly
            exploring new avenues of research and development to create
            revolutionary products that will change the skincare industry.{" "}
          </Typography>
          {/* <Divider
            sx={{
              position: "absolute",
              width: "150%",
              bottom: "-200px",
              right: "-100px",
              display: { xs: "none", md: "block" },
            }}
            textAlign="right"
          /> */}
        </Box>
      </Box>
      <Divider
        orientation={"vertical"}
        sx={{ height: "unset", display: { xs: "none", md: "block" } }}
      />
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },

          pt: { xs: 14, md: 50 },
          pl: { md: 25 },
          pb: { md: 25 },

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: { xs: 8, md: 20 },
        }}
      >
        {ABOUT_ITEM.map((item) => (
          <AboutItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
    </Container>
  );
}
