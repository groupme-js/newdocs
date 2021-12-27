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

                    <meta name="theme-color" content="#4EACEA" />
                    <meta property="description" content="The only GroupMe API library for NodeJS that isn't a million years old." />
                    <meta property="og:title" content="node-groupme" />
                    <meta property="og:theme-color" content="#4EACEA" />
                    <meta property="og:thumbnail" content="https://i.imgur.com/uYsg7IC.png" />
                    <meta property="og:url" content="https://groupme.js.org" />
                    <meta property="og:description" content="The only GroupMe API library for NodeJS that isn't a million years old." />
                    <script async src="https://kit.fontawesome.com/114d30bb2c.js" crossOrigin="anonymous"></script>
                    <meta name="title" content="node-groupme" />
                    <meta name="description" content="The only GroupMe API library for NodeJS that isn't a million years old." />
                    <meta name="keywords" content="groupme,api,node-groupme,groupme.js" />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <link rel="icon" type="image/png" href="https://i.imgur.com/uYsg7IC.png" />
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
