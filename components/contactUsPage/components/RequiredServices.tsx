import { Box, Typography } from "@mui/material";
import { SelectFields } from "./shared";

import { FieldsPropsTypes } from "./types";

const BUTTONS_DATA = [
  { title: "Formulation", id: "formulation" },
  { title: "Manufacturing", id: "manufacturing" },
  { title: "Something else", id: "else" },
];

export function RequiredServices(props: FieldsPropsTypes) {
  const { formData, setFormData } = props;

  return (
    <Box sx={{ mt: { xs: 11, md: 18 } }}>
      <Typography
        color="lincoBlue.dark"
        textAlign={{ xs: "center", md: "left" }}
      >
        Which service do you require
      </Typography>

      <SelectFields
        DATA={BUTTONS_DATA}
        value={formData.requiredService}
        onChangeHandler={(e: any) => {
          setFormData((prev: any) => ({
            ...prev,
            requiredService: e,
          }));
        }}
      />
    </Box>
  );
}
