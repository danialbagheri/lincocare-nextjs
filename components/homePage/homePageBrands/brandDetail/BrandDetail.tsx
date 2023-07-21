import { Box, Stack, Typography, useTheme } from "@mui/material";

import type { BrandDetailTypes } from "../../HomePageTypes";
import { CustomLink } from "shared";
import Image from "next/image";

function BrandDetail(props: { brandDetail: BrandDetailTypes }) {
  const theme = useTheme();
  const { brandDetail } = props;

  return (
    <Box
      sx={{
        p: 10,
        bgcolor: { xs: "unset", md: brandDetail.bgColor },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 15,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "50%", md: "30%", lg: "20%", xl: "10%" },
            height: "100%",
            paddingBottom: {
              xs: "70%",
              sm: "50%",
              md: "30%",
              lg: "20%",
              xl: "10%",
            },
          }}
        >
          <Image
            src={"/images/homePage/brands/" + brandDetail.imageSrc}
            fill
            alt="home-page-photo"
            style={{ objectFit: "contain" }}
            sizes={"100vw"}
            loading={"lazy"}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <Typography
            variant="h4"
            color={"#fff"}
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              display: { xs: "none", md: "block" },
            }}
          >
            {brandDetail.name}
          </Typography>
          <Typography variant="body1" color={"#fff"} sx={{ mt: 5 }}>
            {brandDetail.description}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            flexWrap={"wrap"}
            columnGap={8}
          >
            <CustomLink borderColor={theme.palette.lincoYellow.main} href="">
              Know more
            </CustomLink>
            <CustomLink borderColor={theme.palette.lincoYellow.main} href="">
              Brand website
            </CustomLink>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default BrandDetail;
