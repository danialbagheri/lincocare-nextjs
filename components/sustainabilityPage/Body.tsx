import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "shared";
import { SUSTAINABILITY } from "./components";

export function Body() {
  return (
    <Container
      pt={{ xs: 4, md: 23 }}
      //Hide last divider
      sx={{ "& hr:last-child": { display: "none" } }}
    >
      {SUSTAINABILITY.map((item) => (
        <>
          <Box
            key={item.title}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "100%",
                md: "calc(50% - 32px) calc(50% - 32px)",
              },
              columnGap: 16,
              rowGap: 8,
              py: { xs: 15, md: 22 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                gridColumn:
                  item.imagePos === "left" ? { xs: "1/2", md: "2/3" } : "1/2",
                gridRow: "1/2",
                alignSelf: "end",
              }}
              variant="h2"
              color="lincoBlue.main"
            >
              {item.title}
            </Typography>
            <Box
              sx={{
                gridColumn:
                  item.imagePos === "left" ? { xs: "1/2", md: "2/3" } : "1/2",
                gridRow: { xs: "3/4", md: "2/3" },
                alignSelf: "start",
              }}
            >
              <Typography>{item.description}</Typography>
              {item.description2 && (
                <Typography mt={{ xs: 4, md: 8 }}>
                  {item.description2}
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                gridColumn:
                  item.imagePos === "left" ? "1/2" : { xs: "1/2", md: "2/3" },
                gridRow: { xs: "2/3", md: "1/3" },
                pt: item.pt,
                position: "relative",
              }}
            >
              <Image
                fill
                src={`/images/sustainability/body/${item.imgSrc}`}
                sizes="100vw"
                alt="Renewable Energy Concern"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
          <Divider sx={{ borderColor: "gray.light" }} />
        </>
      ))}
    </Container>
  );
}
