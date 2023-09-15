import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Booking from './pages/Booking/Booking'
import Menu from './pages/Menu/Menu'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/booking' element={<Booking/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    </div>
  )
}

export default Allroutes