import { combineReducers } from 'redux';
import {LOGIN} from "./actionTypes";

export { LOGIN } from './actionTypes';

const INITIAL_STATE = {
    data: null
};

const dataReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('test---', action.payload);
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

const reducers = combineReducers({dataReducer});

export default reducers;
