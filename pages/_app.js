import "../styles/globals.scss"
import Head from "next/head"

import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <div className="notification is-danger">This site is still under development. Please report any bugs to TheShadow#8124 in the Discord server.</div>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
