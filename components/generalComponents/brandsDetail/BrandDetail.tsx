/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Container, CustomLink } from "shared";
import { BrandDetailsType } from "components/constants";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Interfaces ------------------------------- */
interface BrandDetailTypes {
  name: string;
  imageSrc: string;
  description: string;
  color: string;
  borderColor: string;
  privateLabel?: boolean;
}

interface BrandDescriptionTypes {
  borderColor: string;
  description: string;
  display: { xs: string; md: string };
  privateLabel?: boolean;
}
/* -------------------------------------------------------------------------- */

/* ------------------------------- Components ------------------------------- */
const BrandDescription = (props: BrandDescriptionTypes) => {
  const theme = useTheme();

  return (
    <Box display={{ ...props.display }} mt={15}>
      <Typography
        color={props.privateLabel ? "#000" : "#FFFFFF"}
        mt={{ xs: "", md: 3 }}
        pb={10}
      >
        {props.description}
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={{
          xs: props.privateLabel ? "center" : "flex-start",
          md: "flex-start",
        }}
        gap={10}
      >
        <CustomLink
          color={{ xs: props.privateLabel ? "#000" : "#FFFFFF", md: "#000" }}
          borderColor={{
            xs: props.privateLabel
              ? theme.palette.lincoBlue.dark
              : theme.palette.lincoYellow.main,
            md: props.privateLabel
              ? theme.palette.lincoBlue.dark
              : props.borderColor,
          }}
          href=""
        >
          Know more
        </CustomLink>
        <CustomLink
          display={props.privateLabel ? "none" : "block"}
          color={{ xs: "#FFFFFF", md: "#000" }}
          borderColor={{
            xs: theme.palette.lincoYellow.main,
            md: props.borderColor,
          }}
          href=""
        >
          Brand website
        </CustomLink>
      </Stack>
    </Box>
  );
};
/* -------------------------------------------------------------------------- */

export default function BrandDetail(props: { details: BrandDetailsType }) {
  const { details } = props;

  return (
    <Stack
      sx={{
        width: "100%",
        background: {
          xs: details?.color,
          md: `linear-gradient(to bottom, ${details?.color} 75%, white 50%)`,
        },
        position: "relative",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      pb={{ xs: 14, md: 20 }}
      pt={20}
    >
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={{
            xs: "column",
            md: details?.privateLabel ? "row-reverse" : "row",
          }}
          gap={{ xs: 0, md: 10 }}
          pt={{ xs: 0, md: 10 }}
        >
          <Box width={"100%"}>
            <Typography
              textTransform={"capitalize"}
              color={details?.privateLabel ? "#000" : "#FFFFFF"}
              textAlign={{ xs: "center", md: "left" }}
              mt={{ xs: 13, md: 5 }}
              sx={{
                typography: { xs: "h4", md: "h1" },
                fontWeight: "700 ",
              }}
            >
              {details?.name}
            </Typography>
            <BrandDescription
              privateLabel={details?.privateLabel}
              display={{ xs: "none", md: "block" }}
              borderColor={details?.color}
              description={details?.description}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              height: 320,
              mt: 8,
            }}
          >
            <Image
              src={details?.imageSrc}
              alt="Accreditations"
              fill
              style={{ objectFit: "contain" }}
              sizes={"100vw"}
              loading={"lazy"}
            />
          </Box>
          <BrandDescription
            privateLabel={details?.privateLabel}
            display={{ xs: "block", md: "none" }}
            borderColor={details?.borderColor}
            description={details?.description}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
