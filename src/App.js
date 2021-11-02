import React, { Component } from "react";
import axios from "axios";


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityValue: '',
      cityData: {},
    };
  }


  handleClick = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.cityValue}&format=json`;
    let response = await axios.get(url);
    this.setState({ location: response.data[0] });
    this.setState({ lat: response.data[0] });
    this.setState({ lon: response.data[0] });
  }

  handleChange = (e) => {
    this.setState({ cityValue: e.target.value })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.cityValue} />
        <p>{this.state.cityValue}</p>
        <button onClick={this.handleClick}>Explore</button>
        {this.state.location && <h1>{this.state.location.display_name}</h1>}
        {this.state.lat && <h2>Latitude {this.state.lat.lat} </h2>}
        {this.state.lon && <h2>Longitude {this.state.lon.lon} </h2>}
      </div>
    )
  }
}