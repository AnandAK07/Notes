import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        {/* <Route path='/productDetails' element={<ProductDetails/>}/> */}
        {/* hard coding the 12000product is not pasible */}
        <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default AllRoutes

/**
 -path -when the URL matches this segment
 -component -this will be rendered on the component as page



 */ 