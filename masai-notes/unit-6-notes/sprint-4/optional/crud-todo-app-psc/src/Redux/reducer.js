import {GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_FAILURE,} from './actionType'

const initialState={
    isLoading:false,
    isError:false,
    todos:[]
}
export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_DATA_LOADING:return {...state,isLoading:true}
        case GET_DATA_SUCCESS:return {...state,isLoading:false,todos:action.payload}
        case GET_DATA_FAILURE:return {...state,isLoading:false,isError:true}
        default:
            return state;
    }
}