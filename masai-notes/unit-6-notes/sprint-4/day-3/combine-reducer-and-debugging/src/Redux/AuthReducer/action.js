import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./actionType";

export const getLoginRequest=()=>{
    return{type:LOGIN_REQUEST}
}

export const getLoginSuccess=(payload)=>{
    return{type:LOGIN_SUCCESS,payload:payload}
}

export const getLoginFailure=()=>{
    return{type:LOGIN_FAILURE}
}