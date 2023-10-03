import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "shared";

const Countries = (props: { mobile?: boolean }) => {
  return (
    <Typography
      color="lincoBlue.light"
      textAlign="center"
      pt={7}
      pb={{ xs: 0, md: 19 }}
      px={8}
      sx={{
        maxWidth: { xs: "100%", md: "500px" },
        margin: "0 auto",
        display: {
          xs: props.mobile ? "block" : "none",
          md: props.mobile ? "none" : "block",
        },
      }}
    >
      UK, Ireland, China, UAE, Malaysia, European Union, Philippines, Hong Kong,
      EEA, Bahrain, Australia, Greece, Saudi Arabia
    </Typography>
  );
};

export function GlobalMarket() {
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        pt={{ xs: 17, md: 20 }}
        mb={{ xs: 8, md: 0 }}
      >
        Our Global Market
      </Typography>
      <Countries />

      <Container
        sx={{ width: { xs: "100%", md: "min(1160px,80%)" } }}
        fullWidth
      >
        <Box pt="51%" width="100%" position="relative">
          <Image
            src={"/images/aboutUsPage/about/global.png"}
            alt="Accreditations"
            fill
            style={{ objectFit: "contain" }}
            sizes={"100vw"}
            loading={"lazy"}
          />
        </Box>
      </Container>
      <Countries mobile />
    </>
  );
}
