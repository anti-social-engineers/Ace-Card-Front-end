import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import CheckoutForm from './CheckoutForm';
import {StripeProvider, Elements} from 'react-stripe-elements';


class SaldoModal extends Component {
    render() {
      return (
        <StripeProvider apiKey="pk_test_hGT15WksYkT79jKbGYASOLEN00o63TIfLN">
          <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Overschrijven
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Elements>
                <CheckoutForm/>
              </Elements>       
            </Modal.Body>
            <Modal.Footer />
          </Modal>
        </StripeProvider>
      );
    }
  }

export default SaldoModal;