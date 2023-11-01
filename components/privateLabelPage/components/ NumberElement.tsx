import { Box, SxProps, Typography } from "@mui/material";

export function NumberElement(props: { number: number; sx?: SxProps }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 72,
        height: 72,
        border: `2px solid #FFF`,
        borderRadius: "50%",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFF",

        ...props.sx,
      }}
    >
      <Typography variant="h3thin">{props.number}</Typography>
    </Box>
  );
}
