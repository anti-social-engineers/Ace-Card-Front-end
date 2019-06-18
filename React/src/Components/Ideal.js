import React, {Component} from 'react';
import {
  IdealBankElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import axios from 'axios'
import config from '../config/config'
import { myContext } from './Authenticator';

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '12px',
        color: '#999',
        letterSpacing: '1.1px',
        padding: '10px 9px',
        '::placeholder': {
          color: 'black',
        },
      },
      saldoForm: {
        fontSize: '11px'
      },
      saldo: {
        fontSize: '11px'
      },
      h4: {
        fontSize: '11px'
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};

class _IdealBankForm extends Component {
    
    state = {
        result: "",
        newBalance: 0.00,
        balance: 0.00,
        redirect: false
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.balance) {
            var balance = parseFloat(nextProps.balance)
            this.setState({balance: balance, newBalance: balance});
        }
    }

    updateAddedValue = (e) => {
        if (e.target.value && !isNaN(e.target.value)){
            var calc = this.state.balance + parseFloat(e.target.value);
            this.setState({newBalance: calc});
        } else {
            this.setState({newBalance: this.state.balance});
        };
    }

    createDeposit = async (amount, return_url) => {
        console.log(amount);
        console.log(return_url);
        const body = {
            amount,
            return_url
        };
        console.log(body);
        const header = 'Bearer ' + localStorage.getItem('jwt token');
        const res = await axios.post(config.API_URL + 'api/deposits/create', body, {headers: {Authorization:header}});
        console.log("response", res);
        return res;
    }


    handleSubmit = (ev) => {
        ev.preventDefault();
        if (this.props.stripe) {
            var return_url = 'http://localhost:3000/dashboard';
            var response = this.createDeposit(parseInt(ev.target.amount.value) * 100, return_url);
            response.then(
                (res) => {
                    console.log(res.data.url);
                    // window.close();
                    this.props.handleResult();
                    if (res.data.url) window.open(res.data.url, '_blank');
                }
            ).catch((err) => {
                console.log(err);
            });
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
                            <input type="number" step="0.01" min="5" name="amount" id="bedrag" onChange={this.updateAddedValue} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Kies over te schrijven bedrag</label>
                        </div>
                        <div className="group pb-5">
                            <input type="text" value={"€" + this.state.newBalance.toFixed(2)} readOnly/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label style={{top: "-20px"}}>Nieuwe saldo</label>
                        </div>

                        <div className="group pb-2">
                            <IdealBankElement className="IdealBankElement" {...createOptions()} />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

_IdealBankForm.contextType = myContext;
const IdealForm = injectStripe(_IdealBankForm);
export class Ideal extends Component {
    componentDidMount() {
        console.log("IDEAL: ", this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("NEXT PROPS")
        console.log(nextProps);
        this.setState({mydata: nextProps.data})
    }

    render() {
        return (
        <StripeProvider apiKey={config.STRIPE_API_KEY}>
            <Elements locale={"nl"} family={"Montserrat"}>
                <IdealForm context={this.props.context} queryparams={this.props.queryparams} handleResult={this.props.handleResult} balance={this.props.balance} toggleLoad={this.props.toggleLoad} />
            </Elements>
        </StripeProvider>
        );
    }
}


