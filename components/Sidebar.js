// @ts-ignore
import React, { useState } from 'react'

const Sidebar = () => {

    const toogleSidebar = () => {
        document.querySelector('#sidebar').classList.toggle('hidden')
    }
    return (
        <>
            <div className="min-h-screen flex items-start justify-between fixed">
                <div id='sidebar' className="flex w-full max-w-xs p-4 h-screen bg-gray-800">
                    <div className="flex flex-col w-full">
                        <h1>
                            Sidebar Content Here
                        </h1>
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