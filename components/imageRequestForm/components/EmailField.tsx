import type { Dispatch, SetStateAction } from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { TextField } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { Label } from "./Label";
import { ErrorTypes, RequestDataTypes } from "../RequestForm";
/* -------------------------------------------------------------------------- */

interface PropsTypes {
  value: string;
  setRequestData: Dispatch<SetStateAction<RequestDataTypes>>;
  error: ErrorTypes;
}

export function EmailField(props: PropsTypes) {
  const { value, setRequestData, error } = props;

  const handleChange = (v: string) => {
    setRequestData((prev) => ({ ...prev, email: v }));
  };

  return (
    <>
      <Label>Email address</Label>
      <TextField
        id="image-request-email"
        label="Email address"
        variant="outlined"
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        error={Boolean(error.email)}
        helperText={error.email}
      />
    </>
  );
}
