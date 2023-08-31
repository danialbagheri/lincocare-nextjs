import { Box, Divider, SxProps, Typography } from "@mui/material";

import { Container } from "shared";
import Image from "next/image";

const renderBrandsLogo = (retailerCount: number, retailer: string) => {
  const brandsArray = [];
  for (let i = 0; i < retailerCount; i++) {
    brandsArray.push(
      <Box
        sx={{
          width: { xs: "84px", md: "157px" },
          height: { xs: "42px", md: "80px" },
          position: "relative",
        }}
      >
        <Image
          src={
            "/images/homePage/retailers/" + retailer + "/retailers" + i + ".png"
          }
          alt={"retailer No" + i}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    );
  }
  return brandsArray;
};

const RetailerItem = (props: {
  count: number;
  retail: string;
  title: string;
}) => {
  return (
    <Box>
      <Typography
        variant={"h6"}
        color={"#247DE7"}
        mt={{ xs: 7, md: 20 }}
        textAlign="center"
      >
        {props.title}
      </Typography>
      <Divider sx={{ width: "100%", mt: 2 }} />
      <Box
        sx={{
          pt: { xs: 14, md: 16 },
          px: { xs: 8, md: 0 },
          pb: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 8, md: 16 },
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderBrandsLogo(props.count, props.retail)}
      </Box>
    </Box>
  );
};

function Retailers(props: { sx?: SxProps }) {
  const retailersDetail = [
    { title: "UK and Ireland retailers", count: 13, retail: "uk" },
    { title: "Overseas retailers", count: 6, retail: "overseas" },
  ];

  return (
    <Container
      sx={{ alignItems: "center", pt: { xs: 17, md: 55 }, ...props.sx }}
    >
      <Typography sx={{ typography: { xs: "h4", md: "h2" } }}>
        Retailers
      </Typography>
      {retailersDetail.map((retailer) => (
        <RetailerItem
          key={retailer.title}
          title={retailer.title}
          count={retailer.count}
          retail={retailer.retail}
        />
      ))}
    </Container>
  );
}

export default Retailers;
