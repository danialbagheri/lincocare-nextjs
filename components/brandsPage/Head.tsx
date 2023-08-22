import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Container, CustomLink, HeadContainer } from "shared";

export function Head() {
  return (
    <HeadContainer
      bgcolor={"lincoBlue.dark"}
      sx={{ height: { xs: 630, md: 700, xl: 910 } }}
    >
      <Container>
        <Stack
          alignItems={"center"}
          pt={51}
          display={{ xs: "none", md: "flex" }}
        >
          <Typography variant={"h1"} color={"#FFFFFF"}>
            Linco brands
          </Typography>
          <Typography mt={3} variant={"h4"} color={"#77B4FB"}>
            Supporting sentence
          </Typography>
          <Box
            sx={{
              width: { md: "70%", lg: "60%" },
              pt: "30%",
              position: "relative",
            }}
          >
            <Image
              src={"/images/brandsPage/head/allBrands.png"}
              alt="Accreditations"
              fill
              style={{ objectFit: "contain", zIndex: 20 }}
              sizes={"100vw"}
              loading={"lazy"}
            />
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                bgcolor: "#fff",
                height: "35%",
                bottom: "17%",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Stack>
        <Stack alignItems={"center"} display={{ xs: "flex", md: "none" }}>
          <Typography
            variant={"h4"}
            pt={58}
            color={"#FFFFFF"}
            textAlign={"center"}
          >
            700+ Product Formulations
          </Typography>
          <CustomLink mt={23} href="">
            Know more
          </CustomLink>
        </Stack>
      </Container>
    </HeadContainer>
  );
}
