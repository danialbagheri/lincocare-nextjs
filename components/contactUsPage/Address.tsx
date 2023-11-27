import * as React from "react";
import { Box, SxProps } from "@mui/material";

import {
  AddressSection,
  GoogleMapContainer,
  SocialMediaSection,
} from "./components";

interface PropsTypes {
  sx: SxProps;
}

const googleMap = process.env.GOOGLE_MAP_API_KEY;

export function Address(props: PropsTypes) {
  const { sx } = props;

  return (
    <Box
      sx={{
        ...sx,
        pr: { xs: 0, md: 20 },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AddressSection />
      <SocialMediaSection />
      <GoogleMapContainer />
    </Box>
  );
}
