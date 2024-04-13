//pure functions

import { INCREMENT,DECREMENT } from "./actionType";

export const reducer =(state,{type,payload})=>{
    console.log(state)
    console.log(type)
    switch(type){
        case "INCREMENT":
        return{
            ...state,
            count:state.count+payload,
        }
        case "DECREMENT":
        return{
            ...state,
            count:state.count-payload,
        }
        default:
        return state;
    }
};
//action{type,payload}