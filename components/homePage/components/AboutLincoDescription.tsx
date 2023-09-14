/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, SxProps, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { CustomLink } from "shared";
/* -------------------------------------------------------------------------- */

/* -------------------------------- Component ------------------------------- */
const DescriptionText = (props: {
  sx?: SxProps;
  borderColor: { xs: string };
}) => (
  <Box sx={{ ...props.sx }}>
    <Typography color={"#ffffff"} mt={4}>
      Linco Skincare is constantly exploring new avenues of research and
      development to create revolutionary products that will change the skincare
      industry; skincare guaranteed not to rub you up the wrong way.
    </Typography>

    <CustomLink
      sx={{ textAlign: { xs: "center", md: "left" }, mt: { xs: 4, md: 0 } }}
      borderColor={props.borderColor}
      href="/aboutUs"
    >
      Know more
    </CustomLink>
  </Box>
);
/* -------------------------------------------------------------------------- */

export function AboutLincoDescription() {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      gap={25}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "35%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h4", md: "h4" },
            minWidth: "300px",
            display: "inline",
          }}
          color={"#ffffff"}
        >
          About Linco
        </Typography>
        <DescriptionText
          sx={{ display: { xs: "none", md: "block" } }}
          borderColor={theme.palette.lincoYellow.main}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "70%" },
          height: { xs: "200px", sm: "300px", md: "unset" },
        }}
      >
        <Image
          src={"/images/homePage/aboutLinco/lincocare.png"}
          alt="Home page - About Linco"
          fill
          style={{ objectFit: "contain" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      </Box>
      <DescriptionText
        sx={{ display: { xs: "block", md: "none" } }}
        borderColor={theme.palette.lincoYellow.main}
      />
    </Stack>
  );
}
