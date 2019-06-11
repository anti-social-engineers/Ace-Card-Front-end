import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import config from '../config/config'

class Home extends Component {

  componentDidMount(){
    aos.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="container-fluid">
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md-12 col-xl-6 d-flex justify-content-center">
                    <div class="col-md-9">
                        <div className="mainPageTitle contact">Neem contact met ons op</div>
                        <div className="mainPageParagraph contactParagraph">
                            <p>Bent u benieuwd naar de mogelijkheden van de ACE-card als clubeigenaar, neem dan contact op met ons team:
                            <br></br>
                            <a href="mailto:admin@aceofclubs.nl">admin@aceofclubs.nl</a>
                            </p>
                            <p className="cp-margin">Heeft u vragen die onze website niet beantwoord? Neem dan contact op met onze helpdesk:
                            <br></br>
                            <a href="mailto:info@aceofclubs.nl">info@aceofclubs.nl</a>
                            </p>
                            <div className="mainPageParagraph"><p>Stap elke club binnen, dankzij de ACE-card.</p></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6" align="center">
                    <div className="squareTop">
                    <img src={require('../Styles/img/email.jpg')} alt="" className="email-image" data-aos="fade-right"/>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    )
  }
}

export default Home;