import Link from "next/link"
import React from "react"

export default function Navbar() {
    React.useEffect(() => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0)

        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach((el) => {
                el.addEventListener("click", () => {
                    const target = el.dataset.target
                    const $target = document.getElementById(target)
                    el.classList.toggle("is-active")
                    $target.classList.toggle("is-active")
                })
            })
        }
    }, [])
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item nounderline">
                            <span>node-groupme</span>
                        </a>
                    </Link>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="navbar-item">About</a>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button is-light" href="https://github.com/groupme-js">
                                <i className="fa-navbar fa-brands fa-github"></i>
                                <span className="padleft">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
