import { createNewUser, db } from "./firebase";

export default function handler(req, res) {

    if (req.method !== "POST") {
        res.status(400).json({
            error: "Invalid request method"
        })
    }

    const {
        email,
        password,
        employee_id
    } = req.body

    createNewUser(email, password)
        .then(async (user) => {
            res.status(200).json({
                user
            })
        })
        .catch((error) => {
            res.status(400).json({
                error
            })
        })
}