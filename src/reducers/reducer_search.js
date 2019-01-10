import { FETCH_WEATHER } from '../constants';

const initialState = [];

export default function searchReducer(state = initialState, action){
    switch(action.type){
        case FETCH_WEATHER:
            return state.concat([ action.payload.data ]);
            break;

        default:
            return state;
    }
}