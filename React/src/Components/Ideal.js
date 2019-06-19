import React, {Component} from 'react';
import {
  IdealBankElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import config from '../config/config'
import { myContext } from './Authenticator';

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
        var amount = e.target.value;
        if (!isNaN(e.target.value) && e.target.value !== ""){
            var calc = this.state.balance + parseFloat(e.target.value);
            if (isNaN(calc)) {
                this.setState({amount});
            } else {
                calc = this.state.balance + parseFloat(e.target.value);
                this.setState({amount, newBalance: calc});
            }

        } else {
            this.setState({newBalance: this.props.balance});
        };
    }

    handleSubmit = (ev) => {
        var return_url = 'http://localhost:3000/dashboard';
        if (this.props.submitted){
            this.props.handleResult(parseInt(ev.target.amount.value) * 100, return_url);
        }
    };

    render() {
        if (this.props.submitted) {
            var form = document.getElementById('depositForm');
            if (form) form.reportValidity();
            if(this.state.amount){
                console.log(this.state.amount);
                console.log("FORM HS BEEN SUBMITTED");
                this.props.handleResult(this.state.amount, this.props.stripe);
            } else {
                console.log("NO AMOUNT GIVEN");
                this.props.toggleSubmit();
            }
        }
        return (
        <form id='depositForm' onSubmit={this.handleSubmit.bind(this)} autocomplete="off">
            <div className="form-content">
                    <div className={this.state.loading ? "d-none" : "inputs inputs-space"}>
                        <div className="group">
                            <input type="number" step="1" min="5" max="10000" name="amount" id="bedrag" onChange={this.updateAddedValue} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Kies over te schrijven bedrag</label>
                        </div>
                        <div className="group pb-5">
                            <input type="text" value={"€" + parseFloat(this.state.newBalance).toFixed(2)} readOnly/>
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
    componentWillReceiveProps(nextProps) {
        this.setState({mydata: nextProps.data})
    }

    render() {
        return (
        <StripeProvider apiKey={config.STRIPE_API_KEY}>
            <Elements locale={"nl"} family={"Montserrat"}>
                <IdealForm toggleSubmit={this.props.toggleSubmit} context={this.props.context} submitted={this.props.submitted} queryparams={this.props.queryparams} handleResult={this.props.handleResult} balance={this.props.balance} toggleLoad={this.props.toggleLoad} />
            </Elements>
        </StripeProvider>
        );
    }
}
