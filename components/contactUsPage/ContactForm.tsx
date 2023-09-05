import * as React from "react";

import {
  Box,
  Button,
  Divider,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CompanyDetails,
  FormDataTypes,
  Message,
  ProductCategory,
  RequiredServices,
  SubmitBtn,
  UserProfile,
} from "./components";
import { LincoDivider } from "shared";

interface PropsTypes {
  sx: SxProps;
}

export function ContactForm(props: PropsTypes) {
  const { sx } = props;
  const [formData, setFormData] = React.useState<FormDataTypes>({
    contactType: "general_enquiry",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    requiredService: "formulation",
    productCategory: "skincare_1",
    companyName: "",
    sku: "",
    orderQuantity: "",
    message: "",
  });

  return (
    <>
      <Box
        sx={{
          ...sx,
          pl: { xs: 9, md: 25 },
          pr: { xs: 9, md: 0 },
          pb: 25,
        }}
      >
        <Typography variant="h4" textAlign="center">
          Contact form
        </Typography>
        <UserProfile formData={formData} setFormData={setFormData} />
        {/* <RequiredServices formData={formData} setFormData={setFormData} /> */}
        {/* <ProductCategory formData={formData} setFormData={setFormData} />
        <CompanyDetails formData={formData} setFormData={setFormData} /> */}
        <Message formData={formData} setFormData={setFormData} />
        <SubmitBtn formData={formData} setFormData={setFormData} />
      </Box>
    </>
  );
}
