/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ------------------------------- Interfaces ------------------------------- */
interface ItemPropsTypes {
  number: string;
  description: string;
  unit?: string;
}
/* -------------------------------------------------------------------------- */

/* -------------------------------- Constants ------------------------------- */
const STATISTICS_DETAILS = [
  { number: "1M", unit: "/month", description: "Filling capacity" },
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
      <span style={{ fontSize: "40px" }}>{props.unit}</span>
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
    <Box
      sx={{
        mt: { xs: 22, md: 32 },
        display: "grid",
        gridTemplateColumns: {
          xs: "100%",
          sm: "50% 50%",
          lg: "repeat(4, 25%)",
        },
        rowGap: { xs: 20, md: 32 },
      }}
    >
      {STATISTICS_DETAILS.map((detail) => (
        <StatisticItem
          key={detail.number}
          description={detail.description}
          number={detail.number}
          unit={detail.unit}
        />
      ))}
    </Box>
  );
}
