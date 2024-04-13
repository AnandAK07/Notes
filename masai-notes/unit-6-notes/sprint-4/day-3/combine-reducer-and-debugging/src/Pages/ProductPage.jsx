import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { getProductData, getProductFailure, getProductRequest, getProductSuccess } from '../Redux/ProductReducer/action'

const ProductPage = () => {
//   to get the data from the store -->react-redux
const products=useSelector((store)=>store.productReducer.product)

// console.log(products)
console.log("11",products)

// flow of redux
// action-->dispatch(action)-->reducer(state,action)-->store-->component(useSelector()/getData)
// redux expect action will be received
const dispatch=useDispatch();

// to update the state inside the store
// make a api call

// const getProductData=async()=>{
//   try {
//     // dispatch the action to request the data
//     // data is about to come from api so Loading... indicator
//     dispatch(getProductRequest())
//     // dispatch the action to sucess the data
//     const response=await axios.get(`http://localhost:8080/products`)
//     // console.log(response)
//     dispatch(getProductSuccess(response.data));
//     // update the data inside store
//   } catch (error) {
//     // dispatch the action to error the data
//     dispatch(getProductFailure());
//   }
// }

useEffect(()=>{
  // dispatch(getProductRequest())
  getProductData(dispatch);
  // dispatch fun is being dispatced
  // react should be dispatced
  // dispatch fun is being dispatced
  
  // Redux
  // dispatch fun will dispatch the action
},[])
    return (
    <div>
        <h1>ProductPage</h1>
        <div>
        {products.map((item)=>{
          return <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        })}
        </div>
    </div>
  )
}

export default ProductPage

// Pricinple of react-redux
// 1.useSelector()
// 2.useDispatch()
// 3.Provider