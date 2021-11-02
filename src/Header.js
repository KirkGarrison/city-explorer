import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }


handleChange = (e) => {
    this.setState({ cityName: e.target.value })
}    

handleClick = () => {
    this.props.getLocation(this.state.cityName)
}
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Enter a City to search</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" value={this.state.cityName} />
                    </Form.Group>
                    <Button onClick={this.handleClick} variant="secondary" type="submit">Explore!</Button>
                </Form>
            </div >
        )
    }
}