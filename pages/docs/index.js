import Head from "next/head"
import DocMenu from "../../components/DocMenu"

export default function Docs({ childData }) {
    return (
        <div>
            <Head>
                <title>Documentation | node-groupme</title>
                <meta property="og:title" content="Documentation | node-groupme" />
                <meta name="title" content="Documentation | node-groupme" />
            </Head>
            <div className="container">
                <h1 className="title py-6">Documentation</h1>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-3">
                        <div className="tile is-child">
                            <DocMenu />
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <h3 className="title is-3">Welcome to the documentation for node-groupme!</h3>
                            <p className="subtitle is-5 py-3">Select an item on the left to begin!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
