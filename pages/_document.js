import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-website-id="e0b3ac39-7b14-44e7-a98c-d8ff1d367a19"
            src="https://analytics.jpvalery.com/umami.js"
          ></script>
        </Head>
        <body className="py-12 bg-gray-900 text-gray-50 md:py-24">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
