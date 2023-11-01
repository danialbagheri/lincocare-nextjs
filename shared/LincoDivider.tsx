import { Divider, SxProps } from "@mui/material";
import { Container } from "./Container";

export function LincoDivider(props: {
  conSx?: SxProps;
  sx?: SxProps;
  fullWidth?: boolean;
  id?: string;
}) {
  return (
    <Container
      sx={{ ...props.conSx }}
      fullWidth={props.fullWidth}
      id={props.id}
    >
      <Divider sx={{ ...props.sx }} />
    </Container>
  );
}
