import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './auth.css'
import axios from 'axios'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/register', {
                name,
                email,
                password
            });

            alert("Registration Succesfull Now you can log in")
        } catch (error) {
            alert("Somethhing wemt wrong")
            console.error('Error:', error.message);
        }
    };




    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className="mb-16">


                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form action="" className='max-w-md mx-auto' onSubmit={registerUser}>
                    <input type="text"
                        placeholder='your name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email"
                        placeholder='your@email.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password"
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className='primary mt-4'>Register</button>
                    <div className='text-center text-gray-6000'>
                        Already have account? <Link className="underline text-blue-700 font-bold" to={'/login'}>Go to Login Page</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register