import * as React from "react";
import { Box, Typography } from "@mui/material";
import { CustomLink } from "shared";

interface PropTypes {
  title: string;
  description?: string;
  customDescription?: React.ReactNode;
}

export function AboutItem(props: PropTypes) {
  const { title, description, customDescription } = props;

  return (
    <Box>
      <Typography variant="h2" color="lincoBlue.main">
        {title}
      </Typography>
      <Typography textAlign="justify" mt={6}>
        {description}
      </Typography>
      {customDescription}
      <CustomLink
        href=""
        color="#000"
        borderColor={{ xs: "lincoBlue.main" }}
        display={{ xs: "block", md: "none" }}
      >
        Know more
      </CustomLink>
    </Box>
  );
}
