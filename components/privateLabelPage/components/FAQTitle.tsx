import { Box, Typography } from "@mui/material";
import { Container } from "shared";

export function FAQTitle() {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          mt: "300px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            position: { xs: "relative", md: "absolute" },
            maxWidth: { xs: "100%", md: "300px" },
            bottom: { xs: "unset", md: 0 },
            left: { xs: "unset", md: "50%" },
            transform: { xs: "unset", md: "translate(-100%,0)" },
            order: 2,
            bgcolor: { xs: "#FFF", md: "unset" },
            py: { xs: 6, md: 0 },
            pr: { xs: 0, md: 15 },
          }}
          typography={"h4"}
          textAlign={{ xs: "center", md: "right" }}
          color="lincoBlue.main"
        >
          Didn’t find your answer above?
        </Typography>
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: "unset", md: 0 },
            left: { xs: "unset", md: "50%" },
            transform: { xs: "unset", md: "translate(-50%,0)" },
            width: 16,
            height: 16,
            borderRadius: "50%",
            order: 1,
          }}
          bgcolor="lincoBlue.main"
        />
        <Typography
          sx={{
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: "unset", md: 0 },
            left: { xs: "unset", md: "50%" },
            order: 3,
            bgcolor: { xs: "#FFF", md: "unset" },
            pl: { xs: 0, md: 15 },
          }}
          variant="h2"
          textAlign={{ xs: "center", md: "left" }}
        >
          FAQ
        </Typography>
      </Box>
    </Container>
  );
}
