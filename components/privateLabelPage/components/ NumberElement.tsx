import { Box, SxProps, Typography, useTheme } from "@mui/material";

export function NumberElement(props: {
  number: number;
  sx?: SxProps;
  hover: boolean;
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        width: 72,
        height: 72,
        border: `2px solid ${
          props.hover ? "#FFF" : theme.palette.lincoBlue.main
        }`,
        borderRadius: "50%",
        left: { xs: "50%", md: 0 },
        top: 0,
        transform: {
          xs: "translate(-50%,-50px)",
          md: "translate(-50%,75%)",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: props.hover ? "transparent" : "#FFFFFF",

        ...props.sx,
      }}
    >
      {props.hover ? (
        <>
          <Box
            sx={{
              position: "absolute",
              height: "500px",
              width: "2px",
              bottom: "100%",
              left: "50%",
              bgcolor: "#FFFFFF",
              transform: "translate(-50%,0)",
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "2px",
              top: "100%",
              left: "50%",
              bgcolor: "#FFFFFF",
              transform: "translate(-50%,0)",
              display: { xs: "none", md: "block" },
            }}
          />
        </>
      ) : null}
      <Typography
        variant="h3thin"
        color={props.hover ? "#FFFFFF" : "lincoBlue.main"}
      >
        {props.number}
      </Typography>
    </Box>
  );
}