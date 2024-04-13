import { INCREMENT } from "./actionTypes"

//INCREMENT
export const incrementCount=(payload)=>{
    console.log(payload)
    return{
        type:INCREMENT,payload
    }
}

//DECREMENT