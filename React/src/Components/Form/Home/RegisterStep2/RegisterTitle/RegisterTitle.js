import React, { Component } from 'react';
import RegisterStatus from './RegisterStatus';

class RegisterTitle extends Component {

    render() {
        return (
            <div className="row no-gutterr form-title-wrap form-title--large">
                <div className="form-title col-sm-12 col-md-12 col-xl-3 form-title-left text-center">
                    <h2>Registreren</h2></div>
                <div className="form-title d-none d-md-block col-md-12 col-xl-9 align-self-center">
                    <RegisterStatus step={this.props.step}/>
                </div>
            </div>
        );
    }
}

export default RegisterTitle;
