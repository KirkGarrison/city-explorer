import React, { Component } from "react";
import axios from "axios";


export default class WeatherDay extends Component {
    constructor (props) {
        super(props)
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherForecast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`
        let response = await axios.get(url);
        // console.log(response.data);
        // print array results on screen
        this.setState({weatherForecast: response.data })
    }

    render () {
        return (
           <div>
                <button onClick={this.getWeatherForecast}>Get Weather Forecast</button>
                {this.state.weatherForecast.length > 0 && this.state.weatherForecast.map((dayForecast, idx) => <li key={idx}>Date: {dayForecast.date} Description: {dayForecast.description}</li>)}
                </div>
        )
    }
}