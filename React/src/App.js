import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register  from './Components/Register';
import Account from './Components/Account';
import Saldo from './Components/Saldo';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <React.Fragment>
      <Router>     
      
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/Login" component={Nav} /> */}
            <Route path="/Register" component={Register} />
            <Route path="/Account" component={Account}/>
            <Route path="/Saldo" component={Saldo}/>
          </Switch>
        </Router>
      </React.Fragment>
      
    ); 

  }
}

export default App;