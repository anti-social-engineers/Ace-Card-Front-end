import React, { Component } from 'react'
import '../../../../Styles/css/style.css'
import {Ideal} from '../../../Ideal';

class BalanceModal extends Component {

  state ={
    loading: false,
    redirect: ""
  };


  handleResult = (res) => {
    this.toggleLoad();
    console.log(res);
    window.location.href = res.source.redirect.url;
  }

  toggleLoad = () => {
    this.setState({loading: !this.state.loading});
  }

  render() {
    return (
        <div className="modal fade" id="saldoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Opwaarderen</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                { this.state.loading && <span>Transactie voorbereiden...</span> }
                <Ideal queryparams={this.props.queryparams} handleResult={this.handleResult} toggleLoad={this.toggleLoad} balance={this.props.balance}/>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BalanceModal;