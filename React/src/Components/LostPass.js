import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import { NavLink } from 'react-router-dom'

class LostPass extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="form-content">
                <div className={this.state.loading ? "d-none" : "inputs"}>
                    <div className="group pb-5">
                        <input type="text" id="email" ref="email" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>E-mail</label>
                    </div>
                    <div className="row login-options">
                        <div className="col">
                            <a href="#">Login</a>
                        </div>
                        <div className="col text-right">
                            <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me" />
                            <label className="rememberme">
                                Remember me
                              </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LostPass
