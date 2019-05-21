import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {connect} from 'react-redux'

class Home extends Component {

  componentDidMount(){
    aos.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md">
                <div className="mainPageTitle">Uitgaan is nog nooit zo makkelijk geweest</div>
                <div className="mainPageParagraph">
                    Met de ACE-card kom je overal makkelijk binnen en heb je nooit meer geldproblemen.
                </div>
            </div>
            <div className="col-md" align="center">
                <div className="square">
                <img src={require('../Styles/img/card.png')} alt="" className="imgMargin"/>
                    <h4>Placeholder</h4>
                    <p>Heel Lorum Veel Ipsum tekst Bla Dala</p>
                </div>
            </div>
        </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="4000" className="row no-gutters" id="chevron">
          <div className="col-md" align="center">
              <div className="squareskew">
                <img src={require('../Styles/img/card.png')} alt="" className="imgMargin"/>
                  <h4>Vraag de pas aan</h4>
                  <p>Heel Lorum Veel Ipsum tekst Bla Dala</p>
              </div>
          </div>
          <div className="col-md" align="center">
              <div className="squareskew">
                  <img src={require('../Styles/img/euro.png')} alt=""/>
                  <h4>Laad je pas op</h4>
                  <p>Lorum Ipsum Je Weet Zelf gekke Tekskt hierzo</p>
              </div>   
          </div>
          <div class="col-md" align="center">
              <div class="squareskew">
              <img src={require('../Styles/img/party.png')} alt="" className="imgMargin"/>
                <h4>Feest er op los!</h4>
                <p>Nog Meer gekke Lorum Ipsum Tekst jwz</p>
              </div>
          </div>
        </div>

        <div className="row no-gutters">
        <div className="col-md" align="center">
            <button className="main-home-button"><span className="main-button-action">Registreren</span></button>
        </div>
      </div>
    </div>

    )
  }
}


export default Home;