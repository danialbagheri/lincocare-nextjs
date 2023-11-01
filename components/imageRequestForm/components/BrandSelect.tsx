import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { Label } from "./Label";
import { BrandTypes } from "../RequestForm";

interface PropsTypes {
  brand: BrandTypes[];
  setBrand: (v: any) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export function BrandSelect(props: PropsTypes) {
  const { brand, setBrand } = props;

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
  const handleChange = (e: SelectChangeEvent<string[]>) => {
    const newBrandArr = [...brand];
    const selectedId = e.target.value;
    const selectedIndex = newBrandArr.findIndex((_b) => _b.id === selectedId);

    newBrandArr.forEach((_b, i) => {
      if (i === selectedIndex) {
        newBrandArr[i].selected = true;
      } else {
        newBrandArr[i].selected = false;
      }
    });

    setBrand(newBrandArr);
  };

  const renderValue = () => {
    const selectedBrand = brand.filter((_b) => _b.selected === true);
    return [selectedBrand[0].id];
  };
  return (
    <>
      <Label>Brand</Label>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        MenuProps={MenuProps}
        value={renderValue()}
        onChange={handleChange}
      >
        {brand.map((_b) => (
          <MenuItem key={_b.id} value={_b.id}>
            {_b.title}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
