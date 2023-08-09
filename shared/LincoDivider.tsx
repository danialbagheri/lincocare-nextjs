import { Divider, SxProps } from "@mui/material";
import { Container } from "./Container";

export function LincoDivider(props: {
  conSx?: SxProps;
  sx?: SxProps;
  fullWidth?: boolean;
}) {
  return (
    <Container sx={{ ...props.conSx }} fullWidth={props.fullWidth}>
      <Divider sx={{ ...props.sx }} />
    </Container>
  );
}
