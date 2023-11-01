import { Box, SxProps } from "@mui/material";
import Image from "next/image";

export function RetailerLogo(props: { icon: string | null; sx?: SxProps }) {
  return (
    <Box
      className="centralize"
      sx={{
        width: { xs: "84px", md: "157px" },
        minWidth: { xs: "84px", md: "157px" },
        height: { xs: "42px", md: "80px" },
        position: "relative",
        ...props.sx,
      }}
    >
      <Image
        src={props.icon || ""}
        alt={"Retailer"}
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
