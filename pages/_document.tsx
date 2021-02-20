import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="bg-accent-lemon dark:bg-accent-gray text-black dark:text-white"
      >
        <Head>
          <link
            rel="preload"
            href="/fonts/Newsreader-VariableFont_opsz,wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
