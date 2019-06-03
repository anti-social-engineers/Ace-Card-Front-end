import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import Register  from './Components/Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PostData from './Helper/API/PostData'

class App extends Component {
  render() {
    return (

      <React.Fragment>
      <Router>     

        <Nav/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
          </Switch>
        </Router>

      </React.Fragment>
      
    ); 

  }
}

export default App;
