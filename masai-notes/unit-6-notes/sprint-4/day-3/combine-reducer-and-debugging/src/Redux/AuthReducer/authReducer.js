import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const authState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}
export const authReducer=(state=authState,action)=>{
    // console.log(action.payload)
    switch (action.type){
        case LOGIN_REQUEST:{
            return{...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            return{...state,isAuth:true,isLoading:false,token:action.payload}
        }
        case LOGIN_FAILURE:{
            return{...state,isError:true}
        }
        default:
            return state;
    }
}