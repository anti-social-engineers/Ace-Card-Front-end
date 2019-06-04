import React, { Component } from 'react'
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
        INVALID_EMAIL: "Uw email is incorrect.",
        ACCOUNT_EXISTS: "De opgegeven email is al in gebruik.",
        TOO_MANY_TRIES: "U heeft het formulier te vaak gestuurd. Probeer nog eens over " + this.props.timeout / 60000 + " minuten."
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value 
      })
    }    
    
    handlePasswordChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value 
      })
    }

    isValidForm = () => {
        console.log("VALIDATING FORM");
        var logininfo = document.getElementsByClassName("login-info")[0];

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

        if (this.state.password !== this.state.repeat_password) {
            console.log("MISMATCH PASSWORD");
            this.setState({form_error: this.form_errors.PASSWORD_MISMATCH});
            return false;
        } else if (this.state.dummy_data.email == this.state.email) {
          console.log("Account exists");
          this.setState({form_error: this.form_errors.ACCOUNT_EXISTS});
          return false;
        }
        return true;
    }

    handleSubmit = (e) => {
        if (!this.isValidForm()) {
          console.log("FAILED VALIDATION");
          return;
        }
        console.log("PASSED VALIDATION");

        if (this.state.submission_status === "success") {
            this.setState({loading:false, submission_status: "none"});
            return false;
        }

        console.log("Actually submitting");
        this.setState({account:{email: this.state.email.value, password: this.state.password.value}, loading:true});
        var logininfo = document.getElementsByClassName("login-info")[0];
  
        if (logininfo.classList.contains("animated")){
           logininfo.classList.remove("animated", "shake");
        }
        
        setTimeout(function(){
            // this is a placeholder for server side validation
            var isValid = true;

            if (isValid) {
              // Valid email
              this.setState({submission_status: "success"})
              // this.props.createAcc(this.state.account);
              console.log("Created account");
            } else {
              console.log("Server side validation failed");
              // Invalid registration
              this.setState({submission_status: "wrong", loading: false});
              logininfo.classList.add("animated","shake");
              this.refs.email.focus();
            }
        }.bind(this), 400);
     }

    render() {
        return (
            <div className="outerform">
              <div className="form-wrapper">
                <div className="form-title">
                  <h2>Registreren</h2>
                </div>
                <div class="login-info">
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
                            <input autoComplete="off" id="password" type="password" onChange={this.handlePasswordChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <PasswordStrengthMeter password={this.state.password} />

                            <label>Wachtwoord</label>
                      </div>
    
                      <div className="group">      
                        <input type="password" id="repeat_password" onChange={this.handlePasswordChange} ref="password_repeat" onChange={this.handlePasswordChange} required />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          {this.state.repeat_password && this.state.repeat_password !== this.state.password && <span class="form-helper">Wachtwoord komt niet overeen met herhaal wachtwoord.</span>}
                          <label>Wachtwoord herhalen</label>
                        </div>
                     </div> 
                  </div>
                 

                  </div>
                    {(this.state.submission_status === "none" || this.state.submission_status === "wrong") && <button className="main-button main-button--margin float-right"><span className="main-button-action">Registreren</span></button>}
                  </div>
        );
    }

}

export default RegisterForm
