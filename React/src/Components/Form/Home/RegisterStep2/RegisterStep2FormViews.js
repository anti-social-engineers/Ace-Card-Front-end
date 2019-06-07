import React, { Component } from 'react'
import RegisterStep1 from './RegisterSteps/RegisterStep1';
import RegisterStep2 from './RegisterSteps/RegisterStep2';
import RegisterStep3 from './RegisterSteps/RegisterStep3';
import RegisterFinished from './RegisterSteps/RegisterFinished';

class RegisterStep2Form extends Component {
  constructor(props){
      super(props);
  }
  render() {
      switch (this.props.step) {
        case 1:
          return (<RegisterStep1 values={this.props.values} handleDate={this.props.handleDate} handleChange={this.props.handleChange}/>)
        case 2:
          return (<RegisterStep2 file={this.props.values.file} handleChange={this.props.handleChange} />)
        case 3:
          return (<RegisterStep3 handleChange={this.props.handleChange}/>)
        case 4:
          return (<RegisterFinished values={this.props.values}  name={this.props.values.voornaam} />)
        default:
          return (<RegisterStep1/>)
      }
  }

}

export default RegisterStep2Form
