import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Login from '../Pages/Login'
import AddProduct from '../Pages/AddProduct'
import Cart from '../Pages/Cart'


const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Allroutes