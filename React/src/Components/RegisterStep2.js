import React, { Component } from 'react'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import {createAcc} from '../Helper/actions/authorizationAction'
import RegisterStep2Form from './Form/Home/RegisterStep2/RegisterStep2Form';
import Nav from '../Components/Navbar'
import aos from 'aos'

class RegisterStep2 extends Component {
  constructor(props) {
    super(props);
    this.registerform = React.createRef();
  }

  state = {
    form_status: "none",
    current_view: 1,
    voornaam: "",
    achternaam: "",
    straat: "",
    postcode: "",
    huisnr: "",
    toevoeging: "",
    geboortedatum: "",
    geslacht: "",
    akkoord: "",
    file: []
  }

  componentDidMount = () => {
    aos.init({
      duration: 2000
    })
  }

  switchView = (view) => {
    this.setState({current_view: view});
  }

  handleChange = (id, value) => {
    this.setState({
      [id]: value 
    });
  }

  handleDate = (date) => {
    this.setState({geboortedatum: this.formatDate(date)});
  }

  formatDate = (date, american=true) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    if (american)
      return [year, month, day].join('-');
    return [day, month, year].join('-');
  }

  handleSubmit = (e) => {
      // e.preventDefault();
      console.log("submitting form");
      console.log(this.refs.form);
  }

  

  render() {
    return (
      <div>
      <Nav/>
        <form onSubmit={this.handleSubmit} ref="form">
        <div className="content-wrapper">
          <div className="cont">
            <div className="row no-gutters">
              <div className="formarea col" data-aos="zoom-in" data-aos-duration="500">
                <RegisterStep2Form values={this.state} form={this.refs.form} handleChange={this.handleChange} handleDate={this.handleDate} switchView={this.switchView} current_view={this.state.current_view} ref={this.registerform}/>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default RegisterStep2
