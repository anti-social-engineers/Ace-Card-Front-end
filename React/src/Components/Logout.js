import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import auth from '../Helper/actions/auth'

export default class Logout extends Component {

    state = {
        redirect: false
    }
    
    componentDidMount() {
        localStorage.removeItem('jwt token');
        auth.loguit();
        setTimeout(() => {
            this.setState({redirect: true})
        }, 500);
    }

    render() {
        return (
            <div>
                Aan het uitloggen...
                { this.state.redirect && <LogoutRedirect/>}
            </div>
        )
    }
}

class LogoutRedirect extends Component {
    render() {
        return (
                <Redirect to={
                    {
                        pathname: "/"
                    }
                }/>
        )
    }
}

