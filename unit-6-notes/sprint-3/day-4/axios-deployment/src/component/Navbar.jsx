import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const links=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'Products',
            path:'/product'
        },
        {
            title:'Add Products',
            path:'/addproducts'
        },
        {
            title:'Cart',
            path:'/cart'
        },
        {
            title:'Login',
            path:'/login'
        },
    ]
  return (
    <div>

    <div style={{display:'flex',justifyContent:'space-between'}}>
        
        {links.map((link)=>(
            <Link key={link.path} to={link.path}>{link.title}</Link>
        ))}
    </div>
    <div>cart item {0}</div>
    </div>
  )
}

export default Navbar