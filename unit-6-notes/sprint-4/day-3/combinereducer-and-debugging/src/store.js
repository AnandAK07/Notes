import {createStore} from 'redux';
import {counterReducer} from './Couter/reducer'

export const store=createStore(counterReducer,{
    count:0,
    theme:"light",
    todo:[],
})

console.log("intial storage",store.getState());