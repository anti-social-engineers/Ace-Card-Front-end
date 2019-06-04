import React, { Component } from 'react';
import RegisterInfoBar from '../RegisterInfoBar';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MaskedInput from 'react-text-mask'
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  
import 'moment/locale/nl';
import 'react-day-picker/lib/style.css';

class RegisterStep1 extends Component {
    constructor(props){
        super(props);
        this.props.handleChange("LEL");
    }

    state = {
        voornaam: "",
        achternaam: "",
        straat: "",
        postcode: "",
        huisnr: "",
        toevoeging: "",
        geboortedatum: "",
        geslacht: "man",
    }

    handleChange = (e) => {
        this.props.handleChange(e.target.id, e.target.value);
    }

    handleDate = () => {
        this.props.handleDate();
    }

    render() {
        return (
            <div className="col-md-7 col-lg-7 col-xl-8">
                <div className="inputs inputs--large">
                    <div className="group row">
                        <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                            <div className="input-wrapper">
                                <input type="text" value={this.props.values.voornaam} onChange={this.handleChange} ref="voornaam" id="voornaam" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Voornaam</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 pb-5">
                            <div className="input-wrapper">
                                <input type="text" value={this.props.values.achternaam} onChange={this.handleChange} ref="achternaam" id="achternaam" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Achternaam</label>
                            </div>
                        </div>
                    </div>
                    <div className="group row">
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" value={this.props.values.straat} onChange={this.handleChange} ref="straat" id="straat" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Straat</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                <input type="text" id="woonplaats" value={this.props.values.woonplaats} onChange={this.handleChange} ref="woonplaats" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Woonplaats</label>
                            </div>
                        </div>
                    </div>
                    <div className="group row">
                        <div className="col pb-5">
                            <div className="input-wrapper">
                                {/* <input type="text" id="postcode" value={this.props.values.postcode} onChange={this.handleChange} ref="postcode" required /> */}
                                <MaskedInput
                                    mask={[/[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, /[A-Z]/i, /[A-Z]/i]}
                                    guide={true}
                                    id="postcode"
                                    type="text"
                                    onFocus={(e) => e.target.placeholder = "1234AB"}
                                    onBlur={(e) => e.target.placeholder = ""}
                                    onChange={() => {}}
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
                                <input type="text" id="huisnr" value={this.props.values.huisnr} onChange={this.handleChange} ref="huisnr" required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Huisnummer</label>
                            </div>
                        </div>
                        <div className="col pb-5">
                            <div className="input-wrapper notreqq">
                                <input type="text" id="toevoeging" value={this.props.values.toevoeging || ""} placeholder='Toevoeging' onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Toevoeging"}  onChange={this.handleChange} ref="toevoeging" />
                                <span className="highlight" />
                                <span className="bar" />
                                <label class="noreq--label">Toevoeging</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-label">
                        <p>Geboortedatum</p>
                    </div>
                    <div className="group row pb-4">
                    <div class="col-md-5">
                        <DayPickerInput
                            formatDate={formatDate}
                            parseDate={parseDate}
                            placeholder={this.props.values.geboortedatum !== "" ? this.props.values.geboortedatum : "JJJJ-MM-DD" }
                            value={this.props.values.geboortedatum}
                            dayPickerProps={{
                                locale: 'nl',
                                localeUtils: MomentLocaleUtils,
                            }}
                            inputProps={
                                { required: true }
                            } 
                            onDayChange={this.handleDate}
                            ref="dayp"
                        />
                    </div>
                    </div>
                    <div className="form-label">
                        <p>Geslacht</p>
                    </div>
                    <div className="row radio-wrapper pb-4">
                        <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                            <div className="radio">
                                <label><input type="radio" name="optradio" id="geslacht" onChange={this.handleChange} ref="geslachtman" value="man" required checked={1 ? this.props.values.geslacht === "man" : 0} />Man</label>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-2 col-md-3 col-lg-2 col-xl-1">
                            <div className="radio">
                                <label><input type="radio" name="optradio" id="geslacht" onChange={this.handleChange} ref="geslachtvrouw" value="vrouw" checked={1 ? this.props.values.geslacht === "vrouw" : 0} />Vrouw</label>
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
