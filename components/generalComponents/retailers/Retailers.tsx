import { useEffect, useState } from "react";

import { Box, Divider, SxProps, Typography } from "@mui/material";

import Image from "next/image";

import { Container } from "shared";
import { getIcons } from "services";
import type { IconGroupsItemType } from "services/lincoServicesTypes";

interface RetailerDataType {
  id: string;
  title: string;
  items: IconGroupsItemType[];
}

const RetailerItem = (props: {
  title: string;
  items: IconGroupsItemType[];
}) => {
  return (
    <Box>
      <Typography
        variant={"h6"}
        color={"#247DE7"}
        mt={{ xs: 7, md: 20 }}
        textAlign="center"
      >
        {props.title}
      </Typography>
      <Divider sx={{ width: "100%", mt: 2 }} />
      <Box
        sx={{
          pt: { xs: 14, md: 16 },
          px: { xs: 8, md: 0 },
          pb: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 8, md: 16 },
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.items.map((item, i) => (
          <Box
            className="centralize"
            key={item.id}
            sx={{
              width: { xs: "84px", md: "157px" },
              minWidth: { xs: "84px", md: "157px" },
              height: { xs: "42px", md: "80px" },
              position: "relative",
            }}
          >
            <Image
              src={item.icon || ""}
              alt={"retailer No" + i}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

function Retailers(props: { sx?: SxProps }) {
  const [retailersData, setRetailersData] = useState<RetailerDataType[]>([]);

  useEffect(() => {
    const getUkRetailers = getIcons("uk_ireland_retailers");
    const getOverseasRetailers = getIcons("overseas_retailers");

    Promise.all([getUkRetailers, getOverseasRetailers]).then((res) => {
      const retailersArray: RetailerDataType[] = [];
      res.forEach((r) => {
        retailersArray.push({ id: r.id, title: r.name, items: r.items });
      });
      setRetailersData(retailersArray);
    });
  }, []);

  return (
    <Container
      sx={{ alignItems: "center", pt: { xs: 17, md: 10 }, ...props.sx }}
      id="retailers"
    >
      <Typography sx={{ typography: { xs: "h4", md: "h2" } }}>
        Retailers
      </Typography>

      {retailersData.map((retailers) => (
        <RetailerItem
          key={retailers.id}
          title={retailers.title}
          items={retailers.items}
        />
      ))}
    </Container>
  );
}

export default Retailers;
