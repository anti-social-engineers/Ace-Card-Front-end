import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import axios from 'axios'
import jwt from 'jsonwebtoken'
import config from '../../../config/config'
import auth from '../../../Helper/actions/auth'

class LoginForm extends Component {

   state = {
      user: {},
      email: "",
      password: "",
      account: {email: "", password: ""},
      loading: false,
      logged_in: false,
      login_status: "none",
      decodeToken: null,
      message:'',
   }

   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value,
         account:{email:this.refs.email.value, password:this.refs.password.value}}

      )
    } 
   handleSubmit = () => {
      console.log("INSIDE LOGINFORM");
      var logininfo = document.getElementsByClassName("login-info")[0];

      if (logininfo.classList.contains("animated")){
         logininfo.classList.remove("animated", "shake");
      }

      this.setState({loading: true, logged_in: false, login_status: "none"})
      console.log(this.state.account)
      //Api Call Login
      axios.post(config.API_URL+'/api/login', this.state.account)
         .then(response => {
            
            console.log(response);
            if (response.status === 200) {
               this.setState({ login_status: "success" })
               auth.login()
               setTimeout(function () {
                  var decodeToken = jwt.verify(response.data.jsonWebToken, config.signature)
                  if (decodeToken) {
                     this.props.setUser(decodeToken.permissions);
                  }
                  this.props.toggleVisibility();
               }.bind(this), 800);
               this.setState({ logged_in: true });
            }
            localStorage.setItem('jwt token',response.data.jsonWebToken)
         }).catch((err) => {
            console.log(err);
            console.log("INCORRECT");
            var email_field = document.getElementById("email");
            if(err == 'Error: Request failed with status code 401'){
               console.log('handling 401');
               this.setState({ login_status: "wrong", loading: false, logged_in: false, message:'Email of wachtwoord is incorrect!' });
            }
           if(err == 'Error: Request failed with status code 403'){
            this.setState({ login_status: "wrong", loading: false, logged_in: false, message: 'Uw account is nog niet geactiveerd!' });
         }
           if(err == 'Error: Request failed with status code 500'){
            this.setState({ login_status: "wrong", loading: false, logged_in: false, message: 'Er is iets fout met de server. Excuses voor het ongemak!'});
           }
           if(err == 'Error: Request failed with status code 422'){
            this.setState({ login_status: "wrong", loading: false, logged_in: false, message:'Verkeerd email formaat.' });
           }
            logininfo.classList.add("animated", "shake");
            email_field.focus();
         });

   }

   render() {
      return (
            <Fade >
               <div data-aos="fade-up" data-aos-duration="400">
               <div className="form-wrapper">
               <div className="form-title">
                  <h2>Inloggen</h2>
               </div>
                  <div className="login-info">
                  <span className={this.state.login_status === "wrong" && !this.state.loading ? "loading-text" : "d-none invis"}><i className="fas fa-exclamation-circle"></i>{this.state.message}</span>
               </div>
               <div className="form-content">
                  <div className={this.state.loading ? "d-none" : "inputs"}>
                     <div className="group pb-5">      
                        <input type="email" id="email" ref="email" onChange={this.handleChange} required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>E-mail</label>
                     </div>
                     <div className="group pb-4">      
                        <input type="password" id="password" ref="password" onChange={this.handleChange} required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Wachtwoord</label>
                     </div>
                     <div className="row login-options">
                        <div className="col">
                           <a onClick={() => this.props.switchView("lostpass")}>Wachtwoord vergeten</a>
                        </div>
                        <div className="col text-right">
                           <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me"/>
                           <label htmlFor="ckb1" className="rememberme">
                           Remember me
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className={this.state.loading ? "form-loader" : "d-none form-loader--hidden"}>
                     <span className={this.state.logged_in || this.state.login_status !== "none" ? "d-none invis" : "loading-text"}><i className="fas fa-circle-notch fa-spin"></i>Account gegevens verifiëren...</span>
                     <span className={this.state.login_status === "success" ? "loading-text" : "d-none invis"}><i className="fas fa-check"></i>Welkom terug, {this.state.email}</span>
                  </div>
               </div>
            </div>
            <div className="row login-actions">
                  <div className="col">
                     <NavLink className="login-button" onClick={this.props.toggleVisibility} to="/Register">Nog geen account?</NavLink>
                  </div>
                  <div className="col">
                     <button className="main-button main-button--transparent float-right">
                           <span className="main-button-action">Inloggen</span>
                     </button>
                  </div>
               </div>
            </div>
         </Fade>
      );
   }

}

export default LoginForm