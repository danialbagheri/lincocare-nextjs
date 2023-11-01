import { Box, Typography } from "@mui/material";
import { BrandDetailsType } from "components/constants";

export function Description(props: { brandDetails: BrandDetailsType }) {
  const { brandDetails } = props;

  return (
    <Box sx={{ mt: { xs: 19, md: 32 }, mb: { xs: 18, md: 34 } }}>
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" }, textTransform: "uppercase" }}
      >
        {brandDetails?.name}
      </Typography>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 14, mt: 4 }}>
        <Typography>{brandDetails?.detailedDescription}</Typography>
      </Box>
    </Box>
  );
}
