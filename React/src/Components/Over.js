import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import HomeFooter from '../Components/HomeFooter';

class Over extends Component {

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
                <div className="col-md" align="center">
                    <div className="mainPageTitle overTitle">
                        Onze missie is om uitgaan veilig te maken.
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md mainpageParagraph overParagraph" align="center">
                    Acecard is een tech bedrijf dat kaarten levert aan het uitgaanspubliek. Door middel van onze kaarten kunnen gebruikers
                    betalen en hun betaaloverzicht in één oogopslag uitlezen. 
                </div>
            </div>
            <div className="row" data-aos="fade-left" data-aos-duration="500">
                <div className="col-md mainpageParagraph overParagraph overParagraphbot" align="center">
                    Daarnaast bieden wij horecagelegenheden en clubs onze diensten aan om het uitgaan veilig te laten verlopen.
                </div>
            </div>
        </div>
        <div className="row" id="homeFooter-border"></div>
        <HomeFooter />  
    </div>

    )
  }
}

export default Over;