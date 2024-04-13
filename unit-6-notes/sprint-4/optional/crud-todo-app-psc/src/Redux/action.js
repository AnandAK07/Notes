import {DELETE_DATA_LOADING,DELETE_DATA_SUCCESS,DELETE_DATA_FAILURE,GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_FAILURE,} from './actionType'
import axios from 'axios'

const baseUrl=`http://localhost:8080/todos`;

export const getData=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_DATA_LOADING})
        const res=await axios.get(baseUrl)
        dispatch({type:GET_DATA_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_DATA_FAILURE})
    }
}

export const postData=()=>(dispatch)=>{
    try {
        
    } catch (error) {
        
    }
}

export const patchData=()=>(dispatch)=>{
    try {
        
    } catch (error) {
        
    }
}

export const updateData=()=>(dispatch)=>{
    try {
        
    } catch (error) {
        
    }
}

export const toggleData=()=>(dispatch)=>{
    try {
        
    } catch (error) {
        
    }
}

// export const deleteData=(id)=>async(dispatch)=>{
//     try {
//        dispatch({type:DELETE_DATA_LOADING})
//        await axios.delete(`${baseUrl}/${id}`)
//        dispatch({type:DELETE_DATA_SUCCESS}) 
//     } catch (error) {
//         dispatch({type:DELETE_DATA_FAILURE})
//     }
// }