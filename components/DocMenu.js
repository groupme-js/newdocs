import Link from "next/link"
import docSource from "../out.json"

export default function DocMenu() {
    return (
        <>
            <aside className="menu">
                <p className="menu-label">Classes</p>
                <ul className="menu-list">
                    {docSource.children
                        .filter((child) => child.kindString == "Class")
                        .map((child) => {
                            return (
                                <li key={child.name}>
                                    <Link href={`/docs/${child.name}`}>
                                        <a>{child.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
                <p className="menu-label">Enums</p>
                <ul className="menu-list">
                    {docSource.children
                        .filter((child) => child.kindString == "Enumeration")
                        .map((child) => {
                            return (
                                <li key={child.name}>
                                    <Link href={`/docs/${child.name}`}>
                                        <a>{child.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
                <p className="menu-label">Interfaces</p>
                <ul className="menu-list">
                    {docSource.children
                        .filter((child) => child.kindString == "Interface")
                        .map((child) => {
                            return (
                                <li key={child.name}>
                                    <Link href={`/docs/${child.name}`}>
                                        <a>{child.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </aside>
        </>
    )
}
