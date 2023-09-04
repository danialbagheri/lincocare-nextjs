import { Box } from "@mui/material";
import {
  renderBrandsLogo,
  retailersDetail,
} from "components/generalComponents/retailers/Retailers";
import { Container } from "shared";

export function Retailers() {
  return (
    <Container
      sx={{
        mt: { xs: "70px", mdz: "126px" },
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          animation: "scrollText 5s infinite ease",
        }}
      >
        {retailersDetail.map((detail) =>
          renderBrandsLogo(detail.count, detail.retail)
        )}
      </Box>
    </Container>
  );
}
