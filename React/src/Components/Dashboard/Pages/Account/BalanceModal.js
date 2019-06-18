import React, { Component } from 'react'
import '../../../../Styles/css/style.css'
import {Ideal} from '../../../Ideal';
import { myContext } from '../../../Authenticator';
import Fade from 'react-reveal/Fade';

class BalanceModal extends Component {

  state ={
    loading: false,
    waiting: false,
    redirect: ""
  };


  handleResult = (res) => {
    this.setState({waiting: true, loading: !this.state.loading});
    console.log(res);
  }


  render() {
    console.log("BALANCE MODAL!!");
    console.log(this.props.balance);
    return (
        <div className="modal fade" id="saldoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Opwaarderen</h6>
                  <div className="dropdown no-arrow">
                      <a className="dropdown-toggle" role="button" data-dismiss="modal">
                          <i className="fas fa-times fa-sm fa-fw text-gray-400" />
                      </a>
                  </div>
                </div>
                <Fade>
                  <div className="modal-body py-4">
                    { !this.state.waiting && <IdealArea {...this.state} {...this.props} handleResult={this.handleResult} />}
                    { this.state.waiting && <Fade><span className="text-sm text-gray-800"><i className="fas fa-circle-notch fa-spin" style={{marginRight: "10px"}} ></i>Aan het wachten op transactie...</span></Fade> }
                  </div>
                </Fade>
              { !this.state.waiting && <div className="modal-footer d-flex justify-content-between">
                <button className="btn btn-secondary text-sm" type="button" data-dismiss="modal">Annuleren</button>
                <a className="btn btn-primary text-sm">Opwaarderen</a>
              </div>}
            </div>
          </div>
        </div>
    );
  }
}

class IdealArea extends Component {
  render() {
    return (
      <>
          <Ideal balance={this.props.balance && this.props.balance} handleResult={this.props.handleResult} toggleLoad={this.props.toggleLoad} balance={this.props.balance}/>
      </>
    );
  }
}

export default BalanceModal;
BalanceModal.contextType = myContext;
