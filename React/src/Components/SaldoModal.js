import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class SaldoModal extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      operator: '+',
      num1: '30',
      num2: '',
      result: '0'
    };
    this.actionHandler = this.actionHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleChange = (e) => {
    this.setState({operator: e.target.value})
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  }
  
  actionHandler = (e) => {
    e.preventDefault();
    let x = this.state.num1 + this.state.num2;
    this.setState({result: x})
  }

    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Overschrijven
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="saldo-form">Saldo</h4>
            <div className="group pb-5">
              <span className="highlight"></span>
              <span className="bar"></span>
              <input type="text" onChange={this.handleInputChange} name="num1"></input>
            </div>

            <div className="group pb-5">
            {/* <div className="borderborder"> */}
              <h4 className="saldo-form saldo-form-text">Kies over te schrijven bedrag</h4>
              {/* <div className="marginmargin"> */}
                <input type="text" onChange={this.handleInputChange} name="num2"></input>
              {/* <DropdownButton className="btn-primary dropdown-toggle" title="€ 0,00">
                <Dropdown.Item as="button" className="dropdowntext">€ 5,00</Dropdown.Item>
                <Dropdown.Item as="button" className="dropdowntext">€ 10,00</Dropdown.Item>
                <Dropdown.Item as="button" className="dropdowntext">€ 15,00</Dropdown.Item>
                <Dropdown.Item as="button" className="dropdowntext">€ 20,00</Dropdown.Item>
                <Dropdown.Item as="button" className="dropdowntext">€ 25,00</Dropdown.Item>
                <Dropdown.Item as="button" className="dropdowntext">€ 30,00</Dropdown.Item>
                <Dropdown.Item as="button" className="dropdowntext">€ 50,00</Dropdown.Item>
              </DropdownButton> */}
            </div>
            {/* </div>
            </div> */}

            <h4 className="saldo-form">Nieuw saldo</h4>
            <div className="group">
              {/* <input type="" disabled required /> */}
              <span className="highlight"></span>
              <span className="bar"></span>
              <input type="text" value={this.state.result} readOnly/>
            </div>
            
          </Modal.Body>
          <Modal.Footer>
          <button onClick={this.props.onHide} className="main-button-right button-modal">Sluiten</button>
          <button onClick={this.actionHandler} type="submit" className="main-button-right button-modal">Overschrijven</button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

export default SaldoModal;