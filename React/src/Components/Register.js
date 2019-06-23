import React, { Component } from 'react'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import {createAcc} from '../Helper/actions/authorizationAction'
import RegisterForm from './Form/Home/RegisterForm'
import axios from 'axios'
import Nav from '../Components/Navbar';
import aos from 'aos'

class Register extends Component {
  constructor(props) {
    super(props);
    this.registerform = React.createRef();
  }
  state = {
    email:'',
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
    this.registerform.current.handleSubmit();
  }


  render() {
    return (
      <div>
      <Nav/>
      <form onSubmit={this.handleSubmit}>
        <div className="content-wrapper">
          <div className="cont">
            <div className="row no-gutters">
                <div className="card-area col-sm-12 col-md-12 col-lg-12 col-xl-7" data-aos="fade-left" data-aos-duration="500">
                  <div className="textarea">
                    <h3>Account aanmaken</h3>
                    <p className="small">Maak hier uw account aan.

                    U ontvangt van ons een mailtje om uw account te activeren.<br/>

                    U kunt vervolgens door gaan met de aanvraag van uw Acecard!
                    </p>
                  </div>
                  <img src={require('../Styles/img/cardbox.png')} alt="" className="acecard" />
                </div>
                <div className="formarea col-sm-12 col-md-12 col-lg-12 col-xl-5" data-aos="fade-right" data-aos-duration="500">
                <RegisterForm  timeout={300000} ref={this.registerform}/>                </div>
              </div>
          </div>    
        </div>
      </form>
      </div>
    )
  }
}

export default Register
