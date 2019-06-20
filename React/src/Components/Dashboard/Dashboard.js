import React, { Component , createContext} from 'react'
import '../../Styles/css/Dashboard/dashboard.css'
import AccountTopBar from './Nav/AccountTopBar';
import Sidebar from './Nav/Sidebar';
import Footer from './Footer';
import BalanceModal from './Pages/Account/BalanceModal';
import aos from 'aos'
import axios from 'axios'
import config from '../../config/config'
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import auth from '../../Helper/actions/auth'
import {myContext} from '../Authenticator'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}
class Dashboard extends Component {
  // static whyDidYouRender = true

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
    // this.setState({nav_loading:true});
    localStorage.removeItem('jwt token')
    auth.loguit()
    // this.setState({loggedIn: false})
    setTimeout(function () {
      this.setState({loggedIn: false});
    }.bind(this), 500);
  }
  
  render() {
      const {children} = this.props;
      return (
        <>
        {/* <myContext.Consumer>
          {(context) => (<h1>test {context[</h1>)}
        </myContext.Consumer> */}
      { !this.state.loggedIn && <Redirect to={{pathname: "/Dashboard"}}  /> }
      <div className={'dashboard'}>
      <div id="wrapper">
        <Sidebar/>
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
      <BalanceModal queryparams={this.state.queryparams} balance={this.context.data.user && this.context.data.user.credits} />           

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
            <div className="modal-body"><p class="text-sm">Klik op "Uitloggen" als je je huidige sessie wilt beeindigen.</p></div>
            <div className="modal-footer d-flex justify-content-between">
              <button className="btn btn-secondary text-sm" type="button" data-dismiss="modal">Annuleren</button>
              <a className="btn btn-primary text-sm" data-dismiss="modal" onClick={this.logout}>Uitloggen</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    { !this.state.loggedIn && <Redirect to={
        {
            pathname: "/"
        }
    }/>}
    </>
      )
  }
}

Dashboard.contextType = myContext;

export default Dashboard;