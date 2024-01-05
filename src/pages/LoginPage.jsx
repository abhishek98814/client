import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
// import './auth.css'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    // const [name, setName] = useState('')

    const handleloginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { email, password }, { withCredentials: true });
            console.log(response.data)
            if (response.data.success) {
                // setUser(response.data)
                alert('Login Successfully');
                setRedirect(true)
            } else {
                alert('Login failed' + response.data.message)
            }
        } catch (err) {
            console.error(err);
            alert('Login Failed: Internal server Error')
        }
    }

    if (redirect) {
        return <Navigate to={'/dash'} />
    }


    return (
        <div>
            <div className='mt-4 grow flex items-center justify-around'>
                <div className="mb-16">


                    <h1 className='text-4xl text-center mb-4'>Login</h1>
                    <form action="" className='max-w-md mx-auto' onSubmit={handleloginSubmit}>
                        <input type="email"
                            placeholder='your@email.com'
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                        />
                        <input type="password"
                            placeholder='password'
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        />
                        <div className='py-2'>
                            <button className='primary'>Login</button>
                        </div>
                        <div className='text-center text-gray-6000'>
                            Don't Have a account yet? <Link className="underline text-blue-700 font-bold" to={'/register'}>Register now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage