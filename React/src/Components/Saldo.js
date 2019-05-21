import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class Saldo extends Component {

  render() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="row h-100 no-gutterr">
                    <nav className="main-menu">
                        <ul>
                            <li>
                                <NavLink className="" to="Account">
                                <i className="fa fa-user fa-1x"></i>
                                    <span className="nav-text">
                                        Account
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li className="active">
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
                </div>
            </div>
        </div>

    )
  }
}


export default Saldo;