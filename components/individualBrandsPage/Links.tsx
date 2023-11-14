import { Box, useTheme } from "@mui/material";
import { BrandDetailsType } from "components/constants";
import Link from "next/link";

export function Links(props: { brandDetails: BrandDetailsType }) {
  const { brandDetails } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        border: `1px solid ${theme.palette.calypsoOrange.light}`,
        px: { xs: 7, md: 17 },
        py: { xs: 7, md: 8 },
        "&>a": {
          textDecoration: "none",
          color: "#000",
          fontSize: 28,
          fontWeight: 700,
        },
      }}
    >
      <Link href={"https://" + brandDetails?.brandWebsiteLink}>
        Visit {brandDetails?.brandWebsiteLink}
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 6, md: 15 },
          mt: 7,
          flexWrap: "wrap",
          //   flexDirection: { xs: "column", md: "row" },
        }}
      >
        {brandDetails?.socialMediaLinks.map((socialMedia, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              "&>a": {
                textDecoration: "none",
                color: theme.palette.calypsoOrange.light,
                fontSize: { xs: 18, md: 24 },
                fontWeight: 400,
              },
            }}
          >
            {socialMedia.map((media, i) => (
              <Link key={media.title + i} href={media.link}>
                {media.title}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
