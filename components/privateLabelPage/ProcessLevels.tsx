import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { FAQTitle, ProcessLevelItem, PROCESS_ITEMS } from "./components";
import { ItemsSpecsTypes } from "./components/types";

const DATA_SCROLL_HEIGHTS = [1742, 1343, 1928, 1770, 1927, 1464];

export function ProcessLevels() {
  const theme = useTheme();

  const [itemsSpecs, setItemsSpecs] = useState<ItemsSpecsTypes>({
    0: { top: 0, active: false, respectiveScroll: 0 },
    1: { top: 0, active: false, respectiveScroll: 0 },
    2: { top: 0, active: false, respectiveScroll: 0 },
    3: { top: 0, active: false, respectiveScroll: 0 },
    4: { top: 0, active: false, respectiveScroll: 0 },
    5: { top: 0, active: false, respectiveScroll: 0 },
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
        active: false,
        top: windowScroll - scrollValue > 0 ? windowScroll - scrollValue : 0,
      },
    }));
  };

  const changeUIFactorHandler = (index: number, shiftValue: boolean) => {
    setItemsSpecs((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        active: shiftValue,
      },
    }));
  };

  const scrollHandler = (e: any) => {
    const scroll = window.scrollY;

    //Index 0
    if (scroll > 902 && scroll < 2352) {
      scrollItemHandler(scroll, 0, 902);
    }
    if (scroll > 2402) {
      changeUIFactorHandler(0, true);
    } else {
      changeUIFactorHandler(0, false);
    }
    //Scroll window
    if (scroll > 2450 && scroll < 3100) {
      setMainContainerTopLevel(-250 + 2450 - scroll);
    }

    //Index 1
    if (scroll > 3100 && scroll < 4150) {
      scrollItemHandler(scroll, 1, 3100);
    }

    if (scroll > 3050 && scroll < 4200) {
      changeUIFactorHandler(1, false);
    } else {
      changeUIFactorHandler(1, true);
    }

    //Scroll window
    if (scroll > 4250 && scroll < 4930) {
      setMainContainerTopLevel(3351.5 - scroll);
    }

    //Index 2
    if (scroll > 4930 && scroll < 6564) {
      scrollItemHandler(scroll, 2, 4930);
    }

    if (scroll > 4880 && scroll < 6614) {
      changeUIFactorHandler(2, false);
    } else {
      changeUIFactorHandler(2, true);
    }

    //Scroll window
    if (scroll > 6650 && scroll < 7345) {
      setMainContainerTopLevel(5076 - scroll);
    }

    //Index 3
    if (scroll > 7345 && scroll < 8820) {
      scrollItemHandler(scroll, 3, 7345);
    }
    if (scroll > 7300 && scroll < 8850) {
      changeUIFactorHandler(3, false);
    } else {
      changeUIFactorHandler(3, true);
    }

    //Scroll window
    if (scroll > 8900 && scroll < 9341) {
      setMainContainerTopLevel(6381 - scroll);
    }

    //Index 4
    if (scroll > 9341 && scroll < 10973) {
      scrollItemHandler(scroll, 4, 9341);
    }

    if (scroll > 9300 && scroll < 11000) {
      changeUIFactorHandler(4, false);
    } else {
      changeUIFactorHandler(4, true);
    }

    //Scroll window
    if (scroll > 11000 && scroll < 11690) {
      setMainContainerTopLevel(8063 - scroll);
    }

    //Index 5
    if (scroll > 11690 && scroll < 12865) {
      scrollItemHandler(scroll, 5, 11690);
    }
    if (scroll > 11650 && scroll < 12900) {
      changeUIFactorHandler(5, false);
    } else {
      changeUIFactorHandler(5, true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Box
      sx={{
        height: 13600,
        width: "100%",
        bgcolor: "#FFF",
        position: "relative",
      }}
      id="private_label_process"
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
            bottom: 350,
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
        <FAQTitle />
      </Box>
    </Box>
  );
}
