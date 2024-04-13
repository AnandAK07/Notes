import { INCREMENT } from "./actionTypes";

//pure fun
export const reducer=(state,{type,payload})=>{
    //action-type,payload
    console.log(payload);
    switch(type){
        case INCREMENT:{
            return {
                ...state,count:state.count+payload,
            }
        }
        default:
            return state;
    }
}