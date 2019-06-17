import React from 'react'
import {NavLink} from 'react-router-dom';

//Footer for the homepage to redirect to different

const HomeFooter = () => {
    return (
      <div className="row no-gutterr">
        <div className="container">
          <div className="row homeFooter">
            <div className="col-sm">
              <ul align="left"> 
                <div className="homeFooter-title">
                  Producten
                </div>
                <li>ACE-card</li>
              </ul>
            </div>
            <div className="col-sm">
              <ul align="left"> 
                <div className="homeFooter-title">
                  Zakelijk
                </div>
                <li><NavLink className="footerNav" to="/Clubeigenaar">Clubeigenaar</NavLink></li>
                <li><NavLink className="footerNav" to="/Bewaker">Bewaker</NavLink></li>
              </ul>
            </div>
            <div className="col-sm">
              <ul align="left"> 
                <div className="homeFooter-title">
                  Bedrijf
                </div>
                <li><NavLink className="footerNav" to="/Over">Over</NavLink></li>
                <li><NavLink className="footerNav" to="/FAQ">FAQ</NavLink></li>
                <li><NavLink className="footerNav" to="/Contact">Contact</NavLink></li>
                <li><NavLink className="footerNav" to="/Vacatures">Vacatures</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeFooter;