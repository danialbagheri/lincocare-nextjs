import { Box, Icon, Stack } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const IconLink = (props: { children: React.ReactNode }) => {
  return (
    <Icon
      sx={{
        fontSize: "2.5rem",
        width: 60,
        height: 60,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        bgcolor: "#31528b",
        "&>svg": { fontSize: "2.5rem", fill: "#FFF" },
      }}
    >
      {props.children}
    </Icon>
  );
};

function FooterSocialMedia() {
  const socialMedias = [
    {
      id: "facebook",
      icon: (
        <Image
          src="/icons/facebook.svg"
          width={50}
          height={50}
          alt="facebook"
        />
      ),
      link: "",
    },
    {
      id: "twitter",
      icon: <TwitterIcon />,
      link: "",
    },
    {
      id: "google",
      icon: <GoogleIcon />,
      link: "",
    },
    {
      id: "youtube",
      icon: <YouTubeIcon />,
      link: "",
    },
    {
      id: "linkedIn",
      icon: <LinkedInIcon />,
      link: "",
    },
  ];

  return (
    <Stack
      direction={"row"}
      gap={2}
      mt={{ xs: 12, md: 15 }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {socialMedias.map((socialMedia) => (
        <IconLink key={socialMedia.id}>{socialMedia.icon}</IconLink>
      ))}
    </Stack>
  );
}

export default FooterSocialMedia;
