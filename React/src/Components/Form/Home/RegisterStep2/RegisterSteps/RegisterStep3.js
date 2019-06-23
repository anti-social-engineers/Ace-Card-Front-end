import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class RegisterStep3 extends Component {

    render() {
        return (
            <div className="col">
                <div className="row no-gutterr">
                    <Fade>
                        <h1>Bevestigen</h1>
                    </Fade>
                </div>
                <div className="row no-gutterr">
                    <p>Indien je akkoord gaat met de voorwaarden zult je binnen 3-5 werkdagen de Acecard thuis geleverd krijgen.</p>
                    <p>Alle rechten en aanspraken in de voorwaarden en in eventuele nadere overeenkomsten worden bedongen ten behoeve van Aceofclubs.nl  gelden ook ten behoeve van eventueel door Aceofclubs.nl ingeschakelde tussenpersonen en derden.</p>
                </div>
                <div className="row no-gutterr">
                        <div className="akkoord">
                            <input className="input-checkbox" id="akk" type="checkbox" name="akkoord" required></input>
                            <label htmlFor="ckb1">
                                <a href="#">Ik ga akkoord met de voorwaarden</a>
                            </label>
                        </div>
                </div>   
            </div>         
        );
    }
}

export default RegisterStep3;
