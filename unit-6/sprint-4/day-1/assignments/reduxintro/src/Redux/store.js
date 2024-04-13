import {legacy_store} from 'redux';
import { reducer } from './reducer';


const intialState={
    counter:0,
}
export const store=legacy_store(reducer,intialState)