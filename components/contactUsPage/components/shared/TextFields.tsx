import { SxProps, TextField } from "@mui/material";
import { ErrorTypes, FormDataTypes } from "../types";
import { FieldsContainer } from "./FieldsContainer";

interface PropsTypes {
  DATA: { id: string; title: string }[];
  onChangeHandler: (e: any, id: string) => void;
  formData: FormDataTypes;
  sx?: SxProps;
  error?: { email: string; recaptcha: string };
}

export function TextFields(props: PropsTypes) {
  const { DATA, onChangeHandler, sx, formData, error } = props;
  return (
    <FieldsContainer
      sx={{
        mt: { xs: 12, md: 9 },
        maxWidth: { xs: 500, md: "unset" },
        "&>div": { minWidth: 250, width: { xs: "100%", md: "unset" } },
        ...sx,
      }}
    >
      {DATA.map((_data) => (
        <TextField
          key={_data.id}
          required={_data.id === "email" ? true : false}
          label={_data.title}
          error={Boolean(error && error[_data.id as keyof ErrorTypes])}
          value={formData[_data.id as keyof FormDataTypes]}
          onChange={(e) => onChangeHandler(e, _data.id)}
          helperText={error ? error[_data.id as keyof ErrorTypes] : ""}
          variant="standard"
        />
      ))}
    </FieldsContainer>
  );
}
