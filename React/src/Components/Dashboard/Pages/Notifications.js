import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import dutchStrings from 'react-timeago/lib/language-strings/nl'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {myContext} from '../../Authenticator'
 
const formatter = buildFormatter(dutchStrings)

class Notifications extends Component {
    state = {
        notifications: [],
        pageCount: 0
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
                        {/* Page Heading */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800 panel-header-text">Storting overzicht</h1>
                        </div>
                        <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                            Lijst van al je notificaties
                            </h6>
                        </div>
                        <div className="card-body">
                            { this.context.data && <Notification notifications={this.context.data.notifications}/>}
                        </div>

                        </div>
        
                </div>
            </div>

        )
    }
}


class Notification extends Component {
    render() {
        const notifications = this.props.notifications && this.props.notifications.map(
            notification => {
                var message = notification.name === "deposit" ?  `€${notification.amount.toFixed(2)} is zojuist gestort in uw account!` : notification.message;
                return (
                    <a className="dropdown-item d-flex align-items-center" href="#/">
                        <div className="mr-3">
                            <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white" />
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500"><TimeAgo date={notification.datetime} formatter={formatter}></TimeAgo></div>
                            {message}
                        </div>
                    </a>
                );
            }
        )
        return (
            <div>
                {notifications}
            </div>
        )
    }
}


Notifications.contextType = myContext;
export default Notifications;