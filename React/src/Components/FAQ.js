import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import HomeFooter from '../Components/HomeFooter';


class FAQ extends Component {

  componentDidMount(){
    aos.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        <section className="accordion-section" aria-label="Question Accordions" data-aos="fade-up" data-aos-duration="500">
            <div className="container">
                <h2 className="accordion-margin mainPageTitle FAQTitle" >Frequently Asked Questions </h2>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                    <div className="panel-heading mb-3" role="tab" id="heading0">
                        <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                            Wat is de acecard?
                            <i className="fas fa-caret-down accordion-icon"></i>
                        </a>
                        </h3>
                        <div className="accordion-border"></div>
                    </div>
                    <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                        <div className="panel-body px-3 mb-4">
                        <p>
                            De acecard is een kaart die het betalen en binnenkomen bij clubs makkelijk maakt. In plaats van een bewaker die
                            bij iedereen zijn ID checkt, kan hij in een helder overzicht zien of je voldoet aan de eisen van de club wanneer
                            hij je kaart scant. Daarnaast bieden wij ook de mogelijkheid om met de acecard te betalen! We bieden een volledig
                            overzicht op onze website waarin je makkelijk je saldo kan opladen en daarom altijd door hebt wat je uitgeeft
                            tijdens het stappen.
                        </p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="panel panel-default">
                    <div className="panel-heading mb-3" role="tab" id="heading1">
                        <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            Welke diensten levert ACE?
                            <i className="fas fa-caret-down accordion-icon"></i>
                        </a>
                        </h3>
                        <div className="accordion-border"></div>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                        <div className="panel-body px-3 mb-4">
                        <p>
                            De dienstverlening van ACE kan grofweg worden onderverdeeld in de volgende diensten.
                        </p>
                        <ul>
                            <li>
                                <p>1. Het organiseren en beheren van je saldo voor het uitgaan.</p>
                                <p>2. Het registreren van je gegevens waardoor je makkelijk clubs binnnekomt.</p>
                                <p>3. Het bieden van leuke voordelen bij verschillende clubs en horecagelegenheden.</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                    <div className="panel panel-default">
                    <div className="panel-heading mb-3" role="tab" id="heading2">
                        <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                            Kost het geld om een acecard aan te vragen?
                            <i className="fas fa-caret-down accordion-icon"></i>
                        </a>
                        </h3>
                        <div className="accordion-border"></div>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                        <div className="panel-body px-3 mb-4">
                        <p>
                            Nee! Het kost niks om de acecard aan te vragen. Als je het uiteindelijk als betaalmiddel wilt gebruiken dan moet je uiteraard wel
                            geld overmaken naar je kaart.
                        </p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="panel panel-default">
                    <div className="panel-heading mb-3" role="tab" id="heading3">
                        <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                            Kan ik ACE vertrouwen met mijn gegevens?
                            <i className="fas fa-caret-down accordion-icon"></i>
                        </a>
                        </h3>
                        <div className="accordion-border"></div>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                        <div className="panel-body px-3 mb-4">
                        <p>
                            Wij hechten enorm veel waarde aan jouw privacy en aan de beveiliging van je data. We besteden dan ook erg veel tijd aan de beveiliging
                            van onze diensten.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="row FAQfootermargin" id="homeFooter-border"></div>
        <HomeFooter />  
    </div>
    )
  }
}

export default FAQ;