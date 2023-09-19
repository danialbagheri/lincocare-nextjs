import { Box, IconButton, Stack, SxProps } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "components/appProvider";

const IconLink = (props: { icon: string; href: string }) => {
  const [appState] = useContext(AppContext);

  console.log(appState?.socialMediaIcons);

  return (
    <IconButton
      sx={{
        // fontSize: "2.5rem",
        width: 55,
        height: 55,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        bgcolor: "#31528b",
        transition: "200ms all",
        position: "relative",
        // "&>svg": { fontSize: "2.5rem", fill: "#FFF" },
        "&:hover": { bgcolor: "#31528b", transform: "scale(1.2)" },
      }}
      onClick={() => {
        const win = window.open(props.href, "_blank");
        win?.focus();
      }}
    >
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <Image src={props.icon} fill style={{ objectFit: "contain" }} alt="" />
      </Box>
    </IconButton>
  );
};

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
