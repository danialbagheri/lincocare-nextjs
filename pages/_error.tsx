import { Typography } from "@mui/material";
import Link from "next/link";
import { Container } from "shared";

const Custom404 = () => {
  return (
    <Container sx={{ mt: { xs: 60, md: 80 }, pb: 20 }} color="lincoBlue.dark">
      <Typography textAlign="center" fontSize={100}>
        404
      </Typography>
      <Typography
        sx={{ mt: 30 }}
        textAlign="center"
        variant="h6"
        fontWeight={600}
      >
        Oops! It looks like the page you are looking for does not exist.
      </Typography>
      <Typography
        textAlign="center"
        variant="h6"
        sx={{ "&>a": { textDecoration: "underline" } }}
      >
        You can go back to the <Link href="/">homepage</Link>
      </Typography>
    </Container>
  );
};

export default Custom404;
