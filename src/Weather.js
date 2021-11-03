import React, { Component } from "react";
import axios from "axios";

export default class Weather extends Component {
    constructor (props) {
        super(props)
        this.state = {
            weatherForcast: []
        }
    }

    getWeatherForcast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/data/weather?city=${this.props.location.display_name.split(',')[0]}&lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url)
        console.log(response.data)
        this.setState({ weatherForcast: response.data});
    }

    render () {
        return (
            <div>
                <button onClick={this.getWeatherForcast}>get Weather Forcast</button>
                {this.state.weatherForcast.length && this.state.weatherForcast.map((dayforcast, idx) => <li key={idx}>low temp:{dayforcast.min_temp} high temp:{dayforcast.max_temp} description:{dayforcast.description}</li>)}
            </div>
        )
    }
}