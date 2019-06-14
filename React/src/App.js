import React, {Component} from 'react';
import Home  from './Components/Home';
import Page404Dashboard  from './Components/Dashboard/Pages/Page404';
import Register  from './Components/Register';
import Account from './Components/Dashboard/Pages/Account/Account';
import RegisterStep2 from './Components/RegisterStep2';
import Confirm from './Components/Confirm';
import {ProtectedRoute} from './protected.route'
import { Ideal } from './Components/Ideal';
import Dashboard from './Components/Dashboard/Dashboard';
import CookieConsent from "react-cookie-consent";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Saldo from './Components/Saldo';
import Client from './Components/Dashboard/Client';
import Logout from './Components/Logout';
import {NavLink, Redirect} from 'react-router-dom';
import Deposits from './Components/Dashboard/Pages/Deposits/Deposits';
import AccountTopBar from './Components/Dashboard/Nav/AccountTopBar';
import Page404 from './Components/Page404';

// const Error = () => <div><h1>Error</h1></div>

// const AceApp = props => {
//   console.log('Frontend');
//   return (
//     <div>
//       <h2>Frontend</h2>
//       <p><NavLink to="/">Root</NavLink></p>
//       <p><NavLink to="/user">User</NavLink></p>
//       <p><NavLink to="/admin">Dashboard</NavLink></p>
//       <p><NavLink to="/the-route-is-swiggity-swoute">Swiggity swooty</NavLink></p>
//       <Switch>
//         <Route exact path='/' component={Home}/>
//         <Route path='/Register' component={Register}/>
//         <Redirect to={{
//           state: { error: true }
//         }} />
//       </Switch>
//       <footer>Bottom</footer>
//     </div>
//   );
// }


// const DashboardApp = props => {
//   console.log('Dashboard');
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p><NavLink to="/admin">Root</NavLink></p>
//       <p><NavLink to="/admin/user">User</NavLink></p>
//       <p><NavLink to="/">Frontend</NavLink></p>
//       <p><NavLink to="/admin/the-route-is-swiggity-swoute">Swiggity swooty</NavLink></p>
//       <Switch>
//         <Route exact path='/admin' component={Dashboard}/>
//         {/* <Route path='/admin/user' component={User}/> */}
//         <Redirect to={{
//           state: { error: true }
//         }} />
//       </Switch>
//       <footer>Bottom</footer>
//     </div>
//   );
// }

// class GlobalErrorSwitch extends Component {
//   previousLocation = this.props.location

//   componentWillUpdate(nextProps) {
//     const { location } = this.props;

//     if (nextProps.history.action !== 'POP'
//       && (!location.state || !location.state.error)) {
//         this.previousLocation = this.props.location
//     };
//   }

//   render() {
//     const { location } = this.props;
//     const isError = !!(
//       location.state &&
//       location.state.error &&
//       this.previousLocation !== location // not initial render
//     )

//     return (
//       <div>
//         {          
//           isError
//           ? <Route component={Error} />
//           : <Switch location={isError ? this.previousLocation : location}>
//               <Route path="/admin" component={Dashboard} />
//               <Route path="/" component={AceApp} />
//             </Switch>}
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (<Router>
    
    

  
    <Route
      path="/dashboard"
      render={({ match: { url } }) => (
        <Dashboard>
          {this.state}
          <Switch>
            <Route path={`${url}/`} component={Account} exact />
            <Route path={`${url}/Account`} component={Account} exact />
            <Route path={`${url}/Deposits`} component={Deposits} exact />
            {/* <Route path={`${url}/Settings`} component={Settings} exact /> */}
            <Route component={Page404Dashboard} />
          </Switch>

        </Dashboard>
      )}
    />

  <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Home" component={Home} />
      <Route path="/Register" component={Register} />
      <Route path="/Register2" component={RegisterStep2}/>
      <Route component={Page404} />
    </Switch>

  
  </Router>)
  }
}

// class App extends Component {
//   render() {
//     return (
//       <>
//         <CookieConsent>
//             This website uses cookies to enhance the user experience.
//         </CookieConsent>
//       <Router>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/Register" component={Register} />
//             <Route path="/Account" component={Account}/>
//             {/* <Route path="/Saldo" component={Saldo}/> */}
//             <Route path="/ideal" component={Ideal}/>
//             <Route path="/Confirm/:id" component={Confirm} />
//             <Route path="/Register2" component={RegisterStep2}/>
//             <Route path="/lel" component={Saldo}/>
//             <Route path="/Client" component={Client}/>
//             <Route path="/logout" component={Logout}/>
//             <Route path="/Dashboard" component={Dashboard}/>
//             <ProtectedRoute path="/Dashboard/Account" component={Dashboard}/>
//             <ProtectedRoute path="/Dashboard/Account/PaymentRequest" component={Dashboard}/>
//             {/* <Route path="/Dashboard/Pending" component={PendingActivation} /> */}
//             <Route component={Page404} />
//           </Switch>
//         </Router>
//       </>
//     ); 

//   }
// }

export default App;
