import { Box, Stack, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import { Container, CustomLink, HeadContainer } from "shared";

export function Head() {
  return (
    <HeadContainer
      bgcolor={"lincoBlue.dark"}
      sx={{ height: { xs: 630, md: 800, xl: 850 } }}
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
            Our diverse range of brands
          </Typography>
          <Box
            sx={{
              width: "100%",
              pt: "30%",
              position: "relative",
              mt: 20,
            }}
          >
            <Image
              src={"/images/brandsPage/allBrands.png"}
              alt="Accreditations"
              fill
              style={{ objectFit: "contain" }}
              sizes={"100vw"}
              loading={"lazy"}
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
