import Head from "next/head"
import DocMenu from "../../components/DocMenu"
import { useRouter } from "next/router"

import { getTopLevelChilds, getChildData } from "../../lib/docs"

export async function getStaticPaths() {
    const paths = getTopLevelChilds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const childData = getChildData(params.id)
    return {
        props: {
            childData,
        },
    }
}

export default function Docs({ childData }) {
    return (
        <div>
            <Head>
                <title>Documentation | node-groupme</title>
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
                            <p class="title py-3">Coming soon, here's a JSON dump of the data for now</p>
                            {JSON.stringify(childData, null, 2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
