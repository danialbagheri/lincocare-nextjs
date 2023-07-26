import { Box, Stack, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

interface FooterLinkTypes {
  href: string;
  children: React.ReactNode;
  noMargin?: boolean;
}

const FooterLink = (props: FooterLinkTypes) => {
  return (
    <Box
      sx={{
        mb: props.noMargin ? 0 : 4,
        "&>a": {
          display: "inline-block",
          textDecoration: "none",
          color: "#fff",
        },
      }}
    >
      <Link href={props.href}>{props.children}</Link>
    </Box>
  );
};

function SiteMap() {
  return (
    <Box order={{ xs: 1, md: 2 }}>
      <Box
        pb={20}
        sx={{ display: { xs: "block", md: "none" } }}
        textAlign={"center"}
      >
        <Image
          alt={"linco care"}
          src="/icons/lincoNameMobile.png"
          width={177}
          height={40}
        />
      </Box>
      <Typography mb={5} color={"lincoYellow.main"} variant={"h6"}>
        Sitemap
      </Typography>
      <Stack direction={"row"} gap={{ xs: 15, md: 22 }}>
        <Box>
          <FooterLink href="">Private label</FooterLink>
          <FooterLink href="/brands">Brands</FooterLink>
          <FooterLink href="">About us</FooterLink>
          <FooterLink href="">Sustaiability</FooterLink>
          <FooterLink href="">News</FooterLink>
          <FooterLink href="" noMargin>
            Career
          </FooterLink>
        </Box>
        <Box>
          <FooterLink href="">Contact us</FooterLink>
          <FooterLink href="">Privacy policy</FooterLink>
          <FooterLink href="" noMargin>
            Disclaimer
          </FooterLink>
        </Box>
      </Stack>
    </Box>
  );
}

export default SiteMap;
