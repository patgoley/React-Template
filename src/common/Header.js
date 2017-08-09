// @flow
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React Template</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">Home</NavItem>
    </Nav>
  </Navbar>
  )
}
