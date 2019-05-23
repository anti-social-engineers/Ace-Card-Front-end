import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import { NavLink } from 'react-router-dom'
import LoginForm from './LoginForm'
import LostPass from './LostPass'

class LoginFormWrapper extends Component {
    constructor(props){
        super(props);
    }

    state = {
        form_status: "none",
        is_loading: false,
        login_view_open: true,
        lostpass_view_open: false
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.login_visible ? "login--visible" : "login--hidden"} id="login">
                <div className="formarea formarea--center">
                    <div className="outerform outerform--center">
                        <div className="form-wrapper">
                            <div className="form-title">
                                <h2>Inloggen</h2>
                            </div>
                            <div class="login-info">
                                <span className={this.state.login_status === "wrong" && !this.state.loading ? "loading-text" : "d-none invis"}><i class="fas fa-exclamation-circle"></i>Failed to log in.</span>
                            </div>
                            <div className="form-content">
                                <div className={this.state.loading ? "d-none" : "inputs"}>
                                    <div className="group pb-5">
                                        <input type="text" id="email" ref="email" required />
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>E-mail</label>
                                    </div>
                                    <div className="group pb-5">
                                        <input type="password" id="password" ref="password" required />
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Wachtwoord</label>
                                    </div>
                                    <div className="row login-options">
                                        <div className="col">
                                            <a href="#">Wachtwoord vergeten</a>
                                        </div>
                                        <div className="col text-right">
                                            <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me" />
                                            <label className="rememberme">
                                                Remember me
                              </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.loading ? "form-loader" : "d-none form-loader--hidden"}>
                                    <span className={this.state.logged_in || this.state.login_status !== "none" ? "d-none invis" : "loading-text"}><i className="fas fa-circle-notch fa-spin"></i>Verifying account details...</span>
                                    <span className={this.state.login_status === "success" ? "loading-text" : "d-none invis"}><i className="fas fa-check"></i>Succesfully logged in.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row login-actions">
                            <div className="col">
                                <NavLink className="dark-link" to="/Register">Nog geen account?</NavLink>

                            </div>
                            <div className="col">
                                <button className="main-button main-button--transparent float-right">
                                    <span className="main-button-action">Inloggen</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parabole"></div>
            </form>
        );
    }

}

export default LoginFormWrapper
