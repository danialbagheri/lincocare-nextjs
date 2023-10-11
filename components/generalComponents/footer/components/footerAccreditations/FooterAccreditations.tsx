import * as React from "react";

import { Box } from "@mui/material";
import { AppContext } from "components/appProvider";
import Image from "next/image";

function FooterAccreditations() {
  const [appState] = React.useContext(AppContext);
  return (
    <Box
      p={5}
      bgcolor={"#FFFFFF"}
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        display: { xs: "none", lg: "block" },
      }}
    >
      <Image
        alt={"accreditations"}
        src={
          appState?.accreditations?.items
            ? appState?.accreditations?.items[1].icon || ""
            : ""
        }
        width={214}
        height={308}
      />
    </Box>
  );
}

export default FooterAccreditations;
