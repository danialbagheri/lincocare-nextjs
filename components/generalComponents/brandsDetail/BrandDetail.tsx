/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Stack, Typography, useTheme } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Container, CustomLink } from "shared";
import { BrandDetailsType, BRANDS_ID } from "components/constants";
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Interfaces ------------------------------- */
interface BrandDescriptionTypes {
  borderColor: string;
  description: string;
  display: { xs: string; md: string };
  privateLabel?: boolean;
  details?: BrandDetailsType;
}
/* -------------------------------------------------------------------------- */

/* ------------------------------- Components ------------------------------- */
const BrandDescription = (props: BrandDescriptionTypes) => {
  const theme = useTheme();

  return (
    <Box display={{ ...props.display }} mt={{ xs: 15, md: 5 }}>
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
          href={props.details?.knowMoreLink || ""}
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
          href={`https://${props.details?.brandWebsiteLink}`}
          openInNewPage
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

  const renderBrandName = (details: BrandDetailsType) => {
    if (details) {
      if (
        details.id === BRANDS_ID.SILKIA_DEPILATORY ||
        details.id === BRANDS_ID.SILKIA_PEDICARE
      ) {
        return details.fullName;
      } else {
        return details.name;
      }
    }
  };

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
      mb={{ xs: 0, md: "150px" }}
    >
      <Container>
        <Stack
          alignItems={{ xs: "center", md: "flex-end" }}
          justifyContent={"center"}
          direction={{
            xs: "column",
            md: details?.privateLabel ? "row-reverse" : "row",
          }}
          gap={{ xs: 0, md: 10 }}
        >
          <Box
            width={{ xs: "100%", md: "40%" }}
            sx={{
              display: { xs: "flex", md: "unset" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {details.whiteLogoSrc ? (
              <Box sx={{ width: 300, height: 104, position: "relative" }}>
                <Image
                  alt={details.name}
                  src={details.whiteLogoSrc}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ) : (
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
                {renderBrandName(details)}
              </Typography>
            )}

            <BrandDescription
              privateLabel={details?.privateLabel}
              display={{ xs: "none", md: "block" }}
              borderColor={details?.color}
              description={details?.description}
              details={details}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              position: "relative",
              height: 420,
              mt: 8,
              "&>img": {
                mt: { xs: 0, md: details?.mt },
              },
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
            details={details}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
