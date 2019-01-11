import { combineReducers }  from 'redux';
import searchReducer from './reducer_search';

const rootReducer = combineReducers({
    weather: searchReducer,
})

export default rootReducer;
