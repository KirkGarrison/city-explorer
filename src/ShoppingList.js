import React, { Component } from "react";
import axios from "axios";

export default class ShoppingList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            shoppingItems: []
        }
    }

    getShoppingItems = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/shoppinglist`;
        let response = await axios.get(url)
        console.log(response.data)
        this.setState({ shoppingItems: response.data});
    }

    render () {
        return (
            <div>
                <button onClick={this.getShoppingItems}>get shopping itmes</button>
                {this.state.shoppingItems.length > 0 && this.state.shoppingItems.map(item => <li key={item}>{item}</li>)}
            </div>
        )
    }
}