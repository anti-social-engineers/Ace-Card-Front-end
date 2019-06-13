import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';
import Deposits from '../Deposits/Deposits';

export default class Account extends Component {
    render() {
        console.log("renderingggg");
        return (
            <>
                {/* { this.props.hasCard ? <AccountContent/> : <PendingCard/> } */}
                {/* <PendingCard/>
                <AccountContent/> */}
                <Deposits/>
            </>
        )
    }
}
