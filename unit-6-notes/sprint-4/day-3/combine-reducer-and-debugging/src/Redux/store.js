import {applyMiddleware, legacy_createStore,compose} from 'redux'
import { productReducer } from './ProductReducer/productReducer';
import { authReducer } from './AuthReducer/authReducer';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'


const rootReducer=combineReducers({authReducer,productReducer})
                        // function karing
// const customMiddleware=(a)=>(b)=>(c)=>{
    const customMiddleware=(store)=>(dispatch)=>(action)=>{
    // console.log(a)//store object
    // console.log(b)//dispatch fun
    // console.log(c)//action object
    if(typeof action==='function'){
        action(dispatch)
    }
    else{
        dispatch(action)
    }

    // redux thunk core logic
}


// basic 
// export const store=legacy_createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const store=legacy_createStore(rootReducer,applyMiddleware(customMiddleware)); no need to write customMiddleware but its internal logic of middleWare thunk


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootReducer,
    composeEnhancers(
    applyMiddleware(thunk)))

// no intial state in the store 
// it shoud be in the same reducer
// multi reducers can be combined

// basic store
// only reducer inside the store