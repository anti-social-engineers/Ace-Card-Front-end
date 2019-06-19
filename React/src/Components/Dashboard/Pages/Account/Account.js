import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';
import {myContext} from '../../../Authenticator'

class Account extends Component {
    render() {
        var accountContent;
        if (this.context.data.user && this.context.data.user.has_card) {
            accountContent = <AccountContent {...this.props} />
        } else {
            accountContent = <PendingCard/>
        }
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