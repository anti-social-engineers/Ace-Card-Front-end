import React, { Component } from 'react'
import '../../../Styles/css/bootstrap-theme.css'
import '../../../Styles/css/bootstrap-theme.min.css'
import '../../../Styles/css/bootstrap.css'
import '../../../Styles/css/bootstrap.min.css'
import '../../../Styles/css/style.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

class LoginForm extends Component {
   constructor(props){
      super(props);
   }

   state = {
      user: {},
      email: "",
      password: "",
      loading: false,
      logged_in: false,
      login_status: "none",
      loading: false
   }
   handleSubmit = () => {
      console.log("INSIDE LOGINFORM");
      this.setState({user:{email:this.refs.email.value}, email:this.refs.email.value, password:this.refs.password.value, loading: true, logged_in: false, login_status: "none"});
      var logininfo = document.getElementsByClassName("login-info")[0];

      if (logininfo.classList.contains("animated")){
         logininfo.classList.remove("animated", "shake");
      }
      
      setTimeout(function(){
            if (this.state.email === "selimaydi@gmail.com" && this.state.password === "test") {
               this.setState({login_status: "success"})

               setTimeout(function () {
                  this.props.toggleVisibility();
                  this.props.setUser(this.state.user);
               }.bind(this), 1000);

            } else {
               var email_field = document.getElementById("email");
               this.setState({login_status: "wrong", loading: false, logged_in: false});
               logininfo.classList.add("animated","shake");
               email_field.focus();
            }

            this.setState({logged_in:true});
      }.bind(this), 400);
   }

   render() {
      return (
         <div>
               <div className="form-wrapper">
               <Fade>
               <div className="form-title">
                  <h2>Inloggen</h2>
               </div>
               </Fade>
                  <div className="login-info">
                  <span className={this.state.login_status === "wrong" && !this.state.loading ? "loading-text" : "d-none invis"}><i className="fas fa-exclamation-circle"></i>Inloggen mislukt.</span>
               </div>
               <div className="form-content">
                  <div className={this.state.loading ? "d-none" : "inputs"}>
                     <div className="group pb-5">      
                        <input type="email" id="email" ref="email" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>E-mail</label>
                     </div>
                     <div className="group pb-5">      
                        <input type="password" id="password" ref="password" required/>
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
                     <NavLink className="dark-link" onClick={this.props.toggleVisibility} to="/Register">Nog geen account?</NavLink>
                  </div>
                  <div className="col">
                     <button className="main-button main-button--transparent float-right">
                           <span className="main-button-action">Inloggen</span>
                     </button>
                  </div>
               </div>
         </div>
      );
   }

}

export default LoginForm