import React, { Component } from 'react'
import aos from 'aos'
import {NavLink} from 'react-router-dom';

export default class CardNotActivated extends Component {
    
    render() {
        return (
            <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800 panel-header-text">Account registratie</h1>
                </div>

                <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Registratie</h6></div>
                        <div className="card-body">
                            <p>Welkom bij Ace {this.context.data && this.context.data.user && this.context.data.user.first_name}!</p>
                            <p> We hebben uw aanvraag van de Acecard ontvangen. Uw aanvraag zal binnen binnen enkele dagen in behandeling worden genomen.</p></div>
                   
                            <div className="text-center pb-4"><img src={require('../../Styles/img/profile.svg')} alt="" style={{width: '25rem'}} /></div>
                        </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Vooruitgang</h6></div>
                        <div className="card-body">
                            <h4 className="small font-weight-bold">Ace card aanvraag<span className="float-right">70%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} /></div>
                            <h4 className="small font-weight-bold">Algemene gegevens<span className="float-right">Voldaan!</span></h4>
                            <div className="progress">
                                <div className="progress-bar bg-success-green" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
