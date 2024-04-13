import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    const links=[
        {
            "title":"Home",
            path:'/'
        },
        {
            "title":"Admin",
            path:'/admin'
        },
        {
            "title":"Contact Us",
            path:'/contactus'
        },
        {
            "title":"About",
            path:'/about'
        },
        {
            "title":"Login",
            path:'./login'
        }
    ]
  return (
    <div>
        {
            links.map((link)=>(
                <Link key={link.path} to={link.path}>{link.title}</Link>
            ))
        }
    </div>
  )
}

export default Navbar