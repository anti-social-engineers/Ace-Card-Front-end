import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'

class Textbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="group">
                <input type={this.props.input_type} required></input>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>{this.props.label}</label>
            </div>
        )
    }

}