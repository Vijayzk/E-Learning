import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Courses = ({ isLogin, setIsLogin }) => {

  const navigate = useNavigate()
  const checkLogin = () => {
    const check = localStorage.getItem("isLogin")
    if (!check) {
      navigate('/login')
    }
  }

  const [search, setSearch] = useState('')
  const [courses, setCourses] = useState([])
  const [loader,setLoader] = useState(true)
  const [searchLoader,setSearchLoader] = useState(false)

  const handleSearch = async (e) => {
    setSearchLoader(true)
    e.preventDefault();
    try {
      if (!search) {
        const response = await axios.get(`${import.meta.env.VITE_backend}/courses/`)
        setCourses(response.data)
        setSearchLoader(false)
        return
      }
      const response = await axios.post(`${import.meta.env.VITE_backend}/courses/searchByName`, {
        Cname: search
      })
      console.log(response.data)
      setCourses(response.data)
      setSearchLoader(false)
    } catch (error) {
      console.log(error)
      setSearchLoader(false)
    }
    setSearch('');
  }

  const getCourses = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_backend}/courses/`)
      setCourses(response.data)
      setLoader(false)
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
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(${'/bg-6.png'})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="flex flex-col justify-center items-center max-w-2xl">
            <h1 className='text-2xl md:text-4xl font-extrabold text-slate-900 roboto'>Programs to help you upskill.</h1>
            <p className='text-md md:text-lg roboto text-white mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti obcaecati nisi voluptatum in numquam quas ipsum asperiores inventore quis laudantium, sequi repellat ullam expedita unde rem minima deleniti nesciunt sunt totam quasi eligendi quisquam ipsa! Dolores, eius veniam.</p>
            <form onSubmit={handleSearch} className="flex justify-center">
              <label className="input input-bordered flex items-center gap-2 mt-10 h-8 w-1/2 md:h-10 md:w-64">
                <input type="text" className="grow text-black md:text-md text-sm" placeholder="Search Course" value={search} onChange={(e) => setSearch(e.target.value)} />
              </label>
              <button type='submit' className='bg-black mt-10 ml-8 px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-slate-900 h-8 w-20 md:h-10 md:w-20 flex justify-center items-center md:text-md text-sm'>{!searchLoader ? <p>Search</p> : <span className="loading loading-spinner loading-sm" />}</button>
            </form>
          </div>
        </div>
      </div>
      {
        !loader ?
          <div className='flex flex-col justify-center items-center mx-auto'>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 mt-16'>
              {
                courses.map((item) => (
                  <div key={item.id} className="rounded-md bg-base-100 w-96 border border-slate-200 md:hover:scale-105 transition duration-300">
                    <img
                      src={item.imageUrl}
                      alt="Image-404"
                      className="rounded-md w-full h-[350px] text-white" />
                    <div className="card-body">
                      <h2 className=" md:text-xl text-md font-semibold text-blue-300">
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
                ))
              }
            </div>
          </div> :<div className='flex flex-col justify-center items-center mx-auto my-20'> <span className="loading loading-dots loading-lg"/><span className='text-md font-semibold'>Please wait while fetching data!!</span></div>
      }
      <Footer />
    </>
  )
}

export default Courses
