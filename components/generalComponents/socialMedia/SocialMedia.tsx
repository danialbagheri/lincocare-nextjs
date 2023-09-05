import { IconButton, Stack, SxProps } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import { useRouter } from "next/router";

const IconLink = (props: { children: React.ReactNode; href: string }) => {
  return (
    <IconButton
      sx={{
        fontSize: "2.5rem",
        width: 55,
        height: 55,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        bgcolor: "#31528b",
        transition: "200ms all",
        "&>svg": { fontSize: "2.5rem", fill: "#FFF" },
        "&:hover": { bgcolor: "#31528b", transform: "scale(1.2)" },
      }}
      onClick={() => {
        const win = window.open(props.href, "_blank");
        win?.focus();
      }}
    >
      {props.children}
    </IconButton>
  );
};

export function SocialMedia(props: { sx?: SxProps }) {
  const { sx } = props;
  const socialMedias = [
    {
      id: "facebook",
      icon: (
        <svg
          id="Objects"
          xmlns="http://www.w3.org/2000/svg"
          width="57.49"
          height="57.33"
          viewBox="0 0 57.49 57.33"
        >
          <path
            d="m14.39,24.26h8.19c.05-.57.11-1.02.12-1.46.01-1.93,0-3.86,0-5.79.01-2.22.43-4.35,1.43-6.35,1.93-3.86,5.1-5.83,9.4-5.83,2.66,0,5.32.21,7.98.33.16,0,.32.08.63.16.1,2.5.05,5,.04,7.63-.54.04-.95.1-1.36.11-1.07.03-2.15.01-3.22.05-1.05.04-2.04.3-2.92.89-.89.6-1.64,1.4-1.68,2.48-.09,2.52-.03,5.04-.03,7.73h8.58c.19,1.12-.82,7.91-1.39,9.53h-7.24v22.96c-1.05.37-8.17.47-10.12.17-.04-.5-.11-1.03-.11-1.57,0-6.61,0-13.21,0-19.82v-1.7h-8.26c-.33-1.18-.35-8.15-.05-9.5Z"
            style={{ fill: "#fff" }}
          />
        </svg>
      ),
      link: "https://www.facebook.com/lincocare",
    },
    {
      id: "twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 509.64"
          style={{ fill: "#31528b" }}
        >
          <rect width="512" height="509.64" rx="115.61" ry="115.61" />
          <path
            style={{ transform: "translate(-120px, -115px) scale(1.5)" }}
            fill="#FFF"
            fill-rule="nonzero"
            d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
          />
        </svg>
      ),
      link: "https://twitter.com/lincocare",
    },
    {
      id: "instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/lincocare_/",
    },
    {
      id: "youtube",
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCl0-N0lOSjoPYlc26LN-6mA",
    },
    {
      id: "linkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/lincocare/",
    },
  ];

  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{ mt: { xs: 12, md: 15 }, ...sx }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {socialMedias.map((socialMedia) => (
        <IconLink key={socialMedia.id} href={socialMedia.link}>
          {socialMedia.icon}
        </IconLink>
      ))}
    </Stack>
  );
}
