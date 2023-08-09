import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "shared";

const BACKGROUND_COLOR = "#D2E7FF";

export function HeadOffice() {
  return (
    <Box
      pt={{ xs: 20, md: 34 }}
      bgcolor={{ xs: BACKGROUND_COLOR, md: "unset" }}
    >
      <Typography textAlign="center" variant="h4">
        Linco head office
      </Typography>
      <Box position="relative">
        <Container
          sx={{
            position: "relative",
            pt: { xs: "40%", md: "33.3%" },
            zIndex: 1,
          }}
        >
          <Image
            src={"/images/aboutUsPage/about/office.png"}
            alt="Accreditations"
            fill
            style={{ objectFit: "contain" }}
            sizes={"100vw"}
            loading={"lazy"}
          />
        </Container>
        <Box
          sx={{
            position: "absolute",
            height: "45%",
            bgcolor: { xs: "#FFF", md: BACKGROUND_COLOR },
            left: 0,
            right: 0,
            top: "50%",
            transform: "translate(0,-50%)",
          }}
        />
      </Box>
    </Box>
  );
}
