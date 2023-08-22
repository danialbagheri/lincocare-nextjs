/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ------------------------------- Interfaces ------------------------------- */
interface ItemPropsTypes {
  number: string;
  description: string;
}
/* -------------------------------------------------------------------------- */

/* -------------------------------- Constants ------------------------------- */
const STATISTICS_DETAILS = [
  { number: "1M", description: "Filling capacity" },
  { number: "60", description: "Countries" },
  { number: "700+", description: "Product formulations" },
  { number: "70+", description: "Sun care formulations" },
];
/* -------------------------------------------------------------------------- */

/* -------------------------------- Component ------------------------------- */
const StatisticItem = (props: ItemPropsTypes) => (
  <Box sx={{ color: "#D2E7FF" }}>
    <Typography
      sx={{
        textAlign: "center",

        fontSize: { xs: "50px", md: "68px" },
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
      }}
    >
      {props.number}
    </Typography>
    <Typography
      sx={{
        textAlign: "center",

        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 200,
        lineHeight: "30px",
      }}
    >
      {props.description}
    </Typography>
  </Box>
);
/* -------------------------------------------------------------------------- */

export function AboutLincoStatistics() {
  return (
    <Stack
      direction={"row"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      mt={{ xs: 22, md: 32 }}
      flexWrap={"wrap"}
      gap={{ xs: 10, md: 8 }}
    >
      {STATISTICS_DETAILS.map((detail) => (
        <StatisticItem
          key={detail.number}
          description={detail.description}
          number={detail.number}
        />
      ))}
    </Stack>
  );
}
