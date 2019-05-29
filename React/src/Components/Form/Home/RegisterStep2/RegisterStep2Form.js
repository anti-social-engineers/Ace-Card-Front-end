import React, { Component } from 'react'
import RegisterSideInfo from './RegisterSideInfo';
import RegisterTitle from './RegisterTitle/RegisterTitle';
import RegisterStep1 from './RegisterSteps/RegisterStep1';
import RegisterStep2 from './RegisterSteps/RegisterStep2';
import RegisterStep3 from './RegisterSteps/RegisterStep3';
import RegisterFinished from './RegisterSteps/RegisterFinished';

class RegisterStep2Form extends Component {
    constructor(props){
        super(props);
    }

    state = {
        email: "",
        password: "",
        repeat_password: "",
        account: {email: "", password: ""},
        dummy_data: {email: "lel@gmail.com", password: "test"},
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
        // console.log(this.state.form_submit_count);
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

    handleSubmit = () => {
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

    updateView = (e) => {
      e.preventDefault();
      console.log(this.props.current_view);
      if (this.props.current_view === 4) {
        this.props.switchView(1);
        console.log("reached end");
      } else {
        this.props.switchView(this.props.current_view + 1);
        console.log("going next");
      }
    }

    render() {
        return (
                  <div className="outerform">
                    <div className="form-wrapper">
                      <RegisterTitle step={this.props.current_view}/>
                      <div className="form-content row no-gutterr">
                        <RegisterSideInfo/>
                        {this.props.current_view === 1 && <RegisterStep1/>}
                        {this.props.current_view === 2 && <RegisterStep2/>}
                        {this.props.current_view === 3 && <RegisterStep3/>}
                        {this.props.current_view === 4 && <RegisterFinished/>}
                      </div>
                    </div>
                    <div className="linkbar-wrapper linkbar-wrapper--mobile d-block d-xl-none">
                      <div className="row d-flex justify-content-between no-gutterr linkbar self-align-center">
                        <div>
                          <a href="#">Meer informatie</a>
                        </div>
                        <div>
                          <a href="#">Bestelvoorwaarden</a>
                          <a href="#">Privacybeleid</a>
                        </div>
                      </div>
                    </div>
                    {this.props.current_view < 4 && <button className="main-button main-button--margin float-right" onClick={this.updateView}><span className="main-button-action">Volgende</span></button>}
                  
                  </div>
        );
    }

}

export default RegisterStep2Form
