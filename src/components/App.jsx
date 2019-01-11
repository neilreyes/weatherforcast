import React from 'react';
import '../App.css';

// Smart components
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

const App = () =>{
    return(
        <div className="container">
            <div className="row">
                <h1>.</h1>
                <SearchBar />
            </div>
            <div className="row">
                <div className="col col-12">
                    <WeatherList />
                </div>
            </div>
        </div>
    )
}

export default App;