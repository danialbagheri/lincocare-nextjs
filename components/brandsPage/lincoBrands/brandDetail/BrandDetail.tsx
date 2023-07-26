import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Container, CustomLink } from "shared";

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
          xs: props.privateLabel ? "center" : "space-between",
          md: "space-between",
        }}
      >
        <CustomLink
          color={{ xs: props.privateLabel ? "#000" : "#FFFFFF", md: "#000" }}
          borderColor={{
            xs: props.privateLabel
              ? props.borderColor
              : theme.palette.lincoYellow.main,
            md: props.borderColor,
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

function BrandDetail(props: BrandDetailTypes) {
  return (
    <Stack
      sx={{
        width: "100%",
        background: {
          xs: props.privateLabel ? "#FFFFFF" : props.color,
          md: `linear-gradient(to bottom, ${props.color} 65%, white 50%)`,
        },
        position: "relative",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      pb={{ xs: 14, md: 20 }}
    >
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={{
            xs: "column",
            md: props.privateLabel ? "row-reverse" : "row",
          }}
          gap={{ xs: 0, md: 10 }}
          pt={{ xs: 0, md: 10 }}
        >
          <Box width={"100%"}>
            <Typography
              textTransform={"capitalize"}
              color={props.privateLabel ? "#000" : "#FFFFFF"}
              textAlign={{ xs: "center", md: "left" }}
              mt={{ xs: 13, md: 5 }}
              sx={{
                typography: { xs: "h2", md: "h1" },
                fontWeight: "700 ",
              }}
            >
              {props.name}
            </Typography>
            <BrandDescription
              privateLabel={props.privateLabel}
              display={{ xs: "none", md: "block" }}
              borderColor={props.borderColor}
              description={props.description}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              height: { xs: "300px", md: "400px" },
              mt: 8,
            }}
          >
            <Image
              src={props.imageSrc}
              alt="Accreditations"
              fill
              style={{ objectFit: "contain" }}
              sizes={"100vw"}
              loading={"lazy"}
            />
          </Box>
          <BrandDescription
            privateLabel={props.privateLabel}
            display={{ xs: "block", md: "none" }}
            borderColor={props.borderColor}
            description={props.description}
          />
        </Stack>
      </Container>
    </Stack>
  );
}

export default BrandDetail;
