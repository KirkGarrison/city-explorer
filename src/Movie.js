import React, { Component } from "react";
import axios from "axios";

export default class Movie extends Component {
    constructor (props) {
        super(props)
        this.state = {
            movieListing: []
        }
    }

    getMovieListing = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?&query=${this.props.location.display_name.split(',')[0]}`
        let response = await axios.get(url);
        // console.log(response.data);
        // print array results on screen
        this.setState({movieListing: response.data })
    }

    render () {
        return (
            <div>
                <button onClick={this.getMovieListing}>Get Movie Listings</button>
                {this.state.movieListing.length > 0 && this.state.movieListing.map((movie, idx) => <li key={idx}>Title: {movie.title} Overview: {movie.overview} <img src={movie.image} alt={movie.title}/></li>)}
            </div>
        )
    }
}