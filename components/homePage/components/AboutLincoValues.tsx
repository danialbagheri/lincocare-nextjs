import * as React from "react";

/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Interfaces ------------------------------- */
interface PropsType {
  setEleHeight: (value: number | undefined) => void;
}

interface ValueComponentTypes {
  title: string;
  description: string;
  image: string;
}
/* -------------------------------------------------------------------------- */

/* -------------------------------- Constants ------------------------------- */
const VALUES = [
  {
    title: "Quality",
    description:
      "We never compromise on quality. Sourcing the highest standard of materials is always indisputable.",
    image: "/images/homePage/values/quality.png",
  },
  {
    title: "Ethics",
    description:
      "Our team is crucial to our success. We value every worker and maintain an environment where people feel appreciated and inspired.",
    image: "/images/homePage/values/ethics.jpeg",
  },
  {
    title: "Innovation",
    description:
      "We never compromise on quality. Sourcing the highest standard of materials is always indisputable.",
    image: "/images/homePage/values/innovation.png",
  },
];
/* -------------------------------------------------------------------------- */

/* -------------------------------- Component ------------------------------- */
const ValueComponent = (props: ValueComponentTypes) => {
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "175px", md: "240px" },
          height: { xs: "175px", md: "240px" },
          color: "#000",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          src={props.image}
          fill
          alt={props.title}
          style={{ objectFit: "cover" }}
          loading={"lazy"}
        />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: 400,
        }}
        mt={{ xs: 5, md: 8 }}
      >
        {props.title}
      </Typography>
      <Typography color={"lincoBlue.main"} mt={{ xs: 4, md: 6 }}>
        {props.description}
      </Typography>
    </Box>
  );
};
/* -------------------------------------------------------------------------- */

export function AboutLincoValues(props: PropsType) {
  const valuesRef = React.useRef<HTMLHeadingElement>(null);
  const theme = useTheme();

  React.useEffect(() => {
    props.setEleHeight(valuesRef.current?.clientHeight);

    if (window) {
      window.addEventListener("resize", () => {
        props.setEleHeight(valuesRef.current?.clientHeight);
      });
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        pb: 25,
        bgcolor: theme.palette.lincoBlue.dark,
      }}
    >
      <Typography variant="h4" color={"#FFF"} textAlign={"center"}>
        Linco values
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={{ xs: 9, md: 4 }}
        sx={{
          textAlign: "center",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: { xs: "translate(-50%,98%)", md: "translate(-50%,92%)" },
          width: "100%",
        }}
        ref={valuesRef}
      >
        {VALUES.map((value) => (
          <ValueComponent
            key={value.title}
            title={value.title}
            description={value.description}
            image={value.image}
          />
        ))}
      </Stack>
    </Box>
  );
}
