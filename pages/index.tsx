import { useContext, useEffect } from "react";

import { GetStaticProps } from "next";
/* ---------------------------- Local Components ---------------------------- */
import { getIcons } from "services";
import { LincoDivider } from "shared";
import {
  Accreditations,
  LincoNews,
  Retailers,
} from "components/generalComponents";
import { SocialMediaIconsType } from "services/lincoServicesTypes";
import { AppContext, InitialStateTypes } from "components/appProvider";
import { AboutLinco, Brands, Head, PrivateLabel } from "components/homePage";

/* -------------------------------------------------------------------------- */

interface PropsTypes {
  socialMediaIcons: SocialMediaIconsType;
}

export default function Home(props: PropsTypes) {
  const [, setAppState] = useContext(AppContext);

  useEffect(() => {
    if (setAppState && props.socialMediaIcons) {
      setAppState((prev: InitialStateTypes) => ({
        ...prev,
        socialMediaIcons: props.socialMediaIcons?.items,
      }));
    }
  }, []);

  return (
    <>
      <Head />
      <PrivateLabel />

      <LincoDivider
        sx={{ my: 25, display: { xs: "none", md: "block" } }}
        fullWidth
      />

      <Brands />
      <Retailers />
      <AboutLinco />

      <LincoDivider sx={{ mt: 0, mb: { xs: 19, md: 25 } }} fullWidth />

      <Accreditations />

      <LincoDivider
        sx={{ mt: { xs: 17, md: 35 }, mb: { xs: 16, md: 17 } }}
        fullWidth
      />

      <LincoNews />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const socialMediaIcons = await getIcons("social_media");

    return { props: { socialMediaIcons } };
  } catch {
    return { props: { error: "Something went wrong!" } };
  }
};
