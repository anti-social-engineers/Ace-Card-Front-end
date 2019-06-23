import React, { Component } from 'react';
import {myContext} from '../../../Authenticator';
import CountUp from 'react-countup';
import LastDeposit from './Cards/LastDeposit';
import LastTransaction from './Cards/LastTransaction';
import LastPaymentsGraph from './Cards/LastPaymentsGraph';

class AccountContent extends Component {
    state = {
        balance: this.context.data.user.credits
    }

    auth = {
      header: 'Bearer ' + localStorage.getItem('jwt token')
    }



    render() {
        const hasNotification = this.context.data.notifications && this.context.data.notifications[0];
        if (hasNotification) {
          const lastNotification = this.context.data.notifications[0];
          // if got notification less than 5 seconds ago
          if (((new Date()) - new Date(lastNotification.datetime)) < 5000){
            var justGotNotification = true;
          }
        }

        return (
            <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800 panel-header-text">Account overzicht</h1>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body pb-2">
                        <div className="row no-gutters align-items-center mb-2">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-success text-uppercase mb-1">Huidige Saldo</div>
                            { !justGotNotification && <div className="h5 mb-0 font-weight-bold text-gray-800">€ {this.context.data.user.credits}</div>}
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              { justGotNotification && <CountUp
                                    start={this.context.data.user.previous_credits}
                                    end={this.context.data.user.credits}
                                    duration={2.75}
                                    decimals={2}
                                    prefix="€ "
                                  />}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-euro-sign fa-2x text-gray-300" />
                          </div>
                        </div>
                        <div className="row no-gutters">
                              <button data-toggle="modal" data-target="#saldoModal" className="text-xs font-weight-bold mb-1 text-link">Opwaarderen...</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-4">
                      <LastDeposit header={this.auth.header} justGotNotification={justGotNotification}  />
                  </div>
                  <div className="col-xl-3 col-md-6 mb-4">
                      <LastTransaction header={this.auth.header}/>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Nieuwe Notificaties</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {hasNotification ? this.context.data.notifications.length : <span className="font-weight-normal text-sm">U bent er helemaal bij!</span>}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comment-alt fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                      <LastPaymentsGraph header={this.auth.header}/>
                  </div>
                </div>
              </div>
        )
    }
}

AccountContent.contextType = myContext;
export default AccountContent;