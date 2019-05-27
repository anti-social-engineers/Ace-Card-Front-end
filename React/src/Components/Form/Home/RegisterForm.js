import React, { Component } from 'react'
import '../../../Styles/css/bootstrap-theme.css'
import '../../../Styles/css/bootstrap-theme.min.css'
import '../../../Styles/css/bootstrap.css'
import '../../../Styles/css/bootstrap.min.css'
import '../../../Styles/css/style.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import PasswordStrengthMeter from '../../Tools/PasswordStrengthMeter';

class RegisterForm extends Component {
    constructor(props){
        super(props);
    }

    state = {
        email: "",
        password: "",
        repeat_password: "",
        account: {email: "", password: ""},
        submission_status: "none",
        loading: false,
        form_submit_count: 0,
        form_error: ""
    }

    form_errors = {
        PASSWORD_MISMATCH: "Uw herhaalwachtwoord komt niet overeen met uw wachtwoord",
        INVALID_EMAIL: "Uw email is incorrect of al in gebruik.",
        TOO_MANY_TRIES: "U heeft het formulier te vaak gestuurd. Probeer nog eens over " + this.props.timeout / 60000 + " minuten."
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value 
        })
        console.log(e.target.value);

      }    

    isValidForm = () => {
        console.log(this.state.form_submit_count);
        if (this.state.form_submit_count >= 5) {
            console.log("Blocking for 5 minutes");
            console.log(this.state.form_error);
            this.setState({form_error: this.form_errors.TOO_MANY_TRIES});
            setTimeout(function (){
                this.setState({form_submit_count: 0}, () => console.log(this.state.form_error));
            }.bind(this), this.props.timeout);
            return false;
        } else {
            this.setState({form_submit_count: this.state.form_submit_count + 1});
        }

        if (this.refs.password.value !== this.refs.password_repeat.value) {
            console.log("MISMATCH PASSWORD");
            this.setState({form_error: this.form_errors.PASSWORD_MISMATCH});
            return false;
        }

        return true;
    }

    handleSubmit = () => {
        if (!this.isValidForm()) {
            return;
        }

        if (this.state.submission_status === "success") {
            this.setState({loading:false, submission_status: "none"});
            return false;
        }

        console.log("Actually submitting");
        this.setState({account:{email: this.refs.email.value, password: this.refs.password.value}, loading:true});
        var logininfo = document.getElementsByClassName("login-info")[0];
  
        if (logininfo.classList.contains("animated")){
           logininfo.classList.remove("animated", "shake");
        }
        
        setTimeout(function(){
              if (this.state.email !== "selimaydi@gmail.com") {
                // Valid email
                this.setState({submission_status: "success"})
                this.props.createAcc(this.state.account);
                console.log("Created account");
              } else {
                console.log("invalid mail");
                // Invalid email
                 var email_field = document.getElementById("email");
                 this.setState({submission_status: "wrong", loading: false});
                 logininfo.classList.add("animated","shake");
                this.refs.email.focus();
              }
        }.bind(this), 400);
     }

    render() {
        return (
            <div>
            <div className="outerform">
              <div className="form-wrapper">

                <div className="form-title">
                  <h2>Registreren</h2>
                </div>
                <div class="login-info">
                     {/* <span className={this.state.submission_status === "wrong" && !this.state.loading && this.state.form_submit_count < 5 ? "loading-text loading-text--small" : "d-none invis"}><i class="fas fa-exclamation-circle"></i>Uw email is incorrect of kan niet gevonden worden.</span>
                     <span className={this.state.form_submit_count >= 5 && !this.state.loading ? "loading-text loading-text--small" : "d-none invis"}><i class="fas fa-exclamation-circle"></i>U heeft het formulier te vaak gestuurd. Probeer nog eens over {this.timeout / 60000} minuten.</span> */}
                     <span className={this.state.form_error ? "loading-text loading-text--small" : "d-none invis"}><i class="fas fa-exclamation-circle"></i>{this.state.form_error}</span>
                </div>
                  <div className={this.state.loading ? "form-loader" : "d-none form-loader--hidden"}>
                        <span className={this.state.submission_status !== "success" ? "loading-text loading-text--small" : "d-none invis"}><i className="fas fa-circle-notch fa-spin"></i>Email valideren...</span>
                        <span className={this.state.submission_status === "success" ? "loading-text loading-text--small" : "d-none invis"}><i className="fas fa-check"></i>Een email is zojuist gestuurd naar: {this.state.email}</span>
                </div>
                  <div className="form-content">
                   <div className={this.state.loading ? "d-none" : "inputs inputs-space"}>
                        <div className="group">
                        <input type="email" id="email" ref="email" onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>E-mail</label>
                        </div>
                        <div className="group">      
                            {/* <input type="password" id="password" ref="password" onChange={this.handleChange} required/> */}
                                    <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
                                    <PasswordStrengthMeter password={this.state.password} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Wachtwoord</label>
                      </div>
    
                      <div className="group">      
                        <input type="password" id="repeatpassword" onChange={this.handleChange} ref="password_repeat" onChange={this.handleChange} required />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Wachtwoord herhalen</label>
                        </div>
                     </div> 
                  </div>
                 

                  </div>
                  <button className="main-button main-button--margin float-right"><span className="main-button-action">Registreren</span></button>

                  </div>
                </div>
        );
    }

}

export default RegisterForm
