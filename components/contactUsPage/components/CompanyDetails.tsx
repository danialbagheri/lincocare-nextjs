import { Box } from "@mui/material";
import { TextFields } from "./shared";
import { FieldsPropsTypes, FormDataTypes } from "./types";

const DATA = [
  { title: "Company Name", id: "companyName" },
  { title: "Number of SKU", id: "sku" },
  { title: "Order quantity (3K min)", id: "orderQuantity" },
];

export function CompanyDetails(props: FieldsPropsTypes) {
  const { formData, setFormData } = props;
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextFields
        required={false}
        DATA={DATA}
        formData={formData}
        onChangeHandler={(e, id) =>
          setFormData((prev: any) => ({
            ...prev,
            [id as keyof FormDataTypes]: e.target.value,
          }))
        }
        sx={{ mt: { xs: 11, md: 13 } }}
      />
    </Box>
  );
}
