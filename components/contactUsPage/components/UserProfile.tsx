import * as React from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box } from "@mui/system";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { FieldsPropsTypes, FormDataTypes } from "./types";
import { SelectFields, TextFields } from "./shared";
/* -------------------------------------------------------------------------- */

const BUTTON_DATA = [
  { title: "General Enquiry", id: "general_enquiry" },
  {
    title: "Manufacturing & Development Enquiry",
    id: "manufacturing_development_enquiry",
  },
];

const FIELDS = [
  { title: "Name", id: "firstName" },
  { title: "Company", id: "company" },
  { title: "Email", id: "email" },
  { title: "Phone", id: "phone" },
];

export function UserProfile(props: FieldsPropsTypes) {
  const { formData, setFormData } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        flexDirection: "column",
        mt: { xs: 5, md: 10 },
      }}
    >
      {/* <SelectFields
        DATA={BUTTON_DATA}
        onChangeHandler={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            contactType: e,
          }))
        }
        value={formData.contactType}
      /> */}

      <TextFields
        DATA={FIELDS}
        formData={formData}
        onChangeHandler={(e, id) =>
          setFormData((prev: any) => ({
            ...prev,
            [id as keyof FormDataTypes]: e.target.value,
          }))
        }
      />
    </Box>
  );
}
