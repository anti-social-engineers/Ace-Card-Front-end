import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import Register  from './Components/Register';
import Account from './Components/Account';
import Saldo from './Components/Saldo';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegisterStep2 from './Components/RegisterStep2';
import Confirm from './Components/Confirm';
import {ProtectedRoute} from './protected.route'
import { Ideal } from './Components/Ideal';

class App extends Component {
  render() {
    return (

      <React.Fragment>
      <Router>     
      
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Account" component={Account}/>
            <Route path="/Saldo" component={Saldo}/>
            <Route path="/ideal" component={Ideal}/>
            <Route path="/Confirm/:id" component={Confirm} />
            <Route
             path="/Register2" component={RegisterStep2} 
             />

          </Switch>
        </Router>

      </React.Fragment>
      
    ); 

  }
}

export default App;