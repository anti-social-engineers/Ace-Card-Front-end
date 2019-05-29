import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class RegisterStep1 extends Component {

    render() {
        return (
            <div className="col-md-7 col-lg-7 col-xl-8">
                <div className="inputs inputs--large">
                    <div className="group row">
                        <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Voornaam</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Achternaam</label>
                            </div>
                        </div>
                    </div>
                    <div className="group row">
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Straat</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Woonplaats</label>
                            </div>
                        </div>
                    </div>
                    <div className="group row">
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Postcode</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Huisnummer</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Toevoeging</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-label">
                        <p>Geboortedatum</p>
                    </div>
                    <div className="group row pb-4">
                        <div className="col col-md-4 col-lg-4 col-xl-2">
                            <div className="select">
                                <select>
                                    <option>01</option>
                                    <option>Option</option>
                                    <option>Option</option>
                                </select>
                                <div className="select__arrow" />
                            </div>
                        </div>
                        <div className="col col-md-4 col-lg-4 col-xl-2">
                            <div className="select">
                                <select>
                                    <option>01</option>
                                    <option>Option</option>
                                    <option>Option</option>
                                </select>
                                <div className="select__arrow" />
                            </div>
                        </div>
                        <div className="col col-md-4 col-lg-4 col-xl-2">
                            <div className="select">
                                <select>
                                    <option>1990</option>
                                    <option>Option</option>
                                    <option>Option</option>
                                </select>
                                <div className="select__arrow" />
                            </div>
                        </div></div>
                    <div className="form-label">
                        <p>Geslacht</p>
                    </div>
                    <div className="row radio-wrapper pb-4">
                        <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                            <div className="radio">
                                <label><input type="radio" name="optradio" defaultChecked={1} />Man</label>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                            <div className="radio">
                                <label><input type="radio" name="optradio" />Vrouw</label>
                            </div>
                        </div>
                    </div>
                    <div className="linkbar-wrapper d-none d-xl-block my-4">
                        <div className="row d-flex justify-content-between no-gutterr linkbar self-align-center">
                            <div>
                                <a href="#">Meer informatie</a>
                            </div>
                            <div>
                                <a href="#">Bestelvoorwaarden</a>
                                <a href="#">Privacybeleid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterStep1;
