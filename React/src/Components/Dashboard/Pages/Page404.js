import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export default function Page404() {
    return (
        <div className="container-fluid">
        <div className="text-center">
            <div className="error mx-auto" data-text={404}>
            404
            </div>
            <p className="lead text-gray-800 mb-5">Pagina niet gevonden</p>
            <p className="text-gray-500 mb-0">
            De door jou opgevraagde pagina is op dit moment helaas niet beschikbaar.
            </p>
            <NavLink to="/Dashboard">← Terug naar Dashboard</NavLink>
        </div>
        </div>
    )
}
