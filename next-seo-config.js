const title = "Get in touch with Jp";
const description = "Let's chat. But first, fill this form for me will ya?";
const siteUrl = "https://contact.jpvalery.me"

const SEO = {
  title: title,
  description: description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: title,
    description: description,
    images: [
      {
        url: 'https://contact.jpvalery.me/static/og-banner.jpg',
        width: 1920,
        height: 1280,
        alt: 'Open Graph Image',
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: siteUrl,
    cardType: "summary_large_image",
  },
};

export default SEO;
