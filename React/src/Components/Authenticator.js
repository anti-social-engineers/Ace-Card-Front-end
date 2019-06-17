import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'
import socketIOClient from "socket.io-client";

export const myContext = React.createContext();

export default class Authenticator extends Component {

    state = {
        data: [],
        hasConnected: false
    }
    
    async componentDidMount() {
        const auth_token = localStorage.getItem('jwt token')
        const header = 'Bearer ' + auth_token;
        const res = await axios.get(config.API_URL+'api/account', {headers: {Authorization:header}});
        console.log(res.data);
        var user = res.data;
        if (res.data.has_card) {
            const blob = await axios.get(config.API_URL + res.data.image, {headers: {Authorization:header}, responseType: "blob"});
            
            user["image"] = URL.createObjectURL(blob.data);
            const io = socketIOClient(config.REDIS_URL, { query: {jwt: localStorage.getItem('jwt token')} , forceNew: true}, () => console.log("hi"));

            io.on("connection", socket => {
                console.log("Initial connect");
                socket.emit("jwt", localStorage.getItem('jwt token'));
            });

            io.on("firstConnect", data => {
                // console.log(object)
                console.log("FIRST CONNECT!!!!!!!!!!!");
                this.setState({hasConnected: true});
            });

            io.on("event", data => {
                if (data !== this.state.notifications) {
                    var curr_data = Object.assign({}, this.state.data);
                    curr_data["notifications"] = data;
                    // var isFirstConnect = curr_data["firstConnect"];
                    // console.log("FIRST CONNECT: ", isFirstConnect);
                    this.setState({data: curr_data}, () => {
                        // TODO
                        if (this.state.hasConnected){
                            var dropdown = document.getElementById("alertsDropdown");
                            if (dropdown.getAttribute('aria-expanded') === "false") {
                                document.getElementById("alertsDropdown").click()
                            }
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

        this.setState({
            data: {user}
        });

        
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
