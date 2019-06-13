import React, { Component } from 'react'
import '../../Styles/css/Dashboard/lel.css'
import classNames from 'classnames'
import BarChart from './Charts/BarChart'
import AccountTopBar from './Nav/AccountTopBar';
import Sidebar from './Nav/Sidebar';
import Footer from './Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Account from './Pages/Account/Account';
import BalanceModal from './Pages/Account/BalanceModal';
import PendingActivation from './Pages/PendingCard';
import Page404 from '../Page404';
import aos from 'aos'
import axios from 'axios'
import config from '../../config/config'
import queryString from "query-string";
// import auth from '../Helper/actions/auth'
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import auth from '../../Helper/actions/auth'

class Dashboard extends Component {
  state = {
    loggedIn: true,
    user: {},
    balance: 150
  }
  
  async componentDidMount(){
    aos.init({
        duration : 2000
    })

    var parsed = queryString.parse(window.location.search);
    parsed = {"client_secret": parsed.client_secret, "source": parsed.source, "livemode": parsed.livemode};
    console.log(parsed);
    this.setState({queryparams: parsed});

    const header = 'Bearer ' + localStorage.getItem('jwt token')
    console.log(localStorage.getItem('jwt token'))
    axios.get(config.API_URL+'/api/account', {headers: {Authorization:header}})
      .then(res => {
          this.setState({
              user: res.data, 
              hasCard: res.data.has_card
            });
          console.log(this.state.user);   
      })
      .catch((err) => {
        console.log(err);
      }
    );
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
      return (
        <>
      { !this.state.loggedIn && <Redirect to={{pathname: "/Dashboard"}}  /> }
      <div className={'dashboard'}>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AccountTopBar user={this.state.user}/>
            <Account user={this.state.user} hasCard={this.state.hasCard}/>
          </div>
          <Footer/>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
      <BalanceModal queryparams={this.state.queryparams} balance={this.state.balance} />           

      <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Annuleren</button>
              <a className="btn btn-primary" data-dismiss="modal" onClick={this.logout}>Logout</a>
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

export default Dashboard;