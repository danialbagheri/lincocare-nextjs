import * as React from "react";

import Box from "@mui/material/Box";
import { SelectChangeEvent, Typography } from "@mui/material";

import SelectBox from "./components/SelectBox";
import {
  BrandSelect,
  EmailField,
  CheckboxField,
  IMAGE_ANGLE_OPTIONS,
  IMAGE_FORMATS,
  IMAGE_TYPE_OPTIONS,
  SkuField,
  SubmitButton,
} from "./components";

import { ReCaptcha } from "components/generalComponents";

export interface RequestDataTypes {
  sku_list: string[];
  image_formats: string[];
  image_types: string[];
  image_angles: string[];
  no_directories: boolean;
  email: string;
  recaptcha: string;
}

export interface BrandTypes {
  id: string;
  title: string;
  endpoint: string;
  selected: boolean;
}

export interface ErrorTypes {
  email: string;
  sku: string;
  recaptcha: string;
}

export function RequestForm() {
  const [brand, setBrand] = React.useState<BrandTypes[]>([
    {
      id: "calypso",
      title: "Calypso",
      endpoint:
        "https://service.calypsosun.com/api/users/variant-image-requests/",
      selected: true,
    },
    {
      id: "cabana",
      title: "Cabana",
      endpoint: "https://api.cabanasun.co.uk/api/users/variant-image-requests/",
      selected: false,
    },
    {
      id: "silkia",
      title: "Silkia",
      endpoint: "https://api.silkia.com/api/users/variant-image-requests/",
      selected: false,
    },
  ]);
  const [error, setError] = React.useState<ErrorTypes>({
    email: "",
    sku: "",
    recaptcha: "",
  });
  const [requestData, setRequestData] = React.useState<RequestDataTypes>({
    sku_list: [],
    image_formats: [IMAGE_FORMATS.PNG.value],
    image_types: [IMAGE_TYPE_OPTIONS.PRODUCT_IMAGE.value],
    image_angles: [IMAGE_ANGLE_OPTIONS.FRONT.value],
    no_directories: false,
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
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5, mt: 10 }}>
      <BrandSelect brand={brand} setBrand={setBrand} />
      <EmailField
        value={requestData.email}
        setRequestData={setRequestData}
        error={error}
      />
      <SkuField
        value={requestData.sku_list}
        setRequestData={setRequestData}
        error={error}
      />
      <SelectBox
        handleChange={(e) => handleSelectChange(e, "image_formats")}
        data={IMAGE_FORMATS}
        value={requestData.image_formats}
        label="Image Format"
      />
      <SelectBox
        handleChange={(e) => handleSelectChange(e, "image_types")}
        data={IMAGE_TYPE_OPTIONS}
        value={requestData.image_types}
        label="Image Type"
      />
      <SelectBox
        handleChange={(e) => handleSelectChange(e, "image_angles")}
        data={IMAGE_ANGLE_OPTIONS}
        value={requestData.image_angles}
        label="Image Angle"
      />
      <ReCaptcha
        handleChange={handleCaptchaChange}
        error={error.recaptcha}
        sx={{ mt: -5 }}
      />
      <CheckboxField
        label="Organise Files: Tick to keep all files in one directory (folder)"
        setRequestData={setRequestData}
        value={requestData.no_directories}
      />
      <SubmitButton
        brand={brand}
        requestData={requestData}
        setError={setError}
      />
    </Box>
  );
}
