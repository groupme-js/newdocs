import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="theme-color" content="#70503C" />
          <meta property="description" content="Inspired by discord.js, node-groupme aims to replace the obsolete groupme package with a modern, object-oriented, intuitive approach to interacting with the GroupMe API." />
          <meta property="og:title" content="node-groupme" />
          <meta property="og:theme-color" content="#70503C" />
          <meta property="og:url" content="https://groupme.js.org" />
          <meta property="od:description" content="Inspired by discord.js, node-groupme aims to replace the obsolete groupme package with a modern, object-oriented, intuitive approach to interacting with the GroupMe API." />
          <script async src="https://kit.fontawesome.com/114d30bb2c.js" crossOrigin="anonymous"></script>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument