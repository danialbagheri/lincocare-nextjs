import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Container } from "shared";

function HomePagePrivateLabel() {
  const theme = useTheme();

  return (
    <Container sx={{ pt: { xs: 20, md: 40 }, pb: 0 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={14}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant={"h2"}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Private label
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 160, md: 300 },
          }}
        >
          <Image
            alt={"private-label"}
            style={{ objectFit: "contain" }}
            fill
            sizes={"100vw"}
            loading={"lazy"}
            src={"/images/homePage/privateLabel/privateLabel.png"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: 4,
            flexGrow: 1,
            width: "70%",
            "&>a": {
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              borderBottom: "2px solid " + theme.palette.lincoBlue.main,
              p: 2,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Private label
          </Typography>
          <Typography color={"lincoBlue.main"}>
            Brief info Brief info Brief info Brief info Brief info Brief info
            Brief info Brief info Brief Brief info Brief info Brief info Brief
            info Brief info Brief info Brief info Brief info Brief{" "}
          </Typography>
          <Link href={"/private_label"}>Know more</Link>
        </Box>
      </Stack>

      <Box
        sx={{
          position: "relative",
          height: 238,
          width: "100%",
          mt: "100px",
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          alt={"Private label process"}
          fill
          src={"/images/homePage/privateLabel/privateLabelProcess.png"}
          style={{ objectFit: "contain" }}
          sizes={"100vw"}
          loading={"lazy"}
        />
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          pt: 25,
          display: { xs: "none", md: "block" },
          "&>a": {
            display: "inline-block",
            textDecoration: "none",
            color: "black",
            borderBottom: "2px solid " + theme.palette.lincoBlue.main,
            p: 2,
          },
        }}
      >
        <Link href="">Private label process</Link>
      </Box>
    </Container>
  );
}

export default HomePagePrivateLabel;
