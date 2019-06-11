import React from 'react'

const HomeFooter = () => {
    return (
      <div className="row no-gutterr" id="homeFooter-border">
        <div className="container">
          <div className="row homeFooter">
            <div className="col-sm">
              <ul> 
                <div className="homeFooter-title">
                  Producten
                </div>
                <li>ACE-card</li>
                <li>Data</li>
              </ul>
            </div>
            <div className="col-sm">
              <ul> 
                <div className="homeFooter-title">
                  Zakelijk
                </div>
                <li>Clubeigenaar</li>
                <li>Bewaker</li>
                <li>Procedures</li>
              </ul>
            </div>
            <div className="col-sm">
              <ul> 
                <div className="homeFooter-title">
                  Bedrijf
                </div>
                <li>Over</li>
                <li>FAQ</li>
                <li>Klanten</li>
                <li>Vacatures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeFooter;