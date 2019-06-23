import React, { Component } from 'react'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import RegisterForm from './Form/Home/RegisterForm'
import axios from 'axios'
import Nav from '../Components/Navbar';
import aos from 'aos'
import config from '../config/config'
import PasswordStrengthMeter from './Tools/PasswordStrengthMeter';
import queryString from "query-string";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.passwordresetform = React.createRef();
  }
  state = {
    password:'',
    repeatpassword:'',
    error: '',
    message:''
  }

  componentDidMount = () => {
    aos.init({
      duration: 2000
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.passwordresetform.current.handleSubmit();
  }


  render() {
    return (
      <div>
      <Nav/>
      <form onSubmit={this.handleSubmit}>
        <div className="content-wrapper">
          <div className="cont">
            <div className="row no-gutters d-flex justify-content-center">
                <div className="formarea col-md-6" data-aos="fade-right" data-aos-duration="500">
                <ResetPasswordForm query={queryString.parse(this.props.location.search)} timeout={300000} ref={this.passwordresetform}/>                </div>
              </div>
          </div>    
        </div>
      </form>
      </div>
                
    )
  }
}


class ResetPasswordForm extends Component {

    constructor(props){
      super(props);
      this.passwordRepeatRef = React.createRef()
    }

    state = {
        password: "",
        repeat_password: "",
        submission_status: "none",
        loading: false,
        form_submit_count: 0,
        form_error: "",
        hasSubmitted: false,
        message:''
    }

    form_errors = {
        PASSWORD_MISMATCH: "Uw herhaalwachtwoord komt niet overeen met uw wachtwoord"
    }

    componentDidMount() {
      if (this.props.query && this.props.query.token) {
        this.setState({token: this.props.query.token})
      }
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
        if (this.state.form_submit_count >= 5) {
            this.setState({form_error: this.form_errors.TOO_MANY_TRIES});
            setTimeout(function (){
                this.setState({form_submit_count: 0}, () => console.log(this.state.form_error));
            }.bind(this), this.props.timeout);

            return false;
        } else {
            this.setState({form_submit_count: this.state.form_submit_count + 1});
        }

        if (this.state.password !== this.state.repeat_password) {
            this.setState({form_error: this.form_errors.PASSWORD_MISMATCH});
            return false;
        }
        return true;
    }

    handleSubmit = (e) => {
        this.setState({hasSubmitted: true});
        if (!this.isValidForm()) {
          return;
        }

        if (this.state.submission_status === "success") {
            this.setState({loading:false, submission_status: "none"});
            return false;
        }

        this.setState({account:{email: this.state.email, password: this.state.password}, loading:true});
        var logininfo = document.getElementsByClassName("login-info")[0];
  
        if (logininfo.classList.contains("animated")){
           logininfo.classList.remove("animated", "shake");
        }
        
        setTimeout(function(){
            if (this.state.token){
              var body = {
                token: this.state.token,
                password: this.state.password
              }
              axios.post(config.API_URL+'api/passwordreset/process', body)
              .then(res => {
                this.setState({form_error:'', submission_status: "success"})
              })
              .catch(err => {
                if(err.response.status === 500){
                  this.setState({submission_status: "wrong", loading: false, form_error:'Er is iets fout met de server. Excuses voor het ongemak!' });
                }
                if(err.response.status === 422){
                  this.setState({ submission_status: "wrong", loading: false, form_error: 'Wachtwoord is niet lang genoeg! (minimaal 8 karakters)' });
                }
                if(err.response.status === 404){
                  this.setState({ submission_status: "wrong", loading: false, form_error: 'Ongeldige token!'});
                }
              })
            }
        }.bind(this), 400);
     }

    getResult = (result) => {
      this.setState({hasSubmitted: false});
    }
    

    render() {
        return (
            <div className="outerform">
              <div className="form-wrapper">
                <div className="form-title">
                  <h2>Wachtwoord wijzigen</h2>
                </div>
                <div className="login-info">
                     <span className={this.state.form_error ? "loading-text loading-text--small" : "d-none invis"}><i className="fas fa-exclamation-circle"></i>{this.state.form_error}</span>
                </div>
                  <div className={this.state.loading ? "form-loader" : "d-none form-loader--hidden"}>
                        <span className={this.state.submission_status !== "success" ? "loading-text loading-text--small" : "d-none invis"}><i className="fas fa-circle-notch fa-spin"></i>Wachtwoord reset valideren...</span>
                        <span className={this.state.submission_status === "success" ? "loading-text loading-text--small" : "d-none invis"}><i className="fas fa-check"></i>Uw wachtwoord is gewijzigd! </span>
                </div>
                  <div className="form-content">
                   <div className={this.state.loading ? "d-none" : "inputs inputs-space"}>
                        <div className={this.state.password.length > 0 ? "group pb-4" : "group"}>      
                            <input autoComplete="off" id="password" type="password" onChange={this.handlePasswordChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <PasswordStrengthMeter hasSubmitted={this.state.hasSubmitted} getResult={this.getResult} password={this.state.password} />
                            <label>Nieuwe Wachtwoord</label>
                        </div>
    
                      <div className="group">      
                        <input type="password" id="repeat_password" onChange={this.handlePasswordChange} required />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          {this.state.repeat_password && this.state.repeat_password !== this.state.password && <span className="form-helper">Wachtwoord komt niet overeen met herhaal wachtwoord.</span>}
                          <label>Wachtwoord herhalen</label>
                        </div>
                     </div> 
                  </div>
                  </div>
                    {(this.state.submission_status === "none" || this.state.submission_status === "wrong") && <button className="main-button main-button--margin float-right"><span className="main-button-action">Wijzigen</span></button>}
                  </div>
        );
    }

}

export default ResetPassword
