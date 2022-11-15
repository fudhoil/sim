// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase-admin/firestore"
import admin from "firebase-admin"
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
}
    from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
if (!admin.apps.length) {
    admin.initializeApp(firebaseConfig, 'db')
} else {
    admin.app('db')
}
const app = initializeApp(firebaseConfig, 'app')
export const db = admin.firestore()
export const auth = getAuth(app)
export const isLogged = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user)
            } else {
                reject()
            }
        })
    })
}

export const createNewUser = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                resolve(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                reject(errorCode, errorMessage)
            })
    })
}

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const logout = signOut(auth)

