import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const links=[
        {
            title:"Home",
            path:'/'
        },
        {
            title:"Login",
            path:'/login'
        },
        {
            title:"product",
            path:'/product'
        },
        {
            title:"contact",
            path:'/contact'
        }
    ]
  return (
    <div>
    {
        links.map((link)=>(
            <Link to={link.path}>{link.title}</Link>
        ))
    }
    </div>
  )
}

export default Navbar