import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useContext} from 'react'
import { CartContex } from '../Context/CartContex';

const Product = () => {
  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(1);
  const [toggle,setToggle]=useState(false)

  const {cartValue,updateCart}=useContext(CartContex)
  const getDataUsAxios=async(page)=>{
    // direact json formate data
    try {
      const res=await axios.get(`https://fakestoreapi.com/products?page=${page}&limit=4`);
      // console.log(res.data)
      setProducts(res.data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  // const getDataUsfetch=async()=>{
  //   // row data we need to convert into json formate data
  //   try {
  //     const res=await fetch(`http://localhost:8080/products`)
  //     console.log(res)
  //     // const jsonData=await res.json();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleDelete=(id)=>{
    // axios.delete(`http://localhost:8080/products/${id}`)
    // getDataUsAxios();
    axios({
      url:`https://fakestoreapi.com/products/${id}`,
      method:"DELETE",
    }).then((res)=>{console.log(res)
    getDataUsAxios();
    }).catch((err)=>console.log(err))
  }
    // getDataUsfetch();
  useEffect(()=>{
    getDataUsAxios(page);
  },[page])

  // console.log(products)
  console.log(cartValue)
  return (
    <div>
    <h1>Product</h1>
    <button disabled={page<=1} onClick={()=>setPage(page-1)}>prev</button>
    <button>{page}</button>
    <button onClick={()=>setPage(page+1)}>next</button>
    <div style={{display:'grid' ,gridTemplateColumns:'repeat(2,1fr)',gap:'10px',margin:'50px'}}>
      {
        products.map((item)=>{
          return <div key={item.id}>
            <img src={item.image} alt="" style={{width:200,height:200 ,gap:'10px',margin:'50px'}}/>

            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <button onClick={()=>{
              setToggle(true);
            updateCart(1)
            }}>Add to Cart</button>
            {toggle?<button onClick={()=>setToggle(false)}>Remove from Cart</button>:null}
          <button onClick={()=>handleDelete(item.id)}>Delete</button>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Product