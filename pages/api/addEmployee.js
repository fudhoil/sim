import { db } from './firebase'

export default function handler(req, res) {

    if (req.method !== "POST") {
        res.status(400).json({
            error: "Invalid request method"
        })
    }

    const data = req.body

    db.collection('employees').doc("employees").set(data).then(() => {
        res.status(200).json({
            message: "Employee added successfully"
        })
    }).catch((error) => {
        res.status(400).json({
            error
        })
    })
}
