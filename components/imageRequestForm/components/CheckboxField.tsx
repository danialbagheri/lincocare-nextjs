import type { Dispatch, SetStateAction } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RequestDataTypes } from "../RequestForm";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface PropsTypes {
  value: boolean;
  label: string;
  setRequestData: Dispatch<SetStateAction<RequestDataTypes>>;
}

export function CheckboxField(props: PropsTypes) {
  const { value = false, setRequestData, label } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequestData((prev) => ({
      ...prev,
      no_directories: event.target.checked,
    }));
  };
  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={value} onChange={handleChange} />}
        label={label}
      />
    </div>
  );
}
