import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import Register  from './Components/Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegisterStep2 from './Components/RegisterStep2';


class App extends Component {
  render() {
    return (

      <React.Fragment>
      <Router>     
        
        <Nav/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Register2" component={RegisterStep2} />
          </Switch>
        </Router>
      </React.Fragment>
      
    ); 

  }
}

export default App;
