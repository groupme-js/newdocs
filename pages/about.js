import Head from "next/head"

export default function About() {
    return (
        <div>
            <Head>
                <title>About | node-groupme</title>
                <meta property="og:title" content="About | node-groupme" />
                <meta name="title" content="About | node-groupme" />
            </Head>
            <div className="container">
                <h1 className="title">About node-groupme</h1>
                <div className="section box">
                    <p>This is the first section</p>
                </div>
                <div className="section box">
                    <p>This is a second section</p>
                </div>
                <div className="section box">
                    <p>This is a third section....</p>
                    <p>Ok yeah I have no idea what to put here, idk anything about node-groupme&apos;s history or stuff tbf</p>
                </div>
            </div>
        </div>
    )
}
