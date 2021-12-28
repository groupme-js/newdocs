import Head from "next/head"
import DocMenu from "../../components/DocMenu"

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
            active: params.id,
        },
    }
}

export default function Docs({ childData, active }) {
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
                            <DocMenu active={active} />
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <p className="title py-3">{active}</p>
                            {childData.children.map((x) => {
                                return (
                                    <div className="tile is-parent" key={active}>
                                        <a id={active}>
                                            <div className="tile is-child box">{JSON.stringify(x)}</div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
