import React, {Component} from 'react';
import Home  from './Components/Home';
import Page404  from './Components/Page404';
import Register  from './Components/Register';
import Account from './Components/Account';
import RegisterStep2 from './Components/RegisterStep2';
import Confirm from './Components/Confirm';
import {ProtectedRoute} from './protected.route'
import { Ideal } from './Components/Ideal';
import Dashboard from './Components/Dashboard/Dashboard';
import CookieConsent from "react-cookie-consent";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Saldo from './Components/Saldo';


class App extends Component {
  render() {
    return (
      <>
        <CookieConsent>
            This website uses cookies to enhance the user experience.
        </CookieConsent>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Account" component={Account}/>
            {/* <Route path="/Saldo" component={Saldo}/> */}
            <Route path="/ideal" component={Ideal}/>
            <Route path="/Confirm/:id" component={Confirm} />
            <Route path="/Register2" component={RegisterStep2}/>
            <Route path="/lel" component={Saldo}/>
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/Dashboard/Account" component={Dashboard}/>
            {/* <Route path="/Dashboard/Pending" component={PendingActivation} /> */}
            <Route component={Page404} />
          </Switch>
        </Router>
      </>
    ); 

  }
}

export default App;