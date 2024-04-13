import {legacy_createStore} from 'redux'
import {reducer} from './reducer';

const intialState={
    count:0,
}
export const store=legacy_createStore(reducer,intialState);