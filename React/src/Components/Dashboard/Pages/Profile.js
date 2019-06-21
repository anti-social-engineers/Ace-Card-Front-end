import React, { Component } from 'react'
import {myContext} from '../../Authenticator'

class Profile extends Component {

    render() {
        const gender =  this.context.data.user.gender === "M" ? "Man" : "Vrouw";
        return (
            <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800 panel-header-text">Profiel overzicht</h1>
                </div>
            <div className="card shadow col-xs-8 col-sm-9 col-lg-8 col-md-10 mx-auto" style={{ padding: 0, overflow: "hidden" }}>
                <div className="card-header py-3" style={{ zIndex: 100 }}>
                    <h6 className="m-0 font-weight-bold text-primary">Profiel</h6>
                </div>
                <div className="row no-gutters" style={{ overflow: "hidden" }}>
                    <div className="col-md-12 d-flex justify-content-center col-xl-5">
                        <img className="profile-image" src={this.context.data.user.image} style={{ height: 520, width: "100%", zIndex: 1, marginTop: "-100px", objectFit: "cover" }} />
                    </div>
                    <div className="card-body col-md-12 col-xl-6 pt-4 mx-auto">
                        <div className="inputs inputs-space mx-sm-auto disabled-fields pt-4 mx-auto" style={{ width: "85%", backgroundColor: "white" }}>
                            <div className="group">
                                <input type="text" placeholder={this.context.data.user.first_name} disabled />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Voornaam</label>
                            </div>
                            <div className="group">
                                <input type="text" placeholder={this.context.data.user.surname} disabled />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Achternaam</label>
                            </div>
                            <div className="group">
                                <input type="text" placeholder={this.context.data.user.dob} disabled />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Geboortedatum</label>
                            </div>
                            <div className="group">
                                <input type="text" placeholder={gender} disabled />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Geslacht</label>
                            </div>
                            <div className="group">
                                <input type="text" placeholder={this.context.data.user.mail} disabled />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>E-mail</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            // <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
            //     {/* Page Heading */}
            //     <div className="d-sm-flex align-items-center justify-content-between mb-4">
            //       <h1 className="h3 mb-0 text-gray-800 panel-header-text">Profiel overzicht</h1>
            //     </div>
            //     <div className="card shadow mb-4">
            //     <div className="card-header py-3">
            //         <h6 className="m-0 font-weight-bold text-primary">
            //         Profiel
            //         </h6>
            //     </div>
            //     <div className="card-body">
            //         <div className="inputs inputs-space disabled-fields pt-3">
            //             <div className="group">
            //                 <input type="text" placeholder={this.context.data.user.first_name} disabled />
            //                 <span className="highlight"></span>
            //                 <span className="bar"></span>
            //                 <label>Voornaam</label>
            //             </div>
            //             <div className="group">
            //                 <input type="text" placeholder={this.context.data.user.surname} disabled />
            //                 <span className="highlight"></span>
            //                 <span className="bar"></span>
            //                 <label>Achternaam</label>
            //             </div>
            //             <div className="group">
            //                 <input type="text" placeholder={this.context.data.user.dob} disabled />
            //                 <span className="highlight"></span>
            //                 <span className="bar"></span>
            //                 <label>Geboortedatum</label>
            //             </div>
            //             <div className="group">
            //                 <input type="text" placeholder={gender} disabled />
            //                 <span className="highlight"></span>
            //                 <span className="bar"></span>
            //                 <label>Geslacht</label>
            //             </div>
            //             <div className="group">
            //                 <input type="text" placeholder={this.context.data.user.mail} disabled />
            //                 <span className="highlight"></span>
            //                 <span className="bar"></span>
            //                 <label>E-mail</label>
            //             </div>
            //         </div>
            //     </div>
            //     </div>

            //   </div>
        )
    }
}

Profile.contextType = myContext;
export default Profile;