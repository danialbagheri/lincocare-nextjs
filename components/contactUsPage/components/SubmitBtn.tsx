import { Box, Button, useTheme } from "@mui/material";
import { FieldsPropsTypes } from "./types";

export function SubmitBtn(props: FieldsPropsTypes) {
  const theme = useTheme();
  return (
    <Box sx={{ margin: "0 auto", maxWidth: { xs: "500px", md: "100%" } }}>
      <Button
        variant="contained"
        sx={{
          mt: 8,
          bgcolor: theme.palette.lincoBlue.dark,
          borderRadius: 0,
          width: { xs: "100%", sm: 136 },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
