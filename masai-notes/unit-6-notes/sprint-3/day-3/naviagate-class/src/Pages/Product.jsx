import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'

const Product = () => {
  const [data,setData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const limit=4;
  let [searchParams, setSearchParams] = useSearchParams();
  // update the searchParams


  const getData=async(limit,currentPage)=>{
    try {
      const res=await fetch(`http://localhost:8080/products?_page=${currentPage}&_limit=${limit}`);
      const jsonData=await res.json();
      // console.log(jsonData)
      setData(jsonData)
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(data)
  useEffect(()=>{
    getData(limit,currentPage);
  },[limit,currentPage])

  useEffect(()=>{
    let params={currentPage,limit};
    setSearchParams(params)
  },[currentPage,limit]);
  return (
    <div><h1>Products</h1>
    <button disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)}>prev</button>
    <button >{currentPage}</button>
    <button onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
    {
      data?.map((el)=>(
        <div key={el.id} style={{border:'1px solid black'}}>
          <h4>{el.title}</h4>
          <img src={el.image} alt="" width={200} height={200}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default Product