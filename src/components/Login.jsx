import React, { useState } from 'react'
import login from '/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = ({ isLogin, setIsLogin }) => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)

    const handlelogin = async (e) => {
        e.preventDefault();
        setLoader(true)
        if (!email || !password) {
            toast.error('Enter all details.')
            setLoader(false)
            return;
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_backend}/user/login`, { email, password })
            if (response.data.error) {
                toast.error(response.data.error)
                setLoader(false)
                return;
            }
            if (response.data.message) {
                toast.success('Logged in.')
                setIsLogin(true);
                setLoader(false);
                localStorage.setItem("isLogin", true)
                navigate('/home')
                return;
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoader(false)
            return;
        }

    }

    return (
        <>
            <div className='bg-cover flex flex-col justify-center items-center h-screen' style={{ backgroundImage: `url(${login})` }}>
                <div className="md:p-12 p-6 rounded-md card glass">
                    <form onSubmit={handlelogin} method="dialog" className=''>
                        {/* if there is a button in form, it will close the modal */}
                        <h3 className="font-bold text-3xl text-center pb-4 text-slate-700">Login</h3>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span className='font-semibold'>Email:</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span className='font-semibold'>Password:</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none '
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* Button */}
                        <div className='flex mt-4'>
                            <button className='bg-blue-500 text-white rounded-md px-6 py-1 hover:bg-blue-700 duration-200'>{!loader ? <p>Login</p> : <span className="loading loading-spinner loading-sm" />}</button>
                            <p className='mt-1 md:mx-2 mx-4'>Not registered?<Link to='/' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
