import React, { Component } from 'react'
import AccountContent from './AccountContent';
import PendingCard from '../PendingCard';
import Deposits from '../Deposits/Deposits';
import Dashboard from '../../Dashboard';

export default class Account extends Component {
    render() {
        console.log("RENDERING ACCOUNT");
        return (
            // <Dashboard>
            //     { this.props.hasCard ? <AccountContent/> : <PendingCard/> }
            //     {/* <PendingCard/>
            //     <AccountContent/> */}
            //     {/* <Deposits/> */}
            //     {/* <h1>lel</h1> */}
            // </Dashboard>
            // { this.props.hasCard ? <AccountContent/> : <PendingCard/> }
            // <AccountContent/>
            <>
                { this.props.hasCard ? <AccountContent/> : <PendingCard/> }
            </>
        )
    }
}
