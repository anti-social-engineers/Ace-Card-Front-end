import React, {Component} from 'react';
import './App.css';
import {Nav} from './Components/Navbar';
import {Home} from './Components/Home';
import {Login}from './Components/Login';
import {Register}  from './Components/Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import NavBar, { Navbar, Container } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      {Nav}

        <Router>     
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
          </Switch>
        </Router>
      </React.Fragment>
    ); 

  }
}

export default App;
