import React, {Component} from 'react';
import {
  IdealBankElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import axios from 'axios'

// You can customize your Elements to give it the look and feel of your site.
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

class _IdealBankForm extends Component {
  state ={
    result: "",
    newBalance: 0.00,
    redirect: false
  };

  componentDidMount(){
    console.log(this.props.queryparams);
    console.log(this.props.stripe);
    if (this.props.queryparams.source && this.props.queryparams.client_secret) {
      console.log("source and clientsecr found");
      this.props.stripe.retrieveSource({id: this.props.queryparams.source, client_secret: this.props.queryparams.client_secret}).then(({source}) => {
          console.log(source);
          if (source.status === 'chargeable') {
              console.log("chargeable");
              const body = {
                source: this.props.queryparams.source,
                amount: source.amount
              }
              console.log("printing body");
              console.log(body);
              const header = 'Bearer ' + localStorage.getItem('jwt token')
              axios.post('https://api.aceofclubs.nl/api/payments/charge', body, {headers:{Authorization: header}})
                .then(res => {
                  console.log(res)
              })
                .catch(err => {
                  console.log(err)
              });
              
            // Make a request to your server to charge the Source.
            // Depending on the Charge status, show your customer the relevant message.
          } else if (source.status === 'pending') {
              console.log("chargeable");
          } else {
            // Depending on the Source status, show your customer the relevant message.
            console.log("none of the above statuses")
          }
      });
    }
  }

  updateAddedValue = (e) => {
    if (e.target.value && !isNaN(e.target.value)){
      this.setState({newBalance: this.props.balance + parseFloat(e.target.value)});
    } else {
      this.setState({newBalance: this.props.balance});
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.toggleLoad();
    if (this.props.stripe) {
      this.props.stripe
        .createSource({
          type: 'ideal',
          amount: ev.target.amount.value,
          currency: 'eur',
          // You can specify a custom statement descriptor.
          statement_descriptor: 'ORDER AT11990',
          owner: {
            name: ev.target.fname.value,
          },
          redirect: {
            return_url: 'http://4f52b748.ngrok.io/lel/',
          },
        })
        .then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
            <h4 className="saldo-form">Huidige Saldo</h4>
            <div className="group pb-5">
              <span className="highlight"></span>
              <span className="bar"></span>
              <span name="num1">{"€" + this.props.balance.toFixed(2)}</span>
            </div>
            <div className="group pb-5">
              <h4 className="saldo-form saldo-form-text">Naam</h4>
              <input type="text" name="fname"></input>
            </div>
            <div className="group pb-5">
              <h4 className="saldo-form saldo-form-text">Kies over te schrijven bedrag</h4>
              <input type="text" name="amount" onChange={this.updateAddedValue} ></input>
            </div>
            <div className="group pb-5">
              <h4 className="saldo-form">Nieuw saldo</h4>
              <input type="text" value={"€" + this.state.newBalance.toFixed(2)} readOnly/>
            </div>

          <div className="group pb-5">
              <h4 className="saldo-form saldo-form-text">Selecteer uw bank</h4>
              <IdealBankElement className="IdealBankElement" {...createOptions()} />
          </div>
          <button>Opwaarderen</button>
        </form>
    );
  }
}

const IdealForm = injectStripe(_IdealBankForm);

export class Ideal extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_AKuV25JNq2XSRshR11ZjJpBT002DMqhIMq">
        <Elements>
          <IdealForm queryparams={this.props.queryparams} handleResult={this.props.handleResult} balance={this.props.balance} toggleLoad={this.props.toggleLoad} />
        </Elements>
      </StripeProvider>
    );
  }
}
