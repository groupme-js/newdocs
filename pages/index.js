import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home | node-groupme</title>
            </Head>

            <div className="container">
                <section className="section">
                    <h1 className="title">node-groupme</h1>
                    <h2 className="subtitle">The only GroupMe API library for NodeJS that isn&apos;t a million years old.</h2>
                </section>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box mx-2">
                            <p className="title">Inspired by</p>
                            <p className="subtitle">node-groupme was inspired by discord.js</p>
                        </div>
                        <div className="tile is-child box mx-2">
                            <p className="title">Our goal</p>
                            <p className="subtitle">Our goal is to replace the obsolete groupme package with a modern, object-oriented, intuitive approach to interacting with the GroupMe API.</p>
                        </div>
                        <div className="tile is-child box mx-2">
                            <p className="title">Contribute</p>
                            <p className="subtitle">This community-led effort is made possible by the unofficial GroupMe API Community Docs. Please contribute to the development of open-source applications by contributing to the community docs. Join the node-groupme server on Discord to discuss the API or ask any questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
