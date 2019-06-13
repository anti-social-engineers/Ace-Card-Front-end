import React, { Component } from 'react'
import {ReactComponent as WomanHoldingCard} from '../Styles/img/wamen.svg'
import {ReactComponent as LoadCardSVG} from '../Styles/img/svg/loadcard.svg'
import {ReactComponent as PartyTimeSVG} from '../Styles/img/svg/partytime.svg'
import {ReactComponent as RequestCardSVG} from '../Styles/img/svg/requestcard.svg'
import {ReactComponent as CurvesSVG} from '../Styles/img/svg/curves.svg'
import aos from 'aos'
import '../Styles/css/style.css'
import Nav from '../Components/Navbar';
import {NavLink} from 'react-router-dom';
import config from '../config/config'
import HomeFooter from './HomeFooter';

class Home extends Component {

  componentDidMount(){
    aos.init({
      duration : 2000
    })
    console.log(config.API_URL + " //remove this line after testing")
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="container-fluid p-0">
          <div className="row" data-aos="fade-left" data-aos-duration="500">
            <div className="col-md-12 col-xl-6 d-flex justify-content-center">
            <div class="col-md-9 home-content">
                <div className="mainPageTitle">Uitgaan is nog nooit zo makkelijk geweest</div>
                <div className="mainPageParagraph">
                  <p>Weet je eigenlijk wel wat je elke maand uitgeeft tijdens het stappen? Met de ACE-card kom je er direct achter.</p>
                  <p>Wij importeren je uitgaven veilig en snel en plaatsen ze in één helder overzicht.</p>
                  <p>Stap elke club binnen, dankzij de ACE-card.</p>
                </div>
            </div>
            </div>
            <div className="col-xl-6 p-0" align="center">
                <div className="squareTop">
                  <WomanHoldingCard/>
                </div>
            </div>
        </div>
        </div>

        <div className="row no-gutters" id="chevron">
          <CurvesSVG/>
          <div class="edge-fix"></div>
          <div className="col-md" align="center">
              <div className="squareskew row no-gutters d-flex justify-content-center">
                <RequestCardSVG/>
                <div class="row no-gutters text-center home-card--wrapper"><div class="card--title mx-auto"><h4>Vraag de pas aan</h4></div><div class="card--body"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div></div>              
              </div>
          </div>
          <div className="col-md" align="center">
              <div className="squareskew row no-gutters d-flex justify-content-center">
                  <LoadCardSVG/>
                  <div class="row no-gutters home-card--wrapper text-center pt-4"><div class="card--title text-center mx-auto"><h4>Laad je pas op</h4></div><div class="card--body"><p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.</p></div></div>
              </div>   
          </div>
          <div className="col-md" align="center">
              <div className="squareskew row no-gutters d-flex justify-content-center">
                <PartyTimeSVG/>
                <div class="row no-gutters home-card--wrapper text-center pt-3"><div class="card--title text-center mx-auto"><h4>Feest erop los!</h4></div><div class="card--body"><p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.</p></div></div>              
              </div>
          </div>
        </div>
        {/* <div className="row" id="homeFooter-border">
        </div> */}
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
        <div className="row" id="homeFooter-border"></div>
      <HomeFooter/>
    </div>
    )
  }
}

export default Home;