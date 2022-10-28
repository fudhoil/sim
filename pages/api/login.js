import {
    login,
} from './firebase'
import { setCookie } from 'cookies-next';

export default function handler(req, res) {
    const {
        email,
        password
    } = req.body

    login(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setCookie("user", user.uid, {
                req,
                res,
                maxAge: 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: true,
                secure: process.env.NODE_ENV === "production",
            });
            res.status(200).json({ user: user.uid })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(
                400
            ).json({
                error: errorMessage,
            })
        });
}