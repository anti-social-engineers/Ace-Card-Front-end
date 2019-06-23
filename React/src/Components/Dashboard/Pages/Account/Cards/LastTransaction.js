import React, { Component } from 'react'
import axios from 'axios';
import config from '../../../../../config/config'

export default class LastTransaction extends Component {
    state = {
        last_transaction: ""        
    }

    async componentDidMount() {
        try {
            const res = await axios.get(config.API_URL+'api/account/payments/desc', {headers: {Authorization:this.props.header}});
            const last_transaction = res.data.payments[0];
            if (last_transaction)
                this.setState({last_transaction: parseFloat(last_transaction.amount)});
          } catch (err) {
            console.log(err);
          }
    }
    
    render() {
        return (
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body pb-2">
                <div className="row no-gutters align-items-center mb-2">
                    <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-primary text-uppercase mb-1">Laatste transactie</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.last_transaction ? '€ ' + this.state.last_transaction : <span className="text-gray-800 font-weight-normal text-sm">Nog geen transacties</span>}</div>
                    </div>
                    <div className="col-auto">
                    <i className="fas fa-euro-sign fa-2x text-gray-300" />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
