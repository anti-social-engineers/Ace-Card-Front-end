import React, { Component, useState, useEffect } from 'react'
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
// import Saldo from './Saldo';
import {Ideal} from './Ideal';


import {
  IdealBankElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';


const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        padding: '10px 14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};


class SaldoModal extends Component {

  state ={
    loading: false
  };


  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://js.stripe.com/v3/";
    script.async = true;

    document.body.appendChild(script);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createSource({
          type: 'ideal',
          amount: 1099,
          currency: 'eur',
          // You can specify a custom statement descriptor.
          statement_descriptor: 'ORDER AT11990',
          owner: {
            name: ev.target.name.value,
          },
          redirect: {
            return_url: 'https://your-website.com/ideal-redirect',
          },
        })
        .then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  handleResult = (res) => {
    this.toggleLoad();
    console.log(res);
  }

  toggleLoad = () => {
    this.setState({loading: !this.state.loading});
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
          { this.state.loading && <span>Transactie voorbereiden...</span> }
          <Ideal handleResult={this.handleResult} toggleLoad={this.toggleLoad} balance={this.props.balance}/>
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