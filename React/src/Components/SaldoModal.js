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
import Saldo from './Saldo';

class SaldoModal extends Component {
  
  state ={
    result: "",
    num1: "",
    num2: ""
  };

  handlenum1Change = evt => {
    const num1 = Number(evt.target.value);
    this.setState(prevState => ({
      num1,
      result: num1 + prevState.num2
    }));
  };

  handlenum2Change = evt => {
    const num2 = Number(evt.target.value);
    this.setState(prevState => ({
      num2,
      result: prevState.num1 + num2
    }));
  };

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
              <input type="text" name="num1" value={this.state.num1} onChange={this.handlenum1Change}></input>
            </div>
            <div className="group pb-5">
              <h4 className="saldo-form saldo-form-text">Kies over te schrijven bedrag</h4>
              <input type="text" name="num2" value={this.state.num2} onChange={this.handlenum2Change} ></input>
            </div>
            <h4 className="saldo-form">Nieuw saldo</h4>
            <div className="group">
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