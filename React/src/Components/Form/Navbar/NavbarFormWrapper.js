import React, { Component } from 'react'
import LoginForm from './LoginForm'
import LostPassForm from './LostPassForm';

class NavbarFormWrapper extends Component {
    constructor(props){
        super(props);
        this.login = React.createRef();
        this.lostpass = React.createRef();
    }

    state = {
        form_status: "none",
        login_view_open: true,
        lostpass_view_open: false
    }

    switchView = (view) => {
        console.log("Switching");
        if (view === "login") {
            this.setState({login_view_open: true, lostpass_view_open: false}, () => document.getElementById("email").focus());
        } else {
            this.setState({login_view_open: false, lostpass_view_open: true}, () => document.getElementById("email").focus());
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();        
        if (this.state.login_view_open) {
            this.login.current.handleSubmit();
        } else {
            this.lostpass.current.handleSubmit();        
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.login_visible ? "login--visible" : "login--hidden"} id="login">
            <div className="formarea">
               <div className="outerform outerform--center">
                    {this.state.login_view_open && <LoginForm setUser={this.props.setUser} toggleVisibility={this.props.toggleVisibility} switchView={this.switchView} ref={this.login}/>}
                    {this.state.lostpass_view_open && <LostPassForm toggleVisibility={this.props.toggleVisibility} switchView={this.switchView} ref={this.lostpass}/>}
               </div>
            </div>
            <div className="parabole"></div>
         </form>
        );
    }

}


export default NavbarFormWrapper
