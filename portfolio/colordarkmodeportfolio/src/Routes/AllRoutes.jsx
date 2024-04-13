import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Skills } from '../Pages/Skills/Skills'
import { Projects } from '../Pages/Projects/Projects'
import { Contact } from '../Pages/Contact/Contact'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
