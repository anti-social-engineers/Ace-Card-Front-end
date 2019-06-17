import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';
import {myContext} from '../../../Authenticator'

class Account extends Component {
    render() {
        console.log(this.context.data && this.context.data);
        console.log("RENDERING ACCOUNT");
        const accountContent = this.context.data.user && !this.context.data.user.has_card ? <PendingCard/> : <AccountContent/>
        console.log(accountContent);
        return (
            <>
                {/* {this.context.data && this.context.data.user && <AccountContent/> } */}
                { accountContent }
            </>
        )
    }
}

Account.contextType = myContext;
export default Account;