import React, { useState, useEffect } from 'react'
import { loginAsync } from '../../reducers/login_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Login = () => {
    const [{ email, password }, setLogin] = useState({ email: "", password: "" })
    const dispatch = useDispatch()
    const { user, error, status } = useSelector(state => state.login)
    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.push("/")
        }
    }, [router, user])

    function handleChange(e) {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(loginAsync({ email, password }))
        if (user) {
            router.push("/")
        }
    }

    return (
        <main className='flex items-center h-screen bg-gray-100'>
            <div className='flex flex-col mx-auto max-w-2xl bg-white p-8 rounded-md drop-shadow-md items-center'>
                <h1 className='font-normal mb-10' style={{ fontSize: "2rem" }}>Login</h1>
                <form action="" className='flex flex-col items-end'>
                    <div className='flex justify-between mb-6 w-full'>
                        <h1 className='p-2 pl-0'>
                            email:
                        </h1>
                        <input className="border-b-2 focus:outline-none p-2"
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-between mb-6 w-full'>
                        <h1 className='p-2 pl-0'>
                            Password:
                        </h1>
                        <input className="border-b-2 focus:outline-none p-2"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div
                        className='flex justify-center items-center w-full mt-6 h-[2px] bg-gray-300'
                    />
                    <div>
                        {error && <p className="text-red-500">{error.error.split("/")[1].split(")")[0].replaceAll('-', ' ')}</p>}
                    </div>
                    <button className='bg-blue-500 text-white px-4 py-1 rounded-md mt-5 ml-auto'
                        type='submit' onClick={handleSubmit}>
                        {status === "loading" ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Login

export const getServerSideProps = async (context) => {
    const cookies = context.req.cookies
    return {
        props: {
            cookies
        }
    }
}
