import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  const [singleProduct,setSingleProduct]=useState({})


//  const value=useParams();
//  console.log(value)
const {id}=useParams();

const getSingleProduct=async()=>{
  try {
    const res=await fetch(`http://localhost:8080/products/${id}`);
    const jsonData=await res.json();
    console.log(jsonData)
    setSingleProduct(jsonData)
  } catch (error) {
    console.log(error)
  }
}
console.log(singleProduct)
useEffect(()=>{
  getSingleProduct(id);
},[id])
  return (
    <div>
        <h1>ProductDetails</h1>
        <div>
          <img src={singleProduct?.image} alt="" width={500} height={500}/>
          <h1>{singleProduct?.title}</h1>
          <p>{singleProduct?.category}</p>
          <p>{singleProduct?.price}</p>
          <p>{singleProduct?.description}</p>
          <p>{singleProduct?.rating?.rate}</p>
          <p>{singleProduct?.rating?.count}</p>
         
        </div>
    </div>
  )
}

export default ProductDetails

// will cath the id from product card
// we need to retrieve the id from the product page