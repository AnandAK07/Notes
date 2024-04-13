import {legacy_createStore} from "redux";
import { reducer } from "../Redux/reducer";
const intialState={
    count:3,
};

export const store=legacy_createStore(reducer,intialState);
//reducer function -->pure function
//intialState