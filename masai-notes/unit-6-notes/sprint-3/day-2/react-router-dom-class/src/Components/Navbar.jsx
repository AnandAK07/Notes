import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const links=[
        {
            title:"Home",
            path:'/'
        },
        {
            title:"About",
            path:'/about'
        },
        {
            title:"Contact",
            path:'/contact'
        },
        {
            title:"Login",
            path:'/login'
        },
        {
            title:"Products",
            path:'/products'
        }
    ]
  return (
    <div style={{display:'flex',margin:'auto',justifyContent:'space-around',border:'1px solid green' ,padding:'20px',background:'skyblue'}}>
        {links.map((link)=>(
            <div key={link.path}>
            <Link to={link.path}>
            {link.title}
            </Link>
            
            </div>
        ))}
    </div>
  )
}

export default Navbar