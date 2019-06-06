import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'

class CheckoutForm extends Component{

  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
    this.submit1 = this.submit1.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id,
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  async submit1(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge1", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id,
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    return (
      <div className="checkout">
        <div className="">
          <p>Vul uw creditcard gegevens in</p>
          <CardElement/>
          <p className="margin-for-dropdown">Kies een bedrag</p>
          <DropdownButton className="btn-primary" title="€ 0,00">
            <Dropdown.Item onClick={() => { if (window.confirm('Weet u zeker dat u € 5,00 wilt overmaken?')) this.submit() } } as="button" className="dropdowntext">€ 5,00</Dropdown.Item>
            <Dropdown.Item onClick={() => { if (window.confirm('Weet u zeker dat u € 10,00 wilt overmaken?')) this.submit1() } } as="button" className="dropdowntext">€ 10,00</Dropdown.Item>
          </DropdownButton>
        </div>
        {/* <button onClick={this.submit} type="submit" className="main-button-right button-modal">5</button>
        <button onClick={this.submit1} type="submit" className="main-button-right button-modal">10</button> */}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);