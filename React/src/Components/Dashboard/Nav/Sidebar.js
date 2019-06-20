import React, { Component } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class Sidebar extends Component {
    state = {
        navCollapsed: false
    }

    toggleNavBar = () => {
      this.setState({navCollapsed: !this.state.navCollapsed});
    }
    
    render() {
        return (
          <ul className={ classNames("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion", { toggled: this.state.navCollapsed }) } id="accordionSidebar" ref='sidebar'>
          {/* Sidebar - Brand */}
            <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
              <div className="sidebar-brand-icon">
                <img src={require('../../../Styles/img/acelogo.png')} alt="" style={{width: "80px"}}/>
              </div>
              <div class="sidebar-brand-text mx-2"><span style={{fontSize: "8px"}}>Ace of Clubs</span> Dashboard</div>
            </NavLink>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <NavLink className="nav-link" to="/dashboard">
              <i className="fas fa-fw fa-home" />
              <span>Dashboard</span></NavLink>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Overzicht
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <NavLink className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-user" />
              <span>Account</span>
            </NavLink>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-dark-new py-2 collapse-inner rounded">
                <h6 className="collapse-header">Mijn Account:</h6>
                <NavLink className="collapse-item" to="/dashboard/profile">Profiel</NavLink>
                <NavLink className="collapse-item" to="/dashboard/deposits">Stortingen</NavLink>
                <NavLink className="collapse-item" to="/dashboard/transactions">Uitgaves</NavLink>
              </div>
            </div>
          </li>
          {/* Nav Item - Utilities Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench" />
              <span>Instellingen</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-dark-new py-2 collapse-inner rounded">
                <h6 className="collapse-header">Mijn instellingen:</h6>
                <a className="collapse-item" href="utilities-color.html">Colors</a>
                <a className="collapse-item" href="utilities-border.html">Borders</a>
                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                <a className="collapse-item" href="utilities-other.html">Other</a>
              </div>
            </div>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline pt-4">
            <button className="bg-transparent border-0" onClick={this.toggleNavBar} id="sidebarToggle" />
          </div>
        </ul>
        )
    }
}
