import { Box, Button, Typography, useTheme } from "@mui/material";

export function AddressSection() {
  const theme = useTheme();
  return (
    <Box px={{ xs: 9, md: 0 }}>
      <Button
        sx={{
          textTransform: "unset",
          color: theme.palette.lincoBlue.main,
          fontSize: 16,
          mt: 8,
          borderBottom: `1px solid ${theme.palette.lincoBlue.main}`,
          borderRadius: 0,
        }}
        onClick={() =>
          window.open("https://maps.app.goo.gl/EEQQmUM4eQvaP4Xa6", "_blank")
        }
      >
        Click here if you need direction
      </Button>
    </Box>
  );
}
