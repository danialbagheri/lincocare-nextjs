import { Box, SxProps } from "@mui/material";

interface PropTypes {
  sx?: SxProps;
}

export function SocialMediaSection(props: PropTypes) {
  const { sx } = props;
  return <Box sx={{ ...sx }}>SocialMediaSection</Box>;
}
