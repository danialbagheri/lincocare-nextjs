import { useContext, useEffect } from "react";

import { GetStaticProps } from "next";
import Head from "next/head";
/* ---------------------------- Local Components ---------------------------- */
import { getIcons } from "services";
import { LincoDivider } from "shared";
import {
  Accreditations,
  LincoNews,
  Retailers,
} from "components/generalComponents";
import {
  IconGroupsType,
  SocialMediaIconsType,
} from "services/lincoServicesTypes";
import { AppContext, InitialStateTypes } from "components/appProvider";
import {
  AboutLinco,
  Brands,
  Head as HomePageHeader,
  PrivateLabel,
} from "components/homePage";
/* -------------------------------------------------------------------------- */

interface PropsTypes {
  socialMediaIcons: SocialMediaIconsType;
  accreditations: IconGroupsType;
}

export default function Home(props: PropsTypes) {
  const [, setAppState] = useContext(AppContext);

  useEffect(() => {
    if (setAppState && props.socialMediaIcons) {
      setAppState((prev: InitialStateTypes) => ({
        ...prev,
        socialMediaIcons: props.socialMediaIcons?.items,
        accreditations: props.accreditations,
      }));
    }
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="Linco Care" />
      </Head>
      <HomePageHeader />
      <Brands />

      <LincoDivider sx={{ display: { xs: "none", md: "block" } }} fullWidth />

      <PrivateLabel />

      <Retailers />
      <AboutLinco />

      <LincoDivider sx={{ mt: 0, mb: { xs: 19, md: 25 } }} fullWidth />

      <Accreditations data={props.accreditations?.items} />

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
    const response = await Promise.all([
      getIcons("social_media"),
      getIcons("accreditations"),
    ]);

    return {
      props: { socialMediaIcons: response[0], accreditations: response[1] },
    };
  } catch {
    return { props: { error: "Something went wrong!" } };
  }
};
