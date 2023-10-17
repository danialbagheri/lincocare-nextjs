import * as React from "react";

/* ---------------------------- NextJs Components --------------------------- */
import Head from "next/head";
import { AppProps } from "next/app";
/* -------------------------------------------------------------------------- */

/* ----------------------------- MUI Components ----------------------------- */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
/* -------------------------------------------------------------------------- */

/* ---------------------------- Local Components ---------------------------- */
import { theme } from "theme";
import { Layout } from "layout";
import { AppProvider } from "components/appProvider";
/* -------------------------------------------------------------------------- */

import "../styles/globals.css";
import Script from "next/script";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://linco-site.s3.amazonaws.com/media/django-summernote/2023-10-17/e7cac042-ae72-49b9-8b24-d6ca4a792e01.jpg"
        />
        <meta property="og:url" content="http://test.lincocare.com" />
        <meta property="og:site_name" content="Linco Care" />
        <title>Linco Care</title>

        <meta
          property="og:description"
          content="Linco Care has been a trusted UK based sun and skin care manufacturer since 1979."
        />
        <meta property="og:site_name" content="Linco Care" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N8WL9NNB');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}
