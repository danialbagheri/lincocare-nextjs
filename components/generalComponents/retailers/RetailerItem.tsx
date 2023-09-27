import { Box, Divider, Typography } from "@mui/material";
import type { IconGroupsItemType } from "services/lincoServicesTypes";
import { RetailerLogo } from "./RetailerLogo";

export function RetailerItem(props: {
  name: string;
  items: IconGroupsItemType[];
}) {
  return (
    <Box>
      <Typography
        variant={"h6"}
        color={"#247DE7"}
        mt={{ xs: 7, md: 20 }}
        textAlign="center"
      >
        {props.name}
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
          <RetailerLogo icon={item.icon} key={item.id} />
        ))}
      </Box>
    </Box>
  );
}
