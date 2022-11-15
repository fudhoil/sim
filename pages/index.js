import React from 'react'
import Layout from '../components/Layout'

export default function Employee({ cookies }) {

  return (
    <Layout
      cookies={cookies}>
      <h1 className="text-6xl font-bold">
        Welcome <a className="text-blue-600" href="https://github.com/fudhoil">Fudhoil!</a>
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
