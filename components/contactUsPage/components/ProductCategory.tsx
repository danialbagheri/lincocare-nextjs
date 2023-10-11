import { Typography } from "@mui/material";
import { FieldsPropsTypes } from "./types";

const DATA = [
  { title: "Skincare 1", id: "skincare_1" },
  { title: "Skincare 2", id: "skincare_2" },
  { title: "Skincare 3", id: "skincare_3" },
  { title: "Skincare 4", id: "skincare_4" },
  { title: "Skincare 5", id: "skincare_5" },
];

export function ProductCategory(props: FieldsPropsTypes) {
  const { formData, setFormData } = props;
  return (
    <>
      <Typography
        textAlign={{ xs: "center", md: "left" }}
        color="lincoBlue.dark"
        mt={11}
      >
        Product category(s)
      </Typography>
    </>
  );
}
