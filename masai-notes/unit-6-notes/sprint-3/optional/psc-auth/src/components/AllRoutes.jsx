import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import SingleProduct from '../Pages/SingleProduct'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'


const AllRoutes = () => {
  return (
    <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default AllRoutes