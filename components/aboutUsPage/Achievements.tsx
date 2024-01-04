import { Box, Typography, useTheme } from "@mui/material";
import { Container } from "shared";
import { ACHIEVEMENTS } from "./components";

export function Achievements() {
  const theme = useTheme();
  return (
    <Container>
      <Typography
        variant="h4"
        textAlign="center"
        pt={{ xs: 17, md: 20 }}
        mb={{ xs: 8, md: 25 }}
      >
        Achievements
      </Typography>
      <Box
        sx={{
          borderBottom: `1px solid ${theme.palette.lincoBlue.light}`,

          py: 8,
          mb: 5,

          display: "grid",
          gridTemplateColumns: {
            xs: "100%",
            sm: "50% 50%",
            lg: "repeat(4, 25%)",
          },
          rowGap: { xs: 20, md: 32 },
        }}
      >
        {ACHIEVEMENTS.map((achievement, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
            }}
          >
            <Box
              key={achievement.title}
              color="lincoBlue.main"
              textAlign="center"
            >
              <Typography sx={{ typography: { xs: "h1", md: "h0" } }}>
                {achievement.title}
                <span style={{ fontSize: "40px" }}>{achievement.unit}</span>
              </Typography>
              <Typography sx={{ typography: { xs: "body1", md: "subtitle1" } }}>
                {achievement.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
