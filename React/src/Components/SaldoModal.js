import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Styles/css/style.css'
import {Ideal} from './Ideal';

class SaldoModal extends Component {

  state ={
    loading: false,
    redirect: ""
  };

  componentDidMount () {
    console.log(this.props);
  }

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
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Overschrijven
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { this.state.loading && <span>Transactie voorbereiden...</span> }
          <Ideal queryparams={this.props.queryparams} handleResult={this.handleResult} toggleLoad={this.toggleLoad} balance={this.props.balance}/>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={this.props.onHide} className="main-button-right button-modal">Sluiten</button>
        <button onClick={this.actionHandler} type="submit" className="main-button-right button-modal">Overschrijven</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SaldoModal;