import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import HomeFooter from '../Components/HomeFooter';

class Vacatures extends Component {

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
                        Vacatures
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md mainpageParagraph vacaturesParagraph">
                    Momenteel zijn wij niet op zoek naar nieuwe werknemers.
                </div>
            </div>
        </div>
        <div className="row FAQfootermargin" id="homeFooter-border"></div>
        <HomeFooter />  
    </div>
    )
  }
}

export default Vacatures;