import React from 'react'
import {BrowserRouter as Router,Route,Switch, NavLink} from 'react-router-dom';
import NavBar, { Navbar, Container} from 'react-bootstrap';

export const Nav = 
<Navbar expand="lg" variant="light" bg="light">
    <row>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Login">Login</NavLink>
    <NavLink to="/Register">Register</NavLink>
    </row>
</Navbar>