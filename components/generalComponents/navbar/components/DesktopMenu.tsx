import * as React from "react";

import { Box, Button, Popover } from "@mui/material";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "./constants";
import { AboutUsPopOver } from "./AboutUsPopOver";
import { BrandsPopOver } from "./BrandsPopOver";

interface DesktopMenuProps {
  darkNavbar: boolean;
  trigger: boolean;
}

export function DesktopMenu(props: DesktopMenuProps) {
  const { darkNavbar, trigger } = props;
  const [anchorEle, setAnchorEle] = React.useState<HTMLButtonElement | null>(
    null
  );

  const mouseOverHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    if (type === "aboutUs" || "brands") {
      setAnchorEle(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEle(null);
  };
  const router = useRouter();

  const borderColorRender = () => {
    if (trigger) {
      return "transparent";
    } else if (darkNavbar) {
      return "lincoBlue.light";
    } else {
      return "lincoYellow.main";
    }
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        px: 3,
        gap: 4,
        borderBottom: "1px solid",
        borderColor: borderColorRender(),
      }}
    >
      {NAV_ITEMS.map((item, i) => (
        <>
          {item.justMobile ? null : (
            <Button
              key={item.id}
              sx={{
                color: darkNavbar ? "lincoBlue.dark" : "#FFFFFF",
                textTransform: "none",
              }}
              onClick={function () {
                router.push(item.link);
              }}
              onMouseEnter={(event: React.MouseEvent<HTMLButtonElement>) =>
                mouseOverHandler(event, item.id)
              }
            >
              {item.name}
            </Button>
          )}
        </>
      ))}
      <AboutUsPopOver anchorEle={anchorEle} handleClose={handlePopoverClose} />
      <BrandsPopOver anchorEle={anchorEle} handleClose={handlePopoverClose} />
    </Box>
  );
}
