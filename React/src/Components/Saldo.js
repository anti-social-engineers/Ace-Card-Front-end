import React, { Component } from 'react'
import aos from 'aos'
import '../Styles/css/style.css'
import {NavLink} from 'react-router-dom';
import Chart from "chart.js";
import {connect} from 'react-redux'
// import SaldoModal from './SaldoModal';
import queryString from "query-string";
import BalanceModal from './Dashboard/Pages/Account/BalanceModal';
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif"
Chart.defaults.global.elements.line.tension = 0.3;


class Saldo extends Component {

    constructor(...args) {
        super(...args);
    
        this.state = { 
            modalShow: false,
            balance: 30
        };
      }

    chartRef = React.createRef();

    componentDidMount(){
        aos.init({
            duration : 2000
        })

        var parsed = queryString.parse(window.location.search);
        // parsed = {"client_secret": parsed.client_secret, "source": parsed.source, "livemode": parsed.livemode};
        console.log(parsed);
        this.setState({queryparams: parsed});

        const node = this.node;    

        var myChart = new Chart(node, {
            type: "line",
            data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            datasets: [
                {
                label: "Saldo",
                data: [25, 15, 56, 40, 20.33, 33, 10, 23, 37, 67, 35, 19],
                backgroundColor: ["rgba(52, 128, 249, 0.4)",]
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

    let modalClose = () => this.setState({ modalShow: false });
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
                            <li className="active">
                                <NavLink className="" to="#">
                                    <div data-aos="fade-right" data-aos-duration="500">
                                        <i className="fa fa-chart-line fa-1x"></i>
                                            <span className="nav-text">
                                                Saldo
                                            </span>
                                    </div>
                                </NavLink><span className="sr-only"></span>
                            </li>
                            <li>
                                <NavLink className="" to="#">
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
                                    <h3 className="" value="">€30,00</h3>
                                    <button onClick={() => this.setState({ modalShow: true })} className="main-button-square">Overschrijven</button>                            
                                </div>
                            </div>
                            <div className="col-md" align="center" data-aos="fade-left" data-aos-duration="600">
                                <div className="square">
                                <h1 className="imgMargin">Automatisch opladen</h1>
                                    <button  className="main-button-right">Instellen</button>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutterr">
                            <div className="chartMargin">
                                <canvas
                                style={{ width: 800, height: 300 }}
                                ref={node => (this.node = node)}    
                                />
                            </div>
                        </div>
                        { this.state.modalShow && <BalanceModal queryparams={this.state.queryparams} balance={this.state.balance} onHide={modalClose}/>}                          
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Saldo;