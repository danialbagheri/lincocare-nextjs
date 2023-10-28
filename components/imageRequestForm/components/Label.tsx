import { InputLabel, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface PropsTypes {
  children: ReactNode;
  sx?: SxProps;
}

export function Label(props: PropsTypes) {
  return (
    <InputLabel
      sx={{
        mb: -3,
        fontWeight: 700,
        fontSize: "18px",
        color: "#000",
        ...props.sx,
      }}
    >
      {props.children}
    </InputLabel>
  );
}
