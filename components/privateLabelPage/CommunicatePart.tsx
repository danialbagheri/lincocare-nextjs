import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { Container } from "shared";

const DATA = [
  {
    id: "question",
    question: "Got a question? Ask away!",
    title: "Send us a message",
    button: "Send a message now",
    link: "/contact-us",
  },
];

export function CommunicatePart() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      {DATA.map((d) => (
        <Container
          key={d.id}
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "flex-start",
            alignItems: "center",
            height: { xs: "unset", md: 500 },
            pt: { xs: "54px", md: "unset" },
            pb: { xs: 30, md: "unset" },
          }}
        >
          <Divider
            sx={{
              position: "absolute",
              top: 0,
              width: { xs: "80%", md: "100%" },
              bgcolor: "gray.main",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              height: { xs: "54px", md: "50%" },
              width: "1px",
              top: 0,
              left: "50%",
              transform: "translate(-1px,0)",
            }}
            bgcolor="gray.main"
          />
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              height: 16,
              width: 16,
              top: { xs: "unset", md: "50%" },
              left: { xs: "unset", md: "50%" },
              transform: { xs: "unset", md: "translate(-50%,-100%)" },
              borderRadius: "50%",
              order: 1,
            }}
            bgcolor="gray.light"
          />
          <Typography
            sx={{
              width: { xs: "100%", md: "315px" },
              position: { xs: "relative", md: "absolute" },
              bottom: { xs: "unset", md: "50%" },
              right: { xs: "unset", md: "50%" },
              px: { xs: 0, md: 9 },
              order: 2,
            }}
            textAlign={{ xs: "center", md: "left" }}
            variant="h4"
            color="lincoBlue.main"
            mt={{ xs: 12, md: "unset" }}
          >
            {d.question}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 4,
              width: { xs: "100%", md: "360px" },
              position: { xs: "relative", md: "absolute" },
              bottom: { xs: "unset", md: "50%" },
              left: { xs: "unset", md: "50%" },
              transform: { xs: "unset", md: "translate(0,50%)" },
              px: { xs: 0, md: 15 },
              order: 3,
            }}
          >
            <Typography
              variant="h2"
              textAlign={{ xs: "center", md: "left" }}
              mt={{ xs: 4, md: "unset" }}
            >
              {d.title}
            </Typography>
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  bgcolor: theme.palette.lincoBlue.main,
                  boxShadow: "unset",
                },
                bgcolor: theme.palette.lincoBlue.main,
                color: "#FFF",
                width: { xs: "min(100%,340px)", md: "340px" },
                mt: { xs: 10, md: "unset" },
              }}
              onClick={() => router.push(d.link)}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 400,
                  textTransform: "none",
                  padding: "10px 30px",
                }}
                textAlign={{ xs: "center", md: "left" }}
              >
                {d.button}
              </Typography>
            </Button>
          </Box>
        </Container>
      ))}
    </>
  );
}
