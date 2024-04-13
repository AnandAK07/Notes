import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import Product from '../Pages/Product'
import Login from '../Pages/Login'
import PrivateRoute from '../components/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/product' element={
              <PrivateRoute>
                <Product/>
              </PrivateRoute>
            }/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes