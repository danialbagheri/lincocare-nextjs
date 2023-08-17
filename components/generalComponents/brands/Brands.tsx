import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Container, CustomLink } from "shared";
import { BRANDS_IMAGE } from "../../aboutUsPage/components";

export function Brands() {
  return (
    <Container py={{ xs: 15, md: 20 }} textAlign="center">
      <Typography variant="h4" textAlign="center">
        Brands
      </Typography>
      <Box overflow="scroll" mt={{ xs: 12, md: 15 }}>
        <Box
          sx={{
            display: "flex",
            gap: 22,
            animation: "slide 15s linear infinite",
          }}
        >
          {BRANDS_IMAGE.map((img) => (
            <Image
              key={img.id}
              src={img.src}
              width={168}
              height={79}
              alt={img.id}
            />
          ))}
        </Box>
      </Box>
      <CustomLink
        href="/brands"
        color="#000"
        borderColor={{ xs: "lincoBlue.main" }}
        mt={8}
      >
        All Linco brands
      </CustomLink>
    </Container>
  );
}
