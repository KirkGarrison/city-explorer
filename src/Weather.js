import React, { Component } from "react";
import WeatherDay from "./WeatherDay";

export default class Weather extends Component {

    render () {
        return (
            <div>
                <WeatherDay location={this.props.location}/>
            </div>
        )
    }
}