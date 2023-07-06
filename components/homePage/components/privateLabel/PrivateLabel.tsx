import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Container } from "shared";

function PrivateLabel() {
  const theme = useTheme();

  return (
    <Container sx={{ py: { xs: 20, md: 40 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 14, md: 14 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant={"h2"}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Private label
        </Typography>
        <Image
          alt={"private-label"}
          width={595}
          height={322}
          src={"/images/private-label.png"}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: 4,
            "&>a": {
              display: "inline-block",
              textDecoration: "none",
              color: "black",
              borderBottom: "2px solid " + theme.palette.lincoBlue.light,
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
          <Typography color={"lincoBlue.light"}>
            Brief info Brief info Brief info Brief info Brief info Brief info
            Brief info Brief info Brief Brief info Brief info Brief info Brief
            info Brief info Brief info Brief info Brief info Brief{" "}
          </Typography>
          <Link href={""}>Know more</Link>
        </Box>
      </Stack>
    </Container>
  );
}

export default PrivateLabel;
