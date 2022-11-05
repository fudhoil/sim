// @ts-ignore
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()

    const toogleSidebar = () => {
        document.querySelector('#sidebar').classList.toggle('hidden')
    }
    return (
        <>
            <div className="min-h-screen flex items-start justify-between fixed">
                <div id='sidebar' className="flex flex-col w-full max-w-xs p-4 h-screen bg-gray-800">
                    <div className="flex flex-col w-full border-b-2 border-white">
                        <h1 className='h-10'>
                            Sidebar Content Here
                        </h1>
                    </div>

                    {/* sidebar options */}
                    <div className="flex flex-col w-full mt-8 space-y-3">
                        <Link
                            href='/'
                            style={{
                                display: 'flex',
                            }}
                            className={`'flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700' ${router.pathname === '/' ? 'bg-gray-700' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2 2m0 0l7 7 7-7m-7 7V3" />
                            </svg>
                            <h1 className='text-gray-300'>
                                Home
                            </h1>

                        </Link>
                        <Link
                            href='/employees'
                            style={{
                                display: 'flex',
                            }}
                            className={`'flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700' ${router.pathname === '/employees' ? 'bg-gray-700' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5 9 5 9-5-9-5z" />
                            </svg>
                            <h1 className='text-gray-300'>
                                Employees
                            </h1>

                        </Link>
                    </div>

                </div>
                <button className='sticky px-5 h-14 bg-black'
                    onClick={toogleSidebar}>
                    Ham
                </button>
            </div>
        </>
    )
}

export default Sidebar