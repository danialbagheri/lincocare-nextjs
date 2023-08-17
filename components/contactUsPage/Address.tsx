import { Box, SxProps } from "@mui/material";
import { SocialMedia } from "components/generalComponents";
import { AddressSection, SocialMediaSection } from "./components";

interface PropsTypes {
  sx: SxProps;
}

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
    </Box>
  );
}
