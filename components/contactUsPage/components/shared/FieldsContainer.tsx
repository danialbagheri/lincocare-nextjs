import { Box, SxProps } from "@mui/material";

export function FieldsContainer(props: {
  sx?: SxProps;
  children: React.ReactNode;
}) {
  const { sx = {}, children } = props;
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: "flex-start" },
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
