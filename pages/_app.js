import "tailwindcss/tailwind.css";

import Head from "next/head";

import { DefaultSeo } from "next-seo";

import SEO from "../next-seo-config";

import { Footer, MainBody } from "@jpvalery/mistral";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <MainBody>
        <Component {...pageProps} />
      </MainBody>
      <Footer displaySocial socialSelection="Work" />
    </div>
  );
}

export default MyApp;
