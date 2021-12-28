import path from "path"
import docSource from "../out.json"

export function getTopLevelChilds() {
    return docSource.children.map((child) => {
        return {
            params: {
                id: child.name,
            },
        }
    })
}


export function getChildData(id) {
    let data = docSource.children.find(x => x.name == id)
    return data
}
