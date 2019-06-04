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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="row no-gutterr">
                        <div className="akkoord">
                            <input className="input-checkbox" id="akk" type="checkbox" name="akkoord" required></input>
                            <label for="ckb1">
                                <a href="#">Ik ga akkoord met de voorwaarden</a>
                            </label>
                        </div>
                </div>   
            </div>         
        );
    }
}

export default RegisterStep3;
