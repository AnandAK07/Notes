import React from 'react'
import { ADD_COUNT, SUB_COUNT } from './action'

export const counterReducer =(state={count:0},{type,payload})=>{
    switch (type){
        case ADD_COUNT:
            return {...state,count:state.count+payload}
        
        case SUB_COUNT:
            return {...state,count:state.count-payload}
        default: 
        return state;
    }
}
