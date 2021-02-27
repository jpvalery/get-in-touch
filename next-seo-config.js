const title = "Get in touch with Jp";
const description =
  "Let's chat. But first, fill this form for me will ya?";

const SEO = {
  title,
  description,
  canonical: "https://contact.jpvalery.me",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://contact.jpvalery.me",
    title,
    description,
    images: [
      {
        url: "https://contact.jpvalery.me/static/images/og-banner.jpg",
        alt: title,
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: "contact.jpvalery.me",
    cardType: "summary_large_image",
  },
};

export default SEO;
