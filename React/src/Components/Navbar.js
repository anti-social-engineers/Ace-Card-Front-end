import React from 'react'
import NavBar, { Navbar, Container } from 'react-bootstrap';

export const Nav = <Navbar expand="lg" variant="light" bg="light">
<Container>
  <row>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Brand href="Login">Login</Navbar.Brand>
  <Navbar.Brand href="Register">Register</Navbar.Brand>
  </row>
</Container>
</Navbar>;