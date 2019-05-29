import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import {createAcc} from '../Helper/actions/authorizationAction'
import RegisterStep2Form from './Form/Home/RegisterStep2/RegisterStep2Form';

class Register extends Component {
  constructor(props) {
    super(props);
    this.registerform = React.createRef();
  }

  state = {
    form_status: "none",
    current_view: 1
  }

  switchView = (view) => {
      console.log("Switching tot " + view);
      this.setState({current_view: view});

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="content-wrapper">
          <div className="cont">
            <div className="row no-gutters">
              <div className="formarea col">
                <RegisterStep2Form switchView={this.switchView} current_view={this.state.current_view}/>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Register
