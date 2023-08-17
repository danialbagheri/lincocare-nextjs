import { Button, MenuItem, Select, SxProps, useTheme } from "@mui/material";
import { FieldsContainer } from "./FieldsContainer";

interface PropsTypes {
  DATA: { id: string | number; title: string }[];
  onChangeHandler: (e: any) => void;
  value: string;
  sx?: SxProps;
}

export function SelectFields(props: PropsTypes) {
  const theme = useTheme();
  const { DATA, onChangeHandler, value, sx = {} } = props;

  return (
    <FieldsContainer sx={{ mt: 4, ...sx }}>
      {DATA.map((_data) => (
        <Button
          variant="outlined"
          sx={{
            bgcolor: value === _data.id ? "#F4F4F4" : "#FFF",
            border: `1px solid ${value === _data.id ? "#000" : "#C2C2C2"}`,
            color: theme.palette.lincoBlue.dark,
            borderRadius: 0,
            fontSize: "16px",
            p: "8px 24px",
            textTransform: "unset",
            boxShadow: "none",
            textWrap: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: { xs: "none", md: "block" },
            "&:hover": {
              bgcolor: value === _data.id ? "#F4F4F4" : "#FFF",
              border: `1px solid ${value === _data.id ? "#000" : "#C2C2C2"}`,
              color: theme.palette.lincoBlue.dark,
              borderRadius: 0,
              boxShadow: "none",
            },
          }}
          onClick={(e) => onChangeHandler(_data.id)}
        >
          {_data.title}
        </Button>
      ))}
      <Select
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        fullWidth
        sx={{
          borderRadius: 0,
          display: { xs: "block", md: "none" },
          maxWidth: 500,
          "&>div": { width: "unset" },
        }}
      >
        {DATA.map((_data) => (
          <MenuItem value={_data.id} sx={{ maxWidth: "100%" }}>
            {_data.title}
          </MenuItem>
        ))}
      </Select>
    </FieldsContainer>
  );
}
