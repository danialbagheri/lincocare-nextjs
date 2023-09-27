import { useContext, useEffect, useState } from "react";

import { SxProps, Typography } from "@mui/material";

import { Container } from "shared";
import { getIcons } from "services";
import { RetailerItem } from "./RetailerItem";
import type { IconGroupsType } from "services/lincoServicesTypes";
import { AppContext, InitialStateTypes } from "components/appProvider";

export function Retailers(props: { sx?: SxProps }) {
  const [retailersData, setRetailersData] = useState<IconGroupsType[]>([]);
  const [appState, setAppState] = useContext(AppContext);

  useEffect(() => {
    if (appState && !appState.retailersData.length) {
      const getUkRetailers = getIcons("uk_ireland_retailers");
      const getOverseasRetailers = getIcons("overseas_retailers");

      Promise.all([getUkRetailers, getOverseasRetailers]).then((res) => {
        const retailersArray: IconGroupsType[] = [];
        res.forEach((r) => {
          retailersArray.push({ id: r.id, name: r.name, items: r.items });
        });
        setRetailersData(retailersArray);
        if (setAppState) {
          setAppState((prev: InitialStateTypes) => ({
            ...prev,
            retailersData: retailersArray,
          }));
        }
      });
    }
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
          name={retailers.name}
          items={retailers.items}
        />
      ))}
    </Container>
  );
}
