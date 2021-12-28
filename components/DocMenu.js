import Link from "next/link"
import docSource from "../out.json"

export default function DocMenu(props) {
    let data = docSource.children.find((x) => (props.active ? x.name == props.active : x.name))
    let activeChild = data.children.map((x) => x.name)

    return (
        <>
            <aside className="menu">
                <p className="menu-label">Classes</p>
                <ul className="menu-list">
                    {docSource.children
                        .filter((child) => child.kindString == "Class")
                        .map((child) => {
                            return (
                                <li className={props.active == child.name ? "is-active" : "is-inactive"} key={child.name}>
                                    <Link href={`/docs/${child.name}`}>
                                        <a>{child.name}</a>
                                    </Link>
                                    {props.active == child.name ? (
                                        <ul className="menu-list">
                                            {activeChild.map((subchild) => {
                                                return (
                                                    <li key={subchild}>
                                                        <Link href={`#${subchild}`}>
                                                            <a>{subchild}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    ) : null}
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
                                <li className={props.active == child.name ? "is-active" : "is-inactive"} key={child.name}>
                                    <Link href={`/docs/${child.name}`}>
                                        <a>{child.name}</a>
                                    </Link>
                                    {props.active == child.name ? (
                                        <ul className="menu-list">
                                            {activeChild.map((subchild) => {
                                                return (
                                                    <li key={subchild}>
                                                        <Link href={`#${subchild}`}>
                                                            <a>{subchild}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    ) : null}
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
                                <li className={props.active == child.name ? "is-active" : "is-inactive"} key={child.name}>
                                    <Link href={`/docs/${child.name}`}>
                                        <a>{child.name}</a>
                                    </Link>
                                    {props.active == child.name ? (
                                        <ul className="menu-list">
                                            {activeChild.map((subchild) => {
                                                return (
                                                    <li key={subchild}>
                                                        <Link href={`#${subchild}`}>
                                                            <a>{subchild}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    ) : null}
                                </li>
                            )
                        })}
                </ul>
            </aside>
        </>
    )
}
