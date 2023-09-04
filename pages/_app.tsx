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

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
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
