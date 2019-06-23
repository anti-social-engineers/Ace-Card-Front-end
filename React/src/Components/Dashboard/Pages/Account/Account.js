import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';
import {myContext} from '../../../Authenticator'
import CardNotActivated from '../../CardNotActivated';

class Account extends Component {
    render() {
        var accountContent;
        if (this.context.data.user) {
            if (this.context.data.user.has_card && this.context.data.user.active_card) {
                accountContent = <AccountContent {...this.props} />
            } else if(!this.context.data.user.active_card && this.context.data.user.has_card) {
                accountContent = <CardNotActivated/>
            } else {
                accountContent = <PendingCard/>
            }
        }
        
        return (
            <>
                { accountContent }
            </>
        )
    }
}

Account.contextType = myContext;
export default Account;