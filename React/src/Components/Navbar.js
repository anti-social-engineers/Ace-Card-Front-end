import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import NavbarFormWrapper from './Form/Navbar/NavbarFormWrapper'
import auth from '../Helper/actions/auth'

class Nav extends Component {
  constructor(props){
    super(props);
    this.NavbarFormWrapper = React.createRef();
  }

  state = {
    login_clicked:false,
    logged_in:false,
    user:{},
    nav_loading: false,
        
  }

  handleLogin = (e) => {
    this.toggleLoginHeader();
  }

  toggleLoginHeader = () => {
    this.setState({login_clicked: !this.state.login_clicked}, () => this.toggleLoginHeaderAnimation());
  }

  toggleLoginHeaderAnimation = () => {
    document.querySelector('.header').classList.toggle('header--collapsed');
    document.getElementById('email').focus();
  }

  componentDidMount = () => {
    if(localStorage.getItem('jwt token') != null)
    {
      this.setState({logged_in: true})
    }
  }
  
  setUser = (user_arr) => {
    this.setState({user: user_arr, logged_in: true});
    
  }

  logout = () => {
    this.NavbarFormWrapper.current.login.current.setState({loading: false});
    this.setState({nav_loading:true});
    localStorage.removeItem('jwt token')
    auth.loguit()
    setTimeout(function () {
      this.setState({nav_loading:false, logged_in: false});
    }.bind(this), 700);
  }

  toggleVisibility = () => {
    this.setState({login_clicked: !this.login_clicked});
  }
  render(){
          return (<header className="header header--collapsed">
              <nav className="navbar navbar-home navbar-expand-lg justify-content-between">
                      <NavLink className="sidebar-brand d-flex align-items-center justify-content-center active" to="/">
                          <div className="sidebar-brand-icon">
                              <img src="/static/media/acelogo.00b6d2e8.png" alt style={{ width: 88 }} />
                          </div>
                          <div className="sidebar-brand-text mx-2">
                              <div className="row">
                                  <span style={{ fontSize: 8, color: "rgba(255, 255, 255, 0.47058823529411764)", fontWeight: 400 }}>Ace of Clubs</span>
                              </div>
                              <span style={{ fontWeight: 900, letterSpacing: "2.5px", color: "white" }}>Acecard</span>
                          </div>
                      </NavLink>
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
                          <a className="nav-item nav-link" onClick={this.toggleLoginHeader}>Inloggen</a>
                          <NavLink className="nav-item nav-link" to="/AddClub">Contact</NavLink>
                        </div>
                        
                        <div className={this.state.logged_in ? "navbar-nav no-invis" : "invis d-none"}>
                          <span className={this.state.user ? "nav-item nav-link user-nav" : "d-none"}>{this.state.user ? this.state.user.email : ""}</span>
                          <NavLink className="nav-item nav-link active" to="/">Home</NavLink> <span className="sr-only">(current)</span>
                          <NavLink className="nav-item nav-link" to="/Dashboard">Account</NavLink>
                          <a className="nav-item nav-link">Contact</a>
                          <NavLink to="/" className="nav-item nav-link loading-text--pd" onClick={this.logout}>
                            <i className={this.state.nav_loading ? "fas fa-circle-notch fa-spin no-invis" : "invis d-none"}></i>Uitloggen
                          </NavLink>
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