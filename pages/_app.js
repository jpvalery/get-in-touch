import "tailwindcss/tailwind.css";

import Head from "next/head";

import { DefaultSeo } from "next-seo";

import SEO from "../next-seo-config";

import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <div className="mx-auto max-w-5xl px-6 pb-6">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
