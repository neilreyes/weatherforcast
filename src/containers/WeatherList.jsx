import React , { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component{
    renderWeather(data){
        const name = data.city.name;
        const temps = data.list.map(weather => weather.main.temp);
        const humids = data.list.map(weather => weather.main.humidity);
        const pressures = data.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart color={"orange"} data={temps} />
                </td>
                <td>
                    <Chart color={"green"} data={pressures} />
                </td>
                <td>
                    <Chart color={"#8e44af"} data={humids} />
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
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