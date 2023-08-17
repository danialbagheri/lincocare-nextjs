import { Box, TextField, Typography } from "@mui/material";
import { FieldsPropsTypes } from "./types";

export function Message(props: FieldsPropsTypes) {
  const { formData, setFormData } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        color="lincoBlue.dark"
        mb={3}
        mt={{ xs: 12, md: 15 }}
        sx={{ width: "100%", maxWidth: { xs: "500px", md: "100%" } }}
      >
        Message
      </Typography>
      <TextField
        multiline
        rows={5}
        value={formData.message}
        onChange={(e) =>
          setFormData((prev: any) => ({ ...prev, message: e.target.value }))
        }
        sx={{ width: "100%", maxWidth: { xs: "500px", md: "100%" } }}
      />
    </Box>
  );
}
