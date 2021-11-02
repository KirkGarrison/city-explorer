import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default class Main extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.location.map} />
                    <Card.Body>
                        <Card.Title>{this.props.location.display_name}</Card.Title>
                        <Card.Text>
                            Latitude: {this.props.location.lat}
                        </Card.Text>
                        <Card.Text>
                            Longitude: {this.props.location.lom}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}