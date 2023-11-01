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
          <Typography mt={{ xs: 7, md: 10 }}>
            Linco Care has been a trusted UK based sun and skin care
            manufacturer since 1979. Our commitment to our core values; Quality,
            Ethics and Innovation have facilitated our journey to success and
            enabled us to grow our diverse selection of own brands and bespoke
            private label service globally.  Our passion for skin care is
            evident in every practice, with continuous innovation and market
            research to stay ahead in the ever changing world of cosmetics.
          </Typography>
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
            customDescription={item.customDescription}
          />
        ))}
      </Box>
    </Container>
  );
}
