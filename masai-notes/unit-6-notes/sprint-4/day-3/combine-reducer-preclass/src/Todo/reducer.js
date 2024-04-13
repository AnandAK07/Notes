import React from 'react'
import { ADD_TODO} from './action'

export const todoReducer =(state=[],{type,payload})=>{
    switch (type){
        case ADD_TODO:
            return {...state,todo:[...state.todo,payload]};
        default: 
        return state;
    }
}
