import { Typography } from "@mui/material";
import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface PropsTypes {
  error?: string;
  handleChange: (v: string) => void;
}

export function ReCaptcha(props: PropsTypes) {
  const { error, handleChange } = props;
  const recaptchaRef = React.useRef(null);
  return (
    <>
      <ReCAPTCHA
        sitekey="6LfjPaEUAAAAAPGfkx7Nxp3glAdPGbLZE3lwY5c9"
        ref={recaptchaRef}
        onChange={handleChange}
      />
      {error ? (
        <Typography mt={1} color="red" fontSize="12px">
          {error}
        </Typography>
      ) : null}
    </>
  );
}
