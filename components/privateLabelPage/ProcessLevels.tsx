import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { FAQTitle, ProcessLevelItem, PROCESS_ITEMS } from "./components";
import { ItemsSpecsTypes } from "./components/types";

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
  const [mainContainerTopLevel, setMainContainerTopLevel] = useState(-300);
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

  const changeUIFactorHandler = (
    index: number,
    shiftValue: boolean,
    respectiveScroll: number
  ) => {
    setItemsSpecs((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        shiftUI: shiftValue,
        respectiveScroll,
      },
    }));
  };

  const scrollHandler = (e: any) => {
    const scroll = window.scrollY;
    console.log("scroll::::", scroll);

    //Index 0
    if (scroll > 942 && scroll < 2200) {
      scrollItemHandler(scroll, 0, 942);
    }
    if (scroll > 2500) {
      changeUIFactorHandler(0, true, scroll - 2500);
    } else {
      changeUIFactorHandler(0, false, 0);
    }

    //Scroll window
    if (scroll > 2600 && scroll < 3280) {
      setMainContainerTopLevel(2300 - scroll);
    }

    //Index 1
    if (scroll > 3300 && scroll < 4500) {
      scrollItemHandler(scroll, 1, 3300);
    }
    if (scroll > 4600) {
      changeUIFactorHandler(1, true, scroll - 4600);
    } else {
      changeUIFactorHandler(1, false, 0);
    }

    //Scroll window
    if (scroll > 4700 && scroll < 5376) {
      setMainContainerTopLevel(3723 - scroll);
    }

    //Index 2
    if (scroll > 5376 && scroll < 6950) {
      scrollItemHandler(scroll, 2, 5376);
    }
    if (scroll > 7000) {
      changeUIFactorHandler(2, true, scroll - 7000);
    } else {
      changeUIFactorHandler(2, false, 0);
    }

    //Scroll window
    if (scroll > 7050 && scroll < 7736) {
      setMainContainerTopLevel(5398 - scroll);
    }

    //Index 3
    if (scroll > 7736 && scroll < 9130) {
      scrollItemHandler(scroll, 3, 7736);
    }
    if (scroll > 9180) {
      changeUIFactorHandler(3, true, scroll - 9180);
    } else {
      changeUIFactorHandler(3, false, 0);
    }

    //Scroll window
    if (scroll > 9180 && scroll < 9860) {
      setMainContainerTopLevel(6846 - scroll);
    }

    //Index 4
    if (scroll > 9860 && scroll < 11000) {
      scrollItemHandler(scroll, 4, 9860);
    }
    if (scroll > 10580) {
      changeUIFactorHandler(4, true, scroll - 10580);
    } else {
      changeUIFactorHandler(4, false, 0);
    }

    //Scroll window
    if (scroll > 10600 && scroll < 11290) {
      setMainContainerTopLevel(7593 - scroll);
    }

    //Index 5
    if (scroll > 11290 && scroll < 12600) {
      scrollItemHandler(scroll, 5, 11290);
    }
    if (scroll > 12600) {
      changeUIFactorHandler(5, true, scroll - 12600);
    } else {
      changeUIFactorHandler(5, false, 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: 12600,
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
