import Link from "next/link"
import docSource from "../out.json"

export default function DocMenu() {
    return (
        <>
            <aside className="menu">
                <p className="menu-label">Documentation</p>
                <ul className="menu-list">
                    {docSource.children.map((child) => {
                        return (
                            <li key={child.name}>
                                <a><Link href={"/docs/" + child.name}>{child.name}</Link></a>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}
