import React, { Component } from 'react'
import BarChart from '../../Charts/BarChart'
import BalanceModal from './BalanceModal';
import queryString from "query-string";
import {myContext} from '../../../Authenticator'
import CountUp from 'react-countup';

class AccountContent extends Component {
    state = {
        balance: this.context.data.user.credits
    }

    componentWillReceiveProps(nextProps){
      console.log("ACCOUTN RCV PROPS")
      console.log(nextProps);
      if (nextProps.balance) {
          var balance = parseFloat(nextProps.balance)
          this.setState({balance: balance});
      }
    }

    render() {
        return (
            <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800 panel-header-text">Account overzicht</h1>
                </div>
                {/* Content Row */}
                <div className="row">
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body pb-2">
                        <div className="row no-gutters align-items-center mb-2">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-success text-uppercase mb-1">Huidige Saldo</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">€{this.context.data.user.credits}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {/* <CountUp
                                start={this.context.data.user.credits}
                                end={160527.012}
                                duration={2.75}
                                decimals={2}
                                prefix="€ "
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                              >
                                {({ countUpRef, start }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>Start</button>
                                  </div>
                                )}
                              </CountUp> */}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-euro-sign fa-2x text-gray-300" />
                          </div>
                        </div>
                        <div className="row no-gutters">
                              <button data-toggle="modal" data-target="#saldoModal" className="text-xs font-weight-bold text-primary mb-1 text-link">Opwaarderen...</button>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Earnings (Monthly) Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-uppercase mb-1">Earnings (Annual)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pending Requests Card Example */}
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                <div className="row">
                  {/* Area Chart */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Overzicht Uitgaves</h6>
                        <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div className="chart-area">
                          {/* <canvas id="myAreaChart" /> */}
                          <BarChart ref="chart" data={[130, 300, 233, 54.30, 35, 321, 242, 349, 71.50, 400, 323, 139.44]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                        <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                          <canvas id="myPieChart" />
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary" /> Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success" /> Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info" /> Referral
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}

AccountContent.contextType = myContext;
export default AccountContent;