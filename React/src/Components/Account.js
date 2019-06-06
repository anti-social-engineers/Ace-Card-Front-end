import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios'
import config from '../config/config'
import RegisterStep2 from './Form/Home/RegisterStep2/RegisterSteps/RegisterStep2';

class Account extends Component {
    constructor(props) {
        super(props);
      }
      state = {
        user: null,
        hasPas: false,
        account: {first_name:'', surname:'', mail:'', dob: '' ,gender:'' }
      }
      
    componentDidMount=()=>{
        aos.init({
            duration : 2000
        })

        const header = 'Bearer ' + localStorage.getItem('jwt token')
        console.log(localStorage.getItem('jwt token'))
        axios.get(config.API_URL+'/api/account', {headers: {Authorization:header}})
        .then(res => {
        this.setState({
            user: res.data, 
            hasPas: res.data.has_card, 
            account:{
                first_name:res.data.first_name,
                surname: res.data.surname,
                mail: res.data.mail,
                dob: res.data.dob,
                gender: res.data.gender
            }})
        
            console.log(this.state.user)    
        })
        .catch((err) => {
        });
    }

    handleLogout = () => {
        localStorage.removeItem('jwt token')
        this.setState({user : null, hasPas: false}); 
    }

  render() {
    let user = this.state.account
    return (

        <div>
            <div className="content-wrapper">
                <div className="row h-100 no-gutterr">
                    <nav className="main-menu">
                        <div className="nav-icon">
                            ACE-portal
                        </div>
                        <ul>
                            <li aria-current="page" className="active">
                                <NavLink className="" to="#">
                                    <div data-aos="fade" data-aos-duration="500">
                                        <i className="fa fa-user fa-1x"></i>
                                        <span className="nav-text" >
                                            Account
                                    </span>
                                </div>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li>
                                <NavLink className="" to="Saldo">
                                    <i className="fa fa-chart-line fa-1x"></i>
                                        <span className="nav-text">
                                            Saldo
                                        </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li>
                                <NavLink className="" onClick={this.handleLogout} to="#">
                                    <i className="fa fa-sign-out-alt fa-1x"></i>
                                        <span className="nav-text">
                                            Log-out
                                        </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                        </ul>
                    </nav>
                    {this.state.hasPas ? 
                    <div className="account-form" data-aos="zoom-in" data-aos-duration="500">
                        <div className="form-wrapper">
                            <div className="form-title">
                                <h2>Account gegevens</h2>
                            </div>
                            <div className="form-content">
                                <div className="inputs">
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>{user.first_name}</label>
                                        </div>
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>{user.surname}</label>
                                        </div>
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required /> 
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>{user.mail}</label>
                                        </div>    
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required /> 
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>{user.gender}</label>
                                        </div> 
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required /> 
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>{user.dob}</label>
                                        </div>                                         
                                        <div className="group pb-5">      
                                                <input type="accountform" disabled required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>*******</label>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <button className="account-button float-right"><span className="main-button-action">Wachtwoord wijzigen</span></button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="account-form" data-aos="zoom-in" data-aos-duration="500">
                        <div className="form-wrapper">
                           
                            <div className="form-content">
                                <div className="inputs">
                                        <div className="group pb-5">      
                                                <h1>U heeft nog geen ACE Kaart</h1>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <NavLink to="/Register2">
                                    <button className="account-button float-right"><span className="main-button-action">Hier Aanvragen </span></button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    }
                </div>                
            </div>
        </div>

    )
  }
}


export default Account;