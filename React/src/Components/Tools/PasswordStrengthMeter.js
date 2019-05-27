import React, { Component } from 'react';
import '../../Styles/css/PasswordStrengthMeter.css';
import zxcvbn from 'zxcvbn';

class PasswordStrengthMeter extends Component {

    createPasswordLabel = (result) => {
        switch (result.score) {
            case 0:
                return 'Zwak';
            case 1:
                return 'Zwak';
            case 2:
                return 'Matig';
            case 3:
                return 'Goed';
            case 4:
                return 'Sterk';
            default:
                return 'Zwak';
        }
    }

    render() {
        const { password } = this.props;
        const testedResult = zxcvbn(password);
        return (
            <div className={ password ? "password-strength-meter" : "d-none"}>
                <progress
                    className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
                    value={testedResult.score}
                    max="4"
                />
                <br />
                <label
                    className="password-strength-meter-label"
                >
                    {password && (
                        <>
                            <strong>Wachtwoord sterkte:</strong> {this.createPasswordLabel(testedResult)}
                        </>
                    )}
                </label>
            </div>
        );
    }
}

export default PasswordStrengthMeter;
