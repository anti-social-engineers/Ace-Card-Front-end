import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';
import {myContext} from '../../../Authenticator'

class Account extends Component {
    render() {
        console.log(this.context.data && this.context.data);
        console.log("RENDERING ACCOUNT");
        return (
            <>
                { this.props.hasCard ? <AccountContent/> : <PendingCard/> }
            </>
        )
    }
}

Account.contextType = myContext;
export default Account;