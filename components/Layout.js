import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { isLoggedIn } from '../reducers/login_reducer'

export default function Layout({ cookies, children }) {
    const router = useRouter()
    const { user } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const cookieValue = cookies?.user

    useEffect(() => {
        if (!user) {
            router.push("/login")
        } else {
            dispatch(isLoggedIn(cookieValue))
        }
    }, [cookieValue, dispatch, router, user])

    return (
        <div className="bg-gray-300 text-white h-screen">
            <Head>
                <title>SIM</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                cookies={cookies}
            />
            <main className='flex flex-row'>
                <div className="flex">
                    <Sidebar />
                </div>
                <div className="flex flex-col items-center justify-center w-full flex-1 p-20 pl-0 text-center">
                    {children}
                </div>
            </main>
        </div>
    )
}
