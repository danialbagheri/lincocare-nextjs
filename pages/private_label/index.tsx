import { Box } from "@mui/material";
import { HomePageHead, PrivateLabelHead } from "components";
import React from "react";
import { Container } from "shared";

function private_label() {
  return (
    <>
      <PrivateLabelHead />
      <Container>
        <Box component="main" sx={{ bgcolor: "red", height: 200 }}>
          Private_label
        </Box>
      </Container>
    </>
  );
}

export default private_label;
