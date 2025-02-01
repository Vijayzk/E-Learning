import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'


const About = ({ isLogin, setIsLogin }) => {

  const navigate = useNavigate()
  const checkLogin = () => {
    const check = localStorage.getItem("isLogin")
    if (!check) {
      navigate('/login')
    }
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className='max-w-screen-2xl container'>
        <div
          className="hero h-96"
          style={{
            backgroundImage: `url(${'/bg-2.jpg'})`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-4xl">
              <h1 className='text-2xl md:text-4xl font-extrabold text-white roboto'>Our mission is to provide a world class education in tech industry.</h1>
              <p className='text-md md:text-lg roboto text-[#87CEEB] mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestiae, sint corrupti quam quo consequuntur harum nostrum enim amet quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sapiente culpa quia.</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between mx-8 md:mx-20 mt-14 md:mt-40'>
          <div className='flex justify-centre items-center'><img src="/bg-3.png" alt="" className='h-40 w-60 md:h-96 md:w-full'/></div>
          <div className='md:w-1/2'>
            <h1 className='text-[#87CEEB] text-lg md:text-4xl text-center mt-10 md:mt-0 mb-4 md:mb-10'>What do we do ?</h1>
            <p className='text-black text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat culpa praesentium, facere quidem enim sapiente. Rem assumenda quos mollitia error quia possimus soluta corrupti minus. Sed accusamus incidunt dolores quia doloremque, dolorum quo asperiores quasi reprehenderit culpa distinctio libero nulla, labore voluptas quis maiores provident, alias rerum ipsa. Ipsa, voluptatum sint, porro nesciunt tenetur quia autem ipsum fuga cumque dolores corrupti quam veritatis facere sunt mollitia. Nobis at atque doloremque debitis labore, adipisci sed nesciunt! Autem laboriosam commodi quia molestiae fugit sint praesentium repellat asperiores ab tempora delectus doloribus incidunt sapiente odit iste, consectetur veniam. Alias, excepturi. Obcaecati, fuga.</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:mx-20 mt-14 md:mt-40'>
          <div className='p-10 order-2 md:order-1 md:w-1/2'>
            <h1 className='text-[#87CEEB] text-lg md:text-4xl text-center mb-4 md:mb-10'>How we will help you ?</h1>
            <p className='text-black text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat culpa praesentium, facere quidem enim sapiente. Rem assumenda quos mollitia error quia possimus soluta corrupti minus. Sed accusamus incidunt dolores quia doloremque, dolorum quo asperiores quasi reprehenderit culpa distinctio libero nulla, labore voluptas quis maiores provident, alias rerum ipsa. Ipsa, voluptatum sint, porro nesciunt tenetur quia autem ipsum fuga cumque dolores corrupti quam veritatis facere sunt mollitia. Nobis at atque doloremque debitis labore, adipisci sed nesciunt! Autem laboriosam commodi quia molestiae fugit sint praesentium repellat asperiores ab tempora.</p>
          </div>
          <div className='flex justify-centre items-center order-1 md:order-2'><img src="/bg-4.png" alt="" className='h-60 w-60 md:h-full md:w-full md:ml-20' /></div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:mx-20 md:mt-40'>
        <div className='md:mt-0 px-10'><img src="/bg.png" alt="" className='md:h-full md:w-[500px] h-60 w-60 ' /></div>
        <div className='p-10 md:w-1/2'>
          <h1 className='text-[#87CEEB] text-lg md:text-4xl text-center mb-4 md:mb-10'>What's our goal ?</h1>
          <p className='text-black text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat culpa praesentium, facere quidem enim sapiente. Rem assumenda quos mollitia error quia possimus soluta corrupti minus. Sed accusamus incidunt dolores quia doloremque, dolorum quo asperiores quasi reprehenderit culpa distinctio libero nulla, labore voluptas quis maiores provident, alias rerum ipsa. Ipsa, voluptatum sint, porro nesciunt tenetur quia autem ipsum fuga cumque dolores corrupti quam veritatis facere sunt mollitia. Nobis at atque doloremque debitis labore, adipisci sed nesciunt! Autem laboriosam commodi quia molestiae fugit sint praesentium repellat asperiores ab tempora delectus doloribus incidunt sapiente odit iste, consectetur veniam. Alias, excepturi. Obcaecati, fuga.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
