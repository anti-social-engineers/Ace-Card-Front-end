import React, { Component } from 'react'


import TimeAgo from 'react-timeago'
import dutchStrings from 'react-timeago/lib/language-strings/nl'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
 
const formatter = buildFormatter(dutchStrings)


export default class AccountTopBar extends Component {

    render() {
        console.log("rendering accountbar")

        var output_amount_notifications;
        if (this.props.data.notifications !== undefined) {
            var notifications_amount = this.props.data.notifications.length;
            output_amount_notifications = notifications_amount;
        }
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" onClick={this.props.toggleNavBar} className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
            </button>
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                </button>
                </div>
            </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </li>
            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle"  id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw" />
                {/* Counter - Alerts */}
                <span className="badge badge-danger badge-counter">{ output_amount_notifications && output_amount_notifications}</span>
                </a>
                {/* Dropdown - Alerts */}
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                </h6>
                <MiniNotifications notifications={this.props.data.notifications && this.props.data.notifications}/>
                {this.props.data.notifications && this.props.data.notifications.length > 0 && <a className="dropdown-item text-center small text-gray-500" >Laat alle notificaties zien</a>}                
                </div>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.props.data.user ? this.props.data.user.first_name + " " + this.props.data.user.surname : "Gebruiker"}</span>
                <img className="img-profile rounded-circle" src={this.props.data.user && this.props.data.user.image } />
                </a>
                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" >
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                </a>
                <a className="dropdown-item" >
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Settings
                </a>
                <a className="dropdown-item" >
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                    Activity Log
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                </a>
                </div>
            </li>
            </ul>
        </nav>
        )
    }
}



class MiniNotifications extends Component {
    render() {
        console.log("MINI NOTIFS");
        let notifications;
        let success;
        if (this.props.notifications){
            if (this.props.notifications.length < 1) {
                notifications = "U heeft nog geen notificaties ontvangen!"; 
                success = false;
            } else {
                let size = this.props.notifications.length > 3 ? 3 : this.props.notifications.length;
    
                notifications = this.props.notifications && this.props.notifications.slice(0, size).map(
                    notification => {
                        var message = notification.name === "deposit" ?  `€${notification.amount} is zojuist gestort in uw account!` : notification.message;
                        return (
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small notification-time text-gray-500"><TimeAgo date={notification.date} formatter={formatter}></TimeAgo></div>
                                    {message}
                                </div>
                            </a>
                        );
                    }
                )
                success = true;
            }
        } else {
            success = false;
            notifications = "Notificaties aan het laden...";
        }


        return (
            <div>
            { !success && <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                        <div className="icon-circle text-gray-500" style={{}}>
                        {" "}
                        <i className="fas fa-circle-notch fa-spin" />
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">
                        {notifications}
                        </div>
                    </div>
                </a>}

                { success && notifications}
            </div>
        )
    }
}

