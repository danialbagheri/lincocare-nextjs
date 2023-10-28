import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import { log } from "console";
import { Label } from "./Label";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    sx: {
      border: "1px solid black",
    },
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface PropsTypes {
  handleChange: (e: SelectChangeEvent<string[]>, type: string) => void;
  label?: string;
  data: { [key: string]: { title: string; value: string } };
  value: string[];
}

const renderProperKey = (selected: string, data: PropsTypes["data"]) => {
  return Object.keys(data).find((key) => data[key].value === selected);
};

export default function SelectBox(props: PropsTypes) {
  const { handleChange, label, data, value } = props;

  return (
    <>
      <Label>{label}</Label>
      <Select
        fullWidth
        id="image_request_select_box"
        input={<OutlinedInput />}
        labelId="image_request_select_box-label"
        MenuProps={MenuProps}
        multiple
        onChange={handleChange}
        renderValue={(selected) => {
          let values = "";

          selected.forEach((select: string, i) => {
            const key = renderProperKey(select, data)!;

            if (i === 0) {
              values = data[key].title;
            } else {
              values = values + ", " + data[key].title;
            }
          });

          return values;
        }}
        value={value}
      >
        {Object.keys(data).map((key) => (
          <MenuItem key={data[key].title} value={data[key].value}>
            <Checkbox
              checked={value.includes(data[key].value)}
              color="secondary"
              sx={{ "& svg": { fill: "#2061AC !important" } }}
            />
            <ListItemText primary={data[key].title} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
