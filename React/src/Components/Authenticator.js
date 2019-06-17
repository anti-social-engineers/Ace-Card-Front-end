import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'
import socketIOClient from "socket.io-client";

export const myContext = React.createContext();

export default class Authenticator extends Component {

    state = {
        data: []
    }
    
    async componentDidMount() {
        const auth_token = localStorage.getItem('jwt token')
        const header = 'Bearer ' + auth_token;
        const res = await axios.get(config.API_URL+'/api/account', {headers: {Authorization:header}});
        const blob = await axios.get(config.API_URL+'/' + res.data.image, {headers: {Authorization:header}, responseType: "blob"});
        var user = res.data;
        user["image"] = URL.createObjectURL(blob.data);
        
        this.setState({
            data: {user}
        });

        const io = socketIOClient(config.REDIS_URL, { query: {jwt: localStorage.getItem('jwt token')} });

        io.on("connection", socket => {
            console.log("Initial connect");
            socket.emit("jwt", localStorage.getItem('jwt token'));
        })

        io.on("event", data => {
            if (data !== this.state.notifications){
                var curr_data = Object.assign({}, this.state.data);
                curr_data["notifications"] = data;
                this.setState({data: curr_data}, () => {
                    // TODO
                    var dropdown = document.getElementById("alertsDropdown");
                    if (dropdown.getAttribute('aria-expanded') === "false") {
                        document.getElementById("alertsDropdown").click()
                    }
                });

                console.log("RECEIVED EMITTION BY NODEJS")
                console.log(data);
            }
        });

        io.on("reconnect", () => {
            console.log("RECONNECTING")
            io.emit("jwt", localStorage.getItem('jwt token'));
        })
    }

    

    updateLel = () => {
        console.log("finished!");
    }
    

    render() {
        console.log("RENDERING AUTHENTICATOR");
        console.log(this.state.data.notifications && this.state.data.notifications);
        return (
            <myContext.Provider value={{ ...this.state, updateNumber: this.updateNumber }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
