import { Box, Typography } from "@mui/material";
import { BrandDetailsType } from "components/constants";
import Image from "next/image";

export function Head(props: {
  brandDetails: BrandDetailsType;
  id: string | undefined;
}) {
  const { brandDetails, id } = props;

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 587, md: 621 },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        mb: 10,
      }}
    >
      <Image
        src={`/images/individualBrandPage/bg/${id}.png`}
        alt={id ?? ""}
        fill
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: 1100 },

          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center", md: "flex-end" },
          gap: "30px",
          flexDirection: { xs: "column", md: "row" },

          px: { xs: 3, md: 20 },

          zIndex: 1,
        }}
      >
        <Box mb={{ xs: 0, md: "12%" }}>
          <Typography variant="h1" color="#FFF" textAlign="center">
            {brandDetails?.name}
          </Typography>
          <Typography
            variant="h4"
            mt={3}
            color="lincoYellow.main"
            textAlign="center"
          >
            {brandDetails?.subtitle}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "80%", sm: "65%" },
            // maxWidth: 300,
            pt: { xs: "55%", sm: "42%" },
            position: "relative",
          }}
        >
          <Image
            src={`/images/brands/${id}.png`}
            alt={id || ""}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
