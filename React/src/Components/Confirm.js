import React, { Component } from 'react'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import config from '../config/config'
import axios from 'axios'

export class Confirm extends Component {
    state = {
        confirming: true
    }

    componentDidMount = () => {
        const {id} = this.props.match.params

        console.log(id)
        
        axios.get(config.API_URL+'/api/activate/'+id)
        .then(res => {
            console.log(res)
        })
              
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
          <div className="row">
            <div className="col-md">
                <div className="mainPageTitle">Uw account is geactiveerd!</div>
                
                <div className="mainPageParagraph">Stap elke club binnen, dankzij de ACE-card.</div> 
            </div>
            <div className="col-md" align="center">
                <div className="squareTop">
                <img src={require('../Styles/img/card.png')} alt="" className="imgMargin "/>
                    <h4>Vraag pas aan</h4>
                    <p>Klink hier om een pas aan te vragen</p>
                </div>
            </div>                
            </div>
            </div>            
            </div>
        )
    }
}

export default Confirm
