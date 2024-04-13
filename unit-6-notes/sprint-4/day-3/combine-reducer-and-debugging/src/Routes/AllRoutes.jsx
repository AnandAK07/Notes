import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Login from '../Pages/Login'
import ProductPage from '../Pages/ProductPage'

const AllRoutes = () => {
  return <Routes>
  <Route path='/' element={<ProductPage/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
}

export default AllRoutes