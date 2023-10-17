import * as React from "react";

import { Box, SxProps, Typography } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

import { FormDataTypes, Message, SubmitBtn, UserProfile } from "./components";

interface PropsTypes {
  sx: SxProps;
}

export function ContactForm(props: PropsTypes) {
  const { sx } = props;
  const recaptchaRef = React.useRef(null);
  const [formData, setFormData] = React.useState<FormDataTypes>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    reason: "customer_service_emails",
    recaptcha: "",
  });
  const [error, setError] = React.useState({ email: "", recaptcha: "" });

  const handleCaptchaSubmission = (e: string) => {
    setFormData((prev) => ({ ...prev, recaptcha: e }));
  };

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
        <UserProfile
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
        {/* <RequiredServices formData={formData} setFormData={setFormData} /> */}
        {/* <ProductCategory formData={formData} setFormData={setFormData} />
        <CompanyDetails formData={formData} setFormData={setFormData} /> */}
        <Message formData={formData} setFormData={setFormData} />
        <Box mt={8}>
          <ReCAPTCHA
            sitekey="6LfjPaEUAAAAAPGfkx7Nxp3glAdPGbLZE3lwY5c9"
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
          {error.recaptcha ? (
            <Typography mt={1} color="red" fontSize="12px">
              {error.recaptcha}
            </Typography>
          ) : null}
        </Box>
        <SubmitBtn
          formData={formData}
          setFormData={setFormData}
          error={error}
          setError={setError}
        />
      </Box>
    </>
  );
}
