import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import Login from './Login'

class Nav extends Component {
  state = {
    login_clicked:false
  }

  handleLogin = (e) => {
    var header = document.getElementsByClassName("header")[0];
    var loginform = document.getElementById("login");
    if (!this.state.login_clicked) {
      this.setState({login_clicked:true});
      header.style.height = "100%";
      loginform.style.opacity = "1";
    } else {
      this.setState({login_clicked:false});
      header.style.height = "118px";
      loginform.style.opacity = "0";
    }
  }

  render() {
    var login_class = this.state.login_clicked ? "header header--full" : "header";
         return (<header className={login_class}>
              <nav className="navbar navbar-home navbar-expand-lg justify-content-between">
                      <a className="navbar-brand" href="#">acecard</a>
                      <button className="navbar-toggler third-button " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <div className="animated-icon3">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                          <NavLink className="nav-item nav-link active" to="/">Home</NavLink> <span className="sr-only">(current)</span>
                          <NavLink className="nav-item nav-link" to="/">Over</NavLink>
                          <a className="nav-item nav-link" onClick={this.handleLogin}>Inloggen</a>
                          <NavLink className="nav-item nav-link" to="/AddClub">Contact</NavLink>
                        </div>
                      </div>
                </nav>
                <Login is_visible={this.state.login_clicked ? "" : "d-none"} >
                </Login>
                <div className="parabole"></div>
                </header>)
                      
  }
}
export default Nav