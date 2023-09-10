import { Box, useTheme } from "@mui/material";
import Image from "next/image";

export function FullImageComponent(props: { imgSrc: string }) {
  const { imgSrc } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: 737,
        position: "fixed",
        top: 100,
        width: "100%",
        bgcolor: theme.palette.lincoBlue.dark,
        left: 0,
        right: 0,
      }}
    >
      <Image
        src={imgSrc}
        alt="Product Formulation"
        fill
        style={{
          objectFit: "cover",
          opacity: "0.5",
        }}
        sizes={"100vw"}
        loading={"lazy"}
      />
    </Box>
  );
}
