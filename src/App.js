import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    cityValue: ''
  }
}

handleClick = async () => {
  const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.cityValue}&format=json`;
  let response = await axios.get(url);
  console.log(response.data[0]);
  
}

handleChange = (e) => {
  this.setState({ cityValue: e.target.value})
}

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.cityValue}/>
        <p>{this.state.cityValue}</p>
        <button onClick={this.handleClick}>Explore</button>
      </div>
    )
  }
}