/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { CustomLink } from "shared";
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
          About Us
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography color={"#ffffff"} mt={4}>
            At Linco Care, we are committed to pushing the boundaries of
            research and development, striving to innovate and redefine the
            skincare industry. Within onsite labs, we meticulously craft and
            create a range of products for our own brands, as well as our
            private label clients'. Our mission is to provide you with
            exceptional products that not only meet but exceed your
            expectations.
          </Typography>

          <CustomLink
            sx={{
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 4, md: 0 },
            }}
            borderColor={{ xs: theme.palette.lincoYellow.main }}
            href="/aboutUs"
          >
            Know more
          </CustomLink>
        </Box>
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
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Typography color={"#ffffff"} mt={4}>
          Linco Skincare is constantly exploring new avenues of research and
          development to create revolutionary products that will change the
          skincare industry; skincare guaranteed not to rub you up the wrong
          way.
        </Typography>

        <CustomLink
          sx={{ textAlign: { xs: "center", md: "left" }, mt: { xs: 4, md: 0 } }}
          borderColor={{ xs: theme.palette.lincoYellow.main }}
          href="/aboutUs"
        >
          Know more
        </CustomLink>
      </Box>
    </Stack>
  );
}
