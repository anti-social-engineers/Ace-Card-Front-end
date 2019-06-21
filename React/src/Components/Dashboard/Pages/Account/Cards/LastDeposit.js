import React, { Component } from 'react'
import axios from 'axios';
import config from '../../../../../config/config'

export default class LastDeposit extends Component {
    state = {
        last_deposit: ""
    }
    
    async componentDidMount() {
        try {
            const res = await axios.get(config.API_URL+'api/account/deposits/desc', {headers: {Authorization:this.props.header}});
            console.log(res.data);
            const last_deposit = res.data.deposits[0];
            console.log(last_deposit);
            this.setState({last_deposit: parseFloat(last_deposit.amount)});
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        console.log("HEADERRRRR:", this.props.header);
        return (
            <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body pb-2">
                <div className="row no-gutters align-items-center mb-2">
                    <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-info text-uppercase mb-1">Laatste storting</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.last_deposit ? '€ ' + this.state.last_deposit : <span className="text-gray-800 font-weight-normal text-sm">Nog geen stortingen</span>}</div>
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
