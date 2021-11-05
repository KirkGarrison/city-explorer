import React, { Component } from "react";
import Movie from "./Movie";

export default class Movies extends Component {
   
    render () {
        return (
            <div>
                <Movie location={this.props.location}/>
            </div>
        )
    }
}