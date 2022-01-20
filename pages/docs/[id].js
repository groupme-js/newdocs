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
                <meta property="og:title" content="Documentation | node-groupme" />
                <meta name="title" content="Documentation | node-groupme" />
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
                                            <div className="tile is-child box is-fullwidth">
                                                <p className="title is-4">{x.name}</p>
                                                <p className="">Data to implement: {Object.keys(x).join(", ")}</p>
                                                {x.sources ? <p className="title is-5">Source</p> : null}
                                                {x?.sources?.map((source) => {
                                                    return (
                                                        <p key={source.fileName + "#L" + source.line} className="subtitle is-6">
                                                            <a href={"https://github.com/groupme-js/node-groupme/tree/main/" + source.fileName + "#L" + source.line}>
                                                                {source.fileName} - Line {source.line}
                                                            </a>
                                                        </p>
                                                    )
                                                })}
                                            </div>
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
