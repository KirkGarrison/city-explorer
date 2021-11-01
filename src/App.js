import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    cityValue: ''
  }
}

handleClick = () => {
  const url = 'https://us1.locationiq.com/v1/search.php'
  
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