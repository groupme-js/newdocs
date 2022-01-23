import Head from "next/head"
import DocMenu from "../../components/DocMenu"
import JumpToTop from "../../components/JumpToTop"

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
                <meta property="og:title" content={active ?? "" + "Documentation | node-groupme"} />
                <meta name="title" content={active ?? "" + "Documentation | node-groupme"} />
                active ? <meta name="description" content={"See the documentation for " + active + " in node-groupme, the only GroupMe API library for NodeJS that isn't a million years old."} /> : null active ? <meta name="og:description" content={"See the documentation for " + active + " in node-groupme, the only GroupMe API library for NodeJS that isn't a million years old."} /> : null
            </Head>
            <div className="container">
                <h1 className="title py-6">Documentation</h1>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-3">
                        <div className="tile is-child">
                            <DocMenu active={active} />
                        </div>
                    </div>
                    <div className="tile is-parent contentTile">
                        <div className="tile is-child">
                            <p className="title py-3">{active}</p>
                            {["Constructor", "Property", "Method"].map((kind) => {
                                return (
                                    <>
                                        <hr />
                                        <p className="subtitle py-3">{kind}</p>

                                        {childData.children
                                            .filter((x) => x.kindString == kind)
                                            .map((x) => {
                                                return (
                                                    <div className="tile is-parent" key={active}>
                                                        <a id={x.name} className={"noGrab"}>
                                                            <div className="tile is-child box is-fullwidth">
                                                                <p className="title is-4">{x.name}</p>
                                                                {Object.keys(x).map((item) => {
                                                                    return (
                                                                        <p key={item}>
                                                                            {item} - {JSON.stringify(x[item])}
                                                                        </p>
                                                                    )
                                                                })}
                                                                {x.sources ? <p className="title is-5 mt-3">Source</p> : null}
                                                                {x?.sources?.map((source) => {
                                                                    return (
                                                                        <p key={source.fileName + "-line" + source.line} className="subtitle is-6">
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
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <JumpToTop />
        </div>
    )
}
