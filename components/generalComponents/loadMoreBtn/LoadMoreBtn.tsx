import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { SxProps, useTheme } from "@mui/material";

interface PropsTypes {
  loading: boolean;
  disabled: boolean;
  loadMoreHandler: () => void;
  sx?: SxProps;
  children: React.ReactNode;
}

export function LoadMoreBtn(props: PropsTypes) {
  const { loading, disabled, loadMoreHandler, sx } = props;
  const theme = useTheme();

  return (
    <LoadingButton
      loading={loading}
      sx={{
        textTransform: "unset",
        color: "#000",
        borderBottom: "3px solid ",
        borderColor: disabled
          ? "rgba(0, 0, 0, 0.26)"
          : theme.palette.lincoBlue.main,
        borderRadius: 0,
        px: 7,
        "&:hover": {
          bgcolor: "transparent",
        },
        display: disabled ? "none" : "block",
        ...sx,
      }}
      disabled={disabled}
      onClick={loadMoreHandler}
    >
      {props.children}
    </LoadingButton>
  );
}
