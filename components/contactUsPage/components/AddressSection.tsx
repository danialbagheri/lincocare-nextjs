import { Box, Button, Typography, useTheme } from "@mui/material";

export function AddressSection() {
  const theme = useTheme();
  return (
    <Box px={{ xs: 9, md: 0 }}>
      <Typography variant="h4">Address</Typography>
      <Box mt={5} maxWidth="300px">
        <Typography>
          Linco Care Ltd, Linco House, Manchester Road, Carrington, Manchester,
          England M31 4BX
        </Typography>
        <Typography>Telephone : +44 (0) 161 777 9229</Typography>
        <Typography>
          Registered: England & Wales. Company number: 1420923
        </Typography>
      </Box>
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
