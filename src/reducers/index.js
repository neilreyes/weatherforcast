import {combineReducers}  from 'redux';
import searchReducer from './reducer_search';

export default function rootReducer(){
    return combineReducers({
        weather: searchReducer,
    })
}
