import { Box, useTheme } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Container, CustomLink } from "shared";
import { useContext, useEffect, useState } from "react";
import { AppContext, InitialStateTypes } from "components/appProvider";
import { getIcons } from "services";
import type { IconGroupsType } from "services/lincoServicesTypes";
import { RetailerLogo } from "components/generalComponents";

export function Retailers() {
  const [appState, setAppState] = useContext(AppContext);
  const [logoLinks, setLogoLinks] = useState<string[]>([]);
  const theme = useTheme();

  const logoLinksHandler = (retailersData: IconGroupsType[]) => {
    if (retailersData.length) {
      const links: string[] = [];
      retailersData.forEach((retailer) => {
        retailer.items.forEach((item) => links.push(item.icon || ""));
      });
      setLogoLinks(links);
    }
  };

  useEffect(() => {
    if (appState && !appState.retailersData.length) {
      const getUkRetailers = getIcons("uk_ireland_retailers");
      const getOverseasRetailers = getIcons("overseas_retailers");

      Promise.all([getUkRetailers, getOverseasRetailers]).then((res) => {
        const retailersArray: IconGroupsType[] = [];
        res.forEach((r) => {
          retailersArray.push({ id: r.id, name: r.name, items: r.items });
        });

        logoLinksHandler(retailersArray);

        if (setAppState) {
          setAppState((prev: InitialStateTypes) => ({
            ...prev,
            retailersData: retailersArray,
          }));
        }
      });
    } else if (appState?.retailersData.length) {
      logoLinksHandler(appState.retailersData);
    }
  }, []);

  console.log("logo links::::", logoLinks);

  return (
    <Container
      sx={{
        mt: { xs: "70px", mdz: "126px" },
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "& .images-wrap>div": {
          display: "flex !important",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {logoLinks.length ? (
        <Slide
          autoplay
          slidesToScroll={1}
          duration={1750}
          transitionDuration={500}
          slidesToShow={2}
          indicators={false}
          arrows={false}
          responsive={[
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {logoLinks.map((link, i) => (
            <RetailerLogo key={i} icon={link} />
          ))}
        </Slide>
      ) : null}
      <CustomLink
        sx={{ pt: 10 }}
        className="centralize"
        color="#000"
        borderColor={{ xs: theme.palette.lincoBlue.main }}
        aSx={{ px: 8 }}
        href="/#retailers"
      >
        All Linco retailers
      </CustomLink>
    </Container>
  );
}
