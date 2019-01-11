import React , { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Umidity</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather,
    }
}

export default connect(mapStateToProps)(WeatherList);