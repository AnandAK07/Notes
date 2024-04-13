import { GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_ERROR } from "./actionType";

const intialState={
    isLoaling:false,
    isError:false,
    todos:[]
}
export const reducer=(state=intialState,action)=>{
    const {type,payload}=action;

    switch(type){
        case GET_DATA_LOADING:return{...state,isLoaling:true,isError:false}
        case GET_DATA_SUCCESS:return{...state,isLoaling:false,todos:payload}
        case GET_DATA_ERROR:return{...state,isLoaling:false,isError:true}
        default:return state;
    }
}