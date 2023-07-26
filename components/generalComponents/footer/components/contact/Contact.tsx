import { Box, Typography } from "@mui/material";

import Image from "next/image";

function Contact() {
  return (
    <Box order={{ xs: 2, md: 1 }}>
      <Box pb={20} sx={{ display: { xs: "none", md: "block" } }}>
        <Image
          alt={"linco care"}
          src="/icons/lincoNameDesktop.png"
          width={251}
          height={34}
        />
      </Box>
      <Typography mb={5} color={"lincoYellow.main"} variant={"h6"}>
        Contact
      </Typography>
      <Typography color={"#FFFFFF"}>
        Telephone : +44 (0) 161 777 9229
      </Typography>
      <Typography color={"#FFFFFF"}>
        Fax Number: +44 (0) 161 777 6922
      </Typography>
      <Typography mt={4} color={"#FFFFFF"}>
        Email : info@lincocare.com
      </Typography>
    </Box>
  );
}

export default Contact;
