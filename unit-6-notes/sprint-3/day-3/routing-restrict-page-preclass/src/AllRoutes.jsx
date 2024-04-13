import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import SucessPage from './pages/SucessPage'
import Login from './pages/Login'

const AllRoutes = () => {

  return (
    <div>
        <Routes>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/sucess-page' element={<SucessPage/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes