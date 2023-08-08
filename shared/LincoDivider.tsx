import { Divider, SxProps } from "@mui/material";
import { Container } from "./Container";

export function LincoDivider(props: { conSx?: SxProps; sx?: SxProps }) {
  return (
    <Container sx={{ ...props.conSx }}>
      <Divider sx={{ ...props.sx }} />
    </Container>
  );
}
