import React, { Component } from 'react'
import axios from 'axios'
import config from '../config/config'
import socketIOClient from "socket.io-client";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        var user = res.data;
        if (res.data.has_card) {
            const blob = await axios.get(config.API_URL + res.data.image, {headers: {Authorization:header}, responseType: "blob"});
            
            user["image"] = URL.createObjectURL(blob.data);
            
            this.initSocketConnection();
        }

        this.setState({
            data: {user}
        });
    
    }
    
    initSocketConnection = () => {
        const io = socketIOClient(config.REDIS_URL, { query: {jwt: localStorage.getItem('jwt token')} , forceNew: true}, () => console.log("hi"));

            io.on("connection", socket => {
                console.log("Initial connect");
                socket.emit("jwt", localStorage.getItem('jwt token'));
            });

            io.on("firstConnect", data => {
                this.setState({hasConnected: true});
            });

            io.on("event", data => {
                // Als er tussen nu en 5 seconden geleden een deposit binnen komt krijgt de gebruiker een toast notificatie
                if (data[0] && data[0].name === "deposit")
                    if (((new Date()) - new Date(data[0].datetime)) < 5000) toast.success("Uw transactie is geslaagd! Uw heeft zojuist € " + data[0].amount.toFixed(2) + " opgewaardeerd!");
                console.log("AUTHENTICATOR NOTIFICATIONS:", data);
                if (data !== this.state.notifications) {
                    var curr_data = Object.assign({}, this.state.data);

                    if (data[0]){
                        curr_data.user.previous_credits = curr_data.user.credits;

                        if ((data[0].name === "deposit" || data[0].name === "transaction")) {
                            curr_data.user.credits = data[0].updated_balance.toFixed(2);                            
                        }
                    }

                    curr_data["notifications"] = data;
                    // var isFirstConnect = curr_data["firstConnect"];
                    // console.log("FIRST CONNECT: ", isFirstConnect);
                    this.setState({data: curr_data }, () => {
                        // TODO
                        if (this.state.hasConnected){
                            var dropdown = document.getElementById("alertsDropdown");
                            if (dropdown.getAttribute('aria-expanded') === "false") {
                                document.getElementById("alertsDropdown").click()
                            }
                        }
                        
                    });

                }
            });

            io.on("reconnect", () => {
                console.log("RECONNECTING")
                io.emit("jwt", localStorage.getItem('jwt token'));
            })
        }

    render() {
        console.log("RENDERING AUTH");
        return (
            <>
            {/* {!this.state.data.user && <div className="loadingtext">
                <img src="/static/media/acelogo.00b6d2e8.png" alt style={{ width: 120 }} />
                <h1>Dashboard aan het laden...</h1>
            </div>} */}
            {this.state.data.user && <myContext.Provider value={{ ...this.state, updateNumber: this.updateNumber }}>
                {this.props.children}
            </myContext.Provider>}
            </>
        )
    }
}
