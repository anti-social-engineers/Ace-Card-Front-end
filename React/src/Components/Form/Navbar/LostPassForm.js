import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import config from '../../../config/config'

class LostPassForm extends Component {
    constructor(props){
        super(props);
        // How long a user is blocked from submitting a lostpass form
        this.timeout = 300000;
    }

    state = {
        email: "",
        submission_status: "none",
        loading: false,
        form_submit_count: 0
    }

    handleSubmit = () => {
        console.log(this.state.form_submit_count);
        if (this.state.form_submit_count >= 5) {
            console.log("Blocking for 5 minutes");
            setTimeout(function (){
                this.setState({form_submit_count: 0});
            }.bind(this), this.timeout);
            return;
        } else {
            this.setState({form_submit_count: this.state.form_submit_count + 1});
        }

        if (this.state.submission_status === "success") {
            this.setState({loading:false, submission_status: "none"});
            return;
        }

        this.setState({email:this.refs.email.value, loading:true});
        var logininfo = document.getElementsByClassName("login-info")[0];
  
        if (logininfo.classList.contains("animated")){
           logininfo.classList.remove("animated", "shake");
        }
        
        setTimeout(function(){
            const res = this.requestPassword();
            res.then(result => {
                switch (result) {
                    case 200:
                        this.setState({ submission_status: "success" });
                        break;
                    case 404:
                        var email_field = document.getElementById("email");
                        this.setState({ submission_status: "wrong", loading: false });
                        logininfo.classList.add("animated", "shake");
                        email_field.focus();
                        break;
                    default:
                        var email_field = document.getElementById("email");
                        this.setState({ submission_status: "error", loading: false });
                        logininfo.classList.add("animated", "shake");
                        email_field.focus();
                }
            })
        }.bind(this), 400);
    }

    requestPassword = async () => {
        const header = 'Bearer ' + localStorage.getItem('jwt token');
        const body = {
            mail: this.state.email
        }
        try {
            const res = await axios.post(config.API_URL + 'api/passwordreset', body, {headers: {Authorization:header}});
            return 200
        } catch(err) {
            console.log(err.response.status);
            return err.response.status
        }
    }
    

    render() {
        return (
            <div>
                <div className="form-wrapper">
                <Fade durationOut="100" durationIn="100">
                <div className="form-title">
                     <h2>Wachtwoord vergeten</h2>
                  </div>
                </Fade>

                   <div className="login-info">
                     <span className={this.state.submission_status === "error" && !this.state.loading && this.state.form_submit_count < 5 ? "loading-text" : "d-none invis"}><i className="fas fa-exclamation-circle"></i>Er is iets fout gegaan.</span>
                     <span className={this.state.submission_status === "wrong" && !this.state.loading && this.state.form_submit_count < 5 ? "loading-text" : "d-none invis"}><i className="fas fa-exclamation-circle"></i>Uw email is incorrect of kan niet gevonden worden.</span>
                     <span className={this.state.form_submit_count >= 5 && !this.state.loading ? "loading-text" : "d-none invis"}><i className="fas fa-exclamation-circle"></i>U heeft het formulier te vaak gestuurd. Probeer nog eens over {this.timeout / 60000} minuten.</span>                  
                  </div>
                  <div className={this.state.loading ? "form-loader" : "d-none form-loader--hidden"}>
                        <span className={this.state.submission_status !== "success" ? "loading-text" : "d-none invis"}><i className="fas fa-circle-notch fa-spin"></i>Email valideren...</span>
                        <span className={this.state.submission_status === "success" ? "loading-text" : "d-none invis"}><i className="fas fa-check"></i>Een email is zojuist gestuurd naar: {this.state.email}</span>
                    </div>
                  <div className="form-content">
                     <div className="inputs">
                        <div className={this.state.loading ? "d-none" : "group pb-5"}>      
                           <input type="email" id="email" ref="email" required/>
                           <span className="highlight"></span>
                           <span className="bar"></span>
                           <label>E-mail</label>
                        </div>
                        <div className={this.state.loading && this.state.submission_status !== "success" ? "d-none" : "row login-options"}>
                           <div className="col back">
                              <a className="backbutton" onClick={() => this.props.switchView("login")}>Terug naar inloggen</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row login-actions">
                   <div className="col">
                     <NavLink className="login-button" to="/Register">Nog geen account?</NavLink>
                    </div>
                    <div className="col">
                        <button className="main-button main-button--transparent float-right">
                            <span className="main-button-action">{this.state.submission_status === "success" ? "Opnieuw aanvragen" : "Aanvragen"}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default LostPassForm
