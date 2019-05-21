import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class Account extends Component {

  render() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="row h-100 no-gutterr">
                    <nav className="main-menu">
                        <ul>
                            <li className="active">
                                <NavLink className="" to="#">
                                <i className="fa fa-user fa-1x"></i>
                                    <span className="nav-text">
                                        Account
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li>
                                <NavLink className="" to="#">
                                <i className="fa fa-chart-line fa-1x"></i>
                                    <span className="nav-text">
                                        Saldo
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li>
                                <NavLink className="" to="/">
                                <i className="fa fa-sign-out-alt fa-1x"></i>
                                    <span className="nav-text">
                                        Log-out
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                        </ul>
                    </nav>

                    <div className="account-form">
                        <div className="form-wrapper">
                            <div className="form-title">
                                <h2>Account gegevens</h2>
                            </div>
                            <div className="form-content">
                                <div className="inputs">
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Henk</label>
                                        </div>
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Bakker</label>
                                        </div>
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required /> 
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>henk.bakker@gmail.com</label>
                                        </div>                                            
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>*******</label>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <button className="account-button float-right"><span className="account-button-action">Wachtwoord wijzigen</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}


export default Account;