import { Box } from "@mui/material";

import { Container } from "shared";
import { HomePageHead, PrivateLabel } from "./components";

export default function Home() {
  return (
    <>
      <HomePageHead />
      <PrivateLabel />
      <Container>
        <Box component="main"></Box>
      </Container>
    </>
  );
}
