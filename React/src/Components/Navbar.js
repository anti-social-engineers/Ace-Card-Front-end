import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import Login from './Login'

class Nav extends Component {
  constructor(props){
    super(props);
    this.login = React.createRef();
  }
  state = {
    login_clicked:false,
    logged_in:false,
    user:{}
  }

  handleLogin = (e) => {
    console.log(this.state.user.length);
    if (!this.state.logged_in){
      console.log("NO USER");
      var header = document.getElementsByClassName("header")[0];
      var loginform = document.getElementById("login");
      if (!this.state.login_clicked) {
        console.log("not clicked")
        this.setState({login_clicked:true}, () => {
          header.style.height = "100%";
          loginform.style.opacity = "1";
          this.login.current.changeVisibility();
        });
      } else {
        console.log("clicked")
        this.setState({login_clicked:false}, () => {
          header.style.height = "118px";
          loginform.style.opacity = "0";
          this.login.current.changeVisibility();
        });
      }
    } else {
      console.log("DO NOTHING");
    }
  }

  collapseHeader = () => {
    console.log("COLLAPASING");
    var header = document.getElementsByClassName("header")[0];
    if (header.classList.contains("header--full")) {
      header.classList.remove("header--full");
      header.style.height = "118px";
    }
  }

  setUser = (user_arr) => {
    console.log("SETTING USER");
    this.setState({user: user_arr, logged_in: true});
  }

  logout = () => {
    console.log("LOGGIN OUT");
    this.setState({logged_in: false}, () => console.log(this.state));
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
                        <div className={this.state.logged_in ? "d-none" : "navbar-nav"}>
                          <NavLink className="nav-item nav-link active" to="/">Home</NavLink> <span className="sr-only">(current)</span>
                          <NavLink className="nav-item nav-link" to="/">Over</NavLink>
                          <a className="nav-item nav-link" onClick={this.handleLogin}>Inloggen</a>
                          <NavLink className="nav-item nav-link" to="/AddClub">Contact</NavLink>
                        </div>
                        <div className={this.state.logged_in ? "navbar-nav" : "d-none"}>
                          <span className={this.state.user ? "nav-item nav-link user-nav" : "d-none"}>{this.state.user ? this.state.user.email : ""}</span>
                          <NavLink className="nav-item nav-link active" to="/">Home</NavLink> <span className="sr-only">(current)</span>
                          <NavLink className="nav-item nav-link" to="/">Account</NavLink>
                          <a className="nav-item nav-link">Contact</a>
                          <a className="nav-item nav-link" onClick={this.logout}>Uitloggen</a>
                        </div>
                      </div>
                </nav>
                <Login is_visible={this.state.login_clicked} collapseHeader={this.collapseHeader} setUser={this.setUser} ref={this.login}>
                </Login>
                <div className="parabole"></div>
                </header>)
                      
  }
}
export default Nav