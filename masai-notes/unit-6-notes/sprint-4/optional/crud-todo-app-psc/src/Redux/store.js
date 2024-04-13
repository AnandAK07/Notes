import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {reducer} from '../Redux/reducer'
import thunk from 'redux-thunk'

let middleWare=[thunk]
const rootReducer=combineReducers({reducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(...middleWare))
// reducer,applyMiddleware(thunk)