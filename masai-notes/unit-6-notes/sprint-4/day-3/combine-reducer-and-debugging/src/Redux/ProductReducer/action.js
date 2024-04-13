import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"
import axios from "axios"

export const getProductRequest=()=>{
    return {type:GET_PRODUCTS_REQUEST}
}

export const getProductSuccess=(payload)=>{
    return {type:GET_PRODUCTS_SUCCESS,payload:payload}
}

export const getProductFailure=()=>{
    return {type:GET_PRODUCTS_FAILURE}
}

// we will write the action 
export const getProductData=async(dispatch)=>{
    try {
      // dispatch the action to request the data
      // data is about to come from api so Loading... indicator
      dispatch(getProductRequest())
      // dispatch the action to sucess the data
      const response=await axios.get(`http://localhost:8080/products`)
      // console.log(response)
      dispatch(getProductSuccess(response.data));
      // update the data inside store
    } catch (error) {
      // dispatch the action to error the data
      dispatch(getProductFailure());
    }
  }

//   useDispatch()-->hook
// reles of hooks
// only call hook at the top level
// call it inside the React(funcional) component