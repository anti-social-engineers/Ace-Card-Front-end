import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

export default class Client extends Component {
    state = {
        points: "Not defined yet"
    }
    
    componentDidMount() {
        const socket = socketIOClient("localhost:8888");
        socket.on("points", data => this.setState({points: data}));
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.points}</h1>
            </div>
        )
    }
}
