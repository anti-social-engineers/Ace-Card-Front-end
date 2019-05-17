import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom'

class Login extends Component {
  state = {
    email:'',
    password:''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
         <div className="formarea formarea--center">
            <div className="outerform outerform--center ">
               <div className="form-wrapper">
                  <div className="form-title">
                     <h2>Inloggen</h2>
                  </div>
                  <div className="form-content">
                     <div className="inputs">
                        <div className="group">      
                           <input type="text" required=""/>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label>E-mail</label>
                        </div>
                        <div className="group">      
                           <input type="password" required=""/>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label>Wachtwoord</label>
                        </div>
                        <div className="row login-options">
                           <div className="col">
                              <a href="#">Wachtwoord vergeten</a>
                           </div>
                           <div className="col text-right">
                              <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me"/>
                              <label className="rememberme">
                              Remember me
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row login-actions">
                   <div className="col">
                       <NavLink className="dark-link" to="/Register">Nog geen account?</NavLink>

                    </div>
                    <div className="col">
                        <button className="main-button main-button--transparent">
                            <span className="main-button-action">Inloggen</span>
                        </button>
                    </div>
                </div>
            </div>
         </div>
         <div className="parabole"></div>
      </form>
    )
  }
}

export default Login

