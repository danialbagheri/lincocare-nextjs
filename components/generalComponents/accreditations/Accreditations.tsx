import * as React from "react";
import { Box, SxProps, Typography } from "@mui/material";

import { Container } from "shared";
import Image from "next/image";
import { IconGroupsItemType } from "services/lincoServicesTypes";
import { AppContext } from "components/appProvider";

function Accreditations(props: { sx?: SxProps; data?: IconGroupsItemType[] }) {
  const [appState] = React.useContext(AppContext);

  return (
    <Container sx={{ ...props.sx }}>
      <Typography
        textAlign={"center"}
        sx={{ typography: { xs: "h4", md: "h2" } }}
        mb={{ xs: 12, md: 16 }}
      >
        Accreditations
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pb: "30%",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Image
          src={
            props.data
              ? props.data[0].icon ?? ""
              : appState?.accreditations?.items[0].icon ?? ""
          }
          alt="Accreditations"
          fill
          style={{ objectFit: "contain" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pb: "180%",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Image
          src={
            props.data
              ? props.data[2].icon ?? ""
              : appState?.accreditations?.items[2]?.icon ?? ""
          }
          alt="Accreditations"
          fill
          style={{ objectFit: "contain" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      </Box>
    </Container>
  );
}

export default Accreditations;
