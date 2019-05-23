import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/bootstrap-theme.css'
import '../Styles/css/bootstrap-theme.min.css'
import '../Styles/css/bootstrap.css'
import '../Styles/css/bootstrap.min.css'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import Chart from "chart.js";
import {connect} from 'react-redux'
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif"
Chart.defaults.global.elements.line.tension = 0.3;


class Saldo extends Component {

    
    chartRef = React.createRef();

componentDidMount(){
    aos.init({
        duration : 2000
    })

    const node = this.node;

    var myChart = new Chart(node, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
          datasets: [
            {
              label: "Saldo",
              data: [25, 15, 56, 40, 20.33, 33, 10, 23, 37, 67, 35, 19],
              backgroundColor: [
                "rgba(52, 128, 249, 0.4)",
              ]
            }
          ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });
}

  render() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="row h-100 no-gutterr">
                    <nav className="main-menu">
                    <div className="nav-icon">
                        ACE-portal
                    </div>
                        <ul>
                            <li>
                                <NavLink className="" to="Account">
                                <i className="fa fa-user fa-1x"></i>
                                    <span className="nav-text">
                                        Account
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li className="active" data-aos="fade-right" data-aos-duration="1000">
                                <NavLink className="" to="#">
                                <i className="fa fa-chart-line fa-1x"></i>
                                    <span className="nav-text">
                                        Saldo
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li>
                                <NavLink className="" to="/">
                                <i className="fa fa-sign-out-alt fa-1x"></i>
                                    <span className="nav-text">
                                        Log-out
                                    </span>
                                </NavLink><span className="sr-only"></span>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="container">
                        <div className="row justify-content-around no-gutterr">
                            <div className="col-md" align="center" data-aos="fade-right" data-aos-duration="600">
                                <div className="square">
                                    <h1 className="imgMargin">Saldo</h1>
                                    <h3 className="">Amount: $300</h3>
                                    <button className="main-button-square"><span className="main-button-action">Overschrijven</span></button>
                                </div>
                            </div>
                            <div className="col-md" align="center" data-aos="fade-left" data-aos-duration="600">
                                <div className="square">
                                <h1 className="imgMargin">Automatisch opladen</h1>
                                    <button className="main-button-right"><span className="main-button-action">Instellen</span></button>
                                </div>
                            </div>
                        </div>
                        <div classname="row no-gutterr">
                            <div className="chartMargin">
                                <canvas
                                style={{ width: 800, height: 300 }}
                                ref={node => (this.node = node)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default Saldo;