import React, { Component } from 'react';

class RegisterSideInfo extends Component {

    render() {
        return (
            <div className="no-gutterr col-sm-0 col-md-5 col-lg-5 col-xl-4">
                <div className="row col-md-12 no-gutterr">
                    <div className="info-text-wrapper">
                        <h3 className="info">Wat heb je nodig</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.est laborum.</p>
                    </div>
                </div>
                <div className="form-divider col-md-12 no-gutterr">
                    <div className="form-diver-border"></div>
                </div>
                <div className="row col-md-12 no-gutterr">
                    <div className="info-text-wrapper">
                        <h3 className="reqs">Eisen aan de foto upload</h3>
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterSideInfo;
