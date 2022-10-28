import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import nookies from 'nookies'
import { app, db } from '../firebase'
import { firebaseAdmin } from '../firebaseAdmin'
import {
    getAuth,
} from "firebase/auth"

const AuthContext = createContext({
    user: null,
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // listen for token changes
    // call setUser and write new token as a cookie
    useEffect(() => {
        return app.getAuth().onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null);
                nookies.set(undefined, 'token', '', { path: '/' });
            } else {
                const token = await user.getIdToken();
                setUser(user);
                nookies.set(undefined, 'token', token, { path: '/' });
            }
        });
    }, []);

    // force refresh the token every 10 minutes
    useEffect(() => {
        const handle = setInterval(async () => {
            const user = getAuth().currentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);

        // clean up setInterval
        return () => clearInterval(handle);
    }, []);


    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}