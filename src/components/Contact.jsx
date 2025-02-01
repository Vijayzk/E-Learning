import Navbar from './Navbar'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'



const Contact = ({ isLogin, setIsLogin }) => {

    const navigate = useNavigate()
    const checkLogin = () => {
        const check = localStorage.getItem("isLogin")
        if (!check) {
            navigate('/login')
        }
    }
    const [loader,setLoader] = useState(false)

    useEffect(() => {
        checkLogin();
    }, [])


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoader(true)
        const userInput = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post(`${import.meta.env.VITE_contact}`, userInput)
            toast.success('Message sent successfully..')
            setLoader(false)

        }
        catch (error) {
            toast.error('Something went wrong!!');
            setLoader(false)
        }
    }


    return (
        <>
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
            <div
                className="min-h-screen bg-cover flex justify-center md:items-center md:pt-0 pt-44"
                style={{
                    backgroundImage: `url(${'/contactbg.avif'})`,
                }}>
                <div className="">
                    <div className="flex flex-col justify-centre items-center md:space-y-14 space-x-10">
                        <form onSubmit={handleSubmit(onSubmit)} className='w-80 md:w-96 px-8 py-6 rounded-xl text-black card glass pb-10'>
                            <h1 className="font-bold text-2xl text-center pt-4">Contact Us</h1>
                            <div className='mt-4 space-y-2'>
                                <span>Name:</span>
                                <br />
                                <input
                                    {...register("name", { required: true })}
                                    type="name"
                                    id='name'
                                    name='name'
                                    placeholder='Enter your name'
                                    className='w-full md:w-80 px-3 py-1 border border-slate-400 bg-white rounded-md outline-none'
                                />
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email:</span>
                                <br />
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    className='w-full md:w-80 px-3 py-1 border border-slate-400 bg-white rounded-md outline-none'
                                />
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Message:</span>
                                <br />
                                <textarea
                                    {...register("message", { required: true })}
                                    className="textarea w-full md:w-80 border-slate-400 bg-white rounded-md outline-none"
                                    id='message'
                                    type='text'
                                    name='message'
                                    placeholder="Type your message"
                                />
                            </div>
                            {errors.message && <span className='text-red-500'>This field is required</span>}
                            {/* Button */}
                            <button type='submit' className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-slate-900 duration-200 mt-4 dark:bg-black'>{!loader ? <p>Submit</p> : <span className="loading loading-spinner loading-sm" />}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
