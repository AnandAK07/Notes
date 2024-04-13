// store
import {legacy_createStore} from 'redux'
import {reducer} from './reducer';

const initialState={
    count:0,
}

// const reducer=(state=initialState,action)=>{
//     we have to write reducer fun here 
// }
export const store=legacy_createStore(reducer,initialState);
// two arguments-->reducer,intial state