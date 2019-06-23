import React, { Component } from 'react'
import '../../Styles/css/Dashboard/dashboard.css'
import AccountTopBar from './Nav/AccountTopBar';
import Sidebar from './Nav/Sidebar';
import Footer from './Footer';
import BalanceModal from './Pages/Account/BalanceModal';
import aos from 'aos'
import {Redirect} from 'react-router-dom';
import auth from '../../Helper/actions/auth'
import {myContext} from '../Authenticator'

class Dashboard extends Component {

  state = {
    loggedIn: true,
    user: {},
    balance: 150
  }
  
  componentDidMount(){
    aos.init({
        duration : 2000
    });
  }

  logout = () => {
    localStorage.removeItem('jwt token')
    auth.loguit()
    setTimeout(function () {
      this.setState({loggedIn: false});
    }.bind(this), 500);
  }
  
  render() {
      const {children} = this.props;
      return (
        <>
      { !localStorage.getItem("jwt token") && <Redirect to={{pathname: "/"}}  /> }
      <div className={'dashboard'}>
      <div id="wrapper">
        <Sidebar data={this.context.data}/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <AccountTopBar data={this.context.data}/>
            { children }
          </div>
          <Footer/>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
      <BalanceModal balance={this.context.data.user && this.context.data.user.credits} />           

      <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Uitloggen</h6>
              <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" role="button" data-dismiss="modal">
                      <i className="fas fa-times fa-sm fa-fw text-gray-400" />
                  </a>
              </div>
            </div>
            <div className="modal-body"><p className="text-sm">Klik op "Uitloggen" als u uw huidige sessie wilt beeindigen.</p></div>
            <div className="modal-footer d-flex justify-content-between">
              <button className="btn btn-secondary text-sm" type="button" data-dismiss="modal">Annuleren</button>
              <a className="btn btn-primary text-sm" data-dismiss="modal" onClick={this.logout}>Uitloggen</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
      )
  }
}

Dashboard.contextType = myContext;

export default Dashboard;