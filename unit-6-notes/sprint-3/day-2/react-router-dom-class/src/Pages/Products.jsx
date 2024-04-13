import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  const [data,setData]=useState([])
  
  const getProductsData=async()=>{
    try {
      const res=await fetch(`http://localhost:8080/products`);
      const jsonData=await res.json();
      // console.log(jsonData)
      setData(jsonData)
    } catch (error) {
      console.log(error)
    }
  }
console.log(data)
  useEffect(()=>{
    getProductsData();
  },[])
  return (
    <div>
        <h1>Products</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',gap:'20px'}}>
        {

          data.map((product)=>(
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt="" width={200} height={200}/>
              <p>{product.price}</p>
              <Link to={`/products/${product.id}`}>More Details</Link>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Products