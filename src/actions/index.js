import axios from 'axios';
import { FETCH_WEATHER } from '../constants';

const API_KEY = "57d4bf0521ae47722c5a38add3638190";
const COUNTRY_CODE = "us";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city){
    
    const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);

    return (dispatch) => {
        request
        .then((data) => {
            dispatch({
                type: FETCH_WEATHER,
                payload: data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}