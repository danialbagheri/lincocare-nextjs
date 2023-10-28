import * as React from "react";

import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material";

import SelectBox from "./components/SelectBox";
import {
  EmailField,
  IMAGE_ANGLE_OPTIONS,
  IMAGE_FORMAT,
  IMAGE_TYPE_OPTIONS,
  SkuField,
  SubmitButton,
} from "./components";
import { ReCaptcha } from "components/generalComponents";

export interface RequestDataTypes {
  sku_list: string[];
  image_format: string[];
  image_type: string[];
  image_angle: string[];
  email: string;
  recaptcha: string;
}

export function RequestForm() {
  const [requestData, setRequestData] = React.useState<RequestDataTypes>({
    sku_list: [],
    image_format: [IMAGE_FORMAT.PNG.value],
    image_type: [IMAGE_TYPE_OPTIONS.PRODUCT_IMAGE.value],
    image_angle: [IMAGE_ANGLE_OPTIONS.FRONT.value],
    email: "",
    recaptcha: "",
  });

  const handleSelectChange = (e: SelectChangeEvent<string[]>, key: string) => {
    setRequestData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleCaptchaChange = (v: string) => {
    setRequestData((prev) => ({ ...prev, recaptcha: v }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5, mt: 20 }}>
      <EmailField value={requestData.email} setRequestData={setRequestData} />
      <SkuField value={requestData.sku_list} setRequestData={setRequestData} />
      <SelectBox
        handleChange={(e) => handleSelectChange(e, "image_format")}
        data={IMAGE_FORMAT}
        value={requestData.image_format}
        label="Image Format"
      />
      <SelectBox
        handleChange={(e) => handleSelectChange(e, "image_type")}
        data={IMAGE_TYPE_OPTIONS}
        value={requestData.image_type}
        label="Image Type"
      />
      <SelectBox
        handleChange={(e) => handleSelectChange(e, "image_angle")}
        data={IMAGE_ANGLE_OPTIONS}
        value={requestData.image_angle}
        label="Image Angle"
      />
      <ReCaptcha handleChange={handleCaptchaChange} />
      <SubmitButton />
    </Box>
  );
}
