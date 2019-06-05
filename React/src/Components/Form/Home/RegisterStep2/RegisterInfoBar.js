import React, { Component } from 'react';

class RegisterTitle extends Component {

    render() {
        return (
            <div className="linkbar-wrapper d-none d-xl-block my-4">
                <div className="row d-flex justify-content-between no-gutterr linkbar self-align-center">
                    <div className="mr-auto">
                        <a href="#">Meer informatie</a>
                    </div>
                    <div>
                        <a href="#">Bestelvoorwaarden</a>
                        <a href="#">Privacybeleid</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterTitle;
