import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "components/appProvider";

export function SocialMedia(props: { sx?: SxProps }) {
  const { sx } = props;
  const [appState] = useContext(AppContext);

  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{ mt: { xs: 12, md: 15 }, ...sx }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {appState?.socialMediaIcons.map((icon) => (
        <Box
          className="centralize"
          key={icon.id}
          sx={{
            width: 55,
            height: 55,
            bgcolor: "#31528b",
            borderRadius: "50%",
            position: "relative",
            transition: "200ms all",
            cursor: "pointer",
            "&:hover": { bgcolor: "#31528b", transform: "scale(1.2)" },
          }}
          onClick={() => {
            const win = window.open(icon.url, "_blank");
            win?.focus();
          }}
        >
          <Image
            src={icon.svg_icon}
            width={35}
            height={35}
            alt="social media icons"
          />
        </Box>
      ))}
    </Stack>
  );
}
