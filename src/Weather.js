import React, { Component } from "react";
import axios from "axios";

export default class Weather extends Component {
    constructor (props) {
        super(props)
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherForcast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`
        let response = await axios.get(url);
        // console.log(response.data);
        // print array results on screen
        this.setState({weatherForecast: response.data })
    }

    render () {
        return (
            <div>
                <button onClick={this.getWeatherForcast}>Get Weather Forecast</button>
                {this.state.weatherForcast.length > 0 && this.state.weatherForcast.map((dayForecast, idx) => <li key={idx}>date: {dayForecast.date} description:{dayForecast.description}</li>)}
            </div>
        )
    }
}