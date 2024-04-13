import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'Product',
            path:'/product'
        },
        {
            title:'Login',
            path:'/login'
        },
        {
            title:'AboutUs',
            path:'/aboutus'
        },
        

    ]
  return (
    <div>
        <div>
        {links.map((link)=>(
            <Link key={link.path} to={link.path}>{link.title}</Link>
        ))}
        </div>
        {/* <h2>User Login status: false</h2> */}

    </div>
  )
}

export default Navbar