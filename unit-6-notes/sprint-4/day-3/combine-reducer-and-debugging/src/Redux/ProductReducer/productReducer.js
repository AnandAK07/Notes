import React from 'react'
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './actionType';

const initialState={
    product:[],
    isLoading:false,
    isError:false,
}

export const productReducer = (state=initialState,action) => {
    switch (action.type){
        case GET_PRODUCTS_REQUEST:{
            return {...state,isLoading:true,isError:false}
        }
        case GET_PRODUCTS_SUCCESS:{
            return {...state,product:action.payload,isLoading:false,isError:false}
        }
        case GET_PRODUCTS_FAILURE:{
            return{...state,isLoading:false,isError:true}
        }
        default:
            return state;
    }
}
