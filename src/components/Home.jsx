import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = ({ isLogin, setIsLogin }) => {

    const navigate = useNavigate()
    const checkLogin = () => {
        const check = localStorage.getItem("isLogin")
        if (!check) {
            navigate('/login')
        }
    }

    const [topCourses, setTopCourses] = useState([])
    const [loader, setLoader] = useState(true)

    const getCourses = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_backend}/courses/`)
            const courses = response.data
            const topcourses = courses.filter(courses => courses.isTop === true)
            setTopCourses(topcourses)
            setLoader(false);
            return;

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCourses();
        checkLogin();
    }, [])

    return (
        <>
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
            <div className='max-w-screen-2xl container mx-auto'>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${'/bg.png'})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="flex flex-col justify-centre items-center md:space-y-14 space-x-10">
                            <h1 className='max-w-3xl text-2xl md:text-4xl font-bold md:font-extrabold text-white roboto'>Join <span className='text-[#87CEEB]'>EduLearning</span> to upgrade your skill upto industry level.</h1>
                            <p className='max-w-xl text-md md:text-lg roboto text-white mt-10 pr-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestiae, sint corrupti quam quo consequuntur harum nostrum enim amet quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className='w-32 text-white rounded-md mt-10 h-10 hover:bg-slate-900 bg-black font-semibold roboto text-lg'> <Link to='/courses'>Our Courses</Link> </button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-16 mx-auto px-10 md:pl-28'>
                    <h1 className='roboto font-semibold text-2xl md:text-4xl text-center text-black'>Top Courses</h1>
                    <p className='text-2xl text-[#87CEEB] text-center mt-4'>Join our top courses to start your carreer in tech.</p>
                    {!loader ?
                        <div className='grid gird-row-1 justify-center md:grid-cols-2 lg:grid-cols-3 mt-10 lg:gap-y-0 md:gap-y-4 gap-y-6'>
                            {
                                topCourses.map((item) =>
                                    <div key={item.id} className="rounded-md bg-base-100 w-96 border border-slate-200 md:hover:scale-105 transition duration-300">
                                        <img
                                            src={item.imageUrl}
                                            alt="Shoes"
                                            className="rounded-md w-full h-[350px]" />
                                        <div className="card-body">
                                            <h2 className=" md:text-xl text-md font-semibold text-[#87CEEB]">
                                                {item.name}
                                                <div className="badge ml-4 bg-black text-white p-3 md:p-4 text-sm md:text-md">${item.price}</div>
                                            </h2>
                                            <p className='text-xs md:text-lg mt-2'>{item.description}</p>
                                            <div className="flex justify-between mt-10">
                                                <button className='btn md:w-50 md:h-30 hover:bg-blue-300 text-white bg-blue-400'>Know More</button>
                                                <button className="btn md:w-50 md:h-30 hover:bg-slate-900 text-white bg-slate-800">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div> : <div className='flex flex-col justify-center items-center mx-auto my-20'><span className="loading loading-dots loading-lg" /> <span className='text-md font-semibold'>Please wait while fetching data!!</span> </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
