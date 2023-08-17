import { Box, Typography } from "@mui/material";
import { SocialMedia } from "components/generalComponents";
import Image from "next/image";

export function SocialMediaSection() {
  return (
    <>
      <Box px={{ xs: 9, md: 0 }} mt={30}>
        <Typography variant="h4">Social networks</Typography>
        <SocialMedia sx={{ mt: 4, justifyContent: "flex-start" }} />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "70%", md: "100%" },
          mt: 22,
        }}
      >
        <Box
          position="relative"
          sx={{
            pt: "95%",
          }}
        >
          <Image
            src="/images/contactUsPage/map.png"
            fill
            style={{ objectFit: "cover" }}
            alt="map"
          />
        </Box>
      </Box>
    </>
  );
}
