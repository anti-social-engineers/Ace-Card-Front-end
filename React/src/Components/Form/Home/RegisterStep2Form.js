import React, { Component } from 'react'
import '../../../Styles/css/bootstrap-theme.css'
import '../../../Styles/css/bootstrap-theme.min.css'
import '../../../Styles/css/bootstrap.css'
import '../../../Styles/css/bootstrap.min.css'
import '../../../Styles/css/style.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

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

        // console.log(this.state.password)

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

    render() {
        return (
                    <div className="outerform">
                      <div className="form-wrapper">
                        <div className="row no-gutters form-title-wrap form-title--large">
                          <div className="form-title col-sm-12 col-md-12 col-xl-3 form-title-left text-center">
                            <h2>Registreren</h2>
                          </div>
                          <div className="form-title d-none d-md-block col-md-12 col-xl-9 align-self-center">
                            <div className="form-status row no-gutters">
                              <div className="row col-md-12 status_texts">
                                <div className="col text-left"><span>Gegevens</span></div>
                                <div className="col text-left"><span>Foto uploaden</span></div>
                                <div className="col text-right">
                                  <span>Bevestigen</span>
                                </div>
                              </div>
                              <div className="row col-md-12 text-right no-gutters">
                                <div className="statuscircle statuscircle--checked" />
                                <div className="statusbar statusbar--checked" />
                                <div className="statusbar statusbar--unchecked" />
                                <div className="statuscircle  statuscircle--unchecked" />
                                <div className="statusbar statusbar--unchecked" />
                                <div className="statusbar statusbar--unchecked" />
                                <div className="statuscircle statuscircle--unchecked" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-content row no-gutters">
                          <div className="no-gutters col-sm-0 col-md-5 col-lg-5 col-xl-4">
                            <div className="row col-md-12 no-gutters">
                              <div className="info-text-wrapper">
                                <h3 className="info">Wat heb je nodig</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.est laborum.</p>
                              </div>
                            </div>
                            <div className="form-divider col-md-12 no-gutters">
                              <div className="form-diver-border" />
                            </div>
                            <div className="row col-md-12 no-gutters">
                              <div className="info-text-wrapper">
                                <h3 className="reqs">Eisen aan de foto upload</h3>
                                <ul>
                                  <li>Lorem ipsum</li>
                                  <li>Lorem ipsum</li>
                                  <li>Lorem ipsum</li>
                                  <li>Lorem ipsum</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7 col-lg-7 col-xl-8">
                            <div className="inputs inputs--large">
                              <div className="group row">
                                <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Voornaam</label>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Achternaam</label>
                                  </div>
                                </div>
                              </div>
                              <div className="group row">
                                <div className="col pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Straat</label>
                                  </div>
                                </div>
                                <div className="col pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Woonplaats</label>
                                  </div>
                                </div>
                              </div>
                              <div className="group row">
                                <div className="col pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Postcode</label>
                                  </div>
                                </div>
                                <div className="col pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Huisnummer</label>
                                  </div>
                                </div>
                                <div className="col pb-5">
                                  <div className="input-wrapper">
                                    <input type="text" required />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Toevoeging</label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-label">
                                <p>Geboortedatum</p>
                              </div>
                              <div className="group row pb-4">
                                <div className="col col-md-4 col-lg-4 col-xl-2">
                                  <div className="select">
                                    <select>
                                      <option>01</option>
                                      <option>Option</option>
                                      <option>Option</option>
                                    </select>
                                    <div className="select__arrow" />
                                  </div>
                                </div>
                                <div className="col col-md-4 col-lg-4 col-xl-2">
                                  <div className="select">
                                    <select>
                                      <option>01</option>
                                      <option>Option</option>
                                      <option>Option</option>
                                    </select>
                                    <div className="select__arrow" />
                                  </div>
                                </div>
                                <div className="col col-md-4 col-lg-4 col-xl-2">
                                  <div className="select">
                                    <select>
                                      <option>1990</option>
                                      <option>Option</option>
                                      <option>Option</option>
                                    </select>
                                    <div className="select__arrow" />
                                  </div>
                                </div></div>
                              <div className="form-label">
                                <p>Geslacht</p>
                              </div>             
                              <div className="row radio-wrapper pb-4">
                                <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                                  <div className="radio">
                                    <label><input type="radio" name="optradio" defaultChecked={1} />Man</label>
                                  </div>
                                </div>
                                <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                                  <div className="radio">
                                    <label><input type="radio" name="optradio" />Vrouw</label>
                                  </div>
                                </div>
                              </div>
                              <div className="linkbar-wrapper d-none d-xl-block my-4">
                                <div className="row d-flex justify-content-between no-gutters linkbar self-align-center">
                                  <div>
                                    <a href="#">Meer informatie</a>
                                  </div>
                                  <div>
                                    <a href="#">Bestelvoorwaarden</a>
                                    <a href="#">Privacybeleid</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="linkbar-wrapper linkbar-wrapper--mobile d-block d-xl-none">
                        <div className="row d-flex justify-content-between no-gutters linkbar self-align-center">
                          <div>
                            <a href="#">Meer informatie</a>
                          </div>
                          <div>
                            <a href="#">Bestelvoorwaarden</a>
                            <a href="#">Privacybeleid</a>
                          </div>
                        </div>
                      </div>
                      <button className="main-button main-button--margin float-right"><span className="main-button-action">Registreren</span></button>
                    </div>
        );
    }

}

export default RegisterStep2Form
