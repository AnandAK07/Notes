import React from 'react'
import { INCREMENT,DECREMENT,RESET } from './actionType'

export const reducer = (state,action) => {
    // console.log(state) 
    // previous state/intialstate from store 
    // console.log(action)
    // coming dispatch fun Count

    switch(action.type){
        case INCREMENT:{
                //spreded prevstate,var:prev.state+payload)
            return {...state,count:state.count+action.payload}
        }
        case DECREMENT:{
            return {...state,count:state.count-action.payload}
        }
        // case "RESET":{
        //     return {...state,count:action.payload}
        // }
        case RESET:{
            return {...state,count:0}
        }
    default:
        return state;
  }
}

