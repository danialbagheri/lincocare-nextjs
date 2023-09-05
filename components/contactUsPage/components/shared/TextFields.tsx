import { SxProps, TextField } from "@mui/material";
import { FormDataTypes } from "../types";
import { FieldsContainer } from "./FieldsContainer";

interface PropsTypes {
  DATA: { id: string; title: string }[];
  onChangeHandler: (e: any, id: string) => void;
  formData: FormDataTypes;
  sx?: SxProps;
  required?: boolean;
}

export function TextFields(props: PropsTypes) {
  const { DATA, onChangeHandler, sx, formData, required = true } = props;
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
          required={_data.id === "phone" ? false : true}
          label={_data.title}
          value={formData[_data.id as keyof FormDataTypes]}
          onChange={(e) => onChangeHandler(e, _data.id)}
          variant="standard"
        />
      ))}
    </FieldsContainer>
  );
}
