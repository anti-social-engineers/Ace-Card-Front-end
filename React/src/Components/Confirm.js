import React, { Component } from 'react'
import '../Styles/css/style.css'
import {connect} from 'react-redux'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import { ReactComponent as DanceParty } from '../Styles/img/success.svg';
import config from '../config/config'
import axios from 'axios'
import aos from 'aos'

export class Confirm extends Component {
    state = {
        confirming: true
    }

    componentDidMount = () => {
        aos.init({
            duration : 2000
        })

        const {id} = this.props.match.params
        axios.get(config.API_URL+'api/activate/'+id)
    }

    render() {
        return (
            <>
                <Nav/>
                <div className="container" data-aos="fade-right" data-aos-duration="300">
                    <div className="row text-center">
                        <div className="col">
                            <div className="mainPageTitle">Uw account is geactiveerd!</div>
                            <div className="mainPageParagraph">Stap elke club binnen, dankzij de ACE-card.</div> 
                        </div>
                    </div>
                    <div className="row">
                    <div className="col" align="center">
                            <div className="pt-2" style={{height: "initial"}}>
                                {/* <img src={require('../Styles/img/success.svg')} style={{width: "100%"}}/> */}
                                <DanceParty/>
                            </div>
                        </div>  
                    </div>
                </div>            
            </>
        )
    }
}

export default Confirm
