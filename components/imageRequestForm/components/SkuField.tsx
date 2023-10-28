import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import { TextField } from "@mui/material";

import type { RequestDataTypes } from "../RequestForm";
import { Label } from "./Label";

interface PropsTypes {
  value: string[];
  setRequestData: Dispatch<SetStateAction<RequestDataTypes>>;
}

export function SkuField(props: PropsTypes) {
  const { value, setRequestData } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sku_list = e.target.value.split("\n").filter((n) => n);
    setRequestData((prev) => ({ ...prev, sku_list }));
  };

  return (
    <>
      <Label>Enter Product SKU list</Label>
      <TextField
        id="image-request-sku"
        placeholder={"CALC10L\nCALC40"}
        multiline={true}
        variant="outlined"
        onChange={handleChange}
        minRows={10}
      />
    </>
  );
}
