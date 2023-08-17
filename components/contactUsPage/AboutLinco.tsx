import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Container, CustomLink } from "shared";

export function AboutLinco() {
  const theme = useTheme();
  return (
    <Container
      fullWidth
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 0, md: 17 },
        pb: { xs: 15, md: 19 },
        pt: { xs: 19, md: 0 },
        bgcolor: { xs: theme.palette.lincoBlue.dark, md: "#fff" },
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        display={{ xs: "block", md: "none" }}
        color="#FFF"
      >
        About Linco
      </Typography>
      <Box width="100%" px={{ xs: 4, md: 0 }}>
        <Box sx={{ position: "relative", pt: "68.3%" }}>
          <Image
            fill
            src="/images/aboutUsPage/about/office.png"
            alt="Linco"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          flexDirection: "column",
          px: { xs: 4, md: 0 },
        }}
      >
        <Typography variant="h4" display={{ xs: "none", md: "block" }}>
          About Linco
        </Typography>
        <Typography
          mt={{ xs: 8, md: 5 }}
          textAlign={{ xs: "center", md: "left" }}
          color={{ xs: "#FFF", md: "#000" }}
        >
          Linco Skincare is constantly exploring new avenues of research and
          development to create revolutionary products that will change the
          skincare industry; skincare guaranteed not to rub you up the wrong
          way.
        </Typography>
        <CustomLink
          href="/aboutUs"
          color={{ xs: "#fff", md: "#000" }}
          borderColor={{
            xs: theme.palette.lincoYellow.main,
            md: theme.palette.lincoBlue.dark,
          }}
        >
          Know more
        </CustomLink>
      </Box>
    </Container>
  );
}
