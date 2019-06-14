import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { ReactComponent as RegisterFinishedSVG } from '../../../../../Styles/img/svg/finishedregister.svg'

class RegisterFinished extends Component {

    render() {
        return (
            <div className="col">
                <div className="row no-gutterr py-3">
                    <Fade>
                        <h1>Registratie voltooid</h1>
                    </Fade>
                </div>
                <div className="row no-gutterr">
                    <p>Bedankt voor het registreren bij Ace, {this.props.name}!</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className="row no-gutterr">
                    <RegisterFinishedSVG/>
                </div>
            </div>   
        );
    }
}

export default RegisterFinished;
