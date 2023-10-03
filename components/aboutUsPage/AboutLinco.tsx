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
            At Linco Care, we proudly stand as a prominent manufacturer in the
            realm of sun care, skin care, and depilatory products. Our journey
            revolves around placing SPF and skincare at the core of our mission.
            Over the span of four decades, our brand family has evolved and
            matured through relentless experimentation and unwavering
            commitment. We not only offer seven of our own diverse brands, but
            also provide the option for private label solutions, catering to
            diverse needs in the world of skincare.
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
