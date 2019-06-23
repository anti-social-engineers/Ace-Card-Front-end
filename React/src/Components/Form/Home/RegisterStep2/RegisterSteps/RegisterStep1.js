import React, { Component } from 'react';
import RegisterInfoBar from '../RegisterInfoBar';
import MaskedInput from 'react-text-mask'
  
class RegisterStep1 extends Component {
    state = {
        voornaam: "",
        achternaam: "",
        straat: "",
        postcode: "",
        huisnr: "",
        toevoeging: "",
        geboortedatum: this.props.values.geboortedatum,
        geslacht: "m"
    }

    handleChange = (e) => {
        this.props.handleChange(e.target.id, e.target.value);
    }

    handleDate = (e) => { 
        if (e.target.checkValidity()) {
            this.props.handleDate(e.target.value);
        }
    }

    getDOB = (age) => {
        return new Date(new Date().setFullYear(new Date().getFullYear() - age)).toISOString().split('T')[0];
    }

    render() {
        return (
            <div className="col-md-7 col-lg-7 col-xl-8">
                <div className="inputs inputs--large">
                    <div className="group row">
                        <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                            <div className="input-wrapper">
                                <input type="text" value={this.props.values.voornaam} onChange={this.handleChange} ref="voornaam" id="voornaam" minLength={1} maxLength={150} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Voornaam</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                            <div className="input-wrapper">
                                <input type="text" value={this.props.values.achternaam} onChange={this.handleChange} ref="achternaam" id="achternaam" minLength={1} maxLength={150} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Achternaam</label>
                            </div>
                        </div>
                    </div>
                    <div className="group row">
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" value={this.props.values.straat} onChange={this.handleChange} ref="straat" id="straat" minLength={2} maxLength={250} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Straat</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" id="woonplaats" value={this.props.values.woonplaats} onChange={this.handleChange} ref="woonplaats" minLength={1} maxLength={250} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Woonplaats</label>
                            </div>
                        </div>
                    </div>
                    <div className="group row">
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <MaskedInput
                                    mask={[/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[A-Z]/i, /[A-Z]/i]}
                                    pattern="[1-9][0-9]{3}\s?[a-zA-Z]{2}"
                                    guide={false}
                                    id="postcode"
                                    type="text"
                                    onFocus={(e) => e.target.placeholder = "1234AB"}
                                    onBlur={(e) => e.target.placeholder = ""}
                                    value={this.props.values.postcode}
                                    onChange={this.handleChange}
                                    ref="postcode"
                                    pipe={(v) => {return v.toUpperCase()}}
                                    required
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Postcode</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <MaskedInput
                                    mask={[/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    guide={false}
                                    id="huisnr"
                                    type="text"
                                    onFocus={(e) => e.target.placeholder = "155"}
                                    onBlur={(e) => e.target.placeholder = ""}
                                    value={this.props.values.huisnr}
                                    onChange={this.handleChange}
                                    ref="huisnr"
                                    required
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Huisnummer</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper notreqq">
                                <MaskedInput
                                    mask={[/[A-Z]/i]}
                                    guide={false}
                                    id="toevoeging"
                                    type="text"
                                    onFocus={(e) => e.target.placeholder = ""}
                                    onBlur={(e) => e.target.placeholder = "Toevoeging"}
                                    value={this.props.values.toevoeging || ""}
                                    onChange={this.handleChange}
                                    placeholder='Toevoeging'
                                    ref="toevoeging"
                                    pipe={(v) => {return v.toUpperCase()}}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label className="noreq--label">Toevoeging</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-label">
                        <p>Geboortedatum</p>
                    </div>
                    <div className="group row pb-4">
                    <div className="col-md-5">
                            <input type="date" value={this.props.values.geboortedatum} onChange={this.handleDate} max={this.getDOB(18)} min={this.getDOB(80)} required></input>
                    </div>
                    </div>
                    <div className="form-label">
                        <p>Geslacht</p>
                    </div>
                    <div className="row radio-wrapper pb-4">
                        <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                            <div className="radio">
                                <label><input type="radio" name="optradio" id="geslacht" onChange={this.handleChange} ref="geslachtman" value="m" required checked={1 ? this.props.values.geslacht === "m" : 0} />Man</label>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                            <div className="radio">
                                <label><input type="radio" name="optradio" id="geslacht" onChange={this.handleChange} ref="geslachtvrouw" value="f" checked={1 ? this.props.values.geslacht === "f" : 0} />Vrouw</label>
                            </div>
                        </div>
                    </div>
                    <RegisterInfoBar/>
                </div>
            </div>
        );
    }
}

export default RegisterStep1;
