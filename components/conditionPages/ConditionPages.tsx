import { Box, Typography } from "@mui/material";
import { Container, HeadContainer, LincoDivider } from "shared";
import { DATA } from "./components";

export function ConditionPages(props: {
  pageType: "disclaimer" | "privacyPolicy";
  title: string;
}) {
  const { pageType, title } = props;

  return (
    <>
      <Typography
        textAlign="center"
        sx={{ typography: { xs: "h4", md: "h2" }, pt: { xs: 38, md: 66 } }}
      >
        {title}
      </Typography>
      <LincoDivider
        fullWidth
        sx={{ mt: { xs: 13, md: 21 }, mb: 10, borderColor: "gray.light" }}
      />
      <Container>
        {DATA[pageType].map((d) => (
          <Box>
            <Typography fontSize="16px" fontWeight="700">
              {d.title}
            </Typography>
            <Typography mb={7}>{d.description}</Typography>
          </Box>
        ))}
      </Container>
    </>
  );
}
