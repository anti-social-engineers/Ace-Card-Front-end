import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import config from '../config/config'
import Footer from './Dashboard/Footer';
import HomeFooter from './HomeFooter';

class Home extends Component {

  componentDidMount(){
    aos.init({
      duration : 2000
    })
    console.log(config.API_URL)
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="container-fluid p-0">
          <div className="row" data-aos="fade-left" data-aos-duration="500">
            <div className="col-md-12 col-xl-6 d-flex justify-content-center">
            <div class="col-md-9">
                <div className="mainPageTitle">Uitgaan is nog nooit zo makkelijk geweest</div>
                <div className="mainPageParagraph">
                  <p>Weet je eigenlijk wel wat je elke maand uitgeeft tijdens het stappen? Met de ACE-card kom je er direct achter.</p>
                 <p>Wij importeren je uitgaven veilig en snel en plaatsen ze in één helder overzicht.</p>
                </div>
                <div className="mainPageParagraph"><p>Stap elke club binnen, dankzij de ACE-card.</p></div>
            </div>
            </div>
            <div className="col-xl-6 p-0" align="center">
                <div className="squareTop">
                  <img src={require('../Styles/img/acecard@2x.png')} alt="" className="imgMargin"/>
                </div>
            </div>
        </div>
        </div>

        <div className="row no-gutters" id="chevron">
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
          <div className="col-md" align="center">
              <div className="squareskew">
              <img src={require('../Styles/img/party.png')} alt="" className="imgMargin"/>
                <h4>Feest er op los!</h4>
                <p>Nog Meer gekke Lorum Ipsum Tekst jwz</p>
              </div>
          </div>
        </div>

        <div className="row no-gutterr ctarow">
          <div className="col-md-12 col-xl-6 d-flex justify-content-around" align="center">
            <div class="col-md cta" data-aos="fade-left" data-aos-duration="500">
              <div className="mainPageTitle ctatext">
                Klaar om ACE member te worden?
              </div>
              <div className="mainPageParagraph ctaparatext">
                  Neem contact met ons op of creëer een account.
              </div>
            </div>
          </div>
          <div className="col-md justify-content-around cta-button-spacing" data-aos="fade-left" data-aos-duration="500" align="center">
            <NavLink to="/register">
              <button className="main-home-button cta-button"><span className="main-button-action">Account aanmaken</span></button>
            </NavLink>
          </div>
        </div>
      <HomeFooter/>
    </div>
    )
  }
}

export default Home;