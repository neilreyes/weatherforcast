import { FETCH_WEATHER, LOCATION_NOT_FOUND } from '../constants';

const initialState = [];

export default function searchReducer(state = initialState, action){
    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([ action.payload.data ]);
        case LOCATION_NOT_FOUND:
            return action.payload.error;
        default:
            return state;
    }
}