import { deleteCookie } from "cookies-next"

export default function handler(req, res) {
    deleteCookie("user", {
        req,
        res,
    });

    res.status(200).json({
        message: "Logged out",
    })
}