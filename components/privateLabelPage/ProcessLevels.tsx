import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { FAQTitle, ProcessLevelItem, PROCESS_ITEMS } from "./components";
import { ItemsSpecsTypes } from "./components/types";

const DATA_SCROLL_HEIGHTS = [1259, 1187, 1627, 1393, 662, 1301];

export function ProcessLevels() {
  const theme = useTheme();

  const [itemsSpecs, setItemsSpecs] = useState<ItemsSpecsTypes>({
    0: { top: 0, shiftUI: false, respectiveScroll: 0 },
    1: { top: 0, shiftUI: false, respectiveScroll: 0 },
    2: { top: 0, shiftUI: false, respectiveScroll: 0 },
    3: { top: 0, shiftUI: false, respectiveScroll: 0 },
    4: { top: 0, shiftUI: false, respectiveScroll: 0 },
    5: { top: 0, shiftUI: false, respectiveScroll: 0 },
  });
  const [mainContainerTopLevel, setMainContainerTopLevel] = useState(-250);
  const containerEle = useRef<HTMLInputElement>(null);

  const scrollItemHandler = (
    windowScroll: number,
    index: number,
    scrollValue: number
  ) => {
    setItemsSpecs((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        shiftUI: false,
        top: windowScroll - scrollValue > 0 ? windowScroll - scrollValue : 0,
      },
    }));
  };

  const changeUIFactorHandler = (index: number, shiftValue: boolean) => {
    setItemsSpecs((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        shiftUI: shiftValue,
      },
    }));
  };

  const scrollHandler = (e: any) => {
    const scroll = window.scrollY;
    console.log("scroll:::", scroll);

    //Index 0
    if (scroll > 902 && scroll < 902 + 1259) {
      scrollItemHandler(scroll, 0, 902);
    }
    if (scroll > 902 + 1259 + 50) {
      changeUIFactorHandler(0, true);
    } else {
      changeUIFactorHandler(0, false);
    }
    //Scroll window
    if (scroll > 902 + 1259 + 100 && scroll < 902 + 1259 + 100 + 680) {
      setMainContainerTopLevel(-250 + 902 + 1259 + 100 - scroll);
    }

    //Index 1
    if (
      scroll > 902 + 1259 + 100 + 680 &&
      scroll < 902 + 1259 + 100 + 680 + 1187
    ) {
      scrollItemHandler(scroll, 1, 902 + 1259 + 100 + 680);
    }

    if (
      scroll > 902 + 1259 + 100 + 680 - 50 &&
      scroll < 902 + 1259 + 100 + 680 + 1187 + 50
    ) {
      changeUIFactorHandler(1, false);
    } else {
      changeUIFactorHandler(1, true);
    }

    //Scroll window
    if (
      scroll > 902 + 1259 + 100 + 680 + 1187 + 50 &&
      scroll < 902 + 1259 + 100 + 2 * 680 + 1187 + 50
    ) {
      setMainContainerTopLevel(
        902 + 1259 + 100 + 680 + 1187 + 50 - scroll - 925
      );
    }

    //Index 2
    if (
      scroll > 902 + 1259 + 100 + 2 * 680 + 1187 + 50 &&
      scroll < 902 + 1259 + 100 + 2 * 680 + 1187 + 50 + 1627
    ) {
      scrollItemHandler(scroll, 2, 902 + 1259 + 100 + 2 * 680 + 1187 + 50);
    }

    if (
      scroll > 902 + 1259 + 100 + 2 * 680 + 1187 &&
      scroll < 902 + 1259 + 100 + 2 * 680 + 1187 + 50 + 1627 + 50
    ) {
      changeUIFactorHandler(2, false);
    } else {
      changeUIFactorHandler(2, true);
    }

    //Scroll window
    if (
      scroll > 902 + 1259 + 100 + 2 * 680 + 1187 + 50 + 1627 + 50 &&
      scroll < 902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50
    ) {
      setMainContainerTopLevel(
        902 + 1259 + 100 + 2 * 680 + 1187 + 50 + 1627 + 50 - scroll - 1601
      );
    }

    //Index 3
    if (
      //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50
      scroll > 7215 &&
      //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50 + 1393
      scroll < 8608
    ) {
      //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50
      scrollItemHandler(scroll, 3, 7215);
    }
    if (
      //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627
      scroll > 7165 &&
      //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50 + 1393 + 50
      scroll < 8658
    ) {
      changeUIFactorHandler(3, false);
    } else {
      changeUIFactorHandler(3, true);
    }

    //Scroll window
    if (
      //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50 + 1393 + 50
      scroll > 8658 &&
      //902 + 1259 + 100 + 4 * 680 + 1187 + 50 + 1627 + 50 + 1393 + 50
      scroll < 9338
    ) {
      setMainContainerTopLevel(
        //902 + 1259 + 100 + 3 * 680 + 1187 + 50 + 1627 + 50 + 1393 + 50 - scroll -2277
        6381 - scroll
      );
    }

    //Index 4
    if (scroll > 9338 && scroll < 9338 + 662) {
      scrollItemHandler(scroll, 4, 9338);
    }

    if (scroll > 9338 - 50 && scroll < 9338 + 662 + 50) {
      changeUIFactorHandler(4, false);
    } else {
      changeUIFactorHandler(4, true);
    }

    //Scroll window
    if (scroll > 9338 + 662 + 50 && scroll < 9338 + 662 + 50 + 680) {
      setMainContainerTopLevel(9338 + 662 + 50 - scroll - 2955);
    }

    //Index 5
    if (
      scroll > 9338 + 662 + 50 + 680 &&
      scroll < 9338 + 662 + 50 + 680 + 1301
    ) {
      scrollItemHandler(scroll, 5, 9338 + 662 + 50 + 680);
    }
    if (
      scroll > 9338 + 662 + 50 + 680 - 50 &&
      scroll < 9338 + 662 + 50 + 680 + 1301 + 50
    ) {
      changeUIFactorHandler(5, false);
    } else {
      changeUIFactorHandler(5, true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: 12100,
          width: "100%",
          bgcolor: "#FFF",
          position: "relative",
        }}
      >
        <Box
          ref={containerEle}
          sx={{
            position: "sticky",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          style={{ top: mainContainerTopLevel }}
        >
          <Box
            sx={{
              bgcolor: { xs: "#F4F4F4", md: "#FFF" },
              width: "100%",
              margin: "0 auto",
              px: { xs: 9, md: 0 },
              py: { xs: 9, md: 22 },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              textAlign="center"
              sx={{
                typography: { xs: "h3", md: "h4" },
                bgcolor: { xs: "#F4F4F4", md: "unset" },
              }}
            >
              We are expert in “Private Label”
            </Typography>
          </Box>

          <Stack alignItems="center">
            <Typography
              textAlign="center"
              pt={{ xs: 6, md: 10 }}
              pb={5}
              variant="h3"
              color="lincoBlue.main"
              zIndex={12}
            >
              Start
            </Typography>
            <Box
              sx={{ width: 16, height: 16, borderRadius: "50%" }}
              bgcolor="lincoBlue.main"
            />
          </Stack>

          <Box
            sx={{
              position: "absolute",
              width: "2px",
              left: "50%",
              bottom: 0,
              top: 320,
              transform: "translate(-50%)",
              backgroundImage: `linear-gradient(${theme.palette.lincoBlue.main} 33%, rgba(255,255,255,0) 0%)`,
              backgroundPosition: "right",
              backgroundSize: "2px 20px",
              backgroundRepeat: "repeat-y",
            }}
          />

          <Box
            className="centralize"
            sx={{ flexDirection: "column", gap: 20, mt: "68px", width: "100%" }}
          >
            {PROCESS_ITEMS.map((item, i) => (
              <ProcessLevelItem
                key={item.title}
                index={i}
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
                link={item.link}
                data={item.data}
                itemSpecs={itemsSpecs[i]}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <FAQTitle />
    </>
  );
}
