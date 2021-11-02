import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Alert from "react-bootstrap/Alert";


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      location: {}
    };
  }


  getLocation = async (city) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.city}&format=json`;
    try {
      let response = await axios.get(url);
      this.setState({ location: response.data[0] }, this.getMapURL)
    } catch (e) {
      console.error(e);
      this.setState({ error: true })
    }
  }

  getMapURL = () => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`;
    this.setState({
      location: { ...this.state.location, map: url }
    })
  }
  render() {
    return (
      <div>
        <Header getLocation={this.getLocation} />
        {/* <input onChange={this.handleChange} value={this.state.cityValue} /> */}
        <p>{this.state.cityValue}</p>
        <button onClick={this.handleClick}>Explore</button>
        {this.state.location.map && <Main location={this.state.location} />}
        {this.state.error && <Alert variant=''}
      </div>
    )
  }
}