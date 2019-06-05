import React, { Component } from 'react'
import RegisterSideInfo from './RegisterSideInfo';
import RegisterTitle from './RegisterTitle/RegisterTitle';
import RegisterStep2FormViews from './RegisterStep2FormViews';

class RegisterStep2Form extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
      console.log(this.props.form);
    }

    state = {
        submission_status: "none",
        loading: false,
        form_submit_count: 0,
        form_error: "",
        allow_next: true
    }

    form_errors = {
        PASSWORD_MISMATCH: "Uw herhaalwachtwoord komt niet overeen met uw wachtwoord",
        INVALID_EMAIL: "Uw email is incorrect.",
        ACCOUNT_EXISTS: "De opgegeven email is al in gebruik.",
        TOO_MANY_TRIES: "U heeft het formulier te vaak gestuurd. Probeer nog eens over " + this.props.timeout / 60000 + " minuten."
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

    updateNext = (e) => {
      console.log(this.props.form);
      if (this.props.form){
        e.preventDefault();
        this.props.form.reportValidity();
        if (this.props.form.checkValidity()) {
          if (this.props.current_view < 4) {
            this.props.switchView(this.props.current_view + 1);
          }
        }
      }
    }

    updatePrev = (e) => {
      e.preventDefault();
      if (this.props.current_view > 1) {
        this.props.switchView(this.props.current_view - 1);
      }
    }

    render() {
        return (
                <div className="outerform">
                  <div className="form-wrapper">
                    <RegisterTitle step={this.props.current_view}/>
                    <div className="form-content row no-gutterr">
                      <RegisterSideInfo/>
                      <RegisterStep2FormViews values={this.props.values} handleDate={this.props.handleDate} handleChange={this.props.handleChange} step={this.props.current_view} />
                    </div>
                  </div>
                  <div className="linkbar-wrapper linkbar-wrapper--mobile d-block d-xl-none">
                    <div className="row d-flex justify-content-between no-gutterr linkbar self-align-center">
                      <div className="mr-auto">
                        <a href="#">Meer informatie</a>
                      </div>
                      <div>
                        <a href="#">Bestelvoorwaarden</a>
                        <a href="#">Privacybeleid</a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    {this.props.current_view > 1 && this.props.current_view < 4 && <button className="main-button--prev main-button--margin mr-4" onClick={this.updatePrev}><span className="main-button-action">Vorige</span></button>}
                    {this.props.current_view < 4 && this.state.allow_next && <button className="main-button main-button--margin ml-auto" onClick={this.updateNext}><span className="main-button-action">Volgende</span></button>}                  
                    {this.props.current_view === 4 &&  <button className="main-button main-button--margin ml-auto" onClick={this.updateNext}><span className="main-button-action">Inloggen</span></button>}                  
                  </div>
                </div>
        );
    }

}

export default RegisterStep2Form
