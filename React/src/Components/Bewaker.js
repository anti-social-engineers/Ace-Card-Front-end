import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import HomeFooter from '../Components/HomeFooter';

class Bewaker extends Component {

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
                        Bewaker
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md mainpageParagraph vacaturesParagraph">
                    Als bewaker ben je verantwoordelijk voor de veiligheid in de club. Wij vinden het dan ook erg belangrijk om jouw werk
                    zo makkelijk mogelijk te maken.
                    <br/>
                    <br/>
                    Met behulp van ons systeem is het mogelijk om in een oogopslag te zien of iemand toelaatbaar is in jouw club.
                    Daarnaast kan jij als bewaker zelf notities maken om het voor elke collega veilig te houden. 
                </div>
            </div>
        </div>
        <div className="row FAQfootermargin" id="homeFooter-border"></div>
        <HomeFooter />  
    </div>
    )
  }
}

export default Bewaker;