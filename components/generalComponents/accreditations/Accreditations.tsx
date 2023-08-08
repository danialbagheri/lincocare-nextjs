import { Box, SxProps, Typography } from "@mui/material";

import { Container } from "shared";
import Image from "next/image";

function Accreditations(props: { sx?: SxProps }) {
  return (
    <Container sx={{ ...props.sx }}>
      <Typography
        textAlign={"center"}
        sx={{ typography: { xs: "h4", md: "h4" } }}
        mb={{ xs: 12, md: 16 }}
      >
        Accreditations
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pb: "30%",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Image
          src={"/images/homePage/accreditations/mainImage.png"}
          alt="Accreditations"
          fill
          style={{ objectFit: "contain" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pb: "180%",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Image
          src={"/images/homePage/accreditations/mainImageMobile.png"}
          alt="Accreditations"
          fill
          style={{ objectFit: "contain" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      </Box>
    </Container>
  );
}

export default Accreditations;
