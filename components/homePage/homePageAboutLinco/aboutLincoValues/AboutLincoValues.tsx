import { Box, Stack, Typography } from "@mui/material";

interface valueComponentTypes {
  title: string;
  description: string;
  image: string;
}

function AboutLincoValues() {
  const values = [
    {
      title: "Quality",
      description:
        "We are dedicated to using only the highest quality ingredients; what we put on our bodies is just as important as what we put in them",
      image: "",
    },
    {
      title: "Ethics",
      description:
        "As a skin-focused hub, we prioritize workplace ethics and sustainable manufacturing.",
      image: "",
    },
    {
      title: "Innovation",
      description:
        "Innovation is our core focus, driving product development and manufacturing processes to stay ahead of the industry.",
      image: "",
    },
  ];

  const ValueComponent = (props: valueComponentTypes) => {
    return (
      <Box>
        <Typography>{props.title}</Typography>
        <Typography>{props.description}</Typography>
      </Box>
    );
  };

  return (
    <Box>
      <Typography variant="h5" color={"#FFF"} textAlign={"center"}>
        Linco values
      </Typography>

      <Stack></Stack>
    </Box>
  );
}

export default AboutLincoValues;
