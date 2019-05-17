import React from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
          <div>
            <header className="header">
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
                            <NavLink className="nav-item nav-link" to="/Login">Inloggen</NavLink>
                            <NavLink className="nav-item nav-link" to="/AddClub">Contact</NavLink>
                          </div>
                        </div>
                      </nav>
                  <div className="parabole"></div>
                  </header>
          </div>
                        
    )}
export default Nav