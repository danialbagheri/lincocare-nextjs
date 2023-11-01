import { Box, Divider, Typography } from "@mui/material";

import { AboutLinco, Address, ContactForm } from "components/contactUsPage";
import { Brands } from "components/generalComponents";
import Head from "next/head";
import { Container, LincoDivider } from "shared";

export default function ContactUs() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Contact Us" />
        <title>Contact Us</title>
      </Head>
      <Container
        pt={{ xs: 34, md: 65 }}
        sx={{ width: { xs: "100%", md: "min(1200px,80%)" } }}
        fullWidth
      >
        <Typography
          textAlign="center"
          sx={{ typography: { xs: "h4", md: "h2" }, mb: { xs: 12, md: 35 } }}
        >
          Contact with us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Address sx={{ width: { xs: "100%", md: "40%" }, mb: 7 }} />
          <LincoDivider
            fullWidth
            conSx={{ display: { xs: "block", md: "none" }, mb: 20 }}
          />
          <Divider
            orientation="vertical"
            sx={{ height: "unset", display: { xs: "none", md: "block" } }}
          />
          <ContactForm sx={{ width: { xs: "100%", md: "60%" } }} />
        </Box>
      </Container>

      <LincoDivider
        fullWidth
        conSx={{
          width: { xs: "100%", md: "min(1200px,80%)" },
          display: { xs: "none", md: "block" },
          mb: 24,
        }}
      />

      <AboutLinco />

      <LincoDivider fullWidth />

      <Brands />
    </>
  );
}
