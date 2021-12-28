import docSource from "../../out.json"

export default function handler(req, res) {
    res.status(200).json(docSource)
}
