import React, {Component} from 'react';
import Home  from './Components/Home';
import Page404Dashboard  from './Components/Dashboard/Pages/Page404';
import Register  from './Components/Register';
import Account from './Components/Dashboard/Pages/Account/Account';
import Profile from './Components/Dashboard/Pages/Profile';
import RegisterStep2 from './Components/RegisterStep2';
import Confirm from './Components/Confirm';
import {ProtectedRoute} from './protected.route'
import Dashboard, { GlobalTheme } from './Components/Dashboard/Dashboard';
import CookieConsent from "react-cookie-consent";
import {Redirect, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Notifications from './Components/Dashboard/Pages/Notifications';
import Logout from './Components/Logout';
import Deposits from './Components/Dashboard/Pages/Deposits/Deposits';
import Page404 from './Components/Page404';
import Authenticator from './Components/Authenticator'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Contact from './Components/Contact';
import Over from './Components/Over';
import FAQ from './Components/FAQ';
import Vacatures from './Components/Vacatures';
import Clubeigenaar from './Components/Clubeigenaar';
import Bewaker from './Components/Bewaker';
import Admin from './Components/Dashboard/Pages/Admin'
import Transactions from './Components/Dashboard/Pages/Transactions';
import ResetPassword from './Components/ResetPassword';

toast.configure()

toast.configure({
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
});

class App extends Component {
  render() {
    return (
    <Router>
      <CookieConsent buttonText="Akkoord">
        Om de gebruiksvriendelijkheid van onze website en diensten te optimaliseren maken wij gebruik van cookies.
      </CookieConsent>

      <Switch>
        <Route exact path="/" component={Home} />
                <Route path="/Register" component={Register} />
                <Route path="/Account" component={Account}/>
                <Route path="/Confirm/:id" component={Confirm} />
                <Route path="/Register2" component={RegisterStep2}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Over" component={Over}/>
                <Route path="/FAQ" component={FAQ}/>
                <Route path="/Vacatures" component={Vacatures}/>
                <Route path="/Clubeigenaar" component={Clubeigenaar}/>
                <Route path="/Bewaker" component={Bewaker}/>
                <Route path="/Resetpassword" component={ResetPassword}/>
          <Route path="/logout" component={Logout}/>
      </Switch>

      <Route
        path="/dashboard"
        render={({ match: { url } }) => (
          <Authenticator>
                  <Dashboard>
                    <Switch>
                      <Route path={`${url}/Account`} component={Account} exact />
                      <Route path={`${url}/Profile`} component={Profile} exact />
                      <Route path={`${url}/Admin`} component={Admin} exact />
                      <Route path={`${url}/Transactions`} component={Transactions} exact />
                      <Route path={`${url}/Deposits`} component={Deposits} exact />
                      <Route path={`${url}/Notifications`} component={Notifications} exact />
                      <Route path={`${url}/`} component={Account} exact />
                      <Route component={Page404Dashboard} />
                    </Switch>
                  </Dashboard>
        </Authenticator>
        )}/>
  
  </Router>
  );
  }
}

export default App;
