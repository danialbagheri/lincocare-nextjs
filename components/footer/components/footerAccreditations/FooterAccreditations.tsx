import { Box } from "@mui/material";
import Image from "next/image";

function FooterAccreditations() {
  return (
    <Box
      p={7}
      bgcolor={"#FFFFFF"}
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        display: { xs: "none", lg: "block" },
      }}
    >
      <Image
        alt={"accreditations"}
        src={"/images/footer/accreditations.png"}
        width={214}
        height={308}
      />
    </Box>
  );
}

export default FooterAccreditations;
