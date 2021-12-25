import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home | node-groupme</title>
            </Head>

            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                    <p className="text-center title">node-groupme</p>
                    <p className="text-center subtitle">The only GroupMe API library for NodeJS that isn't a million years old.</p>
                </div>
            </div>
            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                    <p className="text-center">Inspired by discord.js, node-groupme aims to replace the obsolete groupme package with a modern, object-oriented, intuitive approach to interacting with the GroupMe API.</p>
                </div>
            </div>
        </div>
    )
}
