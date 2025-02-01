import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Courses from './components/Courses'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const [isLogin , setIsLogin] = useState(false);
  //console.log(isLogin);

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup isLogin={isLogin} setIsLogin = {setIsLogin} />} />
        <Route path='/login' element={<Login isLogin={isLogin} setIsLogin = {setIsLogin}/>} />
        <Route path='/home' element={<Home isLogin={isLogin} setIsLogin = {setIsLogin}/>} />
        <Route path='/courses' element={<Courses isLogin={isLogin} setIsLogin = {setIsLogin}/>} />
        <Route path='/about' element={<About isLogin={isLogin} setIsLogin = {setIsLogin}/>}/>
        <Route path='/contact' element={<Contact isLogin={isLogin} setIsLogin = {setIsLogin}/>} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
