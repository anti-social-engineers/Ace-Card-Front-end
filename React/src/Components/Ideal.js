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
// import {myContext} from '../../../../../Authenticator'

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

    componentDidMount() {
        console.log("idealbank:!!!!!!!", this.props.context);
        console.log(this.context);
    }
    
    componentWillReceiveProps(nextProps){
        console.log("will receive")
    }

    updateAddedValue = (e) => {
        if (e.target.value && !isNaN(e.target.value)){
        this.setState({newBalance: this.state.balance + parseFloat(e.target.value)});
        } else {
        this.setState({newBalance: this.props.balance});
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
        this.props.toggleLoad();
        if (this.props.stripe) {
            var return_url = 'http://localhost:3000/dashboard';
            var response = this.createDeposit(parseInt(ev.target.amount.value) * 100, return_url);
            response.then(
                (res) => {
                    console.log(res);
                    // window.close();
                    if (res) window.open(res.data.url, '_blank');
                }
            ).catch((err) => {
                console.log(err);
            });
        } else {
        console.log("Stripe.js hasn't loaded yet.");
        }
    };

    render() {
        // const notifs = this.context.data.user && this.context.data.user.credits;
        console.log("NOTIFSSSSSSS------------------------");
        // console.log(this)
        // console.log(notifs);
        return (
        <form onSubmit={this.handleSubmit.bind(this)} autocomplete="off">
            <div className="form-content">
                    <div className={this.state.loading ? "d-none" : "inputs inputs-space"}>
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
        <StripeProvider apiKey="pk_test_AKuV25JNq2XSRshR11ZjJpBT002DMqhIMq">
            <Elements>
                <IdealForm context={this.props.context} queryparams={this.props.queryparams} handleResult={this.props.handleResult} balance={this.props.balance} toggleLoad={this.props.toggleLoad} />
            </Elements>
        </StripeProvider>
        );
    }
}


