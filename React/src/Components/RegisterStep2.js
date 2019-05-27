import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import {createAcc} from '../Helper/actions/authorizationAction'
import RegisterStep2Form from './Form/Home/RegisterStep2Form';

class Register extends Component {
  constructor(props) {
    super(props);
    this.registerform = React.createRef();
  }

  state = {
    form_status: "none",
    step: 0
  }

  switchView = (view) => {
      console.log("Switching");
      // if (view === "login") {
      //     this.setState({login_view_open: true, lostpass_view_open: false}, () => document.getElementById("email").focus());
      // } else {
      //     this.setState({login_view_open: false, lostpass_view_open: true}, () => document.getElementById("email").focus());
      // }

    switch(view) {
      case 1:
        console.log("STEP 1");
        break;
      case 2:
        console.log("STEP 2");
        break;
      case 3:
        console.log("STEP 3");
        break;  
      default:
        return;
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log("submitting form");
      // if (this.state.login_view_open) {
      //     this.login.current.handleSubmit();
      // } else {
      //     this.lostpass.current.handleSubmit();        
      // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="content-wrapper">
          <div className="cont">
            <div className="row no-gutters">
              <div className="formarea col">
                <RegisterStep2Form/>
              </div>
            </div>
          </div>    
        </div>
      </form>
                
    )
  }
}

// const ObjToProps = (object) => {
//   return {
//     createAcc: (account) => object(createAcc(account))
//   }
// }

export default Register
