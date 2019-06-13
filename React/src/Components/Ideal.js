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

  componentWillReceiveProps(props) {
    if (props.queryparams.source && props.queryparams.client_secret) {
        console.log("source and clientsecr found");
        props.stripe.retrieveSource({id: props.queryparams.source, client_secret: props.queryparams.client_secret}).then(({source}) => {
            console.log(source);
            if (source.status === 'chargeable') {
                console.log("chargeable");
                const body = {
                  source: props.queryparams.source,
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
          amount: ev.target.amount.value * 100,
          currency: 'eur',
          // You can specify a custom statement descriptor.
          statement_descriptor: 'ORDER AT11990',
          owner: {
            name: ev.target.fname.value,
          },
          redirect: {
            return_url: 'http://localhost:3000/dashboard',
          },
        })
        .then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} autocomplete="off">
          <div className="form-content">
                <div className={this.state.loading ? "d-none" : "inputs inputs-space"}>
                    <div className="group">
                        <input type="text" name="fname" id="naam" onChange={this.handleChange} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Naam</label>
                    </div>
                    <div className="group">
                        <input type="text" name="amount" id="naam" onChange={this.updateAddedValue} required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Kies over te schrijven bedrag</label>
                    </div>
                    <div className="group">
                        <input type="text" value={"€" + this.state.newBalance.toFixed(2)} readOnly/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                    </div>

                    <div className="group pb-5">
                        <h4 className="saldo-form saldo-form-text">Selecteer uw bank</h4>
                        <IdealBankElement className="IdealBankElement" {...createOptions()} />
                    </div>
                    <button>Opwaarderen</button>
                </div>
            </div>
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
