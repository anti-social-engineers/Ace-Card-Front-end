import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import NavbarFormWrapper from './Form/Navbar/NavbarFormWrapper'

class Nav extends Component {
  constructor(props){
    super(props);
    this.NavbarFormWrapper = React.createRef();
  }
  state = {
    login_clicked:false,
    logged_in:false,
    user:{},
    nav_loading: false
  }

  handleLogin = (e) => {
    this.toggleLoginHeader();
  }

  toggleLoginHeader = () => {
    this.setState({login_clicked: !this.state.login_clicked}, () => this.toggleLoginHeaderAnimation());
  }

  toggleLoginHeaderAnimation = () => {
    var header = document.getElementsByClassName("header")[0];
    if (this.state.login_clicked){
      header.classList.add("header--full");
      header.style.height = "100%";
      document.getElementById("email").focus();
    } else {
      header.classList.remove("header--full");
      header.style.height = "118px";
    }
  }

  setUser = (user_arr) => {
    this.setState({user: user_arr, logged_in: true});
  }

  logout = () => {
    this.NavbarFormWrapper.current.login.current.setState({loading: false});
    this.setState({nav_loading:true});
    setTimeout(function () {
      this.setState({nav_loading:false});
      this.setState({logged_in: false}, () => console.log(this.state));
      this.NavbarFormWrapper.current.setState({logged_in: false});
    }.bind(this), 700);
  }

  toggleVisibility = () => {
    this.setState({login_clicked: !this.login_clicked}, () => console.log("CHANGE VIS"));
  }

  render() {
    var login_class = this.state.login_clicked ? "header header--full" : "header";
          return (<header className={login_class}>
              <nav className="navbar navbar-home navbar-expand-lg justify-content-between">
                      <NavLink className="navbar-brand" to="/">acecard</NavLink>
                      <button className="navbar-toggler third-button " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <div className="animated-icon3">
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={this.state.logged_in ? "invis d-none" : "navbar-nav no-invis"}>
                          <NavLink className="nav-item nav-link active" to="/">Home</NavLink> <span className="sr-only">(current)</span>
                          <NavLink className="nav-item nav-link" to="/">Over</NavLink>
                          <a className="nav-item nav-link" onClick={this.handleLogin}>Inloggen</a>
                          <NavLink className="nav-item nav-link" to="/AddClub">Contact</NavLink>
                        </div>
                        <div className={this.state.logged_in ? "navbar-nav no-invis" : "invis d-none"}>
                          <span className={this.state.user ? "nav-item nav-link user-nav" : "d-none"}>{this.state.user ? this.state.user.email : ""}</span>
                          <NavLink className="nav-item nav-link active" to="/">Home</NavLink> <span className="sr-only">(current)</span>
                          <NavLink className="nav-item nav-link" to="/">Account</NavLink>
                          <a className="nav-item nav-link">Contact</a>
                          <a className="nav-item nav-link loading-text--pd" onClick={this.logout}><i className={this.state.nav_loading ? "fas fa-circle-notch fa-spin no-invis" : "invis d-none"}></i>Uitloggen</a>
                        </div>
                      </div>
                </nav>
                <NavbarFormWrapper toggleVisibility={this.toggleLoginHeader}  login_visible={this.state.login_clicked} collapseHeader={this.collapseHeader} setUser={this.setUser} ref={this.NavbarFormWrapper}>
                </NavbarFormWrapper>
                <div className="parabole"></div>
                </header>)
                      
  }
}
export default Nav