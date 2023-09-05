import { Box, Typography } from "@mui/material";
import { CustomLink } from "shared";

interface PropTypes {
  title: string;
  description: string;
}

export function AboutItem(props: PropTypes) {
  const { title, description } = props;

  return (
    <Box>
      <Typography variant="h2" color="lincoBlue.main">
        {title}
      </Typography>
      <Typography
        textAlign="justify"
        mt={6}
        sx={{
          display: { xs: "-webkit-box", md: "block" },
          webkitLineClamp: { xs: "3", md: "unset" },
          webkitBoxOrient: { xs: "vertical", md: "unset" },
          overflow: { xs: "hidden", md: "visible" },
        }}
      >
        {description}
      </Typography>
      <CustomLink
        href=""
        color="#000"
        borderColor={{ xs: "lincoBlue.main" }}
        display={{ xs: "block", md: "none" }}
      >
        Know more
      </CustomLink>
    </Box>
  );
}
