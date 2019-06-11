import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';

export default class Account extends Component {
    render() {
        console.log("renderingggg");
        return (
            <>
                {/* { this.props.user.has_card ? <AccountContent/> : <PendingCard/>} */}
                <PendingCard/>
                <AccountContent/>
            </>
        )
    }
}
