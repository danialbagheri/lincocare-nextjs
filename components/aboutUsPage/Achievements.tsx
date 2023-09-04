import { Box, Stack, Typography, useTheme } from "@mui/material";
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
      <Stack
        sx={{
          borderBottom: `1px solid ${theme.palette.lincoBlue.light}`,

          py: 8,
          mb: 5,

          flexDirection: "row",
          justifyContent: "space-between",
          rowGap: 17,
          columnGap: 9,
          flexWrap: "wrap",
        }}
      >
        {ACHIEVEMENTS.map((achievement) => (
          <Box
            key={achievement.title}
            color="lincoBlue.main"
            textAlign="center"
          >
            <Typography sx={{ typography: { xs: "h1", md: "h0" } }}>
              {achievement.title}
            </Typography>
            <Typography sx={{ typography: { xs: "body1", md: "subtitle1" } }}>
              {achievement.subtitle}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
