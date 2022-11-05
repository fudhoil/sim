import React from 'react'
import Layout from '../../components/Layout'

export default function Home({ cookies }) {

    return (
        <Layout
            cookies={cookies}>
            <h1 className="text-6xl font-bold">
                Employees Page
            </h1>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const cookies = context.req.cookies
    return {
        props: {
            cookies
        }
    }
}
