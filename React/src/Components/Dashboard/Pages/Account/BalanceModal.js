import React, { Component } from 'react'
import '../../../../Styles/css/style.css'
import {Ideal} from '../../../Ideal';
import { myContext } from '../../../Authenticator';
import Fade from 'react-reveal/Fade';
import axios from 'axios'
import config from '../../../../config/config'

class BalanceModal extends Component {

  state ={
    submitted: false,
    showWaitingScreen: true,
    has_submitted: false,
    receivedNotification: false
  };

  handleResult = (amount) => {
    if (this.state.hasJustReceivedDeposit) {
      this.setState({submitted: false, receivedNotification: true});
    } else {
      this.setState({submitted: false});
    }

    var return_url = config.HOME_URL + 'dashboard';
    var response = this.createDeposit(amount, return_url);
    response.then(
        (res) => {
            if (res.data.url) window.open(res.data.url, '_blank');
        }
    ).catch((err) => {
        console.log(err);
    });
  }

  toggleSubmit = () => {
    this.setState({submitted: !this.state.submitted, has_submitted: true});
  }
  
  createDeposit = async (amount, return_url) => {
    const body = {
        amount: parseInt(amount) * 100,
        return_url
    };
    const header = 'Bearer ' + localStorage.getItem('jwt token');
    const res = await axios.post(config.API_URL + 'api/deposits/create', body, {headers: {Authorization:header}});
    return res;
  }

  render() {
    if (this.context.data.hasJustReceivedDeposit) {
      if (this.state.has_submitted) {
        this.setState({has_submitted: false}, () => document.getElementById("closeModal").click());
      }
    }

    return (
        <div className="modal fade" id="saldoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Opwaarderen</h6>
                  <div className="dropdown no-arrow">
                      <a id="closeModal" className="dropdown-toggle" role="button" data-dismiss="modal">
                          <i className="fas fa-times fa-sm fa-fw text-gray-400" />
                      </a>
                  </div>
                </div>
                <Fade>
                  <div className="modal-body py-4">
                    <Ideal balance={this.context.data.user && this.context.data.user.credits} submitted={this.state.submitted} toggleSubmit={this.toggleSubmit} handleResult={this.handleResult} />
                    { this.state.has_submitted && !this.state.receivedNotification && <Fade><span className="text-sm text-gray-800" style={{paddingLeft: "25px", paddingRight: "25px"}}><i className="fas fa-circle-notch fa-spin" style={{marginRight: "10px"}} ></i>Aan het wachten op transactie...</span></Fade> }
                  </div>
                </Fade>
              <div className="modal-footer d-flex justify-content-between">
                <button className="btn btn-secondary text-sm" type="button" data-dismiss="modal">Annuleren</button>
                <a className="btn btn-primary text-sm" onClick={() => this.setState({submitted: true, has_submitted: true})}>Opwaarderen</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

BalanceModal.contextType = myContext;
export default BalanceModal;
