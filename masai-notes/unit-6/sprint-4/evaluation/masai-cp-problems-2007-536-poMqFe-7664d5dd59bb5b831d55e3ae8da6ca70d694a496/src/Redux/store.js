
import {applyMiddlewar,combineReducers,legacy_createStore} from 'react';
import { reducer } from './reducer'
import thunk from 'redux-thunk';

let rootReducer=combineReducers({reducer})

//thunk -->middleware 
let middleware=[thunk]

export const store= legacy_createStore(rootReducer,applyMiddlewar(...middleware));