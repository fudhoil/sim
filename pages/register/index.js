import React from 'react'
import Layout from '../../components/Layout'

const Register = ({ cookies }) => {
    return (
        <Layout cookies={cookies}>
            <div className='bg-white rounded-md flex flex-col w-full h-full my-4'>
                <h1 className="text-2xl font-bold text-gray-700 p-3 border-b-2 border-gray-400 text-left">
                    Register Page
                </h1>
                <div className='h-[30vh]'>
                    ini table
                </div>
            </div>
        </Layout>
    )
}

export default Register

export const getServerSideProps = async (context) => {
    const cookies = context.req.cookies
    return {
        props: {
            cookies
        }
    }
}
