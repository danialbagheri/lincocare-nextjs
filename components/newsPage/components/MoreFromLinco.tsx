import * as React from "react";

/* ---------------------------- NextJs Components --------------------------- */
import Image from "next/image";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Typography } from "@mui/material";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { getListOfAllBlogs } from "services";
import { BlogRes } from "services/lincoServicesTypes";
import { manipulateDate } from "utils";
/* -------------------------------------------------------------------------- */

const Item = (props: { data: BlogRes }) => {
  const { year, month, day } = manipulateDate(props.data.publish_date);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 4, md: 8 },
      }}
    >
      <Box position="relative" sx={{ width: "30%", height: 120 }}>
        <Image
          alt={props.data.image_alt_text}
          src={props.data.image}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Typography variant="h6" sx={{ fontWeight: { xs: 700, md: 400 } }}>
          {props.data.title}
        </Typography>
        <Typography color="lincoBlue.main" mt={2}>
          {`${day} ${month}, ${year}`}
        </Typography>
      </Box>
    </Box>
  );
};

export function MoreFromLinco() {
  const [data, setData] = React.useState<BlogRes[]>([]);

  React.useEffect(() => {
    getListOfAllBlogs({ count: 3 }).then((res) => setData(res.results));
  }, []);

  return (
    <Box mt={18}>
      <Typography variant="h5" textAlign={{ xs: "center", md: "left" }}>
        More from Linco
      </Typography>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: { xs: 3, md: 8 },
        }}
      >
        {data.map((d) => (
          <Item key={d.id} data={d} />
        ))}
      </Box>
    </Box>
  );
}
