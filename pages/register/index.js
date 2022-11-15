import React from 'react'
import Layout from '../../components/Layout'

const Register = ({ cookies }) => {
    const [{
        email,
        password,
        employee_id,
    }, setState] = React.useState({ email: '', password: '', employee_id: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        console.log(name + ": " + value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await fetch('/api/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                employee_id,
            })
        })
        const response = await data.json()
        if (response.error) {
            console.log(response)
        } else {
            await fetch('/api/addEmployee', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    employee_id,
                })
            })
        }
    }


    return (
        <Layout cookies={cookies}>
            <div className='bg-white rounded-md flex flex-col w-full h-full my-4'>
                <h1 className="text-2xl font-bold text-gray-700 p-3 border-b-2 border-gray-400 text-left">
                    Register Page
                </h1>
                <div className='h-full w-full mt-4 text-gray-700 text-left p-3 px-5'>
                    <form className='w-full space-y-10'>
                        <div className='flex flex-col'>
                            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='email'
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                placeholder='Email'
                            />

                            <label className='text-gray-700 text-sm font-bold mb-2 mt-4' htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='password'
                                type='password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                                placeholder='Password'
                            />
                            <label className='text-gray-700 text-sm font-bold mb-2 mt-4' htmlFor='employee'>
                                Employee
                            </label>
                            <select
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='employee'
                                name='employee_id'
                                value={employee_id} onChange={handleChange}>
                                <option value="">Select Employee</option>
                                <option value="1">Employee 1</option>
                                <option value="2" selected>Employee 2</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type='submit'
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        </div>
                    </form>
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
