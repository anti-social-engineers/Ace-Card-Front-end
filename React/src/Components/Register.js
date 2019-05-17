import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import {createAcc} from '../Helper/actions/authorizationAction'

class Register extends Component {
  state = {
    email:'',
    password:'',
    repeatpassword:''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createAcc(this.state)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <div className="content-wrapper">
        <div className="cont">
           <div className="row no-gutters">
             <div className="card-area col-sm-12 col-md-12 col-lg-12 col-xl-7">
               <div className="textarea">
               <h3>Account aanmaken</h3>
               <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    

        </div>
        <img src={require('../Styles/img/cardbox.png')} alt="" className="acecard" />
          </div>
            <div className="formarea col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div className="outerform">
              <div className="form-wrapper">

                <div className="form-title">
                  <h2>Registreren</h2>
                  
                  </div>

                  <div className="form-content">
                   <div className="inputs">
                        <div className="group">
                        <input type="email" id="email" onChange={this.handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>E-mail</label>
                        </div>
                        <div className="group">      
                            <input type="password" id="password" onChange={this.handleChange} required/>
                              <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Wachtwoord</label>
                      </div>
    
                      <div className="group">      
                        <input type="repeatpassword" id="repeatpassword" onChange={this.handleChange} required />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Wachtwoord herhalen</label>
                        </div>
                     </div> 
                  </div>
                 

                  </div>
                  <button className="main-button"><span className="main-button-action">Registreren</span></button>

                  </div>

          </div>

            </div>
              </div>    
      </div>
        </form>
                
    )
  }
}

const ObjToProps = (object) => {
  return {
    createAcc: (account) => object(createAcc(account))
  }
}

export default connect(null, ObjToProps)(Register)
