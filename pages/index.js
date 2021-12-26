import Head from "next/head"
import Image from "next/image"
import logo from "../logo.png"
import vars from "../vars"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home | node-groupme</title>
            </Head>

            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child is-8">
                            <section className="section center">
                                <h1 className="title">node-groupme</h1>
                                <h2 className="subtitle">The only GroupMe API library for NodeJS that isn&apos;t a million years old.</h2>
                            </section>
                        </div>
                        <div className="tile is-child">
                            <section className="section">
                                <Image src={logo} alt="node-groupme logo" width={"200px"} height={"200px"} />
                            </section>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box mx-2">
                            <p className="title is-4">Inspired by</p>
                            <p className="subtitle">node-groupme was inspired by discord.js, and aims to model its framework after discord.js as well</p>
                            <a className="pinbottom"></a>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box mx-2">
                            <p className="title is-4">Our goal</p>
                            <p className="subtitle">Our goal is to replace the obsolete groupme package with a modern, object-oriented, intuitive approach to interacting with the GroupMe API.</p>
                            <a className="pinbottom"></a>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box mx-2">
                            <p className="title is-4">Contribute</p>
                            <p className="subtitle">This community-led effort is made possible by the unofficial GroupMe API Community Docs. You can find those by clicking here.</p>
                            <a className="button is-light is-fullwidth pinbottom" href="https://github.com/groupme-js/GroupMeCommunityDocs">
                                <i className="fa-navbar fa-brands fa-github"></i>
                                <span className="padleft">API Community Docs</span>
                            </a>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box mx-2">
                            <p className="title is-4">Join Us</p>
                            <p className="subtitle">You can join the node-groupme server on Discord to discuss the API or ask any questions!</p>
                            <a className="button is-light is-fullwidth pinbottom" href={vars.Discord}>
                                <i className="fa-navbar fa-brands fa-discord"></i>
                                <span className="padleft">Discord</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
