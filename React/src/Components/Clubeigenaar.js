import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import HomeFooter from '../Components/HomeFooter';

class Clubeigenaar extends Component {

  componentDidMount(){
    aos.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md">
                    <div className="mainPageTitle overTitle">
                        Clubeigenaar
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md mainpageParagraph vacaturesParagraph">
                    Er zijn veel voordelen om uw club of horecagelgenheid aan te melden bij ACE. Dankzij de acecard kunt u als eigenaar eenvoudig
                    zien wie er allemaaal uw club binnenkomt. Doordat u de kaart van een klant kunt scannen zien uw bewakers in een helder overzicht
                    of alles in orde is.
                    <br/>
                    <br/>
                    Heeft u interesse en wilt u zich aanmelden bij ACE, of heeft u vragen? Neem dan <NavLink className="footerNav clubeigenaar-underline" to="/Contact">hier</NavLink> contact met ons op.
                </div>
            </div>
        </div>
        <div className="row FAQfootermargin" id="homeFooter-border"></div>
        <HomeFooter />  
    </div>
    )
  }
}

export default Clubeigenaar;