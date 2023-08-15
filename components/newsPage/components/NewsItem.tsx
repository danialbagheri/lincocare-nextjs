import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { BlogRes } from "services/lincoServicesTypes";
import { manipulateDate } from "utils";

interface PropTypes {
  data: BlogRes;
}

export function NewsItem(props: PropTypes) {
  const { data } = props;
  const { year, month, day } = manipulateDate(data.publish_date);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: { xs: 5, md: 13 },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          pt: { xs: "70%", sm: "50%", md: "30.2%" },
          position: "relative",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Image
          fill
          alt={data?.image_alt_text}
          style={{ objectFit: "cover" }}
          src={data.image || ""}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          px: { xs: 6, md: 0 },
          pr: { xs: 0, md: 5, lg: 11 },
          "&>a": {
            textDecoration: "none",
            color: "#000",
          },
          "&>a:hover": { textDecoration: "underline" },
        }}
      >
        <Link href={`news/${data.slug}`}>
          <Typography variant="h5" lineHeight={"164%"}>
            {data?.title}
          </Typography>
        </Link>
        <Typography color="lincoBlue.main" mt={2}>
          {`${day} ${month}, ${year}`}
        </Typography>
      </Box>
    </Box>
  );
}
