import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const Logout = ({isLogin,setIsLogin}) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        toast.success('Logged out.')
        localStorage.removeItem("isLogin")
        setIsLogin(false)
        navigate('/login')
    }

    return (
        <>
            <button to={'/'} className="px-3 py-1 md:px-6 md:py-3 rounded-md bg-[#051821] border-none text-white hover:bg-slate-800 font-bold" onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout
