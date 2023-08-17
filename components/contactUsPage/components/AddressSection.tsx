import { Box, Button, Typography, useTheme } from "@mui/material";

export function AddressSection() {
  const theme = useTheme();
  return (
    <Box px={{ xs: 9, md: 0 }}>
      <Typography variant="h4">Address</Typography>
      <Typography mt={4}>
        Linco Care Ltd,
        <br />
        Linco House, Manchester Road, Carrington, Manchester, England M31 4BX
        <br />
        Telephone : +44 (0) 161 777 9229
        <br />
        Registered: England & Wales.
        <br />
        Company number: 1420923
      </Typography>
      <Button
        sx={{
          textTransform: "unset",
          color: theme.palette.lincoBlue.main,
          fontSize: 16,
          mt: 8,
          borderBottom: `1px solid ${theme.palette.lincoBlue.main}`,
          borderRadius: 0,
        }}
      >
        Click here if you need direction
      </Button>
    </Box>
  );
}
