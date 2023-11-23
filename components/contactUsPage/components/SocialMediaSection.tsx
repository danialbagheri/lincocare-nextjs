import { Box, Typography } from "@mui/material";
import { SocialMedia } from "components/generalComponents";
import Image from "next/image";

export function SocialMediaSection() {
  return (
    <Box px={{ xs: 9, md: 0 }} mt={30}>
      <Typography variant="h4">Social networks</Typography>
      <SocialMedia sx={{ mt: 4, justifyContent: "flex-start" }} />
    </Box>
  );
}
