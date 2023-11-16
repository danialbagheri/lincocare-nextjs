import { useEffect, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { BrandDetailsType } from "components/constants";
import Image from "next/image";
import { CustomLink } from "shared";
import Link from "next/link";

interface ItemsHoverTypes {
  [id: string]: boolean;
}

export function Products(props: { brandDetails: BrandDetailsType }) {
  const { brandDetails } = props;
  const theme = useTheme();
  const [itemsHover, setItemsHover] = useState<ItemsHoverTypes | null>(null);

  useEffect(() => {
    if (brandDetails) {
      const hoverObj: ItemsHoverTypes = {};

      brandDetails?.products?.forEach((product, i) => {
        hoverObj[product.id] = i === 0;
      });

      setItemsHover(hoverObj);
    }
  }, [brandDetails]);

  return (
    <Stack gap={{ xs: 18, md: 13 }} mb={{ xs: 25, md: 37 }}>
      <Typography variant="h4" textAlign="center" mb={8}>
        Products by category
      </Typography>
      {brandDetails?.products?.map((product) => (
        <Box
          key={product.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, md: 13 },

            flexDirection: { xs: "column", md: "row" },

            "& div": { transition: "100ms height ease-out" },
          }}
          onMouseEnter={() => {
            setItemsHover((prev) => ({ ...prev, [product.id]: true }));
          }}
          onMouseLeave={() => {
            setItemsHover((prev) => ({ ...prev, [product.id]: false }));
          }}
        >
          <Box
            sx={{
              height: 100,
              bgcolor: "#f5f5f5",
              width: "calc(100% + 72px)",
              mb: -13,

              display: { xs: "block", md: "none" },
            }}
          />
          <Box
            sx={{
              width: { xs: "calc(100% + 72px)", md: 361 },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: itemsHover ? (itemsHover[product.id] ? 361 : 178) : 178,
                },
                height: {
                  xs: "unset",
                  md: itemsHover ? (itemsHover[product.id] ? 310 : 169) : 169,
                },
                pt: { xs: "100%", md: 0 },
                ml: { xs: "-36px", md: 0 },
                position: "relative",
                "&>img": {
                  objectFit: { xs: "cover", md: "contain" },
                  marginLeft: {
                    xs: 0,
                    md: itemsHover ? (itemsHover[product.id] ? 5 : 0) : 0,
                  },
                },
              }}
            >
              <Image
                alt={product.title}
                src={`/images/individualBrandPage/products/${product.imgSrc}`}
                fill
              />
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: 452 } }}>
            <Typography variant="h2">{product.title}</Typography>
            <Typography
              sx={{
                mt: 3,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: {
                  xs: "unset",
                  md: itemsHover
                    ? itemsHover[product.id]
                      ? "unset"
                      : "2"
                    : "2",
                },
                whiteSpace: "pre-wrap",
              }}
            >
              {product.description}
            </Typography>
            <CustomLink
              href=""
              borderColor={{ xs: theme.palette.lincoBlue.main }}
              color="#000"
              sx={{
                pt: 1,
                display: {
                  xs: "none",
                  //In md displays if hover the display style will changed to "none"
                  md: itemsHover
                    ? itemsHover[product.id]
                      ? "none"
                      : "block"
                    : "block",
                },
              }}
            >
              Know more
            </CustomLink>
          </Box>
        </Box>
      ))}
      <Typography
        variant="h4"
        mt={10}
        textAlign="center"
        sx={{
          "&>a": { textDecoration: "underline", textUnderlineOffset: "10px" },
        }}
      >
        {`${brandDetails?.seeMoreLinkText} `}
        <CustomLink
          borderColor={{ xs: theme.palette.lincoBlue.main }}
          color="#000"
          href={`https://${brandDetails?.brandWebsiteLink}`}
          sx={{ display: "inline" }}
        >
          {brandDetails?.brandWebsiteLink}
        </CustomLink>
      </Typography>
    </Stack>
  );
}
