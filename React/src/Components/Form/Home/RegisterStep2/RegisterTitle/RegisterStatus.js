import React, { Component } from 'react';

class RegisterStatus extends Component {

    render() {
        return (
            <div className="form-status row no-gutterr">
                <div className="row col-md-12 status_texts">
                    <div className="col text-left"><span>Gegevens</span></div>
                    <div className="col text-left"><span>Foto uploaden</span></div>
                    <div className="col text-right">
                        <span>Bevestigen</span>
                    </div>
                </div>
                <div className="row col-md-12 text-right no-gutterr">
                    {this.props.step === 1 ? <div className="statuscircle statuscircle--unchecked" /> : <div className="statuscircle statuscircle--checked" />}
                    
                    <div className={this.props.step >= 2 ? "statusbar statusbar--checked" : "statusbar"} />
                    
                    {this.props.step > 2 ? <div className="statuscircle statuscircle--checked" /> : <div className="statuscircle statuscircle--unchecked" />}
                    
                    <div className={this.props.step >= 3 ? "statusbar statusbar--checked" : "statusbar"} />
                    
                    {this.props.step > 3 ? <div className="statuscircle statuscircle--checked" /> : <div className="statuscircle statuscircle--unchecked" />}

                </div>
            </div>
        );
    }
}

export default RegisterStatus;
