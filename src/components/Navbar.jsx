import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Logout from './Logout'

const Navbar = ({isLogin,setIsLogin}) => {

    

    return (
        <>
            <div className="navbar bg-[#87CEEB] shadow-lg sticky top-0 left-0 right-0 opacity-1 z-50 text-white roboto">
                <div className="navbar-start flex pl-2 md:pl-4">
                    <img className='w-10 h-10' src="/logo.png" alt="Edu" />
                    <h1 className='text-white font-bold text-2xl md:text-3xl pt-1 pl-2'>Edu<span className='text-black'>Learning</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex ml-10">
                    <ul className="flex py-4 px-1 text-lg text-white font-semibold space-x-14">
                        <li className='hover:underline'><Link to={'/home'}>Home</Link></li>
                        <li className='hover:underline'><Link to={'/courses'}>Courses</Link></li>
                        <li className='hover:underline'><Link to={'/about'}>About</Link></li>
                        <li className='hover:underline'><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Logout isLogin={isLogin} setIsLogin={setIsLogin}/>
                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#87CEEB] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='hover:underline'><Link to={'/home'}>Home</Link></li>
                            <li className='hover:underline'><Link to={'/courses'}>Courses</Link></li>
                            <li className='hover:underline'><Link to={'/about'}>About</Link></li>
                            <li className='hover:underline'><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
